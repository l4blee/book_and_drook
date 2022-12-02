import { Box, Container, Table, TableRow, Typography } from "@suid/material";
import { Component, onMount } from "solid-js";
import { PeripheryNavigation, PlayBillEntry } from "../components";

const Playbill: Component = () => {
    onMount(() => {
        document.title = 'Book и друг | Библиотеки'
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
                    alignItems: 'center',
                    p: '0 85px',
                    mt: '10px'
                }}
            >
                <Typography fontFamily={'Druzhok'} fontSize='5vw'>Афиша</Typography>
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