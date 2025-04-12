const formatDateWithOrdinal = (dateInput: Date | string): string => {
  const date = new Date(dateInput);

  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };

  const day: number = date.getDate();

  const getOrdinalSuffix = (n: number): string => {
    if (n > 3 && n < 21) return "th";
    switch (n % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const formatted = date.toLocaleDateString("en-US", options);
  return formatted.replace(/\d+/, day + getOrdinalSuffix(day));
};

export default formatDateWithOrdinal;
