import { useEffect, useState } from "react";
import "./App.css";
import { CatRepo } from "./servicios/RepositoryCat";

export function App() {
  const GIPHY_API_KEY = "URAE1pyHCPDMVzwBYUtCDjY1puv3Uaxv";
  const [catFact, setCatFact] = useState("");
  const [catGif, setCatGif] = useState("");
  const callGifhyAPI = (string: string) => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${string}$api_key=${GIPHY_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("gif", data.data[0]);
        setCatGif(data.data[0].images.original.url);
      });
  };
  const callAPI = () => {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => {
        setCatFact(data.fact || "sin data");
        callGifhyAPI(data?.fact?.split(" ").slice(0, 3).join(" "));
      });
  };
  useEffect(callAPI, []);
  return (
    <>
      <img src={catFact} alt="gifht"></img>
      <div className="App2"> {catGif}</div>
    </>
  );
}

export default App;
