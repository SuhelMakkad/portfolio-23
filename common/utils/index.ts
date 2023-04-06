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

export function debounce<Params extends any[]>(
  func: (...args: Params) => any,
  timeout: number
): (...args: Params) => void {
  let timer: NodeJS.Timeout;

  return (...args: Params) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}

export function throttle<Params extends any[]>(
  func: (...args: Params) => any,
  timeout: number
): (...args: Params) => void {
  let ready: boolean = true;

  return (...args) => {
    if (!ready) {
      return;
    }

    ready = false;
    func(...args);
    setTimeout(() => {
      ready = true;
    }, timeout);
  };
}

export const isMouseAvailable = () =>
  !window.matchMedia("(any-pointer: coarse)").matches &&
  window.matchMedia("(pointer:fine)").matches;
