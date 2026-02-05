import Card from "../components/card";
import Products from "../components/Product";
import "./Home.css";

const Home=()=> {
  return (
    <>
    <div className="home">
      <div className="overlay">
        <h1>JKPVC Furniture</h1>
        <p>
          Premium • Modern • Durable <br />
          Furniture for Stylish Homes
        </p>
        <button>Explore Collection</button>
      </div>
    </div>
      <Card data={Products}/>
</>

  );
}

export default Home
