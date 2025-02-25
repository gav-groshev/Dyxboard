import { Route, BrowserRouter as Router, Routes } from "react-router";
import AppLayout from "./layout/AppLayout";
import MainPage from "../pages/MainPage";


export default function App() {
  return (
    <>
      <Router basename="/Dyxboard">
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<MainPage />}/>
            <Route path="/main-page" />

          </Route>
        </Routes>
      </Router>
    </>
  );
}
