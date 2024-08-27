import { Oval } from "react-loader-spinner";

export const GeneralOvalLoading = ({ color = "#1e40af" }) => {
  return (
    <>
      <Oval
        visible={true}
        height="80"
        width="80"
        color={color}
        secondaryColor={color}
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </>
  );
};
