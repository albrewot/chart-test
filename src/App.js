import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AreaChartPage from "./pages/AreaChartPage/AreaChartPage";
import BarChartPage from "./pages/BarChartPage/BarChartPage";
import LandingPage from "./pages/LandingPage/LandingPage"
import LineChartPage from "./pages/LineChartPage/LineChartPage";
import PieChartPage from "./pages/PieChartPage/PieChartPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact component={LandingPage} path="/"/>
        <Route exact component={BarChartPage} path="/barchart"/>
        <Route exact component={PieChartPage} path="/piechart"/>
        <Route exact component={AreaChartPage} path="/areachart"/>
        <Route exact component={LineChartPage} path="/linechart"/>
      </Switch>
    </Router>
  );
}

export default App;
