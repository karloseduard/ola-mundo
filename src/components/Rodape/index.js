import styles from './Rodape.module.css'
import {ReactComponent as MarcaRegitrada} from 'assets/marca_registrada.svg'
import imgGit from 'assets/Platform=Github, Color=Negative.png'
import imgLinkedin from 'assets/Platform=LinkedIn, Color=Negative.png'
export default function Rodape(){
    return(
        <footer className={styles.rodape}>
        <MarcaRegitrada/>
        Desenvolvido por <strong>Karlos Eduardo</strong>
        <div className={styles.links}>
        <a href='https://github.com/karloseduard'>
            <img src={imgGit} alt='Logo do Git Hub'/>
        </a>
        <a href='https://www.linkedin.com/in/karlos-eduardo-leit%C3%A3o-cavalcante/'>
            <img src={imgLinkedin} alt='logo do Linkedin'/>
        </a>
        <a href='https://cursos.alura.com.br/user/karloseduardocavalcante56'>
            <img src='https://cursos.alura.com.br/assets/images/logos/logo-alura.svg' alt='logo do Linkedin'/>
        </a>
        </div>
        
        
        </footer>
    )
}