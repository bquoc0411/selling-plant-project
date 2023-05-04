import About from "./components/about/About";
import BestSeller from "./components/bestseller/BestSeller";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import LogIn from "./features/LogIn/LogIn";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <BestSeller/>
      <Footer />
      {/* <LogIn /> */}
    </>
  );
}

export default App;
