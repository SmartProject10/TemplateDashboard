export const CustomCheckbox = ({ id, label, checked, onChange }) => {
  return (
    <label htmlFor={id} className="flex items-center cursor-pointer gap-2">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      <div
        className={`w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center ${
          checked ? "bg-blue-800" : "bg-white"
        }`}
      >
        {checked && <div className="w-3 h-3 bg-white rounded-full"></div>}
      </div>
      <span>{label}</span>
    </label>
  );
};
