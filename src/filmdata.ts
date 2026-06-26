import { Film } from "./types";

export const FILMS = [
  {
    title: "Pirates of the Caribbean: The Curse of the Black Pearl (2003)",
    poster: {
      src: "pirates-of-the-caribbean-the-curse-of-the-black-pearl.jpg",
      alt: "",
    },
    trailerUrl: "https://youtu.be/-9HT0l9HV4c",
    screenings: [
      {
        date: "пт 26.06",
        time: "20:30",
        place: "Aero",
        ticketsUrl: "https://www.kinoaero.cz/?projection=50744"
      },
    ]
  },
  {
    title: " I Swear (2025)",
    poster: {
      src: "i-swear.jpg",
      alt: "",
    },
    trailerUrl: "https://youtu.be/10ynpduiRpM",
    screenings: [
      {
        date: "сб 27.06",
        time: "12:15",
        place: "Bio Oko",
        ticketsUrl: "https://www.biooko.net/?projection=51418"
      },
      {
        date: "сб 27.06",
        time: "15:00",
        place: "Světozor",
        ticketsUrl: "https://www.kinosvetozor.cz/?projection=51524"
      },
      {
        date: "вс 28.06",
        time: "15:45",
        place: "Světozor",
        ticketsUrl: "https://www.kinosvetozor.cz/?projection=51455"
      },
      {
        date: "вс 28.06",
        time: "20:00",
        place: "Aero ",
        ticketsUrl: "https://www.kinoaero.cz/?projection=51397"
      },
    ]
  },
  {
    title: "Power Ballad (2026)",
    poster: {
      src: "power-ballad.jpg",
      alt: "",
    },
    trailerUrl: "https://youtu.be/-faiHUsbP_U",
    screenings: [
      {
        date: "сб 27.06",
        time: "12:45",
        place: "Světozor",
        ticketsUrl: "https://www.kinosvetozor.cz/?projection=51452"
      },
    ]
  },
  {
    title: "Father Mother Sister Brother (2025)",
    poster: {
      src: "father-mother-sister-brother.jpg",
      alt: "",
    },
    trailerUrl: "https://youtu.be/PA07EmbZ0b0",
    screenings: [
      {
        date: "вс 28.06",
        time: "13:00",
        place: "Světozor",
        ticketsUrl: "https://www.kinosvetozor.cz/?projection=51454"
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

  {
    title: "Big Trouble in Little China (1986)",
    poster: {
      src: "big_trouble_in_little_china.jpg",
      alt: "",
    },
    trailerUrl: "https://youtu.be/AXsBBqPb5YE",
    screenings: [
      {
        date: "чт 2.07",
        time: "20:30",
        place: "Aero",
        ticketsUrl: "https://www.kinoaero.cz/?projection=49256"
      },
    ]
  },
  {
    title: "Pirates of the Caribbean: Dead Man's Chest (2006)",
    poster: {
      src: "pirates-of-the-caribbean-dead-man-s-chest.jpg",
      alt: "",
    },
    description: "часть Pirates of the Caribbean double feature, один билет на оба фильма стоит 320Kč (на каждый по отдельности 190Kč)",
    trailerUrl: "https://youtu.be/9SFWn9taQTw",
    screenings: [
      {
        date: "пт 3.07",
        time: "17:31",
        place: "Aero",
        ticketsUrl: "https://www.kinoaero.cz/?projection=50745"
      },
    ]
  },
  {
    title: "Pirates of the Caribbean: At World's End (2007)",
    poster: {
      src: "pirates-of-the-caribbean-at-worlds-end.jpg",
      alt: "",
    },
    description: "часть Pirates of the Caribbean double feature, один билет на оба фильма стоит 320Kč (на каждый по отдельности 190Kč)",
    trailerUrl: "https://youtu.be/HKSZtp_OGHY",
    screenings: [
      {
        date: "пт 3.07",
        time: "20:30",
        place: "Aero",
        ticketsUrl: "https://www.kinoaero.cz/?projection=50746"
      },
    ]
  },
  {
    title: "The Devil's Advocate (1997)",
    poster: {
      src: "devil-s-advocate.jpg",
      alt: "",
    },
    trailerUrl: "https://youtu.be/etrZJJC4ox8",
    screenings: [
      {
        date: "вт 7.07",
        time: "20:30",
        place: "Bio Oko",
        ticketsUrl: "https://www.biooko.net/?projection=50465"
      },
    ]
  },
  {
    title: "Мои соседи Ямада (1999)",
    poster: {
      src: "my-neighbors-the-yamadas.jpg",
      alt: "",
    },
    description: "",
    trailerUrl: "https://youtu.be/oJD0k7hWc6M",
    screenings: [
      {
        date: "чт 9.07",
        time: "18:00",
        place: "Bio Oko ",
        ticketsUrl: "https://www.biooko.net/?projection=50533"
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
        date: "сб 18.07",
        time: "12:30",
        place: "Lucerna",
        ticketsUrl: "https://www.kinolucerna.cz/?projection=51255"
      },
      {
        date: "сб 18.07",
        time: "16:00",
        place: "Lucerna",
        ticketsUrl: "https://www.kinolucerna.cz/?projection=51256"
      },
      {
        date: "вс 19.07",
        time: "12:30",
        place: "Lucerna",
        ticketsUrl: "https://www.kinolucerna.cz/?projection=51258"
      },
      {
        date: "вс 19.07",
        time: "16:00",
        place: "Lucerna",
        ticketsUrl: "https://www.kinolucerna.cz/?projection=51260"
      },
      {
        date: "сб 18.07",
        time: "11:00",
        place: "Světozor",
        ticketsUrl: "https://www.kinosvetozor.cz/?projection=51277"
      },
      {
        date: "сб 18.07",
        time: "14:30",
        place: "Světozor",
        ticketsUrl: "https://www.kinosvetozor.cz/?projection=51278"
      },
      {
        date: "вс 19.07",
        time: "11:00",
        place: "Světozor",
        ticketsUrl: "https://www.kinosvetozor.cz/?projection=51280"
      },
      {
        date: "вс 19.07",
        time: "14:30",
        place: "Světozor",
        ticketsUrl: "https://www.kinosvetozor.cz/?projection=51279"
      },
    ]
  },

  {
    title: "Hard Boiled (1992)",
    poster: {
      src: "hard_boiled.jpg",
      alt: "",
    },
    trailerUrl: "https://youtu.be/N_XBwks_MB8",
    screenings: [
      {
        date: "пн 20.07",
        time: "20:30",
        place: "Aero",
        ticketsUrl: "https://www.kinoaero.cz/?projection=49257"
      },
    ]
  },
  {
    title: "Point Break (1991)",
    poster: {
      src: "point-break.jpg",
      alt: "",
    },
    trailerUrl: "https://youtu.be/KywiWyPjrOg",
    screenings: [
      {
        date: "вт 21.07",
        time: "20:30",
        place: "Bio Oko",
        ticketsUrl: "https://www.biooko.net/?projection=50467"
      },
    ]
  },
  {
    title: "The Princess Diaries (2001)",
    poster: {
      src: "princess-diaries.jpg",
      alt: "",
    },
    description: "",
    trailerUrl: "https://youtu.be/2CkcwPi20ms",
    screenings: [
      {
        date: "ср 22.07",
        time: "20:30",
        place: "Aero",
        ticketsUrl: "https://www.kinoaero.cz/?projection=50298"
      },
    ]
  },
  {
    title: "Унесённые призраками (2001)",
    poster: {
      src: "spirited-away.jpg",
      alt: "",
    },
    description: "",
    trailerUrl: "https://youtu.be/GAp2_0JJskk",
    screenings: [
      {
        date: "чт 23.07",
        time: "17:50",
        place: "Bio Oko ",
        ticketsUrl: "https://www.biooko.net/?projection=50536"
      },
    ]
  },

  {
    title: "Angel’s Egg (1985)",
    poster: {
      src: "angels_egg.jpg",
      alt: "",
    },
    trailerUrl: "https://youtu.be/SqyVGzaQFpQ",
    screenings: [
      {
        date: "чт 23.07",
        time: "18:00",
        place: "Aero",
        ticketsUrl: "https://www.kinoaero.cz/?projection=50684"
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

*/