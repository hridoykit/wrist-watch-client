import { useLoaderData } from 'react-router-dom';
import './App.css';
import WatchDetails from './components/WatchDetails';

function App() {
  const watches = useLoaderData();
  console.log(watches)

  return (
    <div className="bg-[#F4F3F0] p-4 md:p-24 rounded-lg">
      <h2 className="text-2xl font-bold text-center">home page</h2>
      <h3>total watch: {watches.length}</h3>
      <div className='grid grid-rows-2 gap-4'>
        {
          watches.slice(0,3).map(watch =><WatchDetails key={watch._id} watch={watch} />)
        }
      </div>
    </div>
  )
}

export default App
