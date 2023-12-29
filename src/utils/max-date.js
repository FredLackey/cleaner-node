const maxDate = (dates) => {
  if (Array.isArray(dates) && dates.length > 0) {
    // Sort the array of dates in descending order
    dates.sort((a, b) => b - a);
    return dates[0]; // The first element is the latest date
  }
  return null; // Return null if the array is empty or not an array
};

module.exports = maxDate;
