import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
{/*==================================================>> Component Call */}
		<LoadCountries></LoadCountries>
    </div>
  );
}


//===================================================>>1.Create Component 
function LoadCountries(){
//===================================================>>2.Data Store	
	const [countries,setCountries] = useState([])
//2.End
//===================================================>>3.Data Load	
	useEffect(()=>{
		fetch('https://restcountries.com/v3.1/all')
		.then(res=>res.json())
		.then(data=>setCountries(data.slice(240)))
	},[])
	return(
//3.End
//===================================================>>4.ReturnValue Show in UI		
		<div>
			<h1>Loaded Countries:{countries.length}</h1>
			{
				countries.map(country=><p>{country.name.common}</p>)
			}
		</div>
//4.End		
	)
}
export default App;
//1.End
