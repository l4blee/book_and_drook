import { Box, Container, Table, TableRow, Typography } from "@suid/material";
import { Component, onMount } from "solid-js";
import { PeripheryNavigation, PlayBillEntry } from "../components";
import pic1 from '../assets/playbill/1.png'
import pic2 from '../assets/playbill/2.png'
import pic3 from '../assets/playbill/3.png'
import pic4 from '../assets/playbill/4.png'
import pic5 from '../assets/playbill/5.png'
import pic6 from '../assets/playbill/6.png'
import pic7 from '../assets/playbill/7.png'
import pic8 from '../assets/playbill/8.png'

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
                        <PlayBillEntry date='16.12' time='15-00' title='Школа живописи для взрослых «В ком живет Рафаэль», 50+' place={'Библиотека имени П.П. Бажова'} img={pic1}/>
                        <PlayBillEntry date='27.12' title='Цикл мероприятий и экскурсий «Дом сказок на улице Новогодней для маленьких и больших»' place='Библиотека имени П.П. Бажова' img={pic2}/>
                        <PlayBillEntry date='27.12' title='Акция «Знакомство с этноколлекцией сказок народов Поволжья», 6+' place='Библиотека имени П.П. Бажова' img={pic3}/>
                        <PlayBillEntry date='01.12-21.12' title='Книжная выставка «Остановка: Новый год!», 16+' place='Библиотека имени В. В. Бианки' img={pic4}/>
                    </TableRow>
                    <TableRow sx={{display: 'flex', flexDirection: 'row', width: 'fit-content', border: '3px solid black', borderTop: 'none'}}>
                        <PlayBillEntry date='28.12' time='13-00' title='Акция дня «Узнай Приволжский край!» , 12+' place='Библиотека имени В. В. Бианки' img={pic5}/>
                        <PlayBillEntry date='07.12' time='11-00' title='Экскурсия «Приходите в книжный дом», 12+' place='Библиотека имени Н. А. Некрасова' img={pic6}/>
                        <PlayBillEntry date='6.12' time='10-00' title='Видеовикторина «В мире мультфильма»' place='Библиотека имени Н. А. Некрасова' img={pic7}/>
                        <PlayBillEntry date='01.12' time='14-00' title='Акция «Читаем вслух», 12+' place='Библиотека имени Н. А. Некрасова' img={pic8}/>
                    </TableRow>
                </Table>
            </Container>
        </Box>
    )
}

export default Playbill