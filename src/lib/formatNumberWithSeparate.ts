export const formatNumberWithSeparate = (num: number, separator = " ") => {
  return num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
};
