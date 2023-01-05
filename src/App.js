import logo from './logo.svg';
import './App.css';
import Home from "./Home"
import Create from "./Create"
import NavBar from "./NavBar"
import Update from "./Update"
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
	<NavBar/>
	<Routes>
		<Route path="/" element={<Home/>}/>
		<Route path="/create" element={<Create/>}/>
		<Route path="/update" element={<Update/>}/>
		<Route path="*" element={<Navigate to="/"/>}/>	
	</Routes>
 	</BrowserRouter>
    </div>
  );
}

export default App;
