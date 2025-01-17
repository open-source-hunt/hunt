import styles from "./index.module.scss";

export default function IndexPage() {
  return (
    <main>
      <h1 class={styles.title}>Welcome to SolidStart</h1>
      <p>
        This is the home page. <a href="/welcome">Visit welcome page.</a>
      </p>
    </main>
  );
}