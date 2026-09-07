export type Thing = {
  id: string;

  name: string;
  category: string;
  description?: string;
  image?: string;

  // The account that currently owns this Thing
  ownerId: string;

  identifiers?: {
    serialNumber?: string;
    modelNumber?: string;
  };

  purchase?: {
    date?: string;
    price?: number;
    retailer?: string;
  };

  warranty?: {
    provider?: string;
    expirationDate?: string;
  };

  dates: {
    created: string;
    updated: string;
  };
};