import styles from './SobreMim.module.css'
import PostModelo from "components/PostModelo";
import fotoCapa from 'assets/sobre_mim_capa.png'
import fotoSobreMim from 'assets/1677209468559.jpg'
export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo='Sobre Mim'
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou Karlos!    </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Antônio Evaldo sorrindo"
                className={styles.fotoSobreMim}
            />
            <p className={styles.paragrafo}>
            Sou estudante de Engenharia de Software na Universidade Federal do Ceará (UFC)
            </p>
            <p className={styles.paragrafo}>
            E minha jornada na programação começou ainda no ensino médio, quando tive o primeiro contato com lógica de programação. A partir daí, descobri minha paixão por tecnologia e comecei a me dedicar ao estudo de linguagens de programação. Meu primeiro passo foi aprender Python por meio do "Curso em Vídeo". Em seguida, explorei o desenvolvimento web com HTML e CSS, o que me fez mergulhar ainda mais nesse universo.
            </p>
            <p className={styles.paragrafo}>
            Minha primeira experiência prática aconteceu na Include Jr, uma empresa júnior da Universidade, onde tive a oportunidade de aplicar meus conhecimentos em projetos reais. Esse período foi fundamental para desenvolver habilidades como trabalho em equipe, comunicação e responsabilidade, além de reforçar meu aprendizado técnico.
            </p>
            <p className={styles.paragrafo}>
            Desde então, tenho me dedicado a aprimorar minhas habilidades em desenvolvimento através de diversos cursos e formações na Alura. Estou sempre em busca de novos desafios e oportunidades de aprendizado, focado em me tornar um profissional cada vez mais completo no campo do desenvolvimento de software.
            </p>
        </PostModelo>
    )
}