interface NavProps {
  name: string;
}

const navbar = ({ name }: NavProps) => {
  return (
    <div>
      <div className="font-mono text-4xl m-4">{name}</div>
    </div>
  );
};

export default navbar;
