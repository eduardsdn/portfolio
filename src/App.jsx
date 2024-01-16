import AppCSS from "./styles/app.module.css";

import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className={AppCSS.app}>
      <Header />
      <Hero></Hero>
      {/* <div className={AppCSS.container}></div> */}
    </div>
  );
}

export default App;
