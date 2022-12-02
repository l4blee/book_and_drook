import { Box, Container, Typography } from "@suid/material";
import { Component, onMount } from "solid-js";
import { PeripheryNavigation } from "../components";
import { getData } from "../utils";
import monster from '../assets/monster.svg'
import hungry from '../assets/hungry.svg'

const Monster: Component = () => {
    const data = getData()

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
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                {data() && <Typography fontFamily='Actay' fontSize='2vw' width='fit-content'>Монстр доволен на: {data()?.donated} руб</Typography>}
                <Box>
                    <Box><img src={monster}/></Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '45vw',
                        left: '5%'
                }}>
                    <Box width='10vw'><img src={hungry} width='100%'/></Box>
                    <Typography fontFamily='Actay' fontSize='2vw'>Накорми монстра, получи подарки и помоги библиотекам всесте с нами</Typography>
                </Box>
            </Container>
        </Box>
    )
}

export default Monster