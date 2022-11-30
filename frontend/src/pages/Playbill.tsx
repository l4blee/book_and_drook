import { Box, Button, Container, Table, TableCell, TableRow, Typography } from "@suid/material";
import { Component } from "solid-js";
import { PlayBillEntry } from "../components";

const Playbill: Component = () => {
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
                    mt: '60px',
                    p: '0 85px', 
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
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    p: '0 85px',
                    mt: '10px'
                }}
            >
                <Typography fontFamily={'Druzhok'} fontSize='80px'>Афиша</Typography>
                <Table sx={{width: 'fit-content'}}>
                    <TableRow sx={{display: 'flex', flexDirection: 'row', width: 'fit-content', border: '3px solid black'}}>
                        <PlayBillEntry/>
                        <PlayBillEntry/>
                        <PlayBillEntry/>
                        <PlayBillEntry/>
                    </TableRow>
                    <TableRow sx={{display: 'flex', flexDirection: 'row', width: 'fit-content', border: '3px solid black', borderTop: 'none'}}>
                        <PlayBillEntry/>
                        <PlayBillEntry/>
                        <PlayBillEntry/>
                        <PlayBillEntry/>
                    </TableRow>
                </Table>
            </Container>
        </Box>
    )
}

export default Playbill