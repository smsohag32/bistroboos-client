const SectionTitle = ({ heading, subHeading }) => {
  return (
    <section className="max-w-md mx-auto mt-5 py-6 text-center">
      <h5 className="text-orange-400 mb-2">{subHeading}</h5>
      <h2 className="text-3xl font-bold border-y-2 border-opacity-50 py-2">
        {heading}
      </h2>
    </section>
  );
};

export default SectionTitle;
