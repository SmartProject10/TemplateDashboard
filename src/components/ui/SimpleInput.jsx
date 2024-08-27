export const SimpleInput = ({
  label,
  type,
  placeholder,
  value,
  name,
  onHandleChange,
}) => {
  return (
    <>
      <div className="flex flex-col gap-1">
        <label className="text-gray-500 font-medium" htmlFor={name}>
          {label}
        </label>

        <input
          type={type}
          name={name}
          value={value}
          onChange={({ target }) => onHandleChange(target.value)}
          placeholder={placeholder}
          className="rounded-md border border-gray-200 p-2"
        />
      </div>
    </>
  );
};
