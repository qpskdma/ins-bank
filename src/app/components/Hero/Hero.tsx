import styles from "./Hero.module.scss";

const Hero: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.firstBlock}>
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
                <img src="icons/play-btn.svg" alt="Play button" />
              </span>
              How it works
            </span>
          </div>
          <div className={styles.imagesWrapper}>
            <img
              width={194}
              height={150}
              loading="lazy"
              src="images/woman.jpg"
              alt=""
            />
            <img
              width={210}
              height={196}
              loading="lazy"
              src="images/money-girl.jpg"
              alt=""
            />
            <div className={styles.joinWrapper}>
              <button className="btn-green">Join Now</button>
              <div className={styles.joinText}>
                <span>Trusted User</span>
                <span className={styles.greenText}>
                  125<div className={styles.textMini}>k+</div>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.secondBlock}>
          <div className={styles.activateAnimation}>
            <button className={styles.ringBtn}>Savings Growth</button>
            <div className={styles.parallaxCard}>
              <img src="images/card-third.png" alt="card" />
              <img src="images/card-second.png" alt="card" />
              <img src="images/card-first.png" alt="card" />
            </div>
          </div>
          <div>
            <div className={styles.secondTitle}>Banking for Everyone </div>
            <div className={styles.criteries}>
              <div className={styles.secondSmallTitle}>
                People joined <div className={styles.greenText}>$94,6b</div>
              </div>
              <div className={styles.horizontal}></div>
              <div className={styles.secondSmallTitle}>
                Fraud Probability <div className={styles.greenText}>0,25%</div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
