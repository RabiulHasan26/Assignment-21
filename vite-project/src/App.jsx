import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 text-center shadow-lg">
        <h1 className="mb-6 text-2xl font-bold text-slate-800">
          Simple Counter App
        </h1>

        <p className="mb-8 text-4xl font-bold text-blue-600">Count: {count}</p>

        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => setCount(count - 1)}
            className="rounded-lg bg-red-500 px-5 py-3 font-bold text-white hover:bg-red-600"
          >
            Decreement
          </button>

          <button
            onClick={() => setCount(0)}
            className="rounded-lg bg-slate-500 px-4 py-3 font-semibold text-white hover:bg-slate-600"
          >
            Reset
          </button>

          <button
            onClick={() => setCount(count + 1)}
            className="rounded-lg bg-green-500 px-5 py-3 font-bold text-white hover:bg-green-600"
          >
            Increement
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
