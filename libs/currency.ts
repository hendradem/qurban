const convertCurrency = (currencyValue: any) => {
    return new Intl.NumberFormat("en-US").format(currencyValue);
};

export default convertCurrency