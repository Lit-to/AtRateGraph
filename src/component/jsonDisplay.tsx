import { useRef, useEffect, useState } from "react";
import "./jsonDisplay.css";

function Graph({ contestJsonInfo }: { contestJsonInfo: string }) {
  function onPushedDisplayButton(
    _: React.MouseEvent<HTMLButtonElement>,
    jsonInputRef: React.RefObject<HTMLTextAreaElement | null>
  ) {
    if (jsonInputRef.current === null) {
      return;
    }
    setItems([jsonInputRef.current.value]);
    return;
  }
  const jsonInputRef = useRef<HTMLTextAreaElement>(null);
  const [items, setItems] = useState<string[]>([]);
  useEffect(() => {
    setItems([contestJsonInfo]);
  }, [contestJsonInfo]);
  return (
    <div className="container">
      <div className="searchRow">
        <textarea className="searchResult" ref={jsonInputRef}></textarea>
        <button className="displayButton" onClick={(event) => onPushedDisplayButton(event, jsonInputRef)}>
          表示
        </button>
      </div>
      <div className="resultArea">
        <div className="json-display">{items[0]}</div>
      </div>
    </div>
  );
}
export { Graph };
