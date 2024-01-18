import { createBrowserRouter } from "react-router-dom";
import { CalendarPage } from "./pages";

// https://reactrouter.com/en/main/start/tutorial
const router = createBrowserRouter([
  {
    path: "/",
    element: <CalendarPage />,
  },
]);

export default router;
