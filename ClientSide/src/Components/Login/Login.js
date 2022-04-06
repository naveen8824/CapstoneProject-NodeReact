import { useDispatch , useSelector} from "react-redux"
import { Navigate } from "react-router-dom";
import UserService from "../services/UserService";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Login = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {email , password , isLogged} = useSelector((state)=>state);
    useEffect(()=>{
        const localdata = localStorage.getItem("token");
        if(localdata){
            navigate("/list");
        }
    },[]);
    const emailChangeHandler = (event)=>{
        dispatch({type:'email' , value:event.target.value});
    }
    const passwordchangeHandler = (event)=>{
        dispatch({type:'password' , value:event.target.value});
    }
    const loginHandler = (event)=>{
        event.preventDefault();
        UserService.loginUser({"email" : email , "password":password})
            .then((res)=>{
               
                if(res.data != "" ){
                    dispatch({type:'logged' , value:true});
                    localStorage.setItem("token" , res.data.token);
                    navigate("/list");
                }
                else{
                    dispatch({type:'logged' , value:false});
                }
            })
    }
    return (
        <div className="container mt-3">
            {
                (isLogged === false) ? (
                    <div className="alert alert-danger">
                        <strong>Error:</strong>
                        Login Credentials Failed.
                     </div>   
                ):
            
            (<form onSubmit={loginHandler}>
                <div className="mb-3 mt-3">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id = "email" 
                        className="form-control"
                        placeholder="Enter Email"
                        onChange={emailChangeHandler}
                    />
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        id = "password" 
                        className="form-control"
                        placeholder="Enter Password"
                        onChange={passwordchangeHandler}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Login
                </button>
            </form>)
        }
        </div>
    )
}
export default Login;