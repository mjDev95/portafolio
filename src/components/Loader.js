  const Loader = ({ isLoading }) => {
    return <div className={`loader ${isLoading ? '' : 'd-none'}`}></div>;
  };
  
  export default Loader;
  