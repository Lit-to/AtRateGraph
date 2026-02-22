import { useRef, useEffect, useState } from "react";
import "./jsonDisplay.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { type Point } from "./extractPerf";
import { extractPerf } from "./extractPerf";
let data: Point[] = [];

function Graph({ contestJsonInfo }: { contestJsonInfo: string }) {
  function onPushedDisplayButton(
    _: React.MouseEvent<HTMLButtonElement>,
    jsonInputRef: React.RefObject<HTMLTextAreaElement | null>
  ) {
    if (jsonInputRef.current === null) {
      return;
    }
    data = extractPerf(jsonInputRef.current.value);
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
