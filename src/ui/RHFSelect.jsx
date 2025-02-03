function RHFSelect({ label, name, register, errors, options, isRequired }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-secondary-700">
        {label} {isRequired && <span className="text-error">*</span>}
      </label>
      <select {...register(name)} id={name} className="textField__input">
        {options.map((option) => (
          <option
            className="bg-red-300"
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
      {errors && errors[name] && (
        <span className="text-red-600 block text-xs mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default RHFSelect;
