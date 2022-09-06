import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Kategori from "./pages/Kategori";
import Dress from "./pages/Kategori/Dress";
import Hijab from "./pages/Kategori/Hijab";
import DetailDress from "./pages/DetailDress";
import DetailHijab from "./pages/DetailHijab";
import FormHandling from "./pages/FormHandling";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="kategori" element={<Kategori />}>
            <Route path="dress" element={<Dress />}>
              <Route
                path="detail-dress/:namadress/:color/:ukuran"
                element={<DetailDress />}
              ></Route>
            </Route>
            <Route path="hijab" element={<Hijab />}>
              <Route
                path="detail-hijab/:namahijab/:color/:ukuran"
                element={<DetailHijab />}
              ></Route>
            </Route>
          </Route>
          <Route path="form-handling" element={<FormHandling />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
