const dayjs = require("dayjs");

const getDatesByDay = (startDate, endDate, targetDay) => {
  const dayNames = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const dayIndex = dayNames.indexOf(targetDay.toLowerCase());

  if (dayIndex === -1) {
    throw new Error("Invalid day name. Use 'sunday', 'monday', etc.");
  }

  const result = [];
  let currentDate = dayjs(startDate);
  const end = dayjs(endDate);

  while (currentDate.isBefore(end) || currentDate.isSame(end)) {
    if (currentDate.day() === dayIndex) {
      result.push(currentDate.format("YYYY-MM-DD"));
    }
    currentDate = currentDate.add(1, "day");
  }

  return result;
};

module.exports = { getDatesByDay };
