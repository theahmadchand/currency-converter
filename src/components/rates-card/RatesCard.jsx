import { useConvertCurrency } from "../../context";
import { formatCurrency } from "../../utils";

export const RatesCard = () => {
    const { amount, rates } = useConvertCurrency();

    return (
        <div className="bg-[#eef1ff] mx-auto my-5 w-full max-w-lg shadow rounded-md px-5 py-3 text-sm empty:hidden divide-y divide-dotted divide-slate-400">
            {Object.keys(rates).map((currency) => {
                const convertedAmount = rates[currency].value * +amount;
                return (
                    <div key={currency} className="text-xl flex items-center justify-between py-2">
                        <strong>{currency}:</strong>
                        <span>{formatCurrency(convertedAmount, currency)}</span>
                    </div>
                );
            })}
        </div>
    );
};
