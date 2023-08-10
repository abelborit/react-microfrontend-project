import React from "react";

import { ErrorBoundary } from "../components/ErrorBoundary";
import CounterFederated from "CounterModuleFederation/CounterFederated";

const HomePage = () => {
  return (
    <div className="text-center">
      <h1 className="font-bold text-3xl">Counter MF</h1>

      {/* el ErrorBoundary me salta error de script si al CounterFederated no le paso un initialCounter, revisar luego */}
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <CounterFederated initialCounter={100} />
        {/* <CounterFederated /> */}
      </ErrorBoundary>
    </div>
  );
};

export default HomePage;
