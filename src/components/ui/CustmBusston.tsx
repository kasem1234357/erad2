
export const StarButton = ({children}: any) => {
  // Fixed style object to replace the string-based style attributes
  return (
    <button className="custom-button ">
      {children}
    </button>
  );
};
