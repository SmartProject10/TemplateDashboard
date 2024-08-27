export const SimpleSelect = ({
  label,
  placeholder,
  value,
  name,
  required = false,
  onHandleChange,
}) => {
  return (
    <>
      <div className="flex flex-col gap-1">
        <label
          className="flex flex-row items-center gap-1.5 text-gray-500 font-medium"
          htmlFor={name}
        >
          {label} {required && <span className="text-red-500">*</span>}{" "}
        </label>

        <select
          name={name}
          value={value}
          onChange={({ target }) => onHandleChange(target.value)}
          required
          className="rounded-md border border-gray-200 p-2"
        >
          <option disabled selected>
            {placeholder}
          </option>
          <option value="licencia">Licencia</option>
          <option value="prueba">Prueba</option>
        </select>
      </div>
    </>
  );
};
