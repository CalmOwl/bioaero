import data from './raw-screenings.json' with { type: 'json' };
import fs from "fs";

const normalizeDate = (obj) => {
  for (const item of obj) {
    const dateTime = new Date(item.start);

    item.date = dateTime.toLocaleDateString("ru-RU", {
      weekday: "short",
      day: "numeric",
      month: "2-digit",
    });

    item.time = dateTime.toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit"
    });

    item.weekday = dateTime.getDay();
  }

  return obj;
}

const getLetterboxdPoster = async (letterboxdUrl) => {

  try {
    const html = await fetch(letterboxdUrl).then(r => r.text());

    const matches = [
      ...html.matchAll(
        /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g
      )
    ];

    for (const match of matches) {
      try {
        const cleanJson = match[1]
          .replace(/\/\* <!\[CDATA\[ \*\//, "")
          .replace(/\/\* \]\]> \*\//, "")
          .trim();

        const json = JSON.parse(cleanJson);

        if (json["@type"] === "Movie" && json.image) {
          return json.image;
        }

      } catch {
        continue;
      }
    }
    return null;

  } catch (e) {
    console.log("Poster error:", letterboxdUrl, e.message);
    return null;
  }
};

const sortingUnique = (obj) => {
  let arr = [];

  for (const film of obj) {
    if (!film.title.includes("|") && !arr.includes(film.title) && (film.letterboxdUrl || film.title.includes("Aero"))) {
      arr.push(film.title);
    }
  }

  return arr;
}

const findFilmScreenings = (uniqueFilmTitlesArr, allFilmsObj) => {
  let sortedScreenings = [];

  for (const film of uniqueFilmTitlesArr) {
    for (const item of allFilmsObj) {
      if (film === item.title
        && !sortedScreenings.some(x => x.title === item.title)
      ) {
        sortedScreenings.push({
          title: film,
          poster: {
            src: "",
            alt: "",
          },
          letterboxdUrl: item.letterboxdUrl,
          trailerUrl: item.trailerUrl,
          screenings: [{

            id: item.id,
            start: item.start,
            weekday: item.weekday,
            date: item.date,
            time: item.time,
            place: item.cinema,
            ticketsUrl: item.url,
          }]
        });
      }
    }
  }

  for (const film of uniqueFilmTitlesArr) {
    for (const item of allFilmsObj) {
      if (film === item.title
        && sortedScreenings.some(x => x.title === item.title)) {
        const movie = sortedScreenings.find(x => x.title === film);

        if (!movie.screenings.some(x => x.start === item.start))
          movie.screenings.push({

            id: item.id,
            start: item.start,
            weekday: item.weekday,
            date: item.date,
            time: item.time,
            place: item.cinema,
            ticketsUrl: item.url,
          });

      }
    }
  }

  for (const film of sortedScreenings) {
    if (film.screenings.length > 4) {
      film.screenings = film.screenings.filter(screening => screening.weekday === 0 || screening.weekday === 6);
    }
  }

  console.log("done");
  return sortedScreenings;
}

const result = findFilmScreenings(
  sortingUnique(data),
  normalizeDate(data)
);


for (let film of result) {
  if (film.letterboxdUrl) {
    const poster = await getLetterboxdPoster(film.letterboxdUrl);

    film.poster.src = poster;
  }
  console.log(film.poster);

}


fs.writeFileSync(
  "finalFilmData.json",
  JSON.stringify(result, null, 2),
  "utf8"
);