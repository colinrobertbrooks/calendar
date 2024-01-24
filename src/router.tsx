import { createBrowserRouter } from "react-router-dom";
import { CalendarPage, AddEventPage } from "./pages";

// https://reactrouter.com/en/main/start/tutorial
const router = createBrowserRouter([
  {
    path: "/",
    element: <CalendarPage />,
    children: [
      {
        path: "add-event",
        element: <AddEventPage />,
      },
    ],
  },
]);

export default router;
