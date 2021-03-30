import {Add_Todo ,Edit_Todo , Remove_Todo , Clear_Todo , Completed , Canceled} from '../types';

const reducer = (state = [] ,action) => {
    let todo = null;
    if(action.type === Add_Todo){
        todo = [...state , {text : action.text , date : action.date , background : action.background, display : action.display , id : Math.random()}];
        console.log("todo is : " + todo)
        return todo
        
    }
    else if(action.type === Edit_Todo){
        const newtodo = prompt("Enter Name New Todo");
        todo = state.filter(todo =>{
            if(todo.id === action.id ){
                todo.text = newtodo;
                return todo
            }
            else{
                return todo
            }
        });
        return todo;
        
    }
    else if(action.type === Remove_Todo){
        todo = state.filter(todo => todo.id !== action.id);
        return todo;
    }
    else if(action.type === Clear_Todo){
        todo = [];
        return todo;
    }
    else if(action.type === Completed){
        const completed_color = "green";
        const text_color = "white";
        const display_none = "none";
        todo = state.filter(todo =>{
            if(todo.id === action.id ){
                todo.background = completed_color;
                todo.color  = text_color;
                todo.display = display_none
                return todo
            }
            else{
                return todo
            }
        });
        return todo;
    }
    else if(action.type === Canceled){
        const canceled_color = "red";
        const text_color = "white";
        const display_none = "none";
        todo = state.filter(todo =>{
            if(todo.id === action.id ){
                todo.background = canceled_color;
                todo.color  = text_color;
                todo.display = display_none

                return todo
            }
            else{
                return todo
            }
        });
        return todo;
    }

    else{
        return state
    }
}
export default reducer