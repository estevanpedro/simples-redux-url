import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  url: "",
}

const reducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUrl(state, action) {
      state.token = action.payload
    },
  },
})

export const { updateUrl } = reducer.actions

export default reducer.reducer
