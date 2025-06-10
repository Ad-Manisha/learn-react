import { useState, useCallback, useEffect, useRef } from "react";

function PasswordGen() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()+=-~{}";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4 flex justify-center">
      <div className="w-full max-w-lg bg-slate-800 border border-slate-700 shadow-xl rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-white text-center mb-6">
          🔐 Password Generator
        </h1>

        <div className="flex shadow-sm rounded-lg overflow-hidden mb-6 border border-slate-700">
          <input
            type="text"
            value={password}
            className="flex-1 px-4 py-2 bg-slate-700 text-white outline-none text-lg"
            placeholder="Generated password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-600 hover:bg-blue-500 transition px-4 text-white font-semibold"
          >
            Copy
          </button>
        </div>

        <div className="space-y-4 text-sm">
          <div className="flex items-center justify-between">
            <label className="text-white font-medium">Length: {length}</label>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-2/3 cursor-pointer accent-blue-600"
            />
          </div>

          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              id="numberInput"
              className="accent-blue-600 w-4 h-4"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput" className="text-slate-300">
              Include Numbers
            </label>
          </div>

          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              id="characterInput"
              className="accent-blue-600 w-4 h-4"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="characterInput" className="text-slate-300">
              Include Special Characters
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordGen;
