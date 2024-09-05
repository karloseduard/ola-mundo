
import styles from "./Inicio.module.css"
import PostCard from "components/PostCard";
import projetos from 'json/Projetos.json'
export default function Inicio(){
    return (
        <>
        <h1 className={styles.titulo}>
            Meus projetos
        </h1>
        <ul className={styles.posts}>
        {projetos.map((projeto, index) => <li key={index}><PostCard Imagen={projeto.Imagen} titulo={projeto.titulo} url={projeto.url}/></li>)}
        </ul>
        </>
        
    )
}