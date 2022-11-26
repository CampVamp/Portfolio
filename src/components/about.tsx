const about = () => {
  return (
    <div className="mt-24 flex flex-col items-center">
      <p className="text-6xl font-bold">About Me</p>
      <div className="flex">
        <img src="../public/github.svg" alt="" className="w-12" />
        <div>
          <p className="text-3xl">
            Hi my name is Ajay. A Computer Science student intreseted in
            Web-Development
          </p>
        </div>
      </div>
    </div>
  );
};

export default about;
