type Point = {
  x: number;
  y: number;
};
function extractPerf(json: string): Point[] {
  const data = JSON.parse(json);
  const points: Point[] = [];
  points.push({ x: 0, y: 0 });
  for (let i = 0; i < data.length; ++i) {
    // let date = new Date(data[i].EndTime);
    // points.push({ x: data[i].EndTime.split("T")[0], y: Number(data[i].NewRating) });
    points.push({ x: i, y: Number(data[i].NewRating) });
  }

  return points;
}
export type { Point };
export { extractPerf };
