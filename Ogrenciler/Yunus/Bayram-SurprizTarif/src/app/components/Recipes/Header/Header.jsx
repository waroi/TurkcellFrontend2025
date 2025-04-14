import styles from './../../../recipes/Recipes.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.badge}>Türkiye'nin En Büyük Tarif Platformu</div>
            <h1 className={styles.title}>Sevdiğiniz Tarifleri</h1>
            <h2 className={styles.subtitle}>Keşfedin ve Paylaşın</h2>
            <p className={styles.description}>
                Binlerce şef ve yemek tutkunuyla tanışın. En lezzetli tarifleri keşfedin, kendi
                mutfak sırlarınızı paylaşın ve yemek yapma deneyiminizi bir üst seviyeye
                taşıyın.
            </p>
        </div>
    )
}

export default Header