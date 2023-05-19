import Canvas from "./canvas";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="transition">
      <Home />
      <Canvas />
      <Customizer />
    </div>
  );
}

export default App;
