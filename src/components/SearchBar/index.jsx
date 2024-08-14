import React from "react"

const SearchBar = () => {
  return (
    <>
      <div className="p-2">
        <label>
          <input
            name="myInput"
            defaultValue="Search..."
            className="border-grey-400 border-2 rounded-lg p-1 w-full"
          />
        </label>
      </div>
    </>
  )
}

export default SearchBar
