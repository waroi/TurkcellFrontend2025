const CountrySelect = ({ formik }: any) => {
  const countries = [
    "South Korea (+82)",
    "United States (+1)",
    "Turkey (+90)",
    "Germany (+49)",
    "Japan (+81)",
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <label htmlFor="country">Country</label>
      <select
        id="country"
        name="country"
        value={formik.values.country}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="form-select"
      >
        {countries.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountrySelect;
