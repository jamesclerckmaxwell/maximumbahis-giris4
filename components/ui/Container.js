const Container = ({ className, children }) => (
  <div className={`container lg:w-3/4 mx-auto px-6 ${className}`}>
    {children}
  </div>
);

export default Container;
