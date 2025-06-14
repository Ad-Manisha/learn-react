import { useState, useEffect } from "react";

function useCurrencyInfo(baseCurrency) {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!baseCurrency) return;

    setLoading(true);
    setError(null);

    fetch(`https://api.frankfurter.app/latest?from=${baseCurrency}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch rates");
        return res.json();
      })
      .then((data) => {
        setRates(data.rates || {});
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [baseCurrency]);

  return { rates, loading, error };
}

export default useCurrencyInfo;
