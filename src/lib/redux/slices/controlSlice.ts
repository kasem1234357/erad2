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
     setLang: (state: any, action: { payload: any }) => {
    state.lang = action.payload;
  }
  }
})
export const {setDictonary,setLang} = controlSlice.actions
export default controlSlice.reducer