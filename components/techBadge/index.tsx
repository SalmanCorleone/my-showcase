interface ITechBadgeProps {
  name: string;
  icon: React.ReactNode;
  color?: string;
}

const TechBadge = ({ name, icon }: ITechBadgeProps) => {
  return (
    <div className="flex items-center px-2 py-1 border border-solid border-gray-300 gap-1 rounded-sm">
      {/* <div className="w-2 h-2 rounded-xl bg-amber-600" /> */}
      <span className="text-xs">{icon}</span>
      <p className="text-xs">{name}</p>
    </div>
  );
};

export default TechBadge;
