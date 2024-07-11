import { InputText } from "primereact/inputtext";
import { BaseCurrenySelect } from "../base-currency-select";
import { CurrencyMultiSelect } from "../currency-multi-select";
import { useCurrencyForm } from "./useCurrencyForm";
import { Button } from "primereact/button";

export const CurrencyForm = () => {
    const { handleSubmit, amount, setAmount, isLoading } = useCurrencyForm();

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-[#d2daff] mx-auto w-full max-w-lg mt-4 shadow rounded-md p-5 space-y-3 text-sm"
        >
            <div className="flex flex-col gap-3">
                <InputText
                    keyfilter="money"
                    placeholder="Amount"
                    size={50}
                    required
                    min={0}
                    style={{ padding: "0.75rem 1rem", width: "100%" }}
                    onChange={(e) => setAmount(e.target.value)}
                    value={amount}
                />
                <BaseCurrenySelect />
            </div>
            <CurrencyMultiSelect />
            <Button
                type="submit"
                label="Get latest rates"
                loading={isLoading}
                className="px-4 py-2 w-full text-white bg-indigo-500"
            />
        </form>
    );
};
