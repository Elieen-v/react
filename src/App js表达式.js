// 1. 识别常规变量
// 2.原生方法调用
const name = 'yyqx'
const getAge = ()=>{
  return 18
}
// 3.三元运算符
const flag = true
function App() {
  return (
    <div className="App">
      app
      {name}
      {getAge}
      {flag ? '真棒' : '菜鸟'}
    </div>
  );
}

export default App;
