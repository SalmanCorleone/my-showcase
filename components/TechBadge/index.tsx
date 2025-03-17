import Image from "next/image";

interface ITechBadgeProps {
  name: string;
  icon: string;
  color?: string;
}

const TechBadge = ({ name, icon }: ITechBadgeProps) => {
  return (
    <div className="flex items-center px-4 py-2 border border-solid border-gray-400 gap-2 rounded-sm">
      {/* <div className="w-2 h-2 rounded-xl bg-amber-600" /> */}
      <Image src={icon} alt={name} width={20} height={20} />
      <p>{name}</p>
    </div>
  );
};

export default TechBadge;
