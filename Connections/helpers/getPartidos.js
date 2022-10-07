// const API = "https://rickandmortyapi.com/api/character";
const API = "https://6cdec907-6cca-4d10-ae50-2f4c25df772a.mock.pstmn.io"

export default async (id) => {
  const apiUrl = id ? `${API}${id}` : API;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    return data;

  } catch (error) {
    console.log("Error en el fetch ", error);
  }
};
