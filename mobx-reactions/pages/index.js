import state from './stores/counter'
import Counter from './components/counter'

const styles = {
  header: {
    color: '#Af5af5'
  },
  container: {
    "text-height": '200%',
    background: '#436',
    'height': '300em'
  },
}

const Home = () => {
  const { header, container } = styles

  return (
    <div style={container}>
      <h1 style={header}>Hello, World!</h1>
      <Counter state={state} />
    </div>
  )
}

export default Home


