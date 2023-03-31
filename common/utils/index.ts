export const pad = (num: number, size: number) => {
  let s = num.toString();

  while (s.length < size) s = `0${s}`;
  return s;
};

export const getCurrentTime = () => {
  const date = new Date();

  const locale = "en-US";
  const options: Intl.DateTimeFormatOptions = {
    timeStyle: "medium",
    timeZone: "Asia/Calcutta",
  };
  const time = new Intl.DateTimeFormat(locale, options).format(date);

  return time;
};
