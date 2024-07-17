const currentDate = () => {
  const currentDate = new Date();

  const month = currentDate.toLocaleString("default", { month: "2-digit" });
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();

  const formattedDate = `${month}/ ${day}/${year}`;
  return formattedDate;
};

export default currentDate;
