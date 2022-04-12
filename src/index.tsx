import { render } from "react-dom"
import { App } from "./App"
import { GlobalStyles } from "./App.styles"

render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.querySelector<Element>("#app")
)
