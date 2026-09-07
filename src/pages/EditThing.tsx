import type { FormEvent } from "react";
import { useState } from "react";
import {
  useNavigate,
  useParams,
} from "react-router-dom";

import { things } from "../data/things";

function EditThing() {
  const { thingId } = useParams();
  const navigate = useNavigate();

  const thing = things.find(
    (item) => item.id === thingId,
  );

  const [name, setName] = useState(
    thing?.name ?? "",
  );

  const [category, setCategory] = useState(
    thing?.category ?? "",
  );

  const [description, setDescription] = useState(
    thing?.description ?? "",
  );

  const [serialNumber, setSerialNumber] =
    useState(
      thing?.identifiers?.serialNumber ?? "",
    );

  const [modelNumber, setModelNumber] =
    useState(
      thing?.identifiers?.modelNumber ?? "",
    );

  const [purchaseDate, setPurchaseDate] =
    useState(
      thing?.purchase?.date ?? "",
    );

  const [purchasePrice, setPurchasePrice] =
    useState(
      thing?.purchase?.price?.toString() ?? "",
    );

  const [retailer, setRetailer] =
    useState(
      thing?.purchase?.retailer ?? "",
    );

  function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    if (!thing) {
      return;
    }

    const updatedThing = {
      ...thing,

      name,
      category,
      description,

      identifiers: {
        serialNumber:
          serialNumber || undefined,

        modelNumber:
          modelNumber || undefined,
      },

      purchase: {
        date:
          purchaseDate || undefined,

        price:
          purchasePrice
            ? Number(purchasePrice)
            : undefined,

        retailer:
          retailer || undefined,
      },

      dates: {
        ...thing.dates,
        updated:
          new Date().toISOString(),
      },
    };

    const thingIndex = things.findIndex(
      (item) => item.id === thing.id,
    );

    things[thingIndex] = updatedThing;

    navigate(`/things/${thing.id}`);
  }

  if (!thing) {
    return (
      <main>
        <h1>Thing Not Found</h1>

        <p>
          We couldn't find this Thing.
        </p>
      </main>
    );
  }

  return (
    <main>
      <h1>Edit Thing</h1>

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
                setSerialNumber(
                  event.target.value,
                )
              }
            />
          </label>

          <label>
            Model Number

            <input
              type="text"
              value={modelNumber}
              onChange={(event) =>
                setModelNumber(
                  event.target.value,
                )
              }
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
                setPurchaseDate(
                  event.target.value,
                )
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
                setPurchasePrice(
                  event.target.value,
                )
              }
            />
          </label>

          <label>
            Retailer

            <input
              type="text"
              value={retailer}
              onChange={(event) =>
                setRetailer(
                  event.target.value,
                )
              }
            />
          </label>
        </section>

        <button type="submit">
          Save Changes
        </button>
      </form>
    </main>
  );
}

export default EditThing;