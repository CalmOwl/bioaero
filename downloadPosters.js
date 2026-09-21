import fs from "fs/promises";
import films from './finalFilmData.json' with { type: 'json' };

const downloadPosters = async (films) => {
  await fs.mkdir("./public/posters", { recursive: true });

  for (const film of films) {
    if (!film.poster?.src) {
      continue;
    }

    try {
      const response = await fetch(film.poster.src);

      if (!response.ok) {
        console.log("Не удалось скачать:", film.title);
        continue;
      }

      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const fileName = film.title
        .replace(/[<>:,&"/\\|?!*]/g, "")
        .replace(/\s+/g, "-")
        .toLowerCase();

      const filePath = `./public/posters/${fileName}.jpg`;

      await fs.writeFile(filePath, buffer);

      film.poster.local = `${fileName}.jpg`;

      console.log("Скачан:", film.title);

    } catch (e) {
      console.log("Ошибка:", film.title, e.message);
    }
  }

  return films;
};

const updatedFilms = await downloadPosters(films);

await fs.writeFile(
  "./finalFilmData.json",
  JSON.stringify(updatedFilms, null, 2),
  "utf-8"
);