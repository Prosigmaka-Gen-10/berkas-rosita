export const initialState = {
  nama_produk: "Hijab",
  harga: 20000,
};

export default function produkReducer(state = initialState, action) {
  switch (action.type) {
    case "ubahNamaProduk":
      return { ...state, nama_produk: action.value };
    case "ubahHargaProduk":
      return { ...state, harga: action.value };
    default:
      return state;
  }
}
