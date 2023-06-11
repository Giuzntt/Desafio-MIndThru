import axios from "axios";
import md5 from "md5";

const publicKey = process.env.VITE_MARVEL_PUBLIC_KEY || "";
const privateKey = process.env.VITE_MARVEL_PRIVATE_KEY || "";

const ts = new Date().getTime();
const hash = md5(ts + privateKey + publicKey);

const client = axios.create({
  baseURL: "https://gateway.marvel.com/v1/public",
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    ts: ts,
    apikey: publicKey,
    hash: hash,
  },
});

// Exemplo de uso da API da Marvel
client
  .get("/characters")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });

export default client;
