"use client";

import styles from "./EmailInput.module.css";

const EmailInput = () => {
  return (
    <form className={styles.wrapper} onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        placeholder="Enter your email"
        className={styles.input}
        required
      />
      <button type="submit" className={styles.button}>
        Submit
      </button>
    </form>
  );
};

export default EmailInput;
