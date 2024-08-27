import { Link, useLocation } from "react-router-dom";

export const SimpleLinkActive = ({
  label,
  path,
  validate,
  onHandleClickValidate,
}) => {
  const { pathname } = useLocation();

  if (validate)
    return (
      <Link
        className={` ${
          pathname === path ? "text-gray-700 font-medium" : "text-gray-500"
        } transition hover:text-gray-500/75`}
        onClick={onHandleClickValidate}
      >
        {label}
      </Link>
    );

  return (
    <>
      <Link
        className={` ${
          pathname === path ? "text-gray-700 font-medium" : "text-gray-500"
        } transition hover:text-gray-500/75`}
        to={path}
      >
        {label}
      </Link>
    </>
  );
};
