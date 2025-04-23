export const safeParseFloat = (value) => {
    const parsed = parseFloat(value);
    return isNaN(parsed) ? 0 : parsed; //* Dökümantasyon.txt Satır 3
  };