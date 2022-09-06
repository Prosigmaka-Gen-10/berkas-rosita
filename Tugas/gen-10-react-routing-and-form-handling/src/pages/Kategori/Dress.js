import React from "react";
import { Link, Routes, Route, Outlet } from "react-router-dom";

export default function Dress() {
  return (
    <>
      <hr />
      <Link to="/">Home | </Link>
      <Link to="/kategori">Kategori Produk</Link>
      <h2>List Dress : </h2>
      <ul>
        <li>
          Rose Dress |
          <Link to="/kategori/dress/detail-dress/rose dress/warna: mocca, black, white/ukuran: L, M">
            Lihat Detail
          </Link>
        </li>

        <li>
          Emma Dress |
          <Link to="/kategori/dress/detail-dress/emma dress/warna: mocca, white/ukuran: L, M">
            Lihat Detail
          </Link>
        </li>

        <li>
          Zwetta Dress |
          <Link to="/kategori/dress/detail-dress/zwetta dress/warna: mocca, black/ukuran: L, M">
            Lihat Detail
          </Link>
        </li>
      </ul>

      <Outlet />
    </>
  );
}
