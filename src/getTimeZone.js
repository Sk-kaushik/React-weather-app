// Geocode.setApiKey("AIzaSyDh9UML-2L6sGoPymeD0WNEZTXGXtjGffA");

export const getTime = (cl) => {
  const hr = new Date().getHours();
  if (hr > 12) {
    return "night";
  } else {
    return "day";
  }
};
