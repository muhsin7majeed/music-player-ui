export const secondsToMinutes = (num) => {
  const hours = num / 60;
  const roundedMinutes = Math.floor(hours);
  const seconds = (hours - roundedMinutes) * 60;
  const roundedSeconds = Math.round(seconds);

  return `${roundedMinutes}:${roundedSeconds}`;
};
