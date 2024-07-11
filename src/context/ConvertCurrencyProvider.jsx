import { createContext, useState } from "react";

export const CurrencyContext = createContext();

export const ConvertCurrencyProvider = ({ children }) => {
    const [amount, setAmount] = useState(1);
    const [baseCurrency, setBaseCurrency] = useState("EUR");
    const [targetCurrencies, setTargetCurrencies] = useState("PKR,USD,GBP,CZK");
    const [rates, setRates] = useState({});

    return (
        <CurrencyContext.Provider
            value={{
                amount,
                setAmount,
                baseCurrency,
                setBaseCurrency,
                targetCurrencies,
                setTargetCurrencies,
                rates,
                setRates,
            }}
        >
            {children}
        </CurrencyContext.Provider>
    );
};
