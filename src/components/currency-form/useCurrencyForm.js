import { useState } from "react";
import CurrencyAPI from "@everapi/currencyapi-js";
import { useConvertCurrency } from "../../context";

const currencyApi = new CurrencyAPI(import.meta.env.VITE_CURRENCY_API_KEY);

export const useCurrencyForm = () => {
    const { amount, setAmount, baseCurrency, targetCurrencies, setRates } = useConvertCurrency();
    const [isLoading, setisLoading] = useState(false);

    const handleSubmit = async (e) => {
        setisLoading(true);
        e.preventDefault();
        const data = {
            base_currency: baseCurrency.trim(),
            currencies: targetCurrencies.replaceAll(" ", ""),
        };
        const response = await currencyApi.latest(data);

        if (Object.entries(response.data).length > 0) {
            setRates(response.data);
            setisLoading(false);
        } else {
            alert(response.message);
            setisLoading(false);
            return;
        }
    };

    return { handleSubmit, amount, setAmount, isLoading };
};
