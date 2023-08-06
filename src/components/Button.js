import styles from './css/Button.module.css';

const Botao = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};

export default Botao;
