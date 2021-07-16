import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <Link href="/">
                <button type="button">
                    <Image
                        src="/left-arrow.svg"
                        width={26}
                        height={28}
                        alt="Voltar"
                    />
                </button>
            </Link>
            <h2>Bolo de Kitkat Trufado</h2>

            <div></div>
        </header>
    );
}
