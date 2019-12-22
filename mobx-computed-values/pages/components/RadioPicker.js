
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

