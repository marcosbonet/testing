import { CatType } from "../models/cat.types,";

const URL = "https://catfact.ninja/fact";

export class CatRepo {
  get(): Promise<CatType> {
    return fetch(URL)
      .then((res) => res.json())
      .then((data) => console.log(data.fact))
      .catch((error) => {
        return error;
      });
  }
}
