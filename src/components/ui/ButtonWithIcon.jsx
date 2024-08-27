export const ButtonWithIcon = ({
  icon: Icon,
  text,
  btnStyles,
  onHandleClick,
}) => {
  return (
    <>
      <button
        className={`flex items-center transition-all ${btnStyles} px-2 py-2`}
        onClick={onHandleClick}
      >
        {Icon && <Icon className="mr-1" size={18} />}
        {text && <span>{text}</span>}
      </button>
    </>
  );
};
