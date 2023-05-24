import { Parallax } from "react-parallax";

const Cover = ({ image, title, subTitle }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={image}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className="hero h-[580px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content w-1/2 mx-auto bg-slate-900  py-8 bg-opacity-5 backdrop-blur-lg text-white text-center ">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl uppercase font-bold">{title}</h1>
            <p className="mb-5">{subTitle}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
