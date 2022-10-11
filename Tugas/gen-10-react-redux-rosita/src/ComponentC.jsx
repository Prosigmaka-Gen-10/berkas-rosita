import store from "./store";
import { useSelector } from "react-redux";

export default function ComponentC() {
  const namaProduk = useSelector((state) => state.produk.nama_produk);

  function handleUbahHargaProduk() {
    store.dispatch({
      type: "ubahHargaProduk",
      value: 90000,
    });
  }

  return (
    <>
      saya component C <br />
      nama produk: {namaProduk}
      <br />
      <br />
      <button onClick={handleUbahHargaProduk}>ubah harga produk</button>
    </>
  );
}
