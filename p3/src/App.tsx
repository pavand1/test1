import "./App.css";
import Searchbox from "./components/Searchbox";
import Dropdown from "./components/Dropdown";
import { dropdownData, IMenuItem } from "./data/app-data";

function App() {
  const handleSelectedItems = (items: IMenuItem[]) => {
    console.log(items);
  };
  return (
    <>
      {/* <Searchbox /> */}
      <Dropdown
        data={dropdownData}
        isMultiSelect={false}
        handleSelectedItems={handleSelectedItems}
      />
    </>
  );
}

export default App;
