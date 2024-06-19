  const Loader = ({ isLoading }) => {
    return <div className={`loader ${isLoading ? '' : 'd-snone'}`}></div>;
  };
  
  export default Loader;
  