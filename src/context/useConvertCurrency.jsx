import { useContext } from "react";
import { CurrencyContext } from "./ConvertCurrencyProvider";

export const useConvertCurrency = () => {
    const context = useContext(CurrencyContext);

    if (context === undefined) throw new Error("useConvertCurrency must be used within ConvertCurrencyProvider");

    return context;
};
