import styles from "./button.module.css";

const Button = ({ size = "m", className = "", ...otherProps }) => {
  return (
    <button
      {...otherProps}
      className={`${styles.button} ${styles[size]} ${className}`}
    />
  );
};

export default Button;
