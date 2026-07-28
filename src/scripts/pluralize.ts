export default function pluralize(count: number): string {
  const lastTwo = count % 100;

  if (lastTwo >= 11 && lastTwo <= 14) {
    return "фильмов";
  }

  switch (count % 10) {
    case 1:
      return "фильм";
    case 2:
    case 3:
    case 4:
      return "фильма";
    default:
      return "фильмов";
  }
}