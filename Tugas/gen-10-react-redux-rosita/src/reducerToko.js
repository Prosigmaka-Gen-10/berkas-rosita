export const initialState = {
  nama_toko: "Zwetta collection",
  alamat: "Brebes",
};

export default function tokoReducer(state = initialState, action) {
  switch (action.type) {
    case "ubahNamaToko":
      return { ...state, nama_toko: action.value };
    case "ubahAlamat":
      return { ...state, alamat: action.value };
    default:
      return state;
  }
}
