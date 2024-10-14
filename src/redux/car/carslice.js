import { createSlice } from "@reduxjs/toolkit";

export const carSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
  },
  reducers: {
    addCars: (state, action) => {
      return {
        ...state,
        cars: action.payload,
      };
    },
    
  },
});
export const { addCars } = carSlice.actions;
// export default userSlice.reducer;
