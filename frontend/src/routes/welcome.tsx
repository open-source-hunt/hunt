import { createResource, Switch, Match } from "solid-js";
import { fetchApi } from "../utils/api";

import styles from "./welcome.module.scss";

interface Welcome {
  Message: string;
}

async function fetchRouteData(): Promise<Welcome> {
    const response = await fetchApi("/welcome")
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }
    return await response.json()
}

export default function WelcomePage() {
    const [data] = createResource<Welcome>(fetchRouteData)

    return (
        <Switch fallback={<h1 class={styles.title}>No message available</h1>}>
            <Match when={data.loading}>
                <h1 class={styles.title}>Loading...</h1>
            </Match>
            <Match when={data.error}>
                <h1 class={styles.title}>Error: {data.error.message}</h1>
            </Match>
            <Match when={data()}>
                <h1 class={styles.title}>{data()!.Message}</h1>
            </Match>
        </Switch>
    );
}