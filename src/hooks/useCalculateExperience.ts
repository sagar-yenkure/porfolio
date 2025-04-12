const useCalculateExperience = (startMonth: number, startYear: number) => {
  const startDate = new Date(startYear, startMonth - 1);
  const currentDate = new Date();

  const totalMonths =
    (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
    (currentDate.getMonth() - startDate.getMonth());

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return { years, months };
};

export default useCalculateExperience;
