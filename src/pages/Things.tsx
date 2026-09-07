import { things } from "../data/things";
import ThingCard from "../components/ThingCard";

function Things() {
  return (
    <main>
      <h1>My Things</h1>

      <section>
        {things.map((thing) => (
          <ThingCard
            key={thing.id}
            thing={thing}
          />
        ))}
      </section>
    </main>
  );
}

export default Things;