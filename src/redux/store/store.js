import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../actions/counterSlice'

export default configureStore({
  reducer: {
    changeValue: counterReducer,
  },
})