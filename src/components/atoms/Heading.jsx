const Heading = ({ level, children, className }) => {
  switch (level) {
    case 1:
      return (
        <h1
          className={`font-bold text-[2.5rem] xl:text-[4.5625rem] ${className}`}
        >
          {children}
        </h1>
      );
    case 2:
      return <h2 className={`font-bold text-3xl ${className}`}>{children}</h2>;
    case 3:
      return <h3 className={`font-bold text-2xl ${className}`}>{children}</h3>;
    case 4:
      return <h4 className={`font-bold text-xl ${className}`}>{children}</h4>;
    case 5:
      return <h5 className={`font-bold text-lg ${className}`}>{children}</h5>;
    case 6:
      return <h6 className={`font-bold text-base ${className}`}>{children}</h6>;
    default:
      break;
  }
};

export default Heading;
