import Link from "next/link";
import styles from "./styles.module.scss";

export function Button() {
    return (
        <footer className={styles.buttonContainer}>
            <Link href="/checkout">
                <button type="button">
                    <span>1 item</span>
                    <span className={styles.buttonText}>Adicionar</span>
                    <span>R$ 14,00</span>
                </button>
            </Link>
        </footer>
    );
}
