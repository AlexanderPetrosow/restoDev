import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Category from "./components/main/categories/Category";
import Main from "./components/main/Main";

const App: React.FC = () => {
  return (
    <div className="container">
      <Header
        restName="Urbo coffee"
        restAddress="улица Жансугурова, 159"
        restOpenPeriod="с 08:00 до 00:00,"
      />
      <Main />
      <Category />
      <Footer />
    </div>
  );
};

export default App;
