interface ILinkButtonProps {
  href: string;
  title: string;
}

const LinkButton = ({ href, title }: ILinkButtonProps) => {
  return (
    <a key={title} href={href} target="_blank" rel="noreferrer" className="text-blue-900">
      <div className="flex items-center justify-center px-1 py-2 gap-2 rounded-md border-l border-b border-gray-300">
        <p className="text-sm text-center">{title} ↗</p>
      </div>
    </a>
  );
};

export default LinkButton;
