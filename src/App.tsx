import './App.css'
import { Counter } from './components/render-props/Counter';

function App() {
  return (
   <>
    <h1 className='mb-4'>Counter: Render props</h1>
    <Counter>
      {(sum, sumNum) => (
       <div>
         <p>Num: {sum}</p>
         <button className='text-black p-2 mt-4 bg-blue-100 hover:bg-blue-300' onClick={sumNum}>+ 2</button>
       </div>
      )}
    </Counter>
   </>
  );
}

export default App;
