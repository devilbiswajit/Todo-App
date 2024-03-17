import { useContext , createContext} from "react";

const Todocontext=createContext(
   {
     todos:[
        {
            id:1,
            isCompleted:false,
            todo:"my message"
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleTodo:(id)=>{}
    }
)

export const useTodo = ()=>{
    return useContext(Todocontext)
}

export const TodocontextProvider=Todocontext.Provider