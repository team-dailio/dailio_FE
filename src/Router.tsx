import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, SignUp } from "./pages";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
