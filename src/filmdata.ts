import enrichedFilms from '../finalFilmData.json'
import { Film } from "./types";

export const FILMS = enrichedFilms as Film[];
/*
export const FILMS = [
  {
    title: "I Swear (2025)",
    poster: {
      src: "i-swear.jpg",
      alt: "",
    },
    trailerUrl: "https://youtu.be/10ynpduiRpM",
    screenings: [
      {
        date: "вс 26.07",
        time: "18:00",
        place: "Světozor",
        ticketsUrl: "https://www.kinosvetozor.cz/?projection=52515"
      },
    ]
  },
  {
    title: "The Invite (2026)",
    poster: {
      src: "the-invite.jpg",
      alt: "",
    },
    trailerUrl: "https://youtu.be/nelkiuezJxg",
    screenings: [
      {
        date: "вс 26.07",
        time: "13:00",
        place: "Světozor",
        ticketsUrl: "https://www.kinosvetozor.cz/?projection=52538"
      },
      {
        date: "вс 26.07",
        time: "18:00",
        place: "Světozor",
        ticketsUrl: "https://www.kinosvetozor.cz/?projection=52539"
      },
    ]
  },
  {
    title: "Odyssey (2026)",
    poster: {
      src: "odyssey.jpg",
      alt: "",
    },
    description: "",
    trailerUrl: "https://youtu.be/f_bKjZeJBBI",
    screenings: [
      {
        date: "вс 26.07",
        time: "12:00",
        place: "Lucerna",
        ticketsUrl: "https://www.kinolucerna.cz/?projection=52502"
      },
      {
        date: "вс 26.07",
        time: "12:30",
        place: "Světozor",
        ticketsUrl: "https://www.kinosvetozor.cz/?projection=52557"
      },
      {
        date: "вс 26.07",
        time: "16:00",
        place: "Světozor",
        ticketsUrl: "https://www.kinosvetozor.cz/?projection=52558"
      },
      {
        date: "вс 26.07",
        time: "19:10",
        place: "Aero",
        ticketsUrl: "https://www.kinoaero.cz/?projection=51866"
      },
      {
        date: "вс 26.07",
        time: "19:30",
        place: "Světozor",
        ticketsUrl: "https://www.kinosvetozor.cz/?projection=52559"
      },
      {
        date: "вс 26.07",
        time: "19:45",
        place: "Lucerna",
        ticketsUrl: "https://www.kinolucerna.cz/?projection=52505"
      },
      {
        date: "пт 21.08",
        time: "14:00",
        place: "Světozor",
        ticketsUrl: "https://www.kinosvetozor.cz/?projection=52592"
      },
    ]
  },
  {
    title: "Odyssey (2026) 35мм",
    poster: {
      src: "odyssey.jpg",
      alt: "",
    },
    description: "показы с плёнки 35мм",
    trailerUrl: "https://youtu.be/f_bKjZeJBBI",
    screenings: [
      {
        date: "вт 4.08",
        time: "20:00",
        place: "Světozor",
        ticketsUrl: "https://www.kinosvetozor.cz/?projection=52392"
      },
      {
        date: "ср 5.08",
        time: "20:00",
        place: "Světozor",
        ticketsUrl: "https://www.kinosvetozor.cz/?projection=52393"
      },
    ]
  },
  {
    title: "My Own Private Idaho (1991)",
    poster: {
      src: "my-own-private-idaho.jpg",
      alt: "",
    },
    description: "",
    trailerUrl: "https://youtu.be/cNENMVQfOus",
    screenings: [
      {
        date: "вт 4.08",
        time: "20:30",
        place: "Bio Oko",
        ticketsUrl: "https://www.biooko.net/?projection=50494"
      },
    ]
  },
  {
    title: "Aero naslepo",
    description: "Сеанс неизвестного заранее фильма, билеты нужно брать ПРЯМО В КАССЕ КИНОТЕАТРА",
    trailerUrl: "https://boxd.it/uqXaW",
    infoButtonDescription: "Список фильмов предыдущих сеансов",
    screenings: [
      {
        date: "ср 5.08",
        time: "20:30",
        place: "Aero",
        ticketsUrl: "https://www.kinoaero.cz/?projection=48280"
      },
    ]
  },
  {
    title: "Сталкер (1979)",
    poster: {
      src: "stalker.jpg",
      alt: "",
    },
    trailerUrl: "https://youtu.be/nFLQEuQuNKM",
    screenings: [
      {
        date: "пт 7.08",
        time: "20:00",
        place: "Aero",
        ticketsUrl: "https://www.kinoaero.cz/?projection=50310"
      },
    ]
  },
  {
    title: "Pusher (1996)",
    poster: {
      src: "pusher.jpg",
      alt: "",
    },
    trailerUrl: "https://youtu.be/AEIwMsqee-A",
    screenings: [
      {
        date: "сб 8.08",
        time: "17:01",
        place: "Aero",
        ticketsUrl: "https://www.kinoaero.cz/?projection=50306"
      },
    ]
  }, {
    title: "Pusher II (2004)",
    poster: {
      src: "pusher2.jpg",
      alt: "",
    },
    trailerUrl: "https://youtu.be/BcFcDPWysEE",
    screenings: [
      {
        date: "сб 8.08",
        time: "19:20",
        place: "Aero",
        ticketsUrl: "https://www.kinoaero.cz/?projection=50307"
      },
    ]
  }, {
    title: "Pusher III (2005)",
    poster: {
      src: "pusher3.jpg",
      alt: "",
    },
    trailerUrl: "https://youtu.be/d99iy7uHe8Q",
    screenings: [
      {
        date: "сб 8.08",
        time: "21:30",
        place: "Aero",
        ticketsUrl: "https://www.kinoaero.cz/?projection=50308"
      },
    ]
  },
  {
    title: "Matrix (1999)",
    poster: {
      src: "matrix.jpg",
      alt: "",
    },
    trailerUrl: "https://youtu.be/d0XTFAMmhrE",
    screenings: [
      {
        date: "вт 11.08",
        time: "20:30",
        place: "Bio Oko",
        ticketsUrl: "https://biooko.net/?projection=50495"
      },
    ]
  },
  {
    title: "Only Lovers Left Alive (2013)",
    poster: {
      src: "only-lovers-left-alive.jpg",
      alt: "",
    },
    trailerUrl: "https://youtu.be/pkeWhokaPPs",
    screenings: [
      {
        date: "пн 17.08",
        time: "20:30",
        place: "Aero",
        ticketsUrl: "https://www.kinoaero.cz/?projection=50302"
      },
    ]
  },
  {
    title: "Ходячий замок (2004)",
    poster: {
      src: "howls-moving-castle.jpg",
      alt: "",
    },
    trailerUrl: "https://youtu.be/ARCQf2CEr8k",
    screenings: [
      {
        date: "чт 20.08",
        time: "18:00",
        place: "Bio Oko",
        ticketsUrl: "https://www.biooko.net/?projection=50541"
      },
    ]
  },
  {
    title: "Terminator 2: Judgment Day (1991)",
    poster: {
      src: "terminator-2-judgment-day.jpg",
      alt: "",
    },
    trailerUrl: "https://youtu.be/BuBD2s2NmEM",
    screenings: [
      {
        date: "пт 21.08",
        time: "20:15",
        place: "Aero",
        ticketsUrl: "https://www.kinoaero.cz/?projection=50368"
      },
    ]
  },
  {
    title: "Constantine (2005)",
    poster: {
      src: "constantine.jpg",
      alt: "",
    },
    trailerUrl: "https://youtu.be/819JCbGfZpg",
    screenings: [
      {
        date: "вт 25.08",
        time: "20:30",
        place: "Bio Oko",
        ticketsUrl: "https://www.biooko.net/?projection=50497"
      },
    ]
  },
  {
    title: "Blade Runner: The Final Cut (1982)",
    poster: {
      src: "blade-runner.jpg",
      alt: "",
    },
    trailerUrl: "https://youtu.be/qoEyZoOTtss",
    screenings: [
      {
        date: "чт 27.08",
        time: "18:01",
        place: "Aero",
        ticketsUrl: "https://www.kinoaero.cz/?projection=50374"
      },
    ]
  },
  {
    title: "Bram Stoker's Dracula (1992)",
    poster: {
      src: "bram-stokers-dracula.jpg",
      alt: "",
    },
    trailerUrl: "https://youtu.be/xD6JMxOGBLQ",
    screenings: [
      {
        date: "вт 1.09",
        time: "20:30",
        place: "Bio Oko",
        ticketsUrl: "https://www.biooko.net/?projection=50498"
      },
    ]
  },
  {
    title: "Сказания Земноморья (2006)",
    poster: {
      src: "tales-from-earthsea.jpg",
      alt: "",
    },
    trailerUrl: "https://youtu.be/8hxYx3Jq3kI",
    screenings: [
      {
        date: "чт 3.09",
        time: "18:00",
        place: "Bio Oko",
        ticketsUrl: "https://www.biooko.net/?projection=50542"
      },
    ]
  },

] satisfies Film[];

// const FILMS: Film[] = [ ... ]


/*

 {
    title: "",
    poster: {
      src: "",
      alt: "",
    },
    description: "",
    trailerUrl: "",
    screenings: [
      {
        date: "",
        time: "",
        place: "",
        ticketsUrl: ""
      },
    ]
  },



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
*/