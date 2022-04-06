import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import UserService from "../services/UserService";
const AddUser = ()=>{
    const {add_fullname,
    add_usermail,
    add_userpassword,
    add_userphone,
    add_usergender} = 
        useSelector((state)=>state);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitHandler = (e)=>{
        e.preventDefault();
        
        UserService.postUser({
            fullname:add_fullname,
            email:add_usermail,
            password:add_userpassword,
            phone:add_userphone,
            gender:add_usergender

        }).then((res)=>{
            
            if(res.status == 200){
                navigate("/list");
            }
        })
    }
    return(
        <div className="container m-2">
            <h1>Create New User</h1>
            <form onSubmit = {submitHandler}>
                <div className="form-group">
                    <label htmlFor="fullname">FullName</label>
                    <input
                        type="text"
                        id="fullname"
                        name="fullname"
                        className="form-control"
                        placeholder="Enter Name"
                        value = {add_fullname}
                        onChange = {(e)=>{
                            dispatch({type:"add_fullname" , value:e.target.value});
                        }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                       type="email"
                       id="email"
                       name="email"
                       className="form-control"
                       placeholder="Enter Email"
                       value = {add_usermail}
                       onChange = {(e)=>{
                           dispatch({type:"add_usermail" , value:e.target.value});
                       }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-control"
                        placeholder="Enter Password"
                        value = {add_userpassword}
                        onChange = {(e)=>{
                            dispatch({type:"add_userpassword" , value:e.target.value});
                        }}
                    />
                </div>
                <div className="form-group">
                     <label htmlFor="phone">Phone No.</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        className="form-control"
                        placeholder="Enter Phone No."
                        value={add_userphone}
                        onChange = {(e)=>{
                            dispatch({type:"add_userphone" , value:e.target.value});
                        }}
                    />
                </div>
                <div className="form-group">
                <div className="form-check form-check-inline">
                    <input
                        type = "radio"
                        name = "gender"
                        id="gender"
                        className="form-check-input"
                        value="Male"
                        checked={add_usergender === "Male"}
                        onChange={(e)=>{
                            dispatch({type:"add_usergender" , value:e.target.value});
                        }}
                    />
                    <label htmlFor="gender" className="form-check-lable">
                        Male
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        type = "radio"
                        name = "gender"
                        id="gender"
                        className="form-check-input"
                        value="Female"
                        checked={add_usergender === "Female"}
                        onChange={(e)=>{
                            dispatch({type:"add_usergender" , value:e.target.value});
                        }}
                    />
                    <label htmlFor="gender" className="form-check-lable">
                        Female
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        type = "radio"
                        name = "gender"
                        id="gender"
                        className="form-check-input"
                        value="others"
                        checked={add_usergender === "others"}
                        onChange={(e)=>{
                            dispatch({type:"add_usergender" , value:e.target.value});
                        }}
                    />
                    <label htmlFor="gender" className="form-check-lable">
                        Others
                    </label>
                </div>
                </div>
                <div className="form-group">
                    <input type="submit" value="Add user" className="btn btn-primary"></input>
                </div>
            </form>
        </div>
    )
}
export default AddUser;