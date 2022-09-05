import "./App.css";
import Form from "./components/Form";
import Grid from "./components/Grid";

const data = {
  clothes: [
    {
      id: 1662298805763,
      name: "Denim Jacket Motorhead",
      category: "jackets",
      price: "200000",
      description: "Bekas dian 1998 masih belum di cuci hingga sekarang",
      liked: false,
    },
    {
      id: 1662298862383,
      name: "Blue Jeans",
      category: "pants",
      price: "10000",
      description: "celana tambang emas",
      liked: false,
    },
    {
      id: 1662299032103,
      name: "Hand gloves",
      category: "shoes",
      price: "50000",
      description: "Anak motor punya nih langka bos",
      liked: true,
    },
  ],
};

function App() {
  return (
    <div className="main">
      <div className="container">
        <div className="container--wrapper">
          <Form />
          <Grid apparels={data.clothes} />
        </div>
      </div>
    </div>
  );
}

export default App;
