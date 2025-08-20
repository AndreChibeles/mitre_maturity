const services = [
  "Managed Detection & Response",
  "Threat Intelligence",
  "Security Awareness Training",
  "Incident Response",
  "Vulnerability Management",
];

interface SolutionsSidebarProps {
  selected: string[];
  onToggle: (service: string) => void;
}

export default function SolutionsSidebar({ selected, onToggle }: SolutionsSidebarProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Solutions / Services</h2>
      <div className="flex flex-col gap-3">
        {services.map((service) => {
          const isSelected = selected.includes(service);
          return (
            <button
              key={service}
              onClick={() => onToggle(service)}
              className={
                isSelected
                  ? "px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                  : "px-4 py-2 rounded border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition"
              }
            >
              {service}
            </button>
          );
        })}
      </div>
    </div>
  );
}
