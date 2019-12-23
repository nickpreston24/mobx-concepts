import { Component, useState } from 'react'

//first, make new Context
const MyContext = React.createContext(0);

//create a Provider component
class MyProvider extends Component {
  // const[person, setPerson] = useState(
  state =
    {
      name: "Michael",
      age: 30,
      belt: "orange"

    }
  //  );
  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        growUp: () => this.setState({
          age: this.state.age + 1
        })
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

class Person extends Component {
  render() {
    return (
      <div className="person">
        <MyContext.Consumer>
          {(context) => (
            <>
              <h3>Info</h3>
              <p>{context.state.name}</p>
              <p>{context.state.belt}</p>
              <p>{context.state.age}</p>
              <button onClick={context.growUp}>Click</button>
            </>
          )}
        </MyContext.Consumer>
      </div>
    )
  }
}

const Family = () => (
  <div className="family">
    <Person />
  </div>
)

const Home = () => {
  return (
    <MyProvider>
      <div>
        <h1>Hello, World!</h1>
        <p>I'm the app</p>
        <Family />
      </div>
    </MyProvider>
  )
}

export default Home
