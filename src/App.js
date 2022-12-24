import "swiper/swiper.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Routes from "./config";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <>
            <Header {...props} />
            <Routes />
            <Footer />
          </>
        )}
      />
    </BrowserRouter>
  );
}

export default App;
