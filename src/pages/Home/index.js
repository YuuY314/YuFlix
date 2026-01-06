import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Card from "../../components/Card";
import Category, {categories, filterCategory} from "../../components/Category";
import {useState} from "react";

function Home() {
  function getName(e) {
    console.log(e.target.value);
    setName(e.target.value);
  }

  const [name, setName] = useState();

  return (
    <>
      <Header/>
      <Banner image="home"/>
      <Container>
        <input
          type="text"
          placeholder="Nome"
          onChange={getName}
        />
        <h2>{name}</h2>

        {
          categories.map((category, index) => 
            <Category category={category}>
              {filterCategory(index).map((video) => <Card id={video.id} key={video.id}/>)}
            </Category>
          )
        }
      </Container> 
      <Footer/>
    </>
  );
}

export default Home;
