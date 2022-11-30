import ArrowForward from "@suid/icons-material/ArrowForward";
import { Box, Button, Container, TableCell, Typography } from "@suid/material";
import { Component, For } from "solid-js";


const LibraryEntry: Component<{id: number, title: string, address: string, bookList: Array<string>, imgSrc: string}> =
 ({id, title, address, bookList, imgSrc}) => {
    return (
        <Container 
            maxWidth={false}
            sx={{
            display: 'flex',
            flexDirection: 'column',
            p: '0 50px',
            m: '20px 0'
        }}>
            <Container maxWidth={false} sx={{display: 'flex', flexDirection: 'row'}}>
                <Box width='935px' mr='37px'>
                    <Typography fontFamily='Druzhok' fontSize='80px' lineHeight='70px'>
                        {title}
                    </Typography>
                    <Typography color='#E15F41' fontFamily='Actay' fontSize='30px' fontStyle='italic' sx={{ml: '44px'}}>
                        {address}
                    </Typography>
                </Box>
                <Button 
                    sx={{bgcolor: '#ACCDAA', color: '#000', height: '100px', width:' 650px', borderRadius: '50px', border: '5px solid #000'}}
                    href={`/support/${id}`}
                >
                    <Typography fontFamily='Actay' fontSize='50px' lineHeight='50px' children={'Поддержать'}/><ArrowForward sx={{fontSize: '80px'}}/>
                </Button>
            </Container>
            <Container 
                maxWidth={false} 
                sx={{
                display: 'flex',
                flexDirection: 'row'
            }}>
                <Box 
                    sx={{
                    backgroundImage: `url(${imgSrc})`, 
                    backgroundPosition: 'center',
                    backgroundPositionY: '-60px',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '700px auto',
                    border: '5px solid #000',
                    borderRadius: '30px',
                    width: '700px', 
                    height: '450px',
                    m: '0 50px'
                }}/>
                <Box sx={{
                }}>
                    <Typography fontFamily='Actay' fontSize='70px' mb='10px' color='#E15F41'>СПИСОК КНИГ</Typography>
                    <For each={bookList}>
                        {(item) => <Typography fontWeight='200' fontFamily='Actay' fontSize='23px' lineHeight='23px' fontStyle='italic'>{item}</Typography>}
                    </For>
                </Box>
            </Container>
        </Container>
    )
}

const PlayBillEntry: Component = () => {
    return (
        <TableCell 
            sx={{
                fontSize: '25px', 
                height: '320px',
                width: '430px',
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'space-around',
                borderRight: '3px solid black',
                '&:last-child': {
                    borderRight: 'none'
                }
        }}>
            <Box sx={{height: '168px', width: '378px', bgcolor: '#D9D9D9'}}/>
            лялялялляля
        </TableCell>
    )
}

export { LibraryEntry, PlayBillEntry }