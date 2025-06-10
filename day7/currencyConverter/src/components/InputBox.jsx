import { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "USD",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div
      className={`bg-white bg-opacity-80 backdrop-blur-sm p-4 rounded-xl shadow-md flex flex-col sm:flex-row gap-4 items-center ${className}`}
    >
      <div className="flex-1 min-w-[120px]">
        <label
          htmlFor={amountInputId}
          className="block mb-1 text-gray-700 font-semibold"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount === undefined || amount === null ? "" : amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>

      <div className="flex-1 min-w-[120px]">
        <label className="block mb-1 text-gray-700 font-semibold">
          Currency Type
        </label>
        <select
          className="w-full px-3 py-2 border border-gray-300 rounded-md cursor-pointer bg-white disabled:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
