import DisplayMenu from "./components/DisplayMenu";
import FilterMenu from "./components/FilterMenü";
import SearchMenu from "./components/SearchMenu";
import SortMenu from "./components/SortMenu";

function App() {
  return (
    <div className="App">
     <DisplayMenu/>
     <FilterMenu/>
     <SearchMenu/>
     <SortMenu/>
    </div>
  );
}

export default App;
