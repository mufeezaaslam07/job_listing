import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Jobs from "./components/Jobs";
import data from "./data.json";

function App() {
  const [filterKeywords, setfilterKeywords] = useState([]);

  //adding keyword
  const addFilterKeywords = (data) => {
    if (!filterKeywords.includes(data)) {
      setfilterKeywords([...filterKeywords, data]);
    }
  };
  // deleteing keyword
  const deleteKeyword = (data) => {
    const newKeywords = filterKeywords.filter((key) => key !== data);
    setfilterKeywords(newKeywords);
  };

  // clear the whole bar
  const clearAll = () => {
    setfilterKeywords([]);
  };

  return (
    <div>
      <div className="header"></div>

      {filterKeywords.length > 0 && (
        <Header
          keywords={filterKeywords}
          removeKeywords={deleteKeyword}
          clearAll={clearAll}
        />
      )}
      <Jobs
        keywords={filterKeywords}
        data={data}
        setKeywords={addFilterKeywords}
      />
    </div>
  );
}

export default App;
