
export type Screening = {
  date: string;
  time: string;
  place: string;
  ticketsUrl: string;
};

export type Film = {
  title: string;
  poster?: {
    src: string;
    alt: string;
  };
  description?: string;
  trailerUrl: string;
  infoButtonDescription?: string;
  screenings: Screening[];
};

export type SavedScreening = {
  id: string;
  film: string;
  date: string;
  time: string;
  place: string;
  ticketsUrl: string;
};