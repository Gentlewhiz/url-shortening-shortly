import { FEATURES } from "../data/content";
import FeatureCard from "./FeatureCard";

// Vertical offsets that create the staircase layout on desktop, matching
// the design's staggered cards (each one sits a little lower than the last).
const DESKTOP_OFFSETS = ["md:mt-0", "md:mt-10", "md:mt-20"];

export default function StatisticsSection() {
  return (
    <section className="bg-gray-100 py-20" aria-labelledby="statistics-heading">
      <div className="mx-auto max-w-content px-6 md:px-8">
        <div className="mx-auto max-w-md text-center md:max-w-lg">
          <h2 id="statistics-heading" className="text-3xl font-bold text-gray-900">
            Advanced Statistics
          </h2>
          <p className="mt-4 text-gray-500">
            Track how your links are performing across the web with our advanced statistics
            dashboard.
          </p>
        </div>

        <div className="relative mt-14 flex flex-col gap-16 md:flex-row md:items-start md:gap-8">
          {/* Decorative connector lines bridging the gaps between cards on desktop */}
          <div
            aria-hidden="true"
            className="absolute top-[7.25rem] hidden h-1 w-8 -translate-y-1/2 bg-blue-400 md:block"
            style={{ left: "31.5%" }}
          />
          <div
            aria-hidden="true"
            className="absolute top-[7.25rem] hidden h-1 w-8 -translate-y-1/2 bg-blue-400 md:block"
            style={{ left: "65.5%" }}
          />

          {FEATURES.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className={`flex-1 ${DESKTOP_OFFSETS[index]}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
