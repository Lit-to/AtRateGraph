import { useRef, type JSX } from "react";
import "./jsonDisplay.css";
// import {  } from "./page/top/main.tsx";

class displayClass {
  async onPushedDisplayButton(event: React.MouseEvent<HTMLButtonElement>) {}
  public searchBox(): JSX.Element {
    return (
      <div className="container">
        <div className="searchRow">
          <textarea className="searchResult"></textarea>
          <button className="displayButton" onClick={async (event) => await this.onPushedDisplayButton(event)}>
            表示
          </button>
        </div>
      </div>
    );
  }
}
export { displayClass };
