import store from "./store";

import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";
import ComponentD from "./ComponentD";
import { useSelector } from "react-redux";

export default function App() {
  const namaProduk = useSelector((state) => state.produk.nama_produk);
  const hargaProduk = useSelector((state) => state.produk.harga);

  function tampilkanStore() {
    console.log(store.getState());
  }

  function handleUbahNama() {
    store.dispatch({
      type: "ubahNama",
      value: "bambang",
    });
  }

  function handleUbahNamaProduk() {
    store.dispatch({
      type: "ubahNamaProduk",
      value: "Blouse",
    });
  }

  function handleUbahPesanan() {
    store.dispatch({
      type: "ubahNamaProduk",
      value: "Blouse",
    });
    store.dispatch({
      type: "ubahHargaProduk",
      value: 90000,
    });
  }

  return (
    <>
      <h1>hai dunia!</h1>
      <button onClick={tampilkanStore}>tampilkan isi store</button>
      <br />
      <button onClick={handleUbahNama}>ubah nama</button>
      <br />
      <hr />
      <br />
      <ComponentA />
      <br />
      <hr />
      <br />
      <ComponentB />
      <br />
      <hr />
      <br />
      <button onClick={handleUbahNamaProduk}>ubah nama produk</button>
      <br />
      <hr />
      <br />
      <ComponentC />
      <br />
      <hr />
      <br />
      <ComponentD />
      <br />
      <hr />
      List pesanan saya :
      <br />
      Nama Produk : {namaProduk} <br />
      Harga : {hargaProduk}
      <br />
      <br />
      <button onClick={handleUbahPesanan}>ubah pesanan</button>
    </>
  );
}
