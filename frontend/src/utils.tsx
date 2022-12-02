import { createResource, Resource } from "solid-js";

interface Data {
    message: string | undefined,
    nickname: string,
    donated: number
}

export function getData() : Resource<Data> {
    return createResource(async () => (await fetch('/api/get_data', {method: 'POST'})).json())[0]
}
