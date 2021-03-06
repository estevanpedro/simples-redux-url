import { configureStore } from "@reduxjs/toolkit"
import thunk from "redux-thunk"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

import rootReducer from "./rootReducer"

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["url"],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
})

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./rootReducer", () => {
    const newRootReducer = require("./rootReducer").default
    store.replaceReducer(newRootReducer)
  })
}

export const persistor = persistStore(store)
