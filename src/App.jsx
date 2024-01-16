import Header from "./components/Header";
import AppCSS from "./styles/app.module.css";

function App() {
  return (
    <div className={AppCSS.app}>
      <Header />
      <div className={AppCSS.container}></div>
    </div>
  );
}

export default App;
