import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'CartItems',
  initialState: {
    item: localStorage.getItem("loc")?JSON.parse(localStorage.getItem("loc")):[],
  },
  reducers: {
    addItem(state, action){
        const prod = action.payload;
        const exist = state.item.find((val)=>val.id===prod.id);
        if(exist){
            return state.item.map((val)=>val.id===prod.id ? {...val, quantity:val.quantity +1}: val)
        }else{
            const prod = action.payload;
            state.item.push(prod);
        }
        localStorage.setItem("loc",JSON.stringify(state.item));
    }
  },
})

export const handleAction = counterSlice.actions

export default counterSlice;