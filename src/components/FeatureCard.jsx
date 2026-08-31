export default function FeatureCard({ icon, title, description, className = "" }) {
  return (
    <div
      className={`relative flex flex-col items-center rounded-lg bg-white px-8 pb-8 pt-14 text-center md:items-start md:pt-16 md:text-left ${className}`}
    >
      <div className="absolute -top-8 flex h-16 w-16 items-center justify-center rounded-full bg-purple-950 md:left-8">
        <img src={icon} alt="" className="h-8 w-8" />
      </div>
      <h3 className="mt-2 text-xl font-bold text-gray-900">{title}</h3>
      <p className="mt-4 text-gray-500">{description}</p>
    </div>
  );
}
