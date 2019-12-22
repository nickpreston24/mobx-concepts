
const units = ["Kelvin", "Fahrenheit", "Celcius"]

const RadioPicker = ({ selector }) => {
  return (
    <form>
      {units.map((unit, index) => {
        return (
          <div className="form-check" key={index} >
            <input
              type="radio"
              name="radio-picker-button"
              onChange={() => selector(unit)}
              className="form-check-input"
            />
            <label>{unit}</label>
          </div>
        )
      })}
    </form>)
}

export default RadioPicker