import { Box, Container, Table, TableRow, Typography } from "@suid/material";
import { Component, createResource, For, onMount } from "solid-js";
import { PeripheryNavigation, PlayBillEntry } from "../components";

interface PlaybillPayload {
    date: string
    time: string
    title: string
    place: string
    image: string
}

const Playbill: Component = () => {
    const [playbill, _] = createResource<PlaybillPayload[]>(async () => (await fetch('/api/get_playbill')).json())

    onMount(() => {
        document.title = 'Book и друг | Афиша'
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
                    <TableRow sx={{display: 'flex', flexDirection: 'row', width: 'fit-content', border: '0.2vw solid black'}}>
                        <For each={playbill()?.slice(0, 4)}>
                            {(item) => 
                                <PlayBillEntry
                                    date={item.date}
                                    time={item.time}
                                    title={item.title}
                                    place={item.place}
                                    imgSrc={item.image}
                                />
                            }
                        </For>
                    </TableRow>
                    <TableRow sx={{display: 'flex', flexDirection: 'row', width: 'fit-content', border: '0.2vw solid black', borderTop: 'none'}}>
                    <For each={playbill()?.slice(4, 8)}>
                            {(item) => 
                                <PlayBillEntry
                                    date={item.date}
                                    time={item.time}
                                    title={item.title}
                                    place={item.place}
                                    imgSrc={item.image}
                                />
                            }
                        </For>
                    </TableRow>
                </Table>
            </Container>
        </Box>
    )
}

export default Playbill