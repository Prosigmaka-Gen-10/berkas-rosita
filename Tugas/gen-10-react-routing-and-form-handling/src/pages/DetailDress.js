import React from "react";
import { useParams } from "react-router-dom";
import { Link, Routes, Route, Outlet } from "react-router-dom";

export default function DetailDress() {
  const params = useParams();

  return (
    <>
      <hr />
      <Link to="/">Home | </Link>
      <Link to="/kategori">Kategori Produk | </Link>
      <Link to="/kategori/dress">List Dress</Link>
      <h2>Detail Dress : </h2>
      <p>{params.namadress}</p>
      <p>{params.color}</p>
      <p>{params.ukuran}</p>
    </>
  );
}
