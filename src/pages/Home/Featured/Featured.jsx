import SectionTitle from "../../shared/Title/SectionTitle";
import featured from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('${featured}')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
      className="py-10"
    >
      <SectionTitle
        heading="Featured items"
        subHeading="check it out"
      ></SectionTitle>
      <div className="md:flex py-12 px-20 spa   ce-y-4 gap-5 items-center">
        <div>
          <img src={featured} alt="" />
        </div>
        <div className="space-y-3">
          <p className="text-xl">25 Agu 2023</p>
          <p className="uppercase text-xl">Where can i get </p>
          <p>
            <small>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
              nam porro eveniet ut recusandae debitis natus beatae eaque
              excepturi laborum? Doloribus nam natus obcaecati veniam deserunt
              molestias at nobis quas?
            </small>
          </p>
          <button className="btn border-none border-b-2">Order Now</button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
