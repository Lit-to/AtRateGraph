import { SearchClass } from "../../component/idSearch";
import { displayClass } from "../../component/jsonDisplay";
import "./main.css";

function Top() {
  const searchClass = new SearchClass();
  const jsonDisplay = new displayClass();
  return (
    <div className="main-container">
      <div className="top-bg">
        <div className="title-panel">
          <h1>AtRateGraph</h1>
        </div>
      </div>
      <div className="bottom-panel">
        <div className="search-floating">{searchClass.searchBox()}</div>
        <div className="search-floating">{jsonDisplay.searchBox()}</div>
      </div>
      <div className="graph-space"></div>
    </div>
  );
}

export { Top };
