import {useState} from "react";
import {categories} from "../Category";
import styles from "./Form.module.css";

function Form() {
    const [url, setUrl] = useState("");
    const [category, setCategory] = useState("");
    const [videos, setVideos] = useState([]);
    const [errors, setErrors] = useState("");

    function validateUrl(url) {
        const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9\-_]+)$/

        if(!regex.test(url) || url.length < 28){
            setErrors("ERRO: URL inválida!");
            return false
        } else {
            if(url.length >= 28 && url.length < 43){
                return url.substring(17, 28)
            } else if(url.length >= 43){
                return url.substring(32, 43)
            }
        }

    }

    function onSave(e) {
        e.preventDefault();

        if(!category || category === "-"){
            setErrors("ERRO: Escolha uma categoria!");
            return
        } else {
            setErrors("");
        }

        const urlVideo = validateUrl(url);
        if(urlVideo && category){
            const newVideo = {url, category};
            setVideos([...videos, newVideo]);
            localStorage.setItem("videos", JSON.stringify([...videos, newVideo]));

            setUrl("");
            setCategory("");
        } else {
            setErrors("ERRO: URL inválida!");
        }
    }

    return (
        <section className={styles.container}>
            <h2>Cadastro de vídeo</h2>
            <form onSubmit={onSave}>
                <div>
                    <label>URL do vídeo</label>
                    <input
                        type="text"
                        placeholder="Digite a URL do vídeo"
                        required="required"
                        value={url}
                        onChange={e => setUrl(e.target.value)}
                        minLength="28"
                        maxLength="43"
                    />
                </div>
                <div>
                    <label>Categoria</label>
                    <select
                        required="required"
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                    >
                        <option value="-">Selecione uma categoria</option>
                        {categories.map((item) => {
                            return <option value={item}>{item}</option>
                        })}
                    </select>
                </div>
                <div>
                    <button>Cadastrar</button>
                </div>
                <div>
                    {errors}
                </div>
            </form>
        </section>
    );
}

export default Form;