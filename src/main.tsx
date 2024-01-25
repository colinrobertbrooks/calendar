import "./main.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EventsProvider } from "./contexts";
import { CalendarPage, AddEventPage } from "./pages";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <EventsProvider>
        <Routes>
          <Route path="/" element={<CalendarPage />}>
            <Route path="/add-event" element={<AddEventPage />} />
          </Route>
        </Routes>
      </EventsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
