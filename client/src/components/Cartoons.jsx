// something to run on mount
// something to store what's fetched
import { useEffect, useState } from "react";
// some function that allows us to get all cartoons
import { getAllCartoons } from "../services";

const Cartoons = () => {
  const [cartoons, setCartoons] = useState([]);

  useEffect(() => {
    // get the cartoons then set the cartoons state to the fetched cartoons
    getAllCartoons().then((fetchedCartoons) => setCartoons(fetchedCartoons));
  }, []);

  return (
    <section>
      {cartoons.map((cartoon) => (
        <div>
          <h3>{cartoon.name}</h3>
          <h4>{cartoon.main_character} | {cartoon.genre}</h4>
        </div>
      ))}
    </section>
  );
};

export default Cartoons;