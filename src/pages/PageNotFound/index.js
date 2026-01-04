import Footer from "../../components/Footer";
import Header from "../../components/Header";
import error404 from "./error404.png";
import styles from "./PageNotFound.module.css";

function PageNotFound() {
    return (
        <>
            <Header/>
            <section className={styles.container}>
                <h2>Ops! Página não localizada!</h2>
                <img src={error404} alt="Logo de página não localizada"/>
            </section>
            <Footer/>
        </>
    );
}

export default PageNotFound;