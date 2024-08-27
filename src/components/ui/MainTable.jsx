export const MainTable = ({ theadData, children }) => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="w-full bg-gray-100 text-left text-gray-600 uppercase text-sm leading-normal">
              {theadData.map((header, index) => (
                <th key={index} className="py-3 px-6">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">{children}</tbody>
        </table>
      </div>
    </>
  );
};
