const Error = ({children}) => {
  return (
    <div className="bg-red-100 border-red-500 text-red-700 px-4 py-4 text-center uppercase rounded-md mb-8 font-bold">
      {children}
    </div>
  );
};

export default Error;
