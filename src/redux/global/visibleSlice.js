import { createSlice } from '@reduxjs/toolkit'

export const visibleSlice = createSlice({
  name: 'login',
  initialState: {
    value:true
  },
  reducers: {

    visibleOff: state => {
     
      state.value = false
    },

    visibleOn: state => {
     
      state.value = true
    },
    
  }
})

// Action creators are generated for each case reducer function

export const { visibleOff,visibleOn } = visibleSlice.actions

export default visibleSlice.reducer