
import './App.css';
function App() {
  const planets = [
    {name: "Mars", isGasPlanet: false},
    {name: "Earth", isGasPlanet: false},
    {name: "Jupiter", isGasPlanet: true},
    {name: "Venus", isGasPlanet: false},
    {name: "Neptune", isGasPlanet: true},
    {name: "Uranus", isGasPlanet: true},
  ]
  return (
    <div className="App">
      {
        planets.map((planet, key) => {
          return <ObjectComponent key={key} name={planet.name} isGasPlanet={planet.isGasPlanet} />;
        })
      }
    </div>
  );
}

const ObjectComponent = (props) => {

  if(!props.isGasPlanet){
    return (
      <div>
        {props.name} 
      </div>
    )
  }
}


// const Component = (props) => {
//   return (
//     <div>
//       <h1>{props.nome}</h1>
//       <h3>{props.email} <br></br>
//       idade: {props.idade}</h3>
      
//     </div>
//   );
// }

// const Component2 = () =>{
//   return (
//     <div>
//       <p>This is a paragraph</p>
//     </div>
//   )
// }

export default App;
