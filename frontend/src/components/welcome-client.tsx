import { createResource } from "solid-js";

import styles from "./welcome-client.module.scss";

interface Welcome {
  Message: string;
}

async function fetchWelcome(): Promise<Welcome> {
  let response;
  try {
    response = await fetch("/api/welcome");
    console.log("Response:", response);
  } catch (error) {
    console.log("Error:", error);
    throw new Error(`Error: ${error}`);
  }
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  const data = response.json();
  return data;
};

export default function WelcomeClient() {
  const [data] = createResource<Welcome>(fetchWelcome);

  return (
    <section>
      <h1 class={styles.title}>{data?.loading
          ? "Loading..."
          : data?.error
          ? `Error: ${data.error.message}`
          : data?.()?.Message || "No message available"}</h1>
      <p class={styles.description}>This part is rendered on the client.</p>
    </section>
  );
}