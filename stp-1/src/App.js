
import './App.css';

function App() {
  const name = "Luiz Kramer"
  return (
    <div className="App">
      <Component nome="Luiz Kramer" email="luizeckramer@gmail.com" idade= {22}/>
      <Component2></Component2>
    </div>
  );
}

const Component = (props) => {
  return (
    <div>
      <h1>{props.nome}</h1>
      <h3>{props.email} <br></br>
      idade: {props.idade}</h3>
      
    </div>
  );
}

const Component2 = () =>{
  return (
    <div>
      <p>This is a paragraph</p>
    </div>
  )
}

export default App;
