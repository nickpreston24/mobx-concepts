// import { PropTypes } from "react"
// /**
//  * From: https://blog.risingstack.com/handling-react-forms-with-mobx-observables/
//  */
// const Field = (props) => {
//     onChange = (event) => {
//         const { name, value } = event.target;
//         props.onChange(name, value);
//     };
//     const input = props;
//     return (<div className="form-group">
//         <label htmlFor={input.id}>{input.label || input.name}</label>
//         <input className="form-control" id={input.id} name={input.name} onChange={this.onChange} type={input.type} value={input.value} />
//     </div>);
// }
// Field.propTypes = {
//     onChange: PropTypes.func.isRequired
// }
// Field.defaultProps = {
//     type: 'text'
// }

// export default Field