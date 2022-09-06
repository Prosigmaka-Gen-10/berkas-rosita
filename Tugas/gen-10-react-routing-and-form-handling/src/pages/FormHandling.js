import { useState } from "react";

export default function FormHandling() {
  const [nama, setNama] = useState();
  const [password, setPassword] = useState();
  const [hari, setHari] = useState();
  const [gender, setGender] = useState();

  function handleInputNama(event) {
    setNama(event.target.value);
  }

  function handleInputPassword(event) {
    setPassword(event.target.value);
  }

  function handleSubmit() {
    const payload = {
      namaSaya: nama,
      passwordSaya: password,
      hariIni: hari,
      gender: gender,
    };

    console.log(payload);
  }

  return (
    <>
      <label>
        Nama Lengkap: <br />
        <input type="text" onChange={handleInputNama} value={nama} />
      </label>
      <br />
      <label>
        Password: <br />
        <input
          type="password"
          onChange={handleInputPassword}
          value={password}
        />
      </label>
      <br />
      <br />
      <label>
        Hari: <br />
        <select onChange={(event) => setHari(event.target.value)} value={hari}>
          <option value="senin">Senin</option>
          <option value="selasa">Selasa</option>
          <option value="rabu">Rabu</option>
          <option value="kamis">Kamis</option>
          <option value="jumat">Jumat</option>
        </select>
      </label>
      <br />
      <br />
      Jenis Kelamin: <br />
      <label>
        <input
          type="radio"
          value="L"
          name="gender"
          onChange={(event) => setGender(event.target.value)}
          checked={gender === "L" ? true : false}
        />
        Laki-laki
      </label>
      &nbsp;&nbsp;
      <label>
        <input
          type="radio"
          value="P"
          name="gender"
          onChange={(event) => setGender(event.target.value)}
          checked={gender === "P" ? true : false}
        />
        Perempuan
      </label>
      <br />
      <br />
      <button onClick={handleSubmit}>submit</button>
    </>
  );
}
