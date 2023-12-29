const minDate = (dates) => {
  if (Array.isArray(dates) && dates.length > 0) {
    // Sort the array of dates in ascending order
    dates.sort((a, b) => a - b);
    return dates[0]; // The first element is the earliest date
  }
  return null; // Return null if the array is empty or not an array
};

module.exports = minDate;
