import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Allticket from "./Components/Allticket";
 import Eira from "./Components/Eira";
import SideBar from "./Components/Sidebar"
import Viewticket from "./Components/Viewticket";


function App() {
  return (
    
       <Router>
        <Routes>
          <Route exact path ='/' element ={<SideBar />}/>
          {/* <Route exact path ='/allticket' element ={<Allticket />}/> */}
          <Route exact path ='/' element ={<Viewticket />}/>
         
        </Routes>
      </Router>
    
    
  );
}

export default App;
