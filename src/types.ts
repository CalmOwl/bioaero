
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
  infoButtonUrl: string;
  infoButtonDescription?: string;
  screenings: Screening[];
};