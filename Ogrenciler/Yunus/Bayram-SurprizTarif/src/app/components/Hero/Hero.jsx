import React from 'react';
import styles from './Hero.module.css';
import { Container, Row, Col, InputGroup, FormControl, Button, Badge, Card } from 'react-bootstrap';
import { FaSearch, FaStar, FaUsers, FaPizzaSlice, FaHamburger, FaFish, FaIceCream, FaSeedling, FaDrumstickBite } from 'react-icons/fa';

const HeroSection = () => {
    return (
        <div className={styles.wrapper}>
            <section className={styles.heroSection}>
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className="mb-5 mb-lg-0">
                            <Badge bg="warning" text="dark" className={styles.heroBadge}>
                                Türkiye'nin En Büyük Tarif Platformu
                            </Badge>

                            <h1 className={styles.heroTitle}>
                                Sevdiğiniz Tarifleri <span className={styles.heroTitleAccent}>Keşfedin ve Paylaşın</span>
                            </h1>

                            <p className={styles.heroDescription}>
                                Binlerce şef ve yemek tutkunuyla tanışın. En lezzetli tarifleri keşfedin,
                                kendi mutfak sırlarınızı paylaşın ve yemek yapma deneyiminizi bir üst seviyeye taşıyın.
                            </p>

                            <div className={styles.searchBox}>
                                <InputGroup>
                                    <FormControl
                                        placeholder="Tarif ara..."
                                        className={styles.searchInput}
                                    />
                                    <Button variant="warning" className={styles.searchButton}>
                                        <FaSearch />
                                    </Button>
                                </InputGroup>
                            </div>

                            <div className={styles.statsRow}>
                                <div className={styles.statsItem}>
                                    <h3 className={styles.statsNumber}>10K+</h3>
                                    <p className={styles.statsLabel}>Tarif</p>
                                </div>
                                <div className={styles.statsItem}>
                                    <h3 className={styles.statsNumber}>5K+</h3>
                                    <p className={styles.statsLabel}>Şef</p>
                                </div>
                                <div className={styles.statsItem}>
                                    <h3 className={styles.statsNumber}>50K+</h3>
                                    <p className={styles.statsLabel}>Üye</p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={6}>
                            <div className={styles.heroImageWrap}>
                                <img
                                    src="/images/hero-food.jpg"
                                    alt="Tarif Görseli"
                                    className={styles.heroImage}
                                />

                                <Card className={`${styles.featureCard} ${styles.featureCardTop} d-flex flex-row`}>
                                    <div className={styles.featureIcon}>
                                        <FaStar />
                                    </div>
                                    <div className={styles.featureContent}>
                                        <h6 className={styles.featureTitle}>Popüler Tarifler</h6>
                                        <p className={styles.featureDescription}>Haftalık önerileri keşfedin</p>
                                    </div>
                                </Card>

                                <Card className={`${styles.featureCard} ${styles.featureCardBottom} d-flex flex-row`}>
                                    <div className={styles.featureIcon}>
                                        <FaUsers />
                                    </div>
                                    <div className={styles.featureContent}>
                                        <h6 className={styles.featureTitle}>Topluluk</h6>
                                        <p className={styles.featureDescription}>Deneyimlerinizi paylaşın</p>
                                    </div>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className={styles.categorySection}>
                <Container>
                    <h2 className={styles.sectionTitle}>Popüler Kategoriler</h2>
                    <p className={styles.sectionSubtitle}>
                        Sevdiğiniz yemek kategorilerini keşfedin ve binlerce tarif arasından ilham alın
                    </p>

                    <div className={styles.categoryGrid}>
                        <div className={styles.categoryCard}>
                            <div className={styles.categoryIcon}>
                                <FaPizzaSlice />
                            </div>
                            <h6 className={styles.categoryName}>Pizza</h6>
                        </div>

                        <div className={styles.categoryCard}>
                            <div className={styles.categoryIcon}>
                                <FaHamburger />
                            </div>
                            <h6 className={styles.categoryName}>Burger</h6>
                        </div>

                        <div className={styles.categoryCard}>
                            <div className={styles.categoryIcon}>
                                <FaFish />
                            </div>
                            <h6 className={styles.categoryName}>Deniz Ürünleri</h6>
                        </div>

                        <div className={styles.categoryCard}>
                            <div className={styles.categoryIcon}>
                                <FaIceCream />
                            </div>
                            <h6 className={styles.categoryName}>Tatlılar</h6>
                        </div>

                        <div className={styles.categoryCard}>
                            <div className={styles.categoryIcon}>
                                <FaSeedling />
                            </div>
                            <h6 className={styles.categoryName}>Vegan</h6>
                        </div>

                        <div className={styles.categoryCard}>
                            <div className={styles.categoryIcon}>
                                <FaDrumstickBite />
                            </div>
                            <h6 className={styles.categoryName}>Et Yemekleri</h6>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    )
}

export default HeroSection