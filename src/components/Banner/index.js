import styles from './Banner.module.css'
import circuloColorido from "../../assets/circulo_colorido.png"
import minhaFoto from '../../assets/1677209468559.jpg'

export  default function Banner(){
    return(
        <div className={styles.banner}>
            <div className={styles.apresentaca}>
                <h1 className={styles.titulo}>
                    Olá, Mundo
                </h1>
                <p className={styles.paragrafo}>Desenvolvedor Front-End com experiência em tecnologias como React.js, Next.js, JavaScript e TypeScript. Estudante de Engenharia de Software na UFC, com forte foco em criar soluções inovadoras e de alta qualidade. Busco uma oportunidade para aplicar minhas habilidades e contribuir para projetos desafiadores.</p>
            </div>
            <div className={styles.imagens}>
                <img src={circuloColorido} 
                aria-hidden={true}
                alt='' 
                className={styles.circuloColorido}/>

                <img src={minhaFoto} alt='Foto do Karlos Sorindo' className={styles.minhaFoto}/>
            </div>
        </div>
    )
}