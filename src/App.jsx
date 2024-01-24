import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className=" w-full h-screen bg-maha bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
