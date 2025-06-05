import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2024 Yasindu Weerakkody. +94 78 564 0616 <br />
        All rights reserved.
      </p>
    </section>
  );
}

export default Footer;
