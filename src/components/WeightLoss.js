import React, { Component } from "react";
import TrackProgress from "widgets/TrackProgress";

class WieghtLoss extends Component {
  render() {
    return (
      <div className="weightloss">
        <p>Welcome Rahul Rana</p>
        <div className="weightloss__header">
          <span>Starting weight: 103 Kg</span>
          <TrackProgress percentage={30} />
          <span>Target weight: 75 Kg</span>
        </div>
      </div>
    );
  }
}

export default WieghtLoss;
