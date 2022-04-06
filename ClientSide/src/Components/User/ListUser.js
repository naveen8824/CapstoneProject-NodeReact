import { useEffect } from "react";
import UserService from "../services/UserService";
import{Link, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector , } from "react-redux";

const ListUser = ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getUserData = ()=>{
        UserService.getUser()
            .then((res)=>{
                dispatch({type:"users" , value:res.data});
            });
    }
    useEffect( ()=>{
       getUserData();
    },[]);
    const {users } = useSelector((state)=>state);

    const deleteUserHandler = (id)=>{
       
       
        UserService.deleteUser(id)
            .then((res)=>{
                getUserData();
            });
     
    }

    
    
    
    return (
        <div className="container">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>FullName</th>
                        <th>Email</th>
                        <th>Phone No.</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user)=>(
                        <tr key = {user._id}>
                            <td>{user.fullname}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>
                                <Link to ={`/edit/${user._id}`} className="btn btn-warning m-1">Edit</Link>
                                <button type="button" className="btn btn-danger m-1" onClick={()=>deleteUserHandler(user._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    )
}
export default ListUser;