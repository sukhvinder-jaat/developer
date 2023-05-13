import logo from "./assets/img/png/foot_logo.webp";
import "./App.css";
import "animate.css/animate.css";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MyNav } from "./components/MyNav";
import { Developer } from "./components/Developer";
import { Get } from "./components/Get";
import { Source } from "./components/Source";
import { Update } from "./components/Update";
import { Dig } from "./components/Dig";
import { Foot } from "./components/Foot";
import { BackToTop } from "./components/BackToTop";
import { Loading } from "./components/Loading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <div className="App overflow-hidden">
      <MyNav />
      <Developer />
      <Get />
      <Dig />
      <Source />
      <Update />
      <Foot />
      <BackToTop />
      <Loading />
    </div>
  );
}

export default App;
