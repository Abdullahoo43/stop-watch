import { Fragment } from "react";

import TimeUnit from "../timeunits/time-units";

import "./time-container.css";

const TimeContainer = ({ miliSeconds }) => {
  return (
    <div>
      <div className="time-container">
        {miliSeconds > 8.64e7 - 1 ? (
          <Fragment>
            <TimeUnit unit="Days">
              {Math.floor(miliSeconds / 100 / 60 / 60 / 240)}
            </TimeUnit>
            <span>:</span>
          </Fragment>
        ) : null}
        <TimeUnit unit="Hours">
          {Math.floor((miliSeconds / 100 / 60 / 60) % 24)}
        </TimeUnit>
        <span>:</span>
        <TimeUnit unit="Minutes">
          {Math.floor((miliSeconds / 100 / 60) % 60)}
        </TimeUnit>
        <span>:</span>
        <TimeUnit unit="Seconds">
          {Math.floor((miliSeconds / 100) % 60)}
        </TimeUnit>
        <span>.</span>
        <TimeUnit unit="Mili-Seconds">{miliSeconds % 100}</TimeUnit>
      </div>
    </div>
  );
};

export default TimeContainer;
