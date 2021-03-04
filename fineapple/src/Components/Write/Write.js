import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Sidebar from "./Components/Sidebar";
import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";
import Page3 from "./Components/Page3";
import Page4 from "./Components/Page4";
import Page5 from "./Components/Page5";
import { Route } from "react-router-dom";
import "./Write.css";

function Write({ match }) {
  let complete = {};
  const [saveWriteData, setSaveWriteData] = useState({});

  const [completePage2, setCompletePage2] = useState(false);
  const [completePage3, setCompletePage3] = useState(false);
  const [completePage4, setCompletePage4] = useState(false);
  const [completePage5, setCompletePage5] = useState(false);

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

  useEffect(() => {
    console.log(saveWriteData);
    if (saveWriteData.region && saveWriteData.title) setCompletePage2(true);
    else setCompletePage2(false);

    if (saveWriteData.content) setCompletePage3(true);
    else setCompletePage3(false);

    if (saveWriteData.payment) setCompletePage4(true);
    else setCompletePage4(false);
  }, [saveWriteData]);

  return (
    <div className="write">
      <div className="write__body">
        <Sidebar
          page2={completePage2}
          page3={completePage3}
          page4={completePage4}
          page5={completePage5}
        />
        <Route
          path={`${match.path}/1`}
          exact
          render={() => <Page1 handleWriteData={savePage1} />}
        />
        <Route
          path={`${match.path}/2`}
          exact
          render={() => <Page2 handleWriteData={savePage2} />}
        />
        <Route
          path={`${match.path}/3`}
          exact
          render={() => <Page3 handleWriteData={savePage3} />}
        />
        <Route
          path={`${match.path}/4`}
          exact
          render={() => <Page4 handleWriteData={savePage4} />}
        />
        <Route
          path={`${match.path}/5`}
          exact
          render={() => (
            <Page5
              writeData={saveWriteData}
              handlecomplete={() => {
                setCompletePage5(true);
              }}
            />
          )}
        />
      </div>

      <Footer />
    </div>
  );
}

export default Write;
