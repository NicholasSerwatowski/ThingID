import type { Thing } from "../types/thing";

export const things: Thing[] = [
  {
    id: "bicycle-001",

    name: "My Bicycle",
    category: "Bicycle",
    description: "My personal bicycle.",

    ownerId: "user-001",

    identifiers: {
      serialNumber: "ABC123456",
      modelNumber: "XYZ-2026",
    },

    purchase: {
      date: "2026-01-15",
      price: 500,
      retailer: "Local Bike Shop",
    },

    warranty: {
      provider: "Example Bicycle Company",
      expirationDate: "2027-01-15",
    },

    dates: {
      created: "2026-01-15",
      updated: "2026-01-15",
    },
  },

  {
    id: "laptop-001",

    name: "My Laptop",
    category: "Computer",
    description: "My personal laptop.",

    ownerId: "user-001",

    identifiers: {
      serialNumber: "DEF789012",
      modelNumber: "ABC-LAPTOP",
    },

    purchase: {
      date: "2026-03-10",
      price: 1200,
      retailer: "Example Electronics",
    },

    warranty: {
      provider: "Example Computer Company",
      expirationDate: "2027-03-10",
    },

    dates: {
      created: "2026-03-10",
      updated: "2026-03-10",
    },
  },
];