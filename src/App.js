import React, { Component } from "react";
import { ErrorBoundary } from "./Components/Error/ErrorBoundaries";
import PortFolio from "./Portfolio";

class App extends Component {
  render() {
    return (
      <>
        <ErrorBoundary>
          <PortFolio />
        </ErrorBoundary>
      </>
    );
  }
}

export default App;
