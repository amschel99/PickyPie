import React, { useContext } from "react";
import "../index.css";
import { AppContext } from "../App";

const Display = () => {
  const { type, stateWord, definition, synonyms } = useContext(AppContext);

  return (
    <div className="">
      {stateWord && (
        <div className="">
          <h4 className="synonym"> Word Type: {type}</h4>
          <h4 className="synonym">Definition : {definition}</h4>
          <h4 className="synonym">Synonyms</h4>
          {synonyms.map((syn) => {
            return (
              <div styles={{ marginLeft: "40%" }}>
                <h4>{syn}</h4>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Display;
