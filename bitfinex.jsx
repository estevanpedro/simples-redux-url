import React from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { updateUrl } from "redux/ducks/url"

const App = () => {
  // create dispatch const
  const dispatch = useDispatch()
  // url params
  const params = {
    height: 300,
    interval: "3h",
    locale: "en",
    pair: "BTC_USD",
    toolbar_bg: "",
    width: 360,
  }
  // get url state from redux
  const { url } = useSelector(state => state.auth)

  // generate urls using params props
  const generateUrl = () => {
    return `url${params ? "?" : ""}${
      params.height ? `&height=${params.height}` : ""
    }${params.interval ? `&interval=${params.interval}` : ""}${
      params.locale ? `&locale=${params.locale}` : ""
    }${params.pair ? `&pair=${params.pair}` : ""}${
      params.toolbar_bg ? `&toolbar_bg=${params.toolbar_bg}` : ""
    }${params.width ? `&width=${params.width}` : ""}`
  }

  dispatch(updateUrl(generateUrl(params)))

  return `Generated the url: ${url}`
}

export default App
