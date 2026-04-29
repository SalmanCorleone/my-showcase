interface IHeadingProps {
  title: string;
}

const Heading = ({ title }: IHeadingProps) => {
  return <h2 className="text-4xl lg:text-6xl py-20 text-center">{title}</h2>;
};

export default Heading;
