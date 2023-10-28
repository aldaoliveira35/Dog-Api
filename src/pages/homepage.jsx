import { useEffect, useState } from "react";
import { getDogs } from "../api-clients/dog-api-client";
import "../styles/homepage.css";

export function Homepage() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    async function listDogs() {
      try {
        setDogs(await getDogs());
      } catch (error) {
        console.error(error);
      }
    }
    listDogs();
  }, []);

  return (
    <>
      <div>
        {dogs.map((dog, index) => (
          <div className="dogImage">
            <img src={dog.url} key={index} />
          </div>
        ))}
      </div>
    </>
  );
}
