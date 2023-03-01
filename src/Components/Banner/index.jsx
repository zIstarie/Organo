import styles from './Banner.module.css';

export function Banner() {
    return (
        <header className={styles.banner}>
            <img src="/assets/banner.png" alt="Banner principal da página do Organo" />
        </header>
    );
}