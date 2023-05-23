import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Wallace!
            </h3>

            {/* <img
                src={fotoSobreMim}
                alt="Foto sorrindo"
                className={styles.fotoSobreMim}
            /> */}

            <p className={styles.paragrafo}>
                Oi, tudo bem? Meu nome é Wallace e estou feliz de te ver por aqui.
            </p>
            <p className={styles.paragrafo}>
                Conhecido como Cardoso, sou formado em Marketing pela UNOPAR e um verdadeiro apaixonado pelo mundo da tecnologia.
            </p>
            <p className={styles.paragrafo}>
                Muito antes de pensar em fazer quaisquer cursos na área, me aventurei na criação de blogs e fui aos poucos entendendo mais sobre HTML e CSS.
            </p>
            <p className={styles.paragrafo}>
                Em novembro de 2022 tive a oportunidade de me tornar aluno do programa Oracle Next Education, o que aproximou muito mais da programação, uma verdadeira fonte de aprendizado com professores incríveis.
            </p>
            <p className={styles.paragrafo}>
                Agradeço a Deus por tudo que tem me proporcionado, agradeço a minha família pelo apoio e, claro, meus sinceros agradecimentos a Oracle e Alura pela oportunidade de estudar no ONE.
            </p>
        </PostModelo>
    )
}