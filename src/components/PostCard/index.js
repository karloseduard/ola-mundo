import { Link } from 'react-router-dom'
import styles from './Post.module.css'

export default function PostCard({titulo,Imagen, url}){
    return(
        <Link to ={url}>
            <div className={styles.post}>
                <img src={Imagen}
                alt='imagem de capa do poste ' 
                className={styles.capa}
                />

                <h2 className={styles.titulo}>{titulo}</h2>
                    
            </div>
        </Link>
    )
}