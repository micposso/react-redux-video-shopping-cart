import { createSlice } from "@reduxjs/toolkit";
import { storeData } from '../data/data';

const initialState = {
  products: [],
  amount: 1,
  total: 0
}

const basketSlice = createSlice({
  name: 'basket',
  initialState,
})

export default basketSlice.reducer;