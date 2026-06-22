import type { SavedScreening } from "../types";

const STORAGE_KEY = "screenings";

export function getSavedScreenings(): SavedScreening[] {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

export function saveScreenings(screenings: SavedScreening[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(screenings));
}

export function isScreeningSaved(id: string): boolean {
  return getSavedScreenings().some((screening) => screening.id === id);
}

export function addScreening(screening: SavedScreening) {
  const screenings = getSavedScreenings();

  if (screenings.some((item) => item.id === screening.id)) return;

  screenings.push(screening);
  saveScreenings(screenings);
}

export function removeScreening(id: string) {
  const screenings = getSavedScreenings().filter(
    (screening) => screening.id !== id
  );

  saveScreenings(screenings);
}

export function toggleScreening(screening: SavedScreening) {
  if (isScreeningSaved(screening.id)) {
    removeScreening(screening.id);
    return false;
  }

  addScreening(screening);
  return true;
}