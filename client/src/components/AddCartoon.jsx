import { useState } from "react";
import { useHistory } from "react-router-dom";
import { createCartoon } from "../services";

const AddCartoon = () => {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [mainCharacter, setMainCharacter] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCartoon = {
      name,
      genre,
      main_character: mainCharacter,
    }
    await createCartoon(newCartoon);
    history.push("/cartoons");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label htmlFor="genre">Genre:</label>
      <input
        id="genre"
        type="text"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        required
      />
      <label htmlFor="mainCharacter">Main Character:</label>
      <input
        id="mainCharacter"
        type="text"
        value={mainCharacter}
        onChange={(e) => setMainCharacter(e.target.value)}
        required
      />
      <button type="submit">Create Cartoon</button>
    </form>
  );
};

export default AddCartoon;