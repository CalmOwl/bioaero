import enrichedFilms from '../finalFilmData.json'
import { Film } from "./types";

export const FILMS = enrichedFilms as Film[];

/*
  {
    title: "Aero naslepo",
    description: "Když zkusíte „Aero naslepo“, nebudete vědět, na jaký film jste se vypravili. Předem neplatíte nic. Po projekci dostanete možnost ocenit zážitek částkou, kterou si sami určíte.",
    trailerUrl: "https://boxd.it/uqXaW",
    infoButtonDescription: "Список фильмов предыдущих сеансов",
    screenings: [
      {
        date: "ср 1.07",
        time: "20:30",
        place: "Aero",
        ticketsUrl: "https://www.kinoaero.cz/?projection=48280"
      },
    ]
  },


  {
    "title": "Aero naslepo",
    "description": "Když zkusíte „Aero naslepo“, nebudete vědět, na jaký film jste se vypravili. Předem neplatíte nic. Po projekci dostanete možnost ocenit zážitek částkou, kterou si sami určíte.",
    "trailerUrl": "https://boxd.it/uqXaW",
    "infoButtonDescription": "Список фильмов предыдущих сеансов",
    "screenings": [
      {
        "start": "2026-09-02T20:30:00+02:00",
        "date": "ср, 02.09",
        "time": "20:30",
        "place": "Aero",
        "ticketsUrl": "https://www.kinoaero.cz/en?projection=50381"
      }
    ]
  },
*/