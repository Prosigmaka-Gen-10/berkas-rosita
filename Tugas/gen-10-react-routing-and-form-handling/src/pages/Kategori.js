import React from "react";
import { Link, Routes, Route, Outlet } from "react-router-dom";

export default function Kategori() {
  return (
    <>
      <Link to="/">Home</Link>
      <h2>Kategori Produk : </h2>
      <ul>
        <li>
          Dress |<Link to="/kategori/dress">Lihat Dress</Link>
        </li>

        <li>
          Hijab |<Link to="/kategori/hijab">Lihat Hijab</Link>
        </li>
      </ul>

      <Outlet />
    </>
  );
}
