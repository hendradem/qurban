export const useCurrency = (currencyValue: any) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR"
  }).format(currencyValue);
};