
import Thermometer from './components/Thermometer.js'
import { temperature } from './stores/Temperature.js'

const Home = () => {
  return (
    <div>
      <Thermometer temperature={temperature}></Thermometer>
    </div>)
}

export default Home