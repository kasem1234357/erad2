import { createSlice } from "@reduxjs/toolkit";
export type controllSliceType = {
  control:{
    calenderBookingType:string
    sortingBy:{
      column:string,
      order:string
    }
  }
}
const controlSlice = createSlice({
  name: "control",
  initialState: {
     lang:"en",
     dictionary:{}
  },
  reducers: {
      setDictonary: (state: any, action: { payload: any }) => {
    state.dictionary = action.payload;
  },
  }
})
export const {setDictonary} = controlSlice.actions
export default controlSlice.reducer