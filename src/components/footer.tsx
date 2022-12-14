const footer = () => {
  return (
    <div className="flex flex-col items-center gap-4 mb-12">
      <p className="self-center text-2xl">find me on</p>
      <ul className="flex gap-4">
        <li className="transition-all duration-300 hover:-translate-y-1">
          <a href="https://instagram.com/_____.aj.________?igshid=ZDdkNTZiNTM=">
            <img src="/instagram.svg" alt="" className="w-14" />
          </a>
        </li>
        <li className="transition-all duration-300 hover:-translate-y-1">
          <a href="https://www.linkedin.com/in/ajay-ram-s-a4533a1b4">
            <img src="/linkedin.svg" alt="" className="w-14" />
          </a>
        </li>
        <li className="transition-all duration-300 hover:-translate-y-1">
          <a href="https://github.com/CampVamp">
            <img src="/github.svg" alt="" className="w-14" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default footer;
