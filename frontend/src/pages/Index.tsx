import { Box, Button, Container, Input, Typography, IconButton } from "@suid/material";
import Person from "@suid/icons-material/Person";
import LogoutOutlined from "@suid/icons-material/LogoutOutlined";
import LoginOutlined from "@suid/icons-material/LoginOutlined";
import { Component, createSignal, Show } from "solid-js";
import Dismiss from "solid-dismiss";
import books from '../assets/books.svg'
import mouse from '../assets/mouse.svg'
import { getUserData } from "../utils";
import { NavigationButton } from "../components";


const Index: Component = () => {
    var dropdownButton: HTMLButtonElement | undefined
    const [dropOpen, setDropOpen] = createSignal(false)
    const login = getUserData()
    
    return (
        <Box sx={{position: 'relative', m: '0 0 2vw 0'}}>
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
                        mt: '5vw',
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
                    disableGutters
                    sx={{
                        display: 'flex',
                        position: 'relative',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        m: '0 5%'
                    }}
                >
                    <IconButton 
                        ref={dropdownButton}
                        children={<Person fontSize='inherit'/>}
                        sx={{
                            position: 'absolute',
                            transform: 'translate(450%, -140%)',
                            width: '4.5vw',
                            fontSize: '2.5vw',
                            height: '4.5vw',
                            bgcolor: '#D9D9D9',
                            minWidth: 0
                        }}
                    />
                    <Show when={login.state === 'ready'}>
                        <Dismiss
                            menuButton={dropdownButton}
                            open={dropOpen}
                            setOpen={setDropOpen}
                        >
                            <Box 
                                sx={{
                                    position: 'absolute',
                                    width: '8vw',
                                    height: 'fit-content',
                                    borderRadius: '1.5vw',
                                    boxShadow: '#00000029 0 0 25px',
                                    bgcolor: '#fff',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'end',
                                    zIndex: 1,
                                    right: '3%',
                                    top: '35%'
                            }}>
                                {
                                    login()?.message !== 'unauthorized' ?
                                    <Box sx={{display: 'flex', width: '100%', flexDirection: 'column'}}>
                                        <Typography sx={{fontSize: '1vw', width: '100%', textAlign: 'center', mt: '1%'}}>{login()?.nickname}</Typography>
                                        <Button fullWidth sx={{borderRadius: '1.5vw', color: 'red', fontSize: '1vw', minWidth: 0, height: '2vw'}} href='/auth/logout'><LogoutOutlined fontSize='inherit'/>Выйти</Button>
                                    </Box>
                                    :
                                    <Button fullWidth sx={{borderRadius: '1.5vw', fontSize: '1vw', minWidth: 0}} href='/login'><LoginOutlined fontSize='inherit'/>Войти</Button>
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
                            width: '100%',
                            borderRadius: '30px',
                            fontSize: '1vw',
                            mt: '2%',
                            fontFamily: 'Actay',
                            padding: '0 3%',
                            bgcolor: '#63CDDA60'
                        }}
                    />
                </Container>
            </Container>
            <Box 
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}
            >
                <Box sx={{
                    width: '100%',
                    overflow: 'hidden'
                }}>
                    <img width='100%' src={books}/>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    height: 'fit-content',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: '0 5vw',
                    mt: '2vw',
                    // textTransform: 'uppercase'
                }}>
                    <Typography width='100%' fontFamily='Druzhok' fontSize='7vw'><span style='color: #E15F41;'>О</span> НАС</Typography>
                    <Typography width='100%' fontFamily='Actay' fontSize='3vw' lineHeight='100%' letterSpacing='0.3rem'>
                        Book и Друг – это краудфандинг платформа для библиотек. 
                        Мы собираем средства для пополнения книжных фондов районных библиотек, и Вы можете помочь! 
                    </Typography>
                    <Typography sx={{
                        width: '100%',
                        fontFamily: 'Actay',
                        fontSize: '2.5vw',
                        letterSpacing: '0.1rem',
                        textAlign: 'start',
                        lineHeight: '105%',
                        m: '3vw 0'
                    }}>
                        <span style='font-size: 4vw; color: #E15F41; font-style: italic'>Как пользоваться сайтом?</span>
                        <Box mt='1vw'>
                            <span style='font-weight: bold;'>Осуществите регистрацию на сайте</span>
                            <Box fontSize='1.9vw' ml='1.5vw'>
                                <span>• Нажмите серый кружок в правом верхнем углу раздела "Главное"</span><br/>
                                <span>• В форме входа в аккаунт нажмите "Создать"</span><br/>
                                <span>• Придумайте логин и пароль и завершите регистрацию</span>
                            </Box>
                        </Box>
                        <Box>
                            <span style='font-weight: bold;'>Поддержите библиотеку</span>
                            <Box fontSize='1.9vw' ml='1.5vw'>
                                <span>• Перейдите в раздел "Библиотеки"</span><br/>
                                <span>• Выберите библиотеку, которую хотите поддержать</span><br/>
                                <span>• Нажмите кнопку поддержать</span><br/>
                                <span>
                                    • Осуществите перевод любой денежной суммы на указанный номер телефона на карту Сбербанка 
                                    <span style='color: #E15F41;'>(В комментариях к переводу укажите свой логин и библиотеку, которую хотите поддержать)</span>
                                </span>
                            </Box>
                            <span style='font-weight: bold;'>Мы сможем начислить вам бонусы :)</span>
                        </Box>
                        <Box>
                            <span style='font-weight: bold;'>Бонусы? Что такое книжный монстр?</span>
                            <Box fontSize='1.9vw' ml='1.5vw'>
                                <span>• За помощь библиотекам наша платформа начисляет бонусы, которые можно обменять на классные подарки</span><br/>
                                <span>• Свой прогресс вы можете отследить в разделе "Книжный монстр"</span><br/>
                                <span>• Нажмите на него, он очень милый и умеет рычать!</span>
                            </Box>
                        </Box>
                        <Box>
                            <span style='font-weight: bold;'>Раздел "Афиша"</span>
                            <Box fontSize='1.9vw' ml='1.5vw'>
                                <span>• Здесь вы можете узнать, какие мероприятия проходят в разных районных библиотеках</span>
                            </Box>
                        </Box>
                        <Typography color='#E15F41' fontStyle='italic' fontSize='1.9vw' lineHeight='100%'>Все средства, собранные через краудфандинг будут потрачены на приобритение книг в книжные фонды библиотек</Typography>
                    </Typography>
                    <Box sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'end'
                    }}>
                        <Typography textAlign='start' fontFamily='Actay' fontSize='1.3vw' lineHeight='100%' letterSpacing='0.1rem'>
                            Организаторы проекта:<br/>
                                Чирва Михаил Сергеевич<br/>
                                Черепанов Андрей Николаевич<br/>
                                Короткова Валерия Владимировна<br/>
                                Жуков Кирилл Сергеевич<br/>
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Index
