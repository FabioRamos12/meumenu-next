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
                            <header>
                                <h3>Bolo de Kitkat Trufado</h3>
                                <button>
                                    <Image
                                        src="/remove.svg"
                                        width={20}
                                        height={20}
                                        alt="Remover item"
                                    />
                                </button>
                            </header>

                            <div className={styles.itemInfo}>
                                <div>
                                    <span>10 pessoas</span>
                                    <span>Branca</span>
                                    <span>Redondo</span>
                                    <span>Chantily</span>
                                </div>

                                <span>R$ 40,00</span>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <header>
                                <h3>Bolo de Kitkat Trufado</h3>
                                <button>
                                    <Image
                                        src="/remove.svg"
                                        width={20}
                                        height={20}
                                        alt="Remover item"
                                    />
                                </button>
                            </header>

                            <div className={styles.itemInfo}>
                                <div>
                                    <span>10 pessoas</span>
                                    <span>Branca</span>
                                    <span>Redondo</span>
                                    <span>Chantily</span>
                                </div>

                                <span>R$ 40,00</span>
                            </div>
                        </div>
                    </article>

                    <article className={styles.observations}>
                        <div className={styles.observationHeader}>
                            <Image
                                src="/chat.svg"
                                width={20}
                                height={20}
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
