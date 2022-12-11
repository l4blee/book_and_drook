import { createResource, Resource } from "solid-js";

interface Data {
    message: string | undefined,
    nickname: string,
    donated: number
}

export function getUserData() : Resource<Data> {
    return createResource(async () => (await fetch('/api/get_user_data')).json())[0]
}
