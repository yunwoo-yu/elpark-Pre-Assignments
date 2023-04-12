import styles from './Footer.module.css';

interface Props {
  title: string | undefined;
  copyright: string | undefined;
}

function Footer({ copyright, title }: Props) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <p className={styles.footerTitle}>{title}</p>
        <small className={styles.copyright}>{copyright}</small>
      </div>
    </footer>
  );
}

export default Footer;
