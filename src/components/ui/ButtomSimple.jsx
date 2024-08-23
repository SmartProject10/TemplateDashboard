import { SpinnerSimple } from "./SpinnerSimple";

export const ButtomSimple = ({
  type,
  text,
  disabled,
  loading,
  onHandleClick,
}) => {
  return (
    <>
      <button
        type={type}
        className="rounded-md bg-blue-800 text-white p-2 transition hover:bg-teal-700"
        disabled={disabled}
        onClick={onHandleClick}
      >
        {loading ? <SpinnerSimple /> : text}
      </button>
    </>
  );
};
