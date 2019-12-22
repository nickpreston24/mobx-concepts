const RadioPicker = ({ selector, options = [] }) => {
  return (
    <form>
      {options.map((option, index) => {
        return (
          <div className="form-check" key={index} >
            <input
              type="radio"
              name="radio-picker-button"
              onChange={() => selector(option)}
              className="form-check-input"
            />
            <label>{option}</label>
          </div>
        )
      })}
    </form>)
}

export default RadioPicker