export const formatDate = (dateString: string | undefined) => {
  if (!dateString) return "";

  const date = new Date(dateString);

  const formattedDate = date
    .toLocaleDateString("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .split("/")
    .reverse()
    .join("/");

  return formattedDate;
};
