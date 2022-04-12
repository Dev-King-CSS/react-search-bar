import { useState, useRef } from "react"
//! Icons
import { MdClose } from "react-icons/md"
//! Types
import type { DataType } from "../utils"
//! Styles
import { Wrapper, DataResult } from "./SearchBar.styles"

const SearchBar: React.FC<{ data: DataType[] }> = ({
  data,
}): JSX.Element => {
  const [filteredData, setFilteredData] = useState<DataType[]>([])
  const [wordEntered, setWordEntered] = useState<string>("")

  const inputRef: React.RefObject<HTMLInputElement> =
    useRef<HTMLInputElement>(null)
  window.addEventListener("load", () => inputRef.current?.focus())

  const handleFilter = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    const searchWord: string = target.value.toLowerCase()
    setWordEntered(searchWord)

    const newFilter: DataType[] = data.filter(({ title }): boolean =>
      title.toLowerCase().includes(searchWord)
    )

    if (!searchWord) return setFilteredData([])
    setFilteredData(newFilter)
  }

  const clearInput = (): void => {
    setFilteredData([])
    setWordEntered("")
    inputRef.current?.focus()
  }

  return (
    <Wrapper>
      <div className="searchInputs">
        <input
          type="text"
          placeholder="Enter a Book Name..."
          value={wordEntered}
          onChange={handleFilter}
          ref={inputRef}
        />
        <div className="searchIcon">
          {wordEntered.length !== 0 && (
            <MdClose id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <DataResult>
          {filteredData.map(({ link, title }, key) => (
            <a
              href={link}
              key={key}
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </a>
          ))}
        </DataResult>
      )}
    </Wrapper>
  )
}

export { SearchBar }
