import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './global/counterSlice'
import changeReducer from './global/visibleSlice'
export default configureStore({
  reducer: {

     counter:counterReducer,
     change:changeReducer

  }
})