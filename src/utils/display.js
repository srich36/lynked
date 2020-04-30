import { timeFormatter } from "src/main";

const timeFormat = timeISO => {
  const millesecondsSincePosting = Date.now() - Date.parse(timeISO);
  if (millesecondsSincePosting < 45000) return "Just now";
  return timeFormatter.format(Date.now() - millesecondsSincePosting);
};

export { timeFormat };
