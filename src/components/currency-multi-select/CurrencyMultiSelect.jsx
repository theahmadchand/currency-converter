import { MultiSelect } from "primereact/multiselect";
import { useConvertCurrency } from "../../context";
import { arrayToCommaSeparatedString, commaSeparatedStringToArray } from "../../utils";
import { currencies } from "../../data";

export const CurrencyMultiSelect = () => {
    const { targetCurrencies, setTargetCurrencies } = useConvertCurrency();
    return (
        <div>
            <MultiSelect
                placeholder="Target currencies"
                className="w-full md:max-w-40rem"
                optionLabel="code"
                value={commaSeparatedStringToArray(targetCurrencies)}
                onChange={(e) => setTargetCurrencies(arrayToCommaSeparatedString(e.value))}
                options={currencies}
                maxSelectedLabels={6}
                filter
                filterPlaceholder="Search"
            />
        </div>
    );
};
