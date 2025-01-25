import styles from "./Hero.module.scss";

const Hero: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.category}>
          <div>Financial</div>
          <div>Banking</div>
        </div>
        <div className={styles.description}>
          Inclusive Banking for Everyone.
        </div>
        <div className={styles.buttons}>
          <button className={styles.btnStarted}>
            <span>Let’s Get Started</span>
          </button>
          <span className={styles.playBtnText}>
            <span className={styles.playBtn}>
              <img src="/icons/play-btn.svg" alt="Play button" />
            </span>
            How it works
          </span>
        </div>
        <div className={styles.imagesWrapper}>
          <img
            width={194}
            height={150}
            loading="lazy"
            src="/images/woman.jpg"
            alt=""
          />
          <img
            width={210}
            height={196}
            loading="lazy"
            src="/images/money-girl.jpg"
            alt=""
          />
          <div className={styles.JoinWrapper}>
            <button>Join Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
