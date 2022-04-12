import styled, { createGlobalStyle } from "styled-components"
//! Types
import type {
  GlobalStyleComponent,
  DefaultTheme,
  StyledComponent,
} from "styled-components"

export const GlobalStyles: GlobalStyleComponent<
  {},
  DefaultTheme
> = createGlobalStyle`

  :root {
    --font: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  }

  * {
    margin: 0;
    padding: 0;
    font-family: var(--font);
  }

`

export const Wrapper: StyledComponent<"div", any, {}, never> = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background-image: linear-gradient(to top, #48c6ef 0%, #6f86d6 100%);
`
