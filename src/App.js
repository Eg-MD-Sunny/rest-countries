import './App.css';
import Countries from './Components/Countries/Countries';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Person from './Components/Person/Person';


function App() {
  return (
    <div className="App">
		<Header></Header>
		<Countries></Countries>
		<Person></Person>
		<Footer></Footer>
    </div>
  );
}
export default App;

