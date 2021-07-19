import styles from "../styles/index.module.scss";
import Script from "next/script";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Head>
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                    crossOrigin="anonymous"
                />
            </Head>

            <Script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
                crossOrigin="anonymous"
            />

            <main>
                <section>
                    <article className={styles.test}></article>
                </section>

                <section>
                    <nav
                        id="navbar"
                        className={`navbar navbar-light bg-light px-3 ${styles.tab}`}
                    >
                        <ul className="nav nav-pills">
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="#scrollspyHeading1"
                                >
                                    Bolos
                                </a>
                            </li>

                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="#scrollspyHeading2"
                                >
                                    Doces
                                </a>
                            </li>

                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="#scrollspyHeading3"
                                >
                                    Sobremesas
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div
                        data-bs-spy="scroll"
                        data-bs-target="#navbar"
                        data-bs-offset="44"
                        className={`scrollspy-example ${styles.test}`}
                        tabIndex={0}
                    >
                        <div className={styles.products}>
                            <div className={styles.category}>
                                <h4
                                    id="scrollspyHeading1"
                                    className={styles.categoryTitle}
                                >
                                    Bolos:
                                </h4>
                                <div className={styles.productsCarousel}>
                                    <div className={styles.cardContainer}>
                                        <a
                                            href="/product"
                                            className={`card ${styles.card}`}
                                        >
                                            <Image
                                                src="/bolo-kit-kat-destaque.png"
                                                width={200}
                                                height={150}
                                                objectFit="cover"
                                            />
                                            <div>
                                                <h5
                                                    className={styles.cardTitle}
                                                >
                                                    Bolo de Kitcat Trufado
                                                </h5>
                                                <p className={styles.cardText}>
                                                    Bolo de Kitcat Trufado com
                                                    chocolate. Cobertura de
                                                    frutas vermelhas
                                                </p>
                                                <span
                                                    className={styles.cardPrice}
                                                >
                                                    R$ 30,00
                                                </span>
                                            </div>
                                        </a>

                                        <a className={`card ${styles.card}`}>
                                            <Image
                                                src="/bolo-kit-kat-destaque.png"
                                                width={200}
                                                height={150}
                                                objectFit="cover"
                                            />
                                            <div>
                                                <h5
                                                    className={styles.cardTitle}
                                                >
                                                    Bolo de Kitcat Trufado
                                                </h5>
                                                <p className={styles.cardText}>
                                                    Bolo de Kitcat Trufado com
                                                    chocolate. Cobertura de
                                                    frutas vermelhas Bolo de
                                                    Kitcat Trufado com
                                                    chocolate. Cobertura de
                                                    frutas vermelhas
                                                </p>
                                                <span
                                                    className={styles.cardPrice}
                                                >
                                                    R$ 30,00
                                                </span>
                                            </div>
                                        </a>

                                        <a className={`card ${styles.card}`}>
                                            <Image
                                                src="/bolo-kit-kat-destaque.png"
                                                width={200}
                                                height={150}
                                                objectFit="cover"
                                            />
                                            <div>
                                                <h5
                                                    className={styles.cardTitle}
                                                >
                                                    Bolo de Kitcat Trufado
                                                </h5>
                                                <p className={styles.cardText}>
                                                    Bolo de Kitcat Trufado com
                                                    chocolate. Cobertura de
                                                    frutas vermelhas
                                                </p>
                                                <span
                                                    className={styles.cardPrice}
                                                >
                                                    R$ 30,00
                                                </span>
                                            </div>
                                        </a>

                                        <a className={`card ${styles.card}`}>
                                            <Image
                                                src="/bolo-kit-kat-destaque.png"
                                                width={200}
                                                height={150}
                                                objectFit="cover"
                                            />
                                            <div>
                                                <h5
                                                    className={styles.cardTitle}
                                                >
                                                    Bolo de Kitcat Trufado
                                                </h5>
                                                <p className={styles.cardText}>
                                                    Bolo de Kitcat Trufado com
                                                    chocolate. Cobertura de
                                                    frutas vermelhas
                                                </p>
                                                <span
                                                    className={styles.cardPrice}
                                                >
                                                    R$ 30,00
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.category}>
                                <h4
                                    id="scrollspyHeading2"
                                    className={styles.categoryTitle}
                                >
                                    Doces:
                                </h4>
                                <div className={styles.productsCarousel}>
                                    <div className={styles.cardContainer}>
                                        <a className={`card ${styles.card}`}>
                                            <Image
                                                src="/bolo-kit-kat-destaque.png"
                                                width={200}
                                                height={150}
                                                objectFit="cover"
                                            />
                                            <div>
                                                <h5
                                                    className={styles.cardTitle}
                                                >
                                                    Bolo de Kitcat Trufado
                                                </h5>
                                                <p className={styles.cardText}>
                                                    Bolo de Kitcat Trufado com
                                                    chocolate. Cobertura de
                                                    frutas vermelhas
                                                </p>
                                                <span
                                                    className={styles.cardPrice}
                                                >
                                                    R$ 30,00
                                                </span>
                                            </div>
                                        </a>

                                        <a className={`card ${styles.card}`}>
                                            <Image
                                                src="/bolo-kit-kat-destaque.png"
                                                width={200}
                                                height={150}
                                                objectFit="cover"
                                            />
                                            <div>
                                                <h5
                                                    className={styles.cardTitle}
                                                >
                                                    Bolo de Kitcat Trufado
                                                </h5>
                                                <p className={styles.cardText}>
                                                    Bolo de Kitcat Trufado com
                                                    chocolate. Cobertura de
                                                    frutas vermelhas Bolo de
                                                    Kitcat Trufado com
                                                    chocolate. Cobertura de
                                                    frutas vermelhas
                                                </p>
                                                <span
                                                    className={styles.cardPrice}
                                                >
                                                    R$ 30,00
                                                </span>
                                            </div>
                                        </a>

                                        <a className={`card ${styles.card}`}>
                                            <Image
                                                src="/bolo-kit-kat-destaque.png"
                                                width={200}
                                                height={150}
                                                objectFit="cover"
                                            />
                                            <div>
                                                <h5
                                                    className={styles.cardTitle}
                                                >
                                                    Bolo de Kitcat Trufado
                                                </h5>
                                                <p className={styles.cardText}>
                                                    Bolo de Kitcat Trufado com
                                                    chocolate. Cobertura de
                                                    frutas vermelhas
                                                </p>
                                                <span
                                                    className={styles.cardPrice}
                                                >
                                                    R$ 30,00
                                                </span>
                                            </div>
                                        </a>

                                        <a className={`card ${styles.card}`}>
                                            <Image
                                                src="/bolo-kit-kat-destaque.png"
                                                width={200}
                                                height={150}
                                                objectFit="cover"
                                            />
                                            <div>
                                                <h5
                                                    className={styles.cardTitle}
                                                >
                                                    Bolo de Kitcat Trufado
                                                </h5>
                                                <p className={styles.cardText}>
                                                    Bolo de Kitcat Trufado com
                                                    chocolate. Cobertura de
                                                    frutas vermelhas
                                                </p>
                                                <span
                                                    className={styles.cardPrice}
                                                >
                                                    R$ 30,00
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.category}>
                                <h4
                                    id="scrollspyHeading3"
                                    className={styles.categoryTitle}
                                >
                                    Sobremesas:
                                </h4>
                                <div className={styles.productsCarousel}>
                                    <div className={styles.cardContainer}>
                                        <a className={`card ${styles.card}`}>
                                            <Image
                                                src="/bolo-kit-kat-destaque.png"
                                                width={200}
                                                height={150}
                                                objectFit="cover"
                                            />
                                            <div>
                                                <h5
                                                    className={styles.cardTitle}
                                                >
                                                    Bolo de Kitcat Trufado
                                                </h5>
                                                <p className={styles.cardText}>
                                                    Bolo de Kitcat Trufado com
                                                    chocolate. Cobertura de
                                                    frutas vermelhas
                                                </p>
                                                <span
                                                    className={styles.cardPrice}
                                                >
                                                    R$ 30,00
                                                </span>
                                            </div>
                                        </a>

                                        <a className={`card ${styles.card}`}>
                                            <Image
                                                src="/bolo-kit-kat-destaque.png"
                                                width={200}
                                                height={150}
                                                objectFit="cover"
                                            />
                                            <div>
                                                <h5
                                                    className={styles.cardTitle}
                                                >
                                                    Bolo de Kitcat Trufado
                                                </h5>
                                                <p className={styles.cardText}>
                                                    Bolo de Kitcat Trufado com
                                                    chocolate. Cobertura de
                                                    frutas vermelhas Bolo de
                                                    Kitcat Trufado com
                                                    chocolate. Cobertura de
                                                    frutas vermelhas
                                                </p>
                                                <span
                                                    className={styles.cardPrice}
                                                >
                                                    R$ 30,00
                                                </span>
                                            </div>
                                        </a>

                                        <a className={`card ${styles.card}`}>
                                            <Image
                                                src="/bolo-kit-kat-destaque.png"
                                                width={200}
                                                height={150}
                                                objectFit="cover"
                                            />
                                            <div>
                                                <h5
                                                    className={styles.cardTitle}
                                                >
                                                    Bolo de Kitcat Trufado
                                                </h5>
                                                <p className={styles.cardText}>
                                                    Bolo de Kitcat Trufado com
                                                    chocolate. Cobertura de
                                                    frutas vermelhas
                                                </p>
                                                <span
                                                    className={styles.cardPrice}
                                                >
                                                    R$ 30,00
                                                </span>
                                            </div>
                                        </a>

                                        <a className={`card ${styles.card}`}>
                                            <Image
                                                src="/bolo-kit-kat-destaque.png"
                                                width={200}
                                                height={150}
                                                objectFit="cover"
                                            />
                                            <div>
                                                <h5
                                                    className={styles.cardTitle}
                                                >
                                                    Bolo de Kitcat Trufado
                                                </h5>
                                                <p className={styles.cardText}>
                                                    Bolo de Kitcat Trufado com
                                                    chocolate. Cobertura de
                                                    frutas vermelhas
                                                </p>
                                                <span
                                                    className={styles.cardPrice}
                                                >
                                                    R$ 30,00
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
