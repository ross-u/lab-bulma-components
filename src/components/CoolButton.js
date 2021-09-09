const CoolButton = ({ isSuccess, children }) => {
  return (
    <button
      style={{ margin: "20px 20px 20px 0px" }}
      className={isSuccess ? "button is-success" : "button"}
    >
      {children}
    </button>
  );
};

export default CoolButton;
