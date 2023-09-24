import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./App.css";
import WatchDetails from "./components/WatchDetails";

function App() {
  const loadedWatches = useLoaderData();
  const [watches, setWatches] = useState(loadedWatches);

  return (
    <div className="bg-[#F4F3F0] rounded-lg p-4 md:p-4">
      <h2 className="text-2xl font-bold text-center inline mb-8">
        Choose your favourite Wrist Watches
      </h2>
      <div className="grid gap-4">
        {watches.map((watch) => (
          <WatchDetails
            key={watch._id}
            watch={watch}
            watches={watches}
            setWatches={setWatches}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
