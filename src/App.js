import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import CardList from "./component/CardList/CardList";
import data_values from "./utils/data_values";
import FormInput from "./component/Form/Form";
import Banner from "./component/Banner/Banner";

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <CardList data={data_values} />
        <FormInput />
      </main>
      <Footer />
    </>
  );
}

export default App;
