import { createSlice } from "@reduxjs/toolkit";


const weatherSlice = createSlice({
  name: "weather",
  initialState: { weather: [{ latitude: null, longitude: null }] },
  reducers: {
    updateInfo: (state, action) => {
      state.weather = [action.payload];
    },
  },
});


export const { updateInfo } = weatherSlice.actions;
export default weatherSlice.reducer;