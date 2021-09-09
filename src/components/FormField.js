const FormField = ({ label, type, placeholder }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <div className="field">
        <label className="label">{label}</label>
        <div className="control">
          <input className="input" type={type} placeholder={placeholder} />
        </div>
      </div>
    </div>
  );
};

export default FormField;
