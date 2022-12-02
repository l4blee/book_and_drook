import ArrowForward from "@suid/icons-material/ArrowForward";
import { Box, Button, Container, TableCell, Typography } from "@suid/material";
import { Component, For, JSX } from "solid-js";


const LibraryEntry: Component<{title: string, address: string, bookList: Array<string>, imgSrc: string}> =
 ({title, address, bookList, imgSrc}) => {
    return (
        <Container 
            disableGutters
            maxWidth={false}
            sx={{
            display: 'flex',
            flexDirection: 'column',
            m: '30px 0',
            p: 0
        }}>
            <Container maxWidth={false} sx={{padding: '0 2%'}}>
                <Container maxWidth={false} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <Box width='45vw' mr='10%'>
                        <Typography fontFamily='Druzhok' fontSize='4.5vw' lineHeight='100%'>
                            {title}
                        </Typography>
                        <Typography color='#E15F41' fontFamily='Actay' fontSize='1.5vw' fontStyle='italic' sx={{ml: '44px'}}>
                            Адрес: {address}
                        </Typography>
                    </Box>
                    <Box width='35vw'>
                        <Button 
                            sx={{bgcolor: '#ACCDAA', color: '#000', height: '5vw', width: '35vw', borderRadius: '50px', border: '5px solid #000'}}
                            href='/support'
                        >
                            <Typography fontFamily='Actay' fontSize='2.5vw' lineHeight='100%' children={'Поддержать'}/>
                            <ArrowForward sx={{fontSize: '4vw'}}/>
                        </Button>
                        <Typography
                            sx={{
                                fontSize: '0.7vw',
                                ml: '20%',
                                mr: '5%',
                                mt: '1%',
                                fontStyle: 'italic'
                        }}>
                            Укажите в комментариях к переводу библиотеку, которую вы хотите поддержать, чтобы мы могли купить для неё книги
                        </Typography>
                    </Box>
                </Container>
                <Container 
                    maxWidth={false} 
                    sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    mt: '2%'
                }}>
                    <Box 
                        sx={{
                        backgroundImage: `url(${imgSrc})`, 
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '35vw auto',
                        border: '5px solid #000',
                        borderRadius: '30px',
                        width: '35vw', 
                        height: '19.5vw',
                        m: '0 4%'
                    }}/>
                    <Box sx={{
                    }}>
                        <Typography fontFamily='Actay' fontSize='3.5vw' mb='10px' color='#E15F41'>СПИСОК КНИГ</Typography>
                        <For each={bookList}>
                            {(item) => <Typography fontFamily='Actay' fontSize='1.2vw' lineHeight='100%' fontStyle='italic'>{item}</Typography>}
                        </For>
                    </Box>
                </Container>
            </Container>
            <Box sx={{width: '100vw', height: '5vw', bgcolor: '#E15F41', mt: '1%'}}/>
        </Container>
    )
}

const PlayBillEntry: Component = () => {
    return (
        <TableCell 
            sx={{
                fontSize: '1.2vw', 
                height: '17vw',
                width: '22.5vw',
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'space-around',
                borderRight: '3px solid black',
                '&:last-child': {
                    borderRight: 'none'
                }
        }}>
            <Box sx={{height: '11vw', width: '20vw', bgcolor: '#D9D9D9'}}/>
            лялялялляля
        </TableCell>
    )
}

const NavigationButton: Component<{children: JSX.Element, href: string}> = ({children, href}) => {
    return (
        <Button 
            sx={{
                height: '4vw', 
                color: '#000', 
                fontSize: '1.4vw',
                lineHeight: '100%', 
                letterSpacing: '0.1rem',
                fontFamily: 'Actay',
            }} 
            href={href}
        >
            {children}
        </Button>)
}

const PeripheryNavigation: Component = () => {
    return (
        <Box 
            component='header'
            sx={{
                display: 'flex', 
                alignItems: 'center', 
                width: '100%',
                justifyContent: 'space-between', 
                mt: '2.5vw',
                p: '0 8%', 
                textAlign: 'center'
            }}>
                <NavigationButton href='/'>Главная</NavigationButton>
                <NavigationButton href='/monster'>Книжный<br/>монстр</NavigationButton>
                <NavigationButton href='/libraries'>Библиотеки</NavigationButton>
                <NavigationButton href='/playbill'>Афиша</NavigationButton>
        </Box>
    )
}

export { LibraryEntry, PlayBillEntry, NavigationButton, PeripheryNavigation }