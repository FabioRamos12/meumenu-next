import Head from "next/head";

import styles from "../styles/checkout.module.scss";

import { Header } from "../components/Header";
import Image from "next/image";

export default function Checkout() {
    return (
        <>
            <Head>
                <title>Meu Menu | Checkout</title>
            </Head>

            <main>
                <Header />

                <section className={styles.checkoutContainer}>
                    <h2>M.A Doceria Artesanal</h2>

                    <article className={styles.checkoutItems}>
                        <div className={styles.item}>
                            <div>
                                <h3>Bolo de Kitkat Trufado</h3>
                                <button>
                                    <Image
                                        src="/remove.svg"
                                        width={15}
                                        height={15}
                                        alt="Remover item"
                                    />
                                </button>
                            </div>

                            <div>
                                <div>
                                    <span>10 pessoas</span>
                                    <span>Branca</span>
                                    <span></span>
                                    <span></span>
                                </div>

                                <span>R$ 40,00</span>
                            </div>
                        </div>
                    </article>

                    <article className={styles.observations}>
                        <div>
                            <Image
                                src="/chat.svg"
                                width={15}
                                height={15}
                                alt="Observações"
                            />
                            <span>Alguma observação?</span>
                        </div>

                        <textarea placeholder="Ex.: Tirar a cebola, maionese à parte, ponto da carne, etc."></textarea>
                    </article>
                </section>
            </main>
        </>
    );
}
