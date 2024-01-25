import "./main.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6";
import { EventsProvider, ParamsProvider } from "./contexts";
import { CalendarPage, AddEventPage } from "./pages";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryParamProvider adapter={ReactRouter6Adapter}>
        <ParamsProvider>
          <EventsProvider>
            <Routes>
              <Route path="/" element={<CalendarPage />}>
                <Route path="/add-event" element={<AddEventPage />} />
              </Route>
            </Routes>
          </EventsProvider>
        </ParamsProvider>
      </QueryParamProvider>
    </BrowserRouter>
  </React.StrictMode>
);
