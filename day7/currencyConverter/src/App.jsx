import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import NavBar from "./components/NavBar";

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const { rates, loading, error } = useCurrencyInfo(from.toLowerCase());

  const options = Object.keys(rates).sort();

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    if (!rates[to]) {
      setConvertedAmount(0);
      return;
    }
    setConvertedAmount(amount * rates[to]);
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/172277/pexels-photo-172277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
    >
      <NavBar />
      <div className="flex-grow bg-black bg-opacity-60 flex items-center justify-center px-6 py-12">
        <div className="max-w-lg w-full bg-white bg-opacity-20 backdrop-blur-md rounded-3xl p-10 shadow-xl border border-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            {loading && (
              <p className="mb-4 text-center text-white font-semibold">
                Loading currencies...
              </p>
            )}
            {error && (
              <p className="mb-4 text-center text-red-400 font-semibold">
                {error}
              </p>
            )}

            <InputBox
              label="From"
              amount={amount}
              currencyOptions={[from, ...options]}
              onCurrencyChange={setFrom}
              selectCurrency={from}
              onAmountChange={setAmount}
              className="mb-8"
            />

            <div className="flex justify-center mb-8">
              <button
                type="button"
                onClick={swap}
                aria-label="Swap currencies"
                className="p-3 rounded-full bg-white bg-opacity-70 hover:bg-opacity-90 shadow-md transition transform hover:scale-110"
                title="Swap From and To"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7l4-4m0 0l4 4m-4-4v18"
                  />
                </svg>
              </button>
            </div>

            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={[to, ...options]}
              onCurrencyChange={setTo}
              selectCurrency={to}
              amountDisable
              className="mb-10"
            />

            <button
              type="submit"
              disabled={loading || error}
              className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:bg-gray-400 transition"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
