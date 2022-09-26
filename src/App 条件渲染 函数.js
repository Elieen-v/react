const getHtag = (type) => {
  if(type === 1){
    return <h1>this is h1</h1>
  }
  if(type === 2){
    return <h1>this is h2</h1>
  }
  if(type === 3){
    return <h1>this is h3</h1>
  }
}

function App () {
  return (
    <div className="App">
      <ul>
        {getHtag(1)}
        {getHtag(3)}


      </ul>

    </div>
  )

}

export default App
