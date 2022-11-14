
const ADD_TO_BASKET = "ADD_TO_BASKET"
const CHECK_BASKET = "CHECK_BASKET"
const CHANGE_COUNT = "CHANGE_COUNT"
const DELETE_ITEM = 'DELETE_ITEM'


let initialState = {
    basket: [
    ]
};


const basketReducer = (state = initialState, action)=>{
    switch (action.type){
        case ADD_TO_BASKET:
            return {
                ...state,
                basket: [...state.basket, action.data]
            }
        case CHECK_BASKET:
            return {
                ...state,
                basket: state.basket.filter(item => item.id !== action.id)
            }
        case CHANGE_COUNT:
            if (action.k === 1){
                return {
                    ...state,
                    basket: state.basket.map(item => {if(item.id === action.id){
                        return {...item, count: item.count + 1}
                    }else return item})
            }}else return {
                ...state,
                basket: state.basket.map(item => {if(item.id === action.id && item.count > 1){
                    return {...item, count: item.count - 1}
                }else return item})
            }
        case DELETE_ITEM:
            return {
                ...state,
                basket: state.basket.filter(item => item.id !== action.id)
            }

        default : return state
    }
}
export const addToBasket = (data)=>{
    return{
        type: ADD_TO_BASKET,
        data
    }
}
export const deleteBasket = (id)=>{
    return{
        type: CHECK_BASKET,
        id
    }
}
export const changeCounter = (id,k,count)=>{
    return {
        type: CHANGE_COUNT,
        id,
        count,
        k
    }
}
export const deleteItem = (id) =>{
    return{
        type: DELETE_ITEM,
        id
    }
}
export default basketReducer