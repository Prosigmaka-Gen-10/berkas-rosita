import store from "./store";
import { useSelector } from "react-redux";

export default function ComponentD() {
  const hargaProduk = useSelector((state) => state.produk.harga);
  const namaToko = useSelector((state) => state.toko.nama_toko);
  const alamat = useSelector((state) => state.toko.alamat);

  function handleUbahNamaToko() {
    store.dispatch({
      type: "ubahNamaToko",
      value: "Jilbrave Official",
    });
  }

  function handleUbahAlamat() {
    store.dispatch({
      type: "ubahAlamat",
      value: "Bandung",
    });
  }

  return (
    <>
      saya component D
      <br />
      Harga : {hargaProduk}
      <br />
      <hr />
      <br />
      Toko
      <br />
      Nama Toko : {namaToko}
      <br />
      <hr />
      <br />
      <button onClick={handleUbahNamaToko}>ubah nama toko</button>
      <br />
      <hr />
      <br />
      Alamat : {alamat}
      <br />
      <br />
      <button onClick={handleUbahAlamat}>ubah alamat</button>
    </>
  );
}
