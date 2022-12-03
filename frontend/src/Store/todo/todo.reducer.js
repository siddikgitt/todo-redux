import{
TODO_ERROR,
TODO_LOADING,
TODO_SUCCESS
} from './todo.actionType'

const intialState = {
    data:[],
    loading:false,
    error:false,
}   

export const reducer = (state=intialState,{type,payload})=>{
    switch(type){
        case TODO_LOADING : {
            return{
                ...state,
                loading:true,
                error:false
            }
        }
        case TODO_ERROR : {
            return {
                ...state,
                loading:false,
                error:true
            }
        }
        case TODO_SUCCESS : {
            return {
                ...state,
                loading:false,
                error:false,
                data:payload
            }
        }

        default : {
            return state
        }
    }
}