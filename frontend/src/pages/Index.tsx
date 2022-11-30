import { Box, Button, Container, Input, Typography, IconButton } from "@suid/material";
import Person from "@suid/icons-material/Person";
import LogoutOutlined from "@suid/icons-material/LogoutOutlined";
import LoginOutlined from "@suid/icons-material/LoginOutlined";
import { Component, createSignal, Show } from "solid-js";
import Dismiss from "solid-dismiss";
import books from '../assets/books.svg'
import mouse from '../assets/mouse.svg'
import { getAuth } from "../utils";


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
                        mt: '82px',
                        ml: '131px'
                    }}
                >
                    <Typography 
                        children={'book'}
                        sx={{
                            fontSize: '160px',
                            fontFamily: 'Druzhok',
                            color: '#E15F41',
                            lineHeight: '123px',
                            letterSpacing: '0.1rem'
                        }}
                    />
                    <Typography 
                        children={'и\xa0\xa0друг'}
                        sx={{
                            fontSize: '160px',
                            fontFamily: 'Druzhok',
                            color: '#000000',
                            lineHeight: '123px',
                            letterSpacing: '0.1rem'
                        }}
                    />
                    <Typography 
                        children={'— вместе поможем библиотекам'}
                        sx={{
                            fontFamily: 'Actay',
                            color: '#000000',
                            fontSize: '30px',
                            lineHeight: '60px',
                            fontStyle: 'italic',
                            letterSpacing: '0.1rem'
                        }}
                    />
                    <Box 
                        children={<img src={mouse} width='150px' height='150px'/>}
                        sx={{
                            position: 'absolute',
                            top: '-28px',
                            left: '435px'
                        }}
                    />
                </Container>
                
                <Container
                    component='nav'
                    sx={{
                        display: 'flex',
                        position: 'relative',
                        flexDirection: 'column',
                        justifyContent: 'end',
                        ml: '95px',
                        mb: '90px',
                        mr: '85px'
                    }}
                >
                    <IconButton 
                        ref={dropdownButton}
                        children={<Person/>}
                        sx={{
                            position: 'absolute',
                            right: '24px',
                            top: '50px',
                            width: '80px',
                            height: '80px',
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
                                }}
                            >
                                {
                                login.latest?.status !== 401 ?
                                <Button fullWidth sx={{borderRadius: '15px', color: 'red'}} href='/auth/logout'><LogoutOutlined/>Выйти</Button>
                                :
                                <Button fullWidth sx={{borderRadius: '15px'}} href='/login'><LoginOutlined/>Войти</Button>
                                }
                            </Box>
                        </Dismiss>
                    </Show>
                    <Box sx={{display: 'flex', alignItems: 'end', justifyContent: 'space-between', p: '0 20px', textAlign: 'center'}}>
                        <Button sx={{height: '80px', color: '#000', lineHeight: '25px', letterSpacing: '0.1rem',fontFamily: 'Actay', fontSize: '25px', mr: '79px'}} href='/'>Главная</Button>
                        <Button sx={{height: '80px', color: '#000', lineHeight: '25px', letterSpacing: '0.1rem',fontFamily: 'Actay', fontSize: '25px', mr: '68px'}} href='/monster'>Книжный<br/>монстр</Button>
                        <Button sx={{height: '80px', color: '#000', lineHeight: '25px', letterSpacing: '0.1rem', fontFamily: 'Actay', fontSize: '25px', mr: '43px'}} href='/libraries'>Библиотеки</Button>
                        <Button sx={{height: '80px', color: '#000', lineHeight: '25px', letterSpacing: '0.1rem', fontFamily: 'Actay', fontSize: '25px'}} href='/playbill'>Афиша</Button>
                    </Box>
                    <Input 
                        placeholder="Поиск..."
                        fullWidth
                        disableUnderline
                        sx={{
                            height: '54px',
                            borderRadius: '30px',
                            mt: '15px',
                            fontFamily: 'Actay',
                            letterSpacing: '0.1rem',
                            padding: '0 30px',
                            bgcolor: '#63CDDA60'
                        }}
                    />
                </Container>
            </Container>
            <Box 
                sx={{
                    display: 'flex'
                }}
            >
                <img src={books}/>
            </Box>
        </Box>
    )
}

export default Index
