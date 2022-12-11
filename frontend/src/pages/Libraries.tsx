import { Box, Container } from "@suid/material";
import { Component, createResource, For, onMount } from "solid-js";
import { LibraryEntry, PeripheryNavigation } from "../components";

interface LibraryPayload {
    title: string,
    address: string,
    booklist: Array<[string, boolean]>,
    image: string
}


const Libraries: Component = () => {
    const [libraries, _] = createResource<LibraryPayload[]>(async () => (await fetch('/api/get_libraries')).json())

    onMount(() => {
        document.title = 'Book и друг | Библиотеки'
    })

    return (
        <Box sx={{
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <PeripheryNavigation/>
            <Container
                maxWidth={false}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '0 !important'
                }}
            >
                <For each={libraries()}>
                    {(item, _) => 
                        <LibraryEntry
                            title={item.title}
                            address={item.address}
                            bookList={item.booklist}
                            imgSrc={item.image}
                        />
                    }
                </For>
            </Container>
        </Box>
    )
}

export default Libraries