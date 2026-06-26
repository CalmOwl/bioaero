export default function pluralize(count: number): string {
  if (count >= 11 && count <= 14) {
    return "фильмов";
  }

  switch (count % 10) {
    case 1: return "фильм";
    case 2:
    case 3:
    case 4: return "фильма";
    default: return "фильмов";
  }
}