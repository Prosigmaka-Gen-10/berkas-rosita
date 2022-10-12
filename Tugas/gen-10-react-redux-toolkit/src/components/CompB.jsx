import { useSelector, useDispatch } from "react-redux";
import { ubahKeduanya, ubahNama, ubahHarga } from "../store/produkSlice";

export default function CompB() {
  const dispatch = useDispatch();

  const { nama, harga } = useSelector((state) => state.produk);

  function handleUbahNama() {
    dispatch(ubahNama("Dress"));
  }

  function handleUbahHarga() {
    dispatch(ubahHarga("90000"));
  }

  function handleUbahKeduanya() {
    dispatch(
      ubahKeduanya({
        namaBaru: "Rok",
        hargaBaru: 35000,
      })
    );
  }

  return (
    <>
      I'm CompB <br />
      nama: {nama} <br />
      harga: {harga} <br />
      <button onClick={handleUbahNama}>ubah nama produk</button>
      <button onClick={handleUbahHarga}>ubah harga</button>
      <button onClick={handleUbahKeduanya}>ubah keduanya</button>
    </>
  );
}
