import { Box, Container, Typography } from "@suid/material";
import { Component, createEffect, createSignal, onMount } from "solid-js";
import { LocationBar, PeripheryNavigation } from "../components";
import { getData } from "../utils";
import monster from '../assets/monster.svg'
import hungry from '../assets/hungry.svg'
import roar from '../assets/monsterRoar.mp3'
import book from '../assets/monsterBook.svg'
import location from '../assets/location.svg'


const Monster: Component = () => {
    const data = getData()
    const audio = new Audio(roar)
    audio.volume = 0.1

    const [percentage, setPercentage] = createSignal(0)

    onMount(() => {
        document.title = 'Book и друг | Книжный монстр'
    })

    createEffect(() => {
        setPercentage((data()?.donated || 0) / 5000)
    })

    async function onMonsterClick() {
        audio.currentTime = 0
        audio.play()
        setPercentage(0)
        do {
            setPercentage(percentage() + 0.003)
            await new Promise(r => setTimeout(r, 8))
        } while (percentage() < (data()?.donated || 0) / 5000)
    }
    
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
                    mt: '4vw',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',
                    justifyContent: 'space-between'
                }}
            >
                <Box sx={{
                    width: 'fit-content',
                    position: 'absolute',
                    right: '2%',
                    display: 'flex',
                    flexDirection: 'column', 
                    zIndex: 1
                }}>
                    <Box displayRaw='flex' flexDirection='row'>
                        <Typography fontSize='2vw' fontFamily='Actay' fontWeight='bold'>Монстр доволен на:{'\xa0'}</Typography>
                        <Typography fontSize='2vw' fontFamily='Actay' fontWeight='bold' fontStyle='italic'>{data()?.donated ? data()?.donated : 0} руб</Typography>
                    </Box>
                    <Typography fontFamily='Actay' fontSize='1vw'>Уже куплено: 8 книг библиотекам</Typography>
                </Box>
                <Box
                    sx={{
                        height: '35vw',
                        width: '100%',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'row'
                    }}
                >
                    <Box sx={{
                        width: '75%',
                        display: 'flex',
                        alignItems: 'center',
                        position: 'absolute',
                        top: '45%',
                        left: '16%'
                    }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            position: 'absolute',
                            width: '96%',
                            justifyContent: 'space-between',
                            height: '10vw',
                            top: '-150%',
                            right: '-5%',
                            zIndex: 1
                        }}>
                            <LocationBar amount={1000} id={1} tooltip='Фирменный сувенир Book и Друг'/>
                            <LocationBar amount={2300} id={2} tooltip='Билет в театр "Глобус"'/>
                            <LocationBar amount={3600} id={3} tooltip='5 любых книг из каталога Book24'/>
                            <LocationBar amount={5000} id={4} tooltip='Закрытая экскурсия в архивы ГПНТБ'/>
                        </Box>
                        <Box sx={{bgcolor: '#ACCDAA', width: percentage() - 0.03, height: '90%', position: 'absolute', left: '1.6%', borderRadius: '0 10vw 10vw 0', border: '2px solid'}}></Box>
                        <img width='100%' height='100%' style='z-index: 0' src={book}/>
                    </Box>
                    <img height='100%' style='z-index: 1' onClick={onMonsterClick} src={monster}/>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'end',
                        position: 'absolute',
                        bottom: '1vw',
                        right: '1vw'
                }}>
                    <Box width='5vw'><img src={hungry} width='100%'/></Box>
                    <Typography fontFamily='Actay' fontSize='2vw'>Накорми монстра, получи подарки<br/> и помоги библиотекам вместе с нами</Typography>
                </Box>
            </Container>
        </Box>
    )
}

export default Monster