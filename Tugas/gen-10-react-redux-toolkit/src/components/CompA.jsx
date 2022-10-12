import { useSelector } from "react-redux";

export default function CompA() {
  const { nama, harga } = useSelector((state) => state.produk);

  return (
    <>
      I'm CompA <br />
      nama: {nama} <br />
      harga: {harga} <br />
    </>
  );
}

const produk = {
  nama: "Hijab",
  harga: 20000,
};
