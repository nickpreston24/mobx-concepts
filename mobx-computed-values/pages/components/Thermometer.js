import { observer } from 'mobx-react'
import RadioPicker from './RadioPicker'

const Thermometer = observer(({ temperature }) => {

  const options = ["Kelvin", "Fahrenheit", "Celcius"]

  function changeUnits(nextUnit) {
    temperature.unit = nextUnit ? nextUnit[0] : "C"
  }
  return (
    <div>
      <h1>Current Temperature is {temperature.currentTemperature} </h1>
      <RadioPicker selector={changeUnits} options={options} />
    </div>
  )
})


export default Thermometer