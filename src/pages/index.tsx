import Head from "next/head";
import Image from "next/image";

import styles from "../styles/index.module.scss";

import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { GetStaticProps } from "next";
import { api } from "../services/api";

type Info = {
    optionName: string;
    optionPrice: string;
    check: boolean;
};

type Choosable = {
    name: string;
    info: Info[];
};

type HomeProps = {
    choosables: Choosable[];
};

export default function Home({ choosables }: HomeProps) {
    console.log(choosables);

    return (
        <>
            <Head>
                <title>Meu Menu | M.A Doceria Artesanal</title>
            </Head>

            <main>
                <Header />

                <section className={styles.productInfoContainer}>
                    <div className={styles.productImage}>
                        <Image
                            src="/bolo-kit-kat-destaque.png"
                            width={600}
                            height={300}
                            objectFit="cover"
                            alt="Imagem do Produto"
                        />
                    </div>
                    <div className={styles.productInfo}>
                        <h2 className={styles.productName}>
                            Bolo de Kitkat Trufado com sabor de cereja
                        </h2>
                        <span className={styles.productPrice}>
                            A partir de R$ 30,00
                        </span>
                        <p className={styles.productDescription}>
                            Bolo de Kitkat com chocolate. Cobertura de frutas
                            vermelhasBolo de Kitkat com chocolate. Bolo de
                            Kitkat com chocolate. Cobertura de frutas
                            vermelhasBolo de Kitkat com chocolate.
                        </p>
                    </div>
                </section>

                <section>
                    {choosables.map((choosable, index) => {
                        return (
                            <article
                                className={styles.choosableOptions}
                                key={index}
                            >
                                <header>
                                    <h3>{choosable.name}</h3>
                                </header>
                                {choosable.info.map((info, infoIndex) => {
                                    return (
                                        <label
                                            htmlFor={info.optionName}
                                            className={styles.option}
                                            key={infoIndex}
                                        >
                                            <span className={styles.optionName}>
                                                {info.optionName}
                                            </span>
                                            <div>
                                                <span
                                                    className={
                                                        styles.optionPrice
                                                    }
                                                >
                                                    + R$ {info.optionPrice}
                                                </span>
                                                <input
                                                    type="checkbox"
                                                    id={info.optionName}
                                                    defaultChecked={info.check}
                                                />
                                            </div>
                                        </label>
                                    );
                                })}
                            </article>
                        );
                    })}
                </section>

                <Button />
            </main>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const { data } = await api.get("choosables");

    const choosables = data.map((choosable) => {
        choosable.choosableInfo.map((info) => {
            info.optionPrice = info.optionPrice.toString();
            info.optionPrice = parseFloat(info.optionPrice)
                .toFixed(2)
                .replace(".", ",");
        });

        return {
            name: choosable.choosableName,
            info: choosable.choosableInfo,
        };
    });

    return {
        props: {
            choosables,
        },
    };
};
