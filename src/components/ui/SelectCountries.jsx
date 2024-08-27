import Select from "react-select";
import countryList from "react-select-country-list";
import Flag from "react-world-flags";

export const CountrySelector = ({ countryValue, onHandleChangeCountry }) => {
  const options = countryList()
    .getData()
    .map((country) => ({
      ...country,
      label: (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Flag
            code={country.value}
            style={{ width: 20, height: 15, marginRight: 10 }}
          />
          {country.label}
        </div>
      ),
    }));

  const changeHandler = (value) => {
    onHandleChangeCountry(value);
  };

  return (
    <Select options={options} value={countryValue} onChange={changeHandler} />
  );
};
