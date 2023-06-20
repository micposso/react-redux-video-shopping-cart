import { createSlice } from "@reduxjs/toolkit";
import { clothingProducts } from "../data/data";

const initialState = {
  products: clothingProducts,
  amount: 1,
  total: 0,
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
})

export default basketSlice.reducer;