import './App.css'
import Card from './componentes/Card';
import vehicles from './data/vehicles';

function App() {
const vehicleList = vehicles.map(v => {
  return <Card title={v.name} description={v.description}/>
})

  return (
      <div className="App">
        <h1>Demo React</h1>
        <div className='container'>
          {vehicleList} 

  

        
        </div>
      </div>
  );
}

export default App

