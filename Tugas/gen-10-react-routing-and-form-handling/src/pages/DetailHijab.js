import React from "react";
import { useParams } from "react-router-dom";
import { Link, Routes, Route, Outlet } from "react-router-dom";

export default function DetailHijab() {
  const params = useParams();
  return (
    <>
      <hr />
      <Link to="/">Home | </Link>
      <Link to="/kategori">Kategori Produk | </Link>
      <Link to="/kategori/hijab">List Hijab</Link>
      <h2>Detail Hijab : </h2>
      <p>{params.namahijab}</p>
      <p>{params.color}</p>
      <p>{params.ukuran}</p>
    </>
  );
}
