import { SearchBar } from "./SearchBar"

export function AppBar() {
  return (
    <div className="flex justify-between p-3">
      <div>Youtube</div>
      <div>
        <SearchBar />
      </div>
      <div>LoginIn</div>
    </div>
  )
}