export function arrayToCommaSeparatedString(array) {
    return array.map((item) => item.code).join(",");
}

export function commaSeparatedStringToArray(string) {
    if (!string) return [];
    return string
        .trim()
        .split(",")
        .map((code) => ({ code: code }));
}

export function formatCurrency(number, currency = "USD") {
    return number.toLocaleString("en-US", { style: "currency", currency });
}

export function removeBaseCurrency1(baseCurrency, targetCurrencies) {
    const formattedTargetCurrencies = arrayToCommaSeparatedString(targetCurrencies);
    let currencies = formattedTargetCurrencies.split(",");

    currencies = currencies.filter((currency) => currency.trim() !== baseCurrency.trim());

    return currencies.join(",");
}
