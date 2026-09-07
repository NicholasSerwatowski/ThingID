import { Link } from "react-router-dom";

import type { Thing } from "../types/thing";

type ThingCardProps = {
  thing: Thing;
};

function ThingCard({ thing }: ThingCardProps) {
  return (
    <Link to={`/things/${thing.id}`}>
      <article>
        <h2>{thing.name}</h2>

        <p>{thing.category}</p>

        {thing.description && (
          <p>{thing.description}</p>
        )}
      </article>
    </Link>
  );
}

export default ThingCard;