import { Box, Container } from "@suid/material";
import { Component, onMount } from "solid-js";
import { PeripheryNavigation } from "../components";

const Monster: Component = () => {
    onMount(() => {
        document.title = 'Book и друг | Книжный монстр'
    })
    
    return (
        <Box sx={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <PeripheryNavigation/>
            <Container
                maxWidth={false}
                sx={{
                    height: '100%'
                }}
            >
                <h2>Монстр</h2>
            </Container>
        </Box>
    )
}

export default Monster