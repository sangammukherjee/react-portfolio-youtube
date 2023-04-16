const Header = ({ title }) => {
  return (
    <div className="container flex justify-center mx-au pb-[40px]">
      <h1 className="text-textColor mb-4 text-4xl md:text-[40px] font-bold">
        {title}
      </h1>
    </div>
  );
};

export default Header
