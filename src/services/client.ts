import axios from "axios";
import md5 from "md5";

const publicKey = "";
const privateKey = "";

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

export default client;
