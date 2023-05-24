const MenuHeading = ({ image, title, subTitle }) => {
  return (
    <div
      className="hero h-[580px]"
      style={{
        backgroundImage: `url("${image}")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content w-1/2 mx-auto bg-slate-900  py-8 bg-opacity-5 backdrop-blur-lg text-white text-center ">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{title}</h1>
          <p className="mb-5">{subTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuHeading;
