import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import { Routes , Route} from "react-router-dom";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import AddUser from "./Components/User/AddUser";
import EditUser from "./Components/User/EditUser";
import ListUser from "./Components/User/ListUser";


function App() {
  const{isLogged} = useSelector((state)=>state);
  const localdata = localStorage.getItem("token")
  return (

    <div className = "container">
      <h2>This is CRUD app</h2>
      {localdata ? <Header/> : ""}
      <Routes>
        <Route path = "/" element = {<Login/>}></Route>
        <Route path = '/list' element= {<ListUser/>}></Route>
        <Route path = '/create' element= {<AddUser/>}></Route>
        <Route path = '/edit/:id' element= {<EditUser/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
