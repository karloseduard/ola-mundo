import styles from './PostModelo.module.css'

export default function PostModelo({fotoCapa,titulo,children}){
    return(
        <article className={styles.postModeloContainer}>
            <div className={styles.fotoCapa} style={{background:`url(${fotoCapa})`,backgroundRepeat:"no-repeat", backgroundSize:'cover',width:"100%"}}>
            </div>

            <h2 className={styles.titulo}>{titulo}</h2>

            <div className={styles.postConteudoContainer}>
                {children}

            </div>
        </article>
    )
}