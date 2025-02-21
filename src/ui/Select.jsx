function Select({ value, onChange, options, className, ...rest }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className={`textField__input py-2.5 text-xs bg-secondary-0 ${className}`}
      {...rest}
    >
      {options.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
