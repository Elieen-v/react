import './App.css'
const style = {
  color:'red',
  fontSize:30
}
const flag = false
function App () {
  return (
    <div className="App">
      <span style={style}>this is  span</span>
      <span className={flag ? 'active' : null}>jichuyongfa</span>


    </div>
  )

}

export default App
