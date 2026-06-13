const SectionHeading = ({
  title,
  subtitle,
}) => {
  return (
    <div className="mb-12 text-center">
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
        {subtitle}
      </p>

      <h2
        className="
          text-4xl
          font-bold
          md:text-5xl
          bg-gradient-to-r
          from-indigo-400
          via-purple-400
          to-cyan-400
          bg-clip-text
          text-transparent
        "
      >
        {title}
      </h2>
    </div>
  );
};

export default SectionHeading;