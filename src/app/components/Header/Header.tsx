import styles from "./Header.module.scss";

const Header: React.FC = ({}) => {
  return (
    <header className={styles.header}>
      <div>
        <img src="icons/logo.svg" alt="InsBank" />
      </div>
      <nav>
        <ul className={styles.navigation}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Service</a>
          </li>
          <li>
            <a href="#product">Product</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className={styles.buttons}>
        <button className={styles.btnSign}>Sign in</button>
        <button className="btn-green">Get Started </button>
      </div>
    </header>
  );
};

export default Header;
