export const mockShifts = [
  { id: 1, name: "Sabah", start: "08:00", end: "16:00" },
  { id: 2, name: "Akşam", start: "16:00", end: "00:00" },
];
export const mockCycles = [
  {
    id: 1,
    name: "1. Döngü",
    shifts: [1, 2], // shift id'leri
    startDate: "2025-04-01",
    endDate: "2025-04-07",
  },
  {
    id: 2,
    name: "2. Döngü",
    shifts: [2],
    startDate: "2025-04-08",
    endDate: "2025-04-14",
  },
];
