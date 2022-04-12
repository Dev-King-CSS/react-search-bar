//! Imports
import BookData from "./data.json"
//! Components
import { SearchBar } from "./components/SearchBar"
//! Styles
import { Wrapper } from "./App.styles"

const App: React.FC<{}> = (): JSX.Element => (
  <Wrapper>
    <SearchBar data={BookData} />
  </Wrapper>
)

export { App }
