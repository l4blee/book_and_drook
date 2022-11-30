import { Box, Button, Container } from "@suid/material";
import { Component } from "solid-js";

const Monster: Component = () => {
    return (
        <Box sx={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Box 
                component='header'
                sx={{
                    display: 'flex', 
                    alignItems: 'end', 
                    width: '100%',
                    justifyContent: 'space-between', 
                    p: '60px 85px', 
                    textAlign: 'center'
                }}>
                <Button sx={{height: '80px', color: '#000', lineHeight: '25px', letterSpacing: '0.1rem',fontFamily: 'Actay', fontSize: '25px', mr: '79px'}} href='/'>Главная</Button>
                <Button sx={{height: '80px', color: '#000', lineHeight: '25px', letterSpacing: '0.1rem',fontFamily: 'Actay', fontSize: '25px', mr: '68px'}} href='/monster'>Книжный<br/>монстр</Button>
                <Button sx={{height: '80px', color: '#000', lineHeight: '25px', letterSpacing: '0.1rem', fontFamily: 'Actay', fontSize: '25px', mr: '43px'}} href='/libraries'>Библиотеки</Button>
                <Button sx={{height: '80px', color: '#000', lineHeight: '25px', letterSpacing: '0.1rem', fontFamily: 'Actay', fontSize: '25px'}} href='/playbill'>Афиша</Button>
            </Box>
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