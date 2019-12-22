import { observable, computed } from 'mobx'
import observer from 'mobx-react'

const temperature = new class Temperature {
  @observable unit = 'C'
  @observable temperatureInCelsius = 25

  @computed get temperatureInKelvin() {
    return this.temperatureInCelsius * (9 / 5) + 32
  }

  @computed get temperatureInFahrenheit() {
    return this.temperatureInCelsius + 273.15
  }

  @computed get currentTemperature() {
    switch (this.unit) {
      case "K": return this.temperatureInKelvin + " *K"
      case "F": return this.temperatureInFahrenheit + " *F"
      case "C": return this.temperatureInCelsius + " *C"
    }
    console.log('switched to ', this.unit);
  }
}
console.log('current:', temperature.currentTemperature)

/** A radio button with label for React */
const RadioButton = (props) => {
  const { text, value = "", onChange, checked = false } = props
  return (

    <div className="form-check">
      <input
        type="radio"
        name="radio-picker-button"
        value={value}
        checked={checked}
        className="form-check-input"
      />
      <label>{text}</label>
    </div>
  )
}

const RadioPicker = ({ units }) => {
  return (
    <form>
      {units.map((unit, index) => {
        return (
          <div className="form-check" key={index} >
            <input
              type="radio"
              name="radio-picker-button"
              onChange={() => {
                temperature.unit = unit.split(' ')[0];
                console.log(unit)
                console.log(temperature.currentTemperature)
                console.log(temperature.temperatureInFahrenheit)
                console.log(temperature.temperatureInKelvin)
                console.log(temperature.temperatureInCelsius)
              }}
              onClick={() => { temperature.unit = "C"; console.log('clicked') }}
              className="form-check-input"
            />
            <label>{unit}</label>
          </div>
        )
      })}
    </form>)
}

const Thermometer = (props) => {

  // let { currentTemperature } = props.temperature
  const units = ["Kelvin", "Fahrenheit", "Celcius"]

  return (
    <div>
      <h1>Current Temperature is {props.temperature.temperatureInFahrenheit} </h1>
      <RadioPicker units={units} />
    </div>
  )
}

const Home = () => {
  return (
    <div>
      <Thermometer temperature={temperature}></Thermometer>
    </div>)
}

export default Home