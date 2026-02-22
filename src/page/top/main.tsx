import { SearchClass } from "../../component/idSearch";
import { Graph } from "../../component/jsonDisplay";
import "./main.css";

function Top() {
  const searchClass = new SearchClass();
  return (
    <div className="main-container">
      <div className="top-bg">
        <div className="title-panel">
          <h1>AtRateGraph</h1>
        </div>
      </div>
      <div className="bottom-panel">
        <div className="container">
          <div className="search-floating">{searchClass.searchBox()}</div>
          <Graph />
        </div>
      </div>
    </div>
  );
}

export { Top };
