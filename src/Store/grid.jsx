import Navbar from "../Navbar/navbar";
import Card from "./Components/card";
import "./grid.css";

function Grid() {
  return (
    <>
      <Navbar />
      <grid>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </grid>
    </>
  );
}

export default Grid;
