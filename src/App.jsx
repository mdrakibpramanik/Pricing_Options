
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './Components/DaisyNav/daisyNav'
import NavBar from './Components/Navbar/navbar'
import PricingOptions from './Components/PricingOptions/PricingOptions'
import ResultsChart from './Components/ResultsChart/ResultsChart'





const PricingPromise = fetch('PricingData.json').then(res => res.json());

function App() {
  

  return (
    <>
      <div className='bg-amber-100  rounded-xl'>
        <header>
          <NavBar></NavBar>
          {/* <DaisyNav></DaisyNav> */}
        </header>
        <main>
          <Suspense fallback={<span className="loading loading-spinner loading-md"></span>}>
            <PricingOptions pricingPromise={PricingPromise}></PricingOptions>
          </Suspense>


          <ResultsChart></ResultsChart>

        </main>
      </div>
      
    </>
  )
}

export default App




