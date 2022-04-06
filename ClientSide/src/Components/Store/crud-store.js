import {createStore} from 'redux';

const initialState = {
    email: "",
    password: "",
    isLogged:"",
    users:[],
    add_fullname:"",
    add_usermail:"",
    add_userpassword:"",
    add_userphone:"",
    add_usergender:'Male'
};

const crudReducer = (state = initialState , action)=>{
    if(action.type === "email")
    {
        return {
            ...state,
            email:action.value
        }
    }
    else if(action.type === "password")
    {
        return{
            ...state,
            password:action.value
        }
    }
    else if(action.type == "logged")
    {
        return{
            ...state,
            isLogged:action.value
        }
    }
    else if(action.type == "users"){
        return{
            ...state,
            users:action.value
        }
    }
    else if(action.type == "add_fullname"){
        return{
            ...state,
            add_fullname:action.value
        }
    }
    else if(action.type == "add_usermail"){
        return{
            ...state,
            add_usermail:action.value
        }
    }
    else if(action.type == "add_userphone"){
        return{
            ...state,
            add_userphone:action.value
        }
    }
    else if(action.type == "add_userpassword"){
        return{
            ...state,
            add_userpassword:action.value
        }
    }
    else if(action.type == "add_usergender"){
        return{
            ...state,
            add_usergender:action.value
        }
    }
    return state;

}
const crudStore = createStore(crudReducer);
export default crudStore;