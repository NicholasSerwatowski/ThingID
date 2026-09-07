import { Link, useParams } from "react-router-dom";
import { things } from "../data/things";
import { users } from "../data/users";

function Thing() {
  const { thingId } = useParams();

  const thing = things.find(
    (item) => item.id === thingId,
  );

  if (!thing) {
    return (
      <main>
        <h1>Thing Not Found</h1>

        <p>
          We couldn't find a Thing with that ID.
        </p>
      </main>
    );
  }

  const owner = users.find(
    (user) => user.id === thing.ownerId,
  );

  return (
    <main className="thing-page">
      <p>{thing.category}</p>

      <h1>{thing.name}</h1>

      <div className="thing-actions">
        <Link to={`/things/${thing.id}/edit`}>
          Edit Thing
        </Link>
      </div>

      {thing.description && (
        <p>{thing.description}</p>
      )}

      <section>
        <h2>Identity</h2>

        <p>ThingID: {thing.id}</p>
      </section>

      {owner && (
        <section>
          <h2>Owner</h2>

          <p>{owner.name}</p>
        </section>
      )}

      {thing.identifiers && (
        <section>
          <h2>Identifiers</h2>

          {thing.identifiers.serialNumber && (
            <p>
              Serial Number:{" "}
              {thing.identifiers.serialNumber}
            </p>
          )}

          {thing.identifiers.modelNumber && (
            <p>
              Model Number:{" "}
              {thing.identifiers.modelNumber}
            </p>
          )}
        </section>
      )}

      {thing.purchase && (
        <section>
          <h2>Purchase</h2>

          {thing.purchase.date && (
            <p>
              Purchased: {thing.purchase.date}
            </p>
          )}

          {thing.purchase.price !== undefined && (
            <p>
              Price: ${thing.purchase.price}
            </p>
          )}

          {thing.purchase.retailer && (
            <p>
              Retailer: {thing.purchase.retailer}
            </p>
          )}
        </section>
      )}

      {thing.warranty && (
        <section>
          <h2>Warranty</h2>

          {thing.warranty.provider && (
            <p>
              Provider: {thing.warranty.provider}
            </p>
          )}

          {thing.warranty.expirationDate && (
            <p>
              Expires:{" "}
              {thing.warranty.expirationDate}
            </p>
          )}
        </section>
      )}
    </main>
  );
}

export default Thing;