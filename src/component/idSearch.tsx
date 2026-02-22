import {  useRef, useState, type JSX } from "react";
import "./idSearch.css";
// import axios from "axios";
// import { Link } from "react-router-dom";

class SearchClass {
  searchInputRef: React.RefObject<HTMLInputElement | null>;
  constructor() {
    this.searchInputRef = useRef<HTMLInputElement>(null);
  }
  async onPushedSearchButton(
    _: React.MouseEvent<HTMLButtonElement>,
    searchInputRef: React.RefObject<HTMLInputElement | null>,
    setUserProfileUrl:Function
  ) {
    if (searchInputRef.current === null) {
      return;
    }
    const userId = searchInputRef.current.value;
    if (userId === "") {
      // alert("ユーザIDを入力してください");
      searchInputRef.current.value = "ユーザIDを入力してください";
      return;
    }
    // const response = await axios.get(`https://atcoder.jp/users/${userId}/history/json`);
    // if (response.status != 200) {
    //   // alert("ユーザIDが見つかりませんでした");
    //   searchInputRef.current.value = "ユーザIDが見つかりませんでした";
    //   return;
    // }
    // <Link to={`https://atcoder.jp/users/${userId}/history/json`}>Page3</Link>;
    setUserProfileUrl(`https://atcoder.jp/users/${userId}/history/json`);
  }

  public searchBox(): JSX.Element {
    const [userProfileUrl, setUserProfileUrl] = useState("https://atcoder.jp/");
    
    return (
      <div className="container">
        <div className="searchRow">
          <input
            type="text"
            className="searchInput"
            placeholder="AtCoderのIDを入力..."
            ref={this.searchInputRef}
            pattern="^[A-Za-z0-9_]+$"
          />
          <button
            className="searchButton"
            onClick={async (event) => await this.onPushedSearchButton(event, this.searchInputRef,setUserProfileUrl)}
          >
            検索
          </button>
        </div>
        <div><a href={userProfileUrl} target="_blank">{userProfileUrl}</a></div>
      </div>
    );
  }
}
export { SearchClass };
