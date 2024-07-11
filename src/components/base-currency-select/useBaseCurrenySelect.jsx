import { useConvertCurrency } from "../../context";

export const useBaseCurrenySelect = () => {
    const { baseCurrency, setBaseCurrency } = useConvertCurrency();

    const valueTemplate = (option, props) => {
        if (option) {
            return (
                <div className="flex align-items-center">
                    <div>{option.code}</div>
                </div>
            );
        }

        return <span>{props.placeholder}</span>;
    };

    const itemTemplate = (option) => (
        <div className="flex align-items-center">
            <div>{option.code}</div>
        </div>
    );

    const panelFooterTemplate = () => (
        <div className="py-2 px-3">
            {baseCurrency ? (
                <span>
                    Selected: <b>{baseCurrency}</b>
                </span>
            ) : (
                "No currency selected."
            )}
        </div>
    );

    const onChange = (e) => setBaseCurrency(e.value.code);

    return { valueTemplate, itemTemplate, panelFooterTemplate, onChange, baseCurrency };
};
