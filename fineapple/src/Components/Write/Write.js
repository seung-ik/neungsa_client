import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Sidebar from "./Components/Sidebar";
import GettingStarted from "./Components/GettingStarted";
import WorkTitle from "./Components/WorkTitle";
import Description from "./Components/WorkDes";
import Budget from "./Components/WorkBudget";
import Review from "./Components/WorkReview";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Write.css";

function Write({ match }) {
  const [saveWriteData, setSaveWriteData] = useState({});
  const savePage1 = (data) => {
    setSaveWriteData((prev) => {
      return { ...prev, type: data };
    });
  };

  const savePage2 = (tags, coords, title) => {
    setSaveWriteData((prev) => {
      return {
        ...prev,
        tags,
        lat: coords.lat,
        lon: coords.lon,
        region: coords.region,
        title,
      };
    });
  };

  const savePage3 = (content, file) => {
    setSaveWriteData((prev) => {
      return { ...prev, content, file };
    });
  };
  const savePage4 = (cost, payment) => {
    if (payment === "meet") {
      setSaveWriteData((prev) => {
        return { ...prev, cost: 0, payment: "meet" };
      });
    } else if (!cost) {
      setSaveWriteData((prev) => {
        return { ...prev, cost: 0, payment: "byhour" };
      });
    } else {
      cost = cost.replace(/,/g, "");
      setSaveWriteData((prev) => {
        return { ...prev, cost: Number(cost), payment: "byhour" };
      });
    }
  };
  // useEffect(() => console.log(saveWriteData));
  return (
    <div className="write">
      <div className="write__body">
        <Sidebar />
        <Route
          path={`${match.path}/1`}
          exact
          render={() => <GettingStarted handleWriteData={savePage1} />}
        />
        <Route
          path={`${match.path}/2`}
          exact
          render={() => <WorkTitle handleWriteData={savePage2} />}
        />
        <Route
          path={`${match.path}/3`}
          exact
          render={() => <Description handleWriteData={savePage3} />}
        />
        <Route
          path={`${match.path}/4`}
          exact
          render={() => <Budget handleWriteData={savePage4} />}
        />
        <Route
          path={`${match.path}/5`}
          exact
          render={() => <Review writeData={saveWriteData} />}
        />
      </div>

      <Footer />
    </div>
  );
}

export default Write;
