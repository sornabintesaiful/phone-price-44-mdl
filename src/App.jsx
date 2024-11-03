
import './App.css'
// import DaisyNav from './components/daisyNav/DaisyNav'
import LineChart from './components/lineChart/LineChart'
import NavBar from './components/navBar/NavBar'
import Phones from './components/phone/Phones'
import PriceOptions from './components/priceOptions/PriceOptions'

function App() {


  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  )
}

export default App
