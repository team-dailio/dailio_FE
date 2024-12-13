import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignUp } from "./pages";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};
