import { createSlice } from "@reduxjs/toolkit";

const produkSlice = createSlice({
  name: "produk",
  initialState: {
    nama: "hijab",
    harga: 20000,
  },
  reducers: {
    ubahNama(state, action) {
      state.nama = action.payload;
    },
    ubahharga(state, action) {
      state.harga = action.payload;
    },
    ubahKeduanya(state, action) {
      (state.nama = action.payload.namaBaru),
        (state.harga = action.payload.hargaBaru);
    },
  },
});

export const { ubahNama, ubahHarga, ubahKeduanya } = produkSlice.actions;

export default produkSlice.reducer;
