export const MainTabs = ({ tabs, activeTab, onHandleActiveTab }) => {
  return (
    <>
      <div className="w-full max-w-md mx-auto">
        <div className="flex border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`flex-1 pt-1 pb-2 px-4 text-center transition-colors duration-300 ${
                activeTab === tab.id
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-500"
              }`}
              onClick={() => onHandleActiveTab(tab.id)}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
