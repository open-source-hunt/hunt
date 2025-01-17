import { createResource, Resource } from "solid-js";
import WelcomeClient from "~/components/welcome-client";

import styles from "./welcome.module.scss";

interface Welcome {
  Message: string;
}

export function routeData(): Resource<Welcome | undefined> {
  const [data] = createResource<Welcome>(async (): Promise<Welcome> => {
    const response = await fetch("/api/welcome");
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  });
  return data;
}

export default function WelcomePage(props: { data: Resource<Welcome | undefined> }) {
  return (
    <main>
      <h1 class={styles.title}>{props.data?.loading
          ? "Loading..."
          : props.data?.error
          ? `Error: ${props.data.error.message}`
          : props.data?.()?.Message || "No message available"}</h1>
      <p class={styles.description}>This part is rendered on the server.</p>
      <WelcomeClient />
    </main>
  );
}