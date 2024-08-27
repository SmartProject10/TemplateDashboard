import { RiErrorWarningFill } from "react-icons/ri";

export const SimpleInput = ({
  label,
  type,
  placeholder,
  value,
  name,
  required = false,
  info = false,
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
          {info && <RiErrorWarningFill className="text-gray-600" size={15} />}
        </label>

        <input
          type={type}
          name={name}
          value={value}
          required={required}
          onChange={({ target }) => onHandleChange(target.value)}
          placeholder={placeholder}
          className="rounded-md border border-gray-200 p-2"
        />
      </div>
    </>
  );
};
