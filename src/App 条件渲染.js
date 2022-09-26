const flag = true

function App () {
  return (
    <div className="App">
      <ul>
       
        {flag ?  <span>this is a span</span> : null}
       { true && <span>this is a span</span>}

      </ul>

    </div>
  )

}

export default App
