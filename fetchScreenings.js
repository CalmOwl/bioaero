import fs from "fs";

const getFilmExtraData = async (screeningUrl) => {
  const screeningId = screeningUrl.split("=")[1];

  const apiUrl = `https://www.kinoaero.cz/api_film?pr=${screeningId}&_locale=cs`;

  const html = await fetch(apiUrl).then(r => r.text());

  const letterboxdMatch = html.match(
    /href="(https:\/\/letterboxd\.com\/film\/[^"]+)"/
  );

  const trailerMatch = html.match(
    /data-youtube-id="([^"]+)"/
  );

  return {
    id: screeningId,
    letterboxdUrl: letterboxdMatch
      ? letterboxdMatch[1]
      : null,

    trailerUrl: trailerMatch
      ? `https://www.youtube.com/watch?v=${trailerMatch[1]}`
      : null
  };
};

const normalizeText = (text) => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const convertHTML = (string) => string.replaceAll("&amp;", "&").replaceAll("&#039;", "'");

async function main() {
  console.log("Загрузка программы...");

  const body = new URLSearchParams();

  [1, 2, 9, 7, 3].forEach(x =>
    body.append("cinema[]", x)
  );

  [34, 35, 1, 2, 3].forEach(x =>
    body.append("hall[]", x)
  );

  body.append("ef", "0");
  body.append("m", "");
  body.append("wp", "1");
  body.append("filterType", "default");
  body.append("ao", "0");
  body.append("d", "1");
  body.append("_locale", "en");


  const response = await fetch(
    "https://www.kinoaero.cz/api_program",
    {
      method: "POST",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        "X-Requested-With":
          "XMLHttpRequest",
        "Content-Type":
          "application/x-www-form-urlencoded; charset=UTF-8",
        "Referer":
          "https://www.kinoaero.cz/en?sort=sort-by-data&cinema=1,2,9,7,3&hall=34,35,1,2,3",
        "Accept-Language":
          "cs,en-US;q=0.9,en;q=0.8"
      },
      body
    }
  );


  const html = await response.text();

  console.log("Размер HTML:", html.length);


  const jsonLdMatches = [
    ...html.matchAll(
      /<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi
    )
  ];

  console.log("JSON-LD блоков:", jsonLdMatches.length);


  const shows = [];
  const skippedItems = [];


  for (const match of jsonLdMatches) {
    try {
      const data = JSON.parse(match[1]);

      const items = Array.isArray(data)
        ? data
        : [data];


      for (const item of items) {

        if (
          item["@type"] === "ScreeningEvent" ||
          item.startDate
        ) {
          const title =
            convertHTML(item.workPresented?.name ||
              item.name ||
              "Unknown");

          const cinema =
            item.location?.name ||
            item.location?.branchCode ||
            "Unknown";

          let cinemaId = normalizeText(cinema.replace(" ", '-').toLowerCase());

          if (cinemaId.includes("kino-")) {
            cinemaId = cinemaId.replace("kino-", "");
          }

          const extraData = await getFilmExtraData(item.url);

          shows.push({
            id: `${cinemaId}-${extraData.id}`,
            title,
            start: item.startDate || "",
            cinema,
            url: item.url || "",
            letterboxdUrl: extraData.letterboxdUrl,
            trailerUrl: extraData.trailerUrl
          });


        } else {
          skippedItems.push(item);
        }
      }

    } catch (e) {
      console.log(
        "Ошибка JSON-LD:",
        e.message
      );
    }
  }


  console.log(
    "\nВсего найдено до дедупликации:",
    shows.length
  );

  console.log(
    "Пропущено JSON-LD объектов:",
    skippedItems.length
  );


  const unique = [
    ...new Map(
      shows.map(x => [
        x.url,
        x
      ])
    ).values()
  ];


  console.log(
    "После удаления дубликатов:",
    unique.length
  );


  unique.sort(
    (a, b) =>
      new Date(a.start) - new Date(b.start)
  );


  console.log(
    "\nВсего показов:",
    unique.length
  );


  const movieFilter = null;

  const cinemaFilter = null;


  let filtered = unique;


  if (movieFilter) {
    filtered = filtered.filter(x =>
      x.title
        .toLowerCase()
        .includes(movieFilter.toLowerCase())
    );
  }


  if (cinemaFilter) {
    filtered = filtered.filter(x =>
      x.cinema
        .toLowerCase()
        .includes(cinemaFilter.toLowerCase())
    );
  }


  console.log(
    "\nПосле фильтра:",
    filtered.length
  );


  fs.writeFileSync(
    "raw-screenings.json",
    JSON.stringify(filtered, null, 2),
    "utf8"
  );

  const now = new Date();

  const upcoming = filtered
    .filter(x =>
      new Date(x.start) > now
    )
    .slice(0, 10);


  console.log(
    "\nБлижайшие показы:"
  );

  console.table(upcoming);


  console.log("\nГотово:");
  console.log("- raw-screenings.json");
  console.log("- raw-screenings.csv");
}


main()
  .catch(err => {
    console.error(err);
    process.exit(1);
  });