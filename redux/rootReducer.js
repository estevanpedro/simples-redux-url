import { combineReducers } from "@reduxjs/toolkit"

import urlhReducer from "redux/ducks/url"
const rootReducer = combineReducers({
  url: urlhReducer,
})

export default rootReducer
