const Input = ({ type, placeholder, value, onChange, className }) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`border-b outline-none border-black py-2 inputDefaultTurnOff poppins-light ${className} placeholder-black `}
      />
    </div>
  );
};

export default Input;
