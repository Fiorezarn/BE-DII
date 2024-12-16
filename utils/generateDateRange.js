const getDatesByDay = (startDate, endDate, targetDay) => {
  const dayIndex = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ].indexOf(targetDay);
  const start = new Date(startDate);
  const end = new Date(endDate);
  const result = [];

  let current = new Date(start);
  while (current <= end) {
    if (current.getDay() === dayIndex) {
      result.push(
        `${current.getFullYear()}-${String(current.getMonth() + 1).padStart(
          2,
          "0"
        )}-${String(current.getDate()).padStart(2, "0")}`
      );
    }
    current.setDate(current.getDate() + 1);
  }
  return result;
};

module.exports = { getDatesByDay };
