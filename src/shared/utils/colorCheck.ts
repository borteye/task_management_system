export const colorCheck = (priorityLevel: string) => {
  if (priorityLevel === "Critical") {
    return {
      color: "text-wine",
      background: "bg-light_wine",
    };
  } else if (priorityLevel === "High") {
    return {
      color: "text-amber",
      background: "bg-light_amber",
    };
  } else if (priorityLevel === "Medium") {
    return {
      color: "text-green",
      background: "bg-light_green",
    };
  } else if (priorityLevel === "Low") {
    return {
      color: "text-blue",
      background: "bg-light_blue",
    };
  }
};
