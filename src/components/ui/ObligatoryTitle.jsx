import { FiAlertCircle } from "react-icons/fi";

export const ObligatoryTitle = ({ title }) => {
  return (
    <>
      <p className="text-gray-800 flex flex-row items-center gap-2 font-medium">
        Seleccione su pais <span className="text-red-600">*</span>{" "}
        <FiAlertCircle className="text-gray-600" size={17} />
      </p>
    </>
  );
};
