import {Add_Todo ,Edit_Todo , Remove_Todo , Clear_Todo , Completed , Canceled} from '../types';


export const add_todo = (text , date , background , display , color)=>{
    const action = {
        type : Add_Todo,
        text,
        date,
        background,
        display,
        color
    }
    return action
}
export const edit_todo =(id)=>{
    const action = {
        type : Edit_Todo,  
        id
    }
    return action
}
export const remove_todo =(id)=>{
    const action = {
        type : Remove_Todo,
        id
    }
    return action
}
export const clear_todo =()=>{
    const action = {
        type : Clear_Todo
    }
    return action
}
export const completed = (id) =>{
    const action = {
        type : Completed,
        id
    }
    return action
}
export const canceled = (id) =>{
    const action = {
        type : Canceled,
        id
    }
    return action
}