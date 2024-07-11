import { Dropdown } from "primereact/dropdown";
import { ChevronDownIcon } from "primereact/icons/chevrondown";
import { TimesIcon } from "primereact/icons/times";
import { useBaseCurrenySelect } from "./useBaseCurrenySelect";
import { currencies } from "../../data";

export const BaseCurrenySelect = () => {
    const { valueTemplate, itemTemplate, panelFooterTemplate, onChange, baseCurrency } = useBaseCurrenySelect();

    return (
        <div className="card flex justify-content-center">
            <Dropdown
                value={{ code: baseCurrency }}
                onChange={onChange}
                options={currencies}
                optionLabel="code"
                placeholder="Base currency"
                valueTemplate={valueTemplate}
                itemTemplate={itemTemplate}
                className="w-full"
                panelFooterTemplate={panelFooterTemplate}
                dropdownIcon={(opts) => {
                    return opts.iconProps["data-pr-overlay-visible"] ? (
                        <TimesIcon {...opts.iconProps} />
                    ) : (
                        <ChevronDownIcon {...opts.iconProps} />
                    );
                }}
            />
        </div>
    );
};
