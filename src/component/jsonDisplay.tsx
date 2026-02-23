import { useRef, useState } from "react";
import "./jsonDisplay.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceArea } from "recharts";
import { type Point } from "./extractPerf";
import { extractPerf } from "./extractPerf";
let data: Point[] = [];

function Graph() {

  function onPushedDisplayButton(
    _: React.MouseEvent<HTMLButtonElement>,
    jsonInputRef: React.RefObject<HTMLTextAreaElement | null>
  ) {
    if (jsonInputRef.current === null) {
      return;
    }
    data = extractPerf(jsonInputRef.current.value);
    setIsShowedGraph(true);
    setRange([0,data.length]);
    return;
  }
  function onChangeMin(event: React.ChangeEvent<HTMLInputElement>){
    setRange([Number(event.currentTarget.value),range[1]]);
  }
  function onChangeMax(event: React.ChangeEvent<HTMLInputElement>){
    setRange([range[0],Number(event.currentTarget.value)]);
  }
  function changeGraphTop(value:number){
    setGraphTop(value);
    let graphSep = [0];
    let last = 0;
    while(0<value){
      value-=400;
      last+=400
      graphSep.push(last);
    }
    setGraphSep(graphSep);
  }
  const jsonInputRef = useRef<HTMLTextAreaElement>(null);
  const [isShowedGraph, setIsShowedGraph] = useState(false);
  const [range,setRange] = useState([0,0])
  const [graphTop,setGraphTop] = useState(800);
  const [graphSep,setGraphSep] = useState([0]);
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
              <XAxis dataKey="x" type="number" domain={range} allowDataOverflow={true}/>
              <YAxis ticks={graphSep}/>
              <Tooltip />
              <Line type="monotone" dataKey="y" stroke="#8884d8" activeDot={{ r: 2 }} />
              <ReferenceArea y1={0} y2={399} fill="#404040" fillOpacity={0.4} />
              <ReferenceArea y1={400} y2={799} fill="#815c00" fillOpacity={0.4} />
              <ReferenceArea y1={800} y2={1199} fill="#58bc00" fillOpacity={0.4} />
              <ReferenceArea y1={1200} y2={1599} fill="#04a6bb" fillOpacity={0.4} />
              <ReferenceArea y1={1600} y2={1999} fill="#002aff" fillOpacity={0.4} />
              <ReferenceArea y1={2000} y2={2399} fill="#fbff00" fillOpacity={0.4} />
              <ReferenceArea y1={2400} y2={2799} fill="#ff8800" fillOpacity={0.4} />
              <ReferenceArea y1={2800} y2={3200} fill="#ff0000" fillOpacity={0.4} />
            </LineChart>
          </ResponsiveContainer>
        最小値:<input type="number" value={range[0]} onChange={onChangeMin}></input>
        最大値:<input type="number" value={range[1]} onChange={onChangeMax}></input>
        
        </div>
      )}
    </div>
  );
}
export { Graph };
