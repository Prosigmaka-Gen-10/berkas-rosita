import React from "react";
import { Link, Routes, Route, Outlet } from "react-router-dom";

export default function Hijab() {
  return (
    <>
      <hr />
      <Link to="/">Home | </Link>
      <Link to="/kategori">Kategori Produk</Link>
      <h2>List Hijab : </h2>
      <ul>
        <li>
          Bella Square |
          <Link to="/kategori/hijab/detail-hijab/bella square/warna: mocca, black/ukuran: 115 X 115 cm">
            Lihat Detail
          </Link>
        </li>

        <li>
          Pashmina Inner |
          <Link to="/kategori/hijab/detail-hijab/pashmina inner/warna: black/ukuran: 115 X 115 cm">
            Lihat Detail
          </Link>
        </li>

        <li>
          Bergo |
          <Link to="/kategori/hijab/detail-hijab/bergo/warna: mocca/ukuran: 115 X 115 cm">
            Lihat Detail
          </Link>
        </li>
      </ul>

      <Outlet />
    </>
  );
}
