import { timeFormatter } from "src/main";

const timeFormat = timeISO => {
  const millesecondsSincePosting = Date.now() - Date.parse(timeISO);
  return timeFormatter.format(Date.now() - millesecondsSincePosting, "twitter");
};

export { timeFormat };
