// const API = "https://rickandmortyapi.com/api/character";
const API = "https://9adb4332-1673-4048-98b6-13ea6be9ba86.mock.pstmn.io"

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
