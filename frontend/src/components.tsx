import Info from "@suid/icons-material/Info";
import ArrowForward from "@suid/icons-material/ArrowForward";
import { Box, Button, Container, IconButton, TableCell, Typography } from "@suid/material";
import { Component, createSignal, For, JSX } from "solid-js";
import location from './assets/location.svg'
import Dismiss from "solid-dismiss";


const LibraryEntry: Component<{title: string, address: string, bookList: Array<[string, boolean]>, imgSrc: string}> =
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
                            sx={{bgcolor: '#ACCDAA', color: '#000', height: '5vw', width: '35vw', borderRadius: '50px', border: '0.2vw solid #000'}}
                            href='/support'
                        >
                            <Typography fontFamily='Actay' fontSize='2.5vw' lineHeight='100%' children={'Поддержать'}/>
                            <ArrowForward sx={{fontSize: '4vw'}}/>
                        </Button>
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
                        width: '50vw'
                    }}>
                        <Typography fontFamily='Actay' fontSize='2.5vw' lineHeight='100%' mb='10px' color='#E15F41' textTransform='uppercase'>Список книг,<br/>которые нужны библиотеке</Typography>
                        <For each={bookList}>
                            {(item, index) => 
                                <Typography fontFamily='Actay' fontSize='1.2vw' lineHeight='100%' fontStyle='italic'>
                                    {index() + 1}. {item[0]} {item[1] && '✅'}
                                </Typography>
                            }
                        </For>
                    </Box>
                </Container>
            </Container>
            <Box sx={{width: '100vw', height: '5vw', bgcolor: '#E15F41', mt: '1%'}}/>
        </Container>
    )
}

const PlayBillEntry: Component<{date: string, time: string, imgSrc: string, title: string, place: string}> = 
 ({date, time, imgSrc, title, place}) => {
    return (
        <TableCell 
            sx={{
                fontSize: '1.2vw', 
                p: '0.5vw 0',
                height: '17vw',
                width: '22.5vw',
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                borderRight: '0.2vw solid black',
                '&:last-child': {
                    borderRight: 'none'
                }
        }}>
            <Box sx={{display: 'flex'}}>
                <Typography sx={{fontSize: '1.5vw', fontFamily: 'Actay'}} children={date}/>
                {time !== '' && <Typography sx={{color: '#E15F41', ml: '0.5vw', fontSize: '1.5vw', fontFamily: 'Actay'}} children={time}/>}
            </Box>
            <Box sx={{
                height: '11vw', 
                width: '20vw',
                backgroundImage: `url(${imgSrc})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '20vw',
            }}/>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <Typography sx={{fontFamily: 'Actay', fontSize: '1vw', textAlign: 'center'}} children={title}/>
                <Typography sx={{fontFamily: 'Actay', fontSize: '1vw', textAlign: 'center', color: '#E1A632'}} children={place}/>
            </Box>
        </TableCell>
    )
}

const NavigationButton: Component<{children: JSX.Element, href: string}> = ({children, href}) => {
    return (
        <Button
            sx={{
                minWidth: 'fit-content',
                height: '4vw', 
                color: '#000', 
                fontSize: '1.4vw',
                lineHeight: '100%',
                fontFamily: 'Actay',
                textAlign: 'center'
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

const LocationBar: Component<{amount: number, id: number, tooltip: string}> = ({amount, id, tooltip}) => {
    var dropdownButton: HTMLButtonElement | undefined
    const [open, setOpen] = createSignal(false)

    return (
        <Box sx={{
            display: 'flex',
            position: 'relative',
            height: '14vw',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <IconButton 
                ref={dropdownButton}
                sx={{
                    position: 'absolute', 
                    right: '25%', 
                    top: '-5%', 
                    p: 0
                }} 
                children={<Info sx={{fontSize: '2.5vw', color: '#FFD93B'}}/>}
            />
            <Dismiss
                menuButton={dropdownButton}
                open={open}
                setOpen={setOpen}
            >
                <Box sx={{
                    position: 'absolute',
                    borderRadius: '10px',
                    width: 'fit-content',
                    display: 'flex',
                    alignItems: 'center',
                    p: '0.3vw',
                    boxShadow: '#00000029 0 0 25px',
                    top: '15%',
                    transform: 'translate(10%, 0)',
                    bgcolor:'#fff',
                    zIndex: 1
                }}>
                    <Typography fontFamily='Actay' fontSize='1vw' textAlign='center'>{tooltip}</Typography>
                </Box>
            </Dismiss>
            <Box children={id} sx={{position: 'absolute', fontSize: '3vw', fontFamily: 'Actay', top: '15%'}}/>
            <img height='100%' src={location}/>
            <Typography fontFamily='Actay' mt='12.5%' fontSize='1.5vw'>{amount}</Typography>
        </Box>
    )
}

export { LibraryEntry, PlayBillEntry, NavigationButton, PeripheryNavigation, LocationBar }