import { Box, Button, Container, Input, Typography, IconButton } from "@suid/material";
import Person from "@suid/icons-material/Person";
import LogoutOutlined from "@suid/icons-material/LogoutOutlined";
import LoginOutlined from "@suid/icons-material/LoginOutlined";
import { Component, createSignal, Show } from "solid-js";
import Dismiss from "solid-dismiss";
import books from '../assets/books.svg'
import mouse from '../assets/mouse.svg'
import { getAuth } from "../utils";
import { NavigationButton } from "../components";


const Index: Component = () => {
    var dropdownButton: HTMLButtonElement | undefined
    const [dropOpen, setDropOpen] = createSignal(false)
    const login = getAuth()

    return (
        <Box sx={{position: 'relative'}}>
            <Container 
                component='header'
                disableGutters
                maxWidth={false}
                sx={{
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'row',
                    height: '100%',
                    width: '100%',
                }}
            >
                <Container 
                    component='title'
                    disableGutters 
                    maxWidth={false} 
                    sx={{
                        position: 'relative',
                        width: 'fit-content', 
                        height: 'fit-content', 
                        m: 0,
                        mt: '60px',
                        ml: '5%'
                    }}
                >
                    <Typography 
                        children={'book'}
                        sx={{
                            fontSize: '8.3vw',
                            fontFamily: 'Druzhok',
                            color: '#E15F41',
                            lineHeight: '80%',
                            letterSpacing: '0.1rem'
                        }}
                    />
                    <Typography 
                        children={'и\xa0\xa0друг'}
                        sx={{
                            fontSize: '8.3vw',
                            fontFamily: 'Druzhok',
                            color: '#000000',
                            lineHeight: '80%',
                            letterSpacing: '0.1rem'
                        }}
                    />
                    <Typography 
                        children={'— вместе поможем библиотекам'}
                        sx={{
                            fontFamily: 'Actay',
                            color: '#000000',
                            fontSize: '1.5vw',
                            lineHeight: '180%',
                            fontStyle: 'italic',
                            letterSpacing: '0.1rem'
                        }}
                    />
                    <Box 
                        children={<img src={mouse} width='100%' height='100%'/>}
                        sx={{
                            position: 'absolute',
                            width: '8vw',
                            height: '8vw',
                            top: '-10%',
                            left: '66%'
                        }}
                    />
                </Container>
                
                <Container
                    component='nav'
                    sx={{
                        display: 'flex',
                        position: 'relative',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        ml: '5%',
                        mr: '5%'
                    }}
                >
                    <IconButton 
                        ref={dropdownButton}
                        children={<Person/>}
                        sx={{
                            position: 'absolute',
                            right: '5%',
                            top: '10%',
                            width: '4.5vw',
                            height: '4.5vw',
                            bgcolor: '#D9D9D9'
                        }}
                    />
                    <Show when={!login.loading}>
                        <Dismiss
                            menuButton={dropdownButton}
                            open={dropOpen}
                            setOpen={setDropOpen}
                        >
                            <Box 
                                sx={{
                                    position: 'absolute',
                                    width: '150px',
                                    borderRadius: '15px',
                                    boxShadow: '#00000029 0 0 25px',
                                    bgcolor: '#fff',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'end',
                                    zIndex: 1,
                                    right: 0
                            }}>
                                {
                                login.latest?.status !== 401 ?
                                <Button fullWidth sx={{borderRadius: '15px', color: 'red'}} href='/auth/logout'><LogoutOutlined/>Выйти</Button>
                                :
                                <Button fullWidth sx={{borderRadius: '15px'}} href='/login'><LoginOutlined/>Войти</Button>
                                }
                            </Box>
                        </Dismiss>
                    </Show>
                    <Box 
                        sx={{
                            display: 'flex', 
                            alignItems: 'end', 
                            justifyContent: 'space-between', 
                            width: '100%',
                            mt: '3%',
                            p: '0 %'
                    }}>
                        <NavigationButton href='/'>Главная</NavigationButton>
                        <NavigationButton href='/monster'>Книжный<br/>монстр</NavigationButton>
                        <NavigationButton href='/libraries'>Библиотеки</NavigationButton>
                        <NavigationButton href='/playbill'>Афиша</NavigationButton>
                    </Box>
                    <Input 
                        placeholder="Поиск..."
                        fullWidth
                        disableUnderline
                        sx={{
                            height: '2.5vw',
                            borderRadius: '30px',
                            fontSize: '1vw',
                            mt: '2%',
                            fontFamily: 'Actay',
                            letterSpacing: '0.1rem',
                            padding: '0 3%',
                            bgcolor: '#63CDDA60'
                        }}
                    />
                </Container>
            </Container>
            <Box 
                sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <img src={books}/>
            </Box>
        </Box>
    )
}

export default Index
