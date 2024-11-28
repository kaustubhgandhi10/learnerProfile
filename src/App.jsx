import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { Profile } from "./components/Profile";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Profile />
      <Footer />
    </>
  );
}

export default App;
