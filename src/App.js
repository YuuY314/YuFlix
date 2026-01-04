import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Container from "./components/Container";

function App() {
  return (
    <>
      <Header/>
      <Banner image="favorites"/>
      <Container>
        <h1>Hello World!</h1>
        <p>Lorem Ipsum</p>
      </Container> 
      <Footer/>
    </>
  );
}

export default App;
