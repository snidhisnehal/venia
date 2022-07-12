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
    },
    deletCartItem(state, action) {
      //  state.item.map((cartproduct) => {
      //   if (cartproduct.id === action.payload.id) {
       
          const nextCart = state.item.filter(
            (item) =>{ return item.id !== action.payload} 
          );
          state.item = nextCart;
        // }
        localStorage.setItem("loc", JSON.stringify(state.item));
        return state;
        
      // }
      // );
    },
    
  },
  
  
})

export const handleAction = counterSlice.actions

export default counterSlice;