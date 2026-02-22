import { useRef, useEffect, useState } from "react";
import "./jsonDisplay.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
type Point = {
  x: number;
  y: number;
};

const data: Point[] = [
  { x: 0, y: 1 },
  { x: 1, y: 3 },
  { x: 2, y: 2 },
  { x: 3, y: 5 }
];

function Graph({ contestJsonInfo }: { contestJsonInfo: string }) {
  function onPushedDisplayButton(
    _: React.MouseEvent<HTMLButtonElement>,
    jsonInputRef: React.RefObject<HTMLTextAreaElement | null>
  ) {
    if (jsonInputRef.current === null) {
      return;
    }
    setItems([jsonInputRef.current.value]);
    showGraph(true);
    return;
  }
  function showGraph(bool: boolean) {
    setIsShowedGraph(bool);
  }
  const jsonInputRef = useRef<HTMLTextAreaElement>(null);
  const [isShowedGraph, setIsShowedGraph] = useState(false);
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
      {isShowedGraph && (
        <div className="graphArea">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="x" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="y" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
export { Graph };
