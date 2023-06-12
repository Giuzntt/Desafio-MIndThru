import axios from "axios";
import md5 from "md5";

const publicKey = "c61bd93d3fb6776dde0c937fa623f88a";
const privateKey = "ae3087f8bea2e2d4de4136f01680df2bb6a49c92";

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
