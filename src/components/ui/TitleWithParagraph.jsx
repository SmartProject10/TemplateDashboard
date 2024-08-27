export const TitleWithParagraph = ({ title, paragraph }) => {
  return (
    <>
      <h2 className="text-blue-900 text-3xl font-medium">{title}</h2>

      {paragraph && (
        <div className="w-3/4">
          <p className="text-gray-500">
            Para comenzar, por favor seleccione su pais de origen y las normas
            ISO que desea adquirir.Esto nos permitira ofrecerle informacion y
            servicios personalizados, adaptados a sus necesidades especificas y
            al entorno regulatorio de su regios.
          </p>
        </div>
      )}
    </>
  );
};
