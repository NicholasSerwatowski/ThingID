import type { FormEvent } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { things } from "../data/things";

function AddThing() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [modelNumber, setModelNumber] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [retailer, setRetailer] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const now = new Date().toISOString();

    const newThing = {
      id: `thing-${Date.now()}`,

      name,
      category,
      description,

      ownerId: "user-001",

      identifiers: {
        serialNumber: serialNumber || undefined,
        modelNumber: modelNumber || undefined,
      },

      purchase: {
        date: purchaseDate || undefined,
        price: purchasePrice
          ? Number(purchasePrice)
          : undefined,
        retailer: retailer || undefined,
      },

      dates: {
        created: now,
        updated: now,
      },
    };

    things.push(newThing);

    navigate(`/things/${newThing.id}`);
  }

  return (
    <main>
      <h1>Add a Thing</h1>

      <p>
        Create a digital identity for a physical object.
      </p>

      <form onSubmit={handleSubmit}>
        <section>
          <h2>Basic Information</h2>

          <label>
            Name
            <input
              type="text"
              value={name}
              onChange={(event) =>
                setName(event.target.value)
              }
              placeholder="My Bicycle"
              required
            />
          </label>

          <label>
            Category
            <input
              type="text"
              value={category}
              onChange={(event) =>
                setCategory(event.target.value)
              }
              placeholder="Bicycle"
              required
            />
          </label>

          <label>
            Description
            <textarea
              value={description}
              onChange={(event) =>
                setDescription(event.target.value)
              }
              placeholder="Describe this Thing..."
            />
          </label>
        </section>

        <section>
          <h2>Identifiers</h2>

          <label>
            Serial Number
            <input
              type="text"
              value={serialNumber}
              onChange={(event) =>
                setSerialNumber(event.target.value)
              }
              placeholder="Optional"
            />
          </label>

          <label>
            Model Number
            <input
              type="text"
              value={modelNumber}
              onChange={(event) =>
                setModelNumber(event.target.value)
              }
              placeholder="Optional"
            />
          </label>
        </section>

        <section>
          <h2>Purchase Information</h2>

          <label>
            Purchase Date
            <input
              type="date"
              value={purchaseDate}
              onChange={(event) =>
                setPurchaseDate(event.target.value)
              }
            />
          </label>

          <label>
            Purchase Price
            <input
              type="number"
              min="0"
              step="0.01"
              value={purchasePrice}
              onChange={(event) =>
                setPurchasePrice(event.target.value)
              }
              placeholder="Optional"
            />
          </label>

          <label>
            Retailer
            <input
              type="text"
              value={retailer}
              onChange={(event) =>
                setRetailer(event.target.value)
              }
              placeholder="Optional"
            />
          </label>
        </section>

        <button type="submit">
          Create Thing
        </button>
      </form>
    </main>
  );
}

export default AddThing;