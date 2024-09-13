import styles from "../features/features.module.css"

const Features = () => {
    return (
        <main className={styles.mainContainer}>
            <div className={styles.container}>
                <h1>Features</h1>
                <a href="/image" className={styles.imageButton}>
                    Try PIReT for images
                </a>
            </div>
        </main>
    );
};

export default Features;