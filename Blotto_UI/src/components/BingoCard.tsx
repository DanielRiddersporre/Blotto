import React from "react";

type BingoCardProps = {
  columns: number[][];       // 5 kolumner × 15 nummer
  marked: boolean[][];       // markerade nummer
  onToggle: (rowIndex: number, colIndex: number) => void;
};

const BingoCard: React.FC<BingoCardProps> = ({ columns, marked, onToggle }) => {
  const rowCount = columns[0].length;

  return (
    <div className="grid gap-1" style={{ gridTemplateRows: `repeat(${rowCount}, 1fr)` }}>
      {Array.from({ length: rowCount }).map((_, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-5 gap-1">
          {columns.map((col, colIndex) => (
            <div
              key={colIndex}
              className={`p-2 w-10 text-center rounded shadow cursor-pointer ${
                marked[colIndex][rowIndex] ? "bg-yellow-400" : "bg-violet-400"
              }`}
              onClick={() => onToggle(rowIndex, colIndex)}
            >
              {col[rowIndex]}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BingoCard;
