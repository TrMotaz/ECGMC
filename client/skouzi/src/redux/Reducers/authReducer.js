const { REGISTER_USER } = require("../constants/ActionTypes")

const initState= {
    user: null,
    isAUTH:false,
    msg:null
}
const authReducer=(state=initState,{type,payload}) =>{
    switch(type){
        case REGISTER_USER :
            return{
                ...state,
                isAUTH:true,
                msg:payload.msg,
                ...payload,
            }
            default:
                return state;
    }
}
export default authReducer