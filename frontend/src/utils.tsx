import { createResource } from "solid-js";

export function getAuth() {
    return createResource(async () => await fetch('/api/get_data', {method: 'POST'}))[0]
}
