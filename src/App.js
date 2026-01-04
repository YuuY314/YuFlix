import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Container from "./components/Container";
import Card from "./components/Card";
import Category from "./components/Category";

import videos from "./json/videos.json";

const categories = [
  "Fantasia",
  "Herói",
  "Animação"
];

function filterCategory(id) {
  return videos.filter(video => video.category === categories[id])
}

function App() {
  return (
    <>
      <Header/>
      <Banner image="favorites"/>
      <Container>
        <Category category="Fantasia">
          {filterCategory(0).map((video) => <Card id={video.id} key={video.id}/>)}
        </Category>
        <Category category="Herói">
          {filterCategory(1).map((video) => <Card id={video.id} key={video.id}/>)}
        </Category>
        <Category category="Animação">
          {filterCategory(2).map((video) => <Card id={video.id} key={video.id}/>)}
        </Category>
      </Container> 
      <Footer/>
    </>
  );
}

export default App;
