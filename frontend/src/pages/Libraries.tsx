import { Box, Button, Container } from "@suid/material";
import { Component } from "solid-js";
import { LibraryEntry } from "../components";
import nekrasova from '../assets/nekrasova.png'

const Libraries: Component = () => {
    return (
        <Box sx={{
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Box 
                component='header'
                sx={{
                    display: 'flex', 
                    alignItems: 'end', 
                    width: '100%',
                    justifyContent: 'space-between', 
                    p: '60px 85px', 
                    textAlign: 'center'
                }}>
                <Button sx={{height: '80px', color: '#000', lineHeight: '25px', letterSpacing: '0.1rem',fontFamily: 'Actay', fontSize: '25px', mr: '79px'}} href='/'>Главная</Button>
                <Button sx={{height: '80px', color: '#000', lineHeight: '25px', letterSpacing: '0.1rem',fontFamily: 'Actay', fontSize: '25px', mr: '68px'}} href='/monster'>Книжный<br/>монстр</Button>
                <Button sx={{height: '80px', color: '#000', lineHeight: '25px', letterSpacing: '0.1rem', fontFamily: 'Actay', fontSize: '25px', mr: '43px'}} href='/libraries'>Библиотеки</Button>
                <Button sx={{height: '80px', color: '#000', lineHeight: '25px', letterSpacing: '0.1rem', fontFamily: 'Actay', fontSize: '25px'}} href='/playbill'>Афиша</Button>
            </Box>
            <Container
                maxWidth={false}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '0 !important'
                }}
            >
                <LibraryEntry 
                    id={1}
                    title='Библиотека им. Н.А. Некрасова' 
                    address='Адрес: ул. Римского-Корсакова, 5/1, Новосибирск'
                    bookList={[
                        '1. "Мастер и Маргарита" Михаил Булгаков.', 
                        '2. "Евгений Онегин" Александр Пушкин.',
                        '3. "Преступление и Наказание" Федор Достоевский.',
                        '4. "Война и мир" Лев Толстой.',
                        '5. "Маленький Принц" Антуан де Сент-Экзюпери.',
                        '6. "Герой Нашего Времени" Михаил Лермонтов.',
                        '41. "Гордость и Предубеждение" Джейн Остин.' ,
                        '42. "Два Капитана" Вениамин Каверин.',
                        '43. "Над Кукушкиным Гнездом" Кен Кизи.',
                        '44. "Трилогия о незнайке" Николай Носов.',
                        '45. "Обломов" Иван Гончаров.',
                        '46. "Понедельник Начинается в Субботу" Аркадий и Борис Стругацкие.',
                        '47. "Приключения Тома Сойера" Марк Твен.',
                        '48. "Архипелаг Гулаг" Александр Солженицын.',
                        '49. "Великий Гэтсби" Фрэнсис Скотт Фицджеральд (Досто).'
                    ]}
                    imgSrc={nekrasova}
                />
                <Box sx={{width: '100vw', height: '100px', bgcolor: '#E15F41'}}></Box>
                <LibraryEntry 
                    id={2}
                    title='Библиотека им. Н.А. Некрасова' 
                    address='Адрес: ул. Римского-Корсакова, 5/1, Новосибирск'
                    bookList={[
                        '1. "Мастер и Маргарита" Михаил Булгаков.', 
                        '2. "Евгений Онегин" Александр Пушкин.',
                        '3. "Преступление и Наказание" Федор Достоевский.',
                        '4. "Война и мир" Лев Толстой.',
                        '5. "Маленький Принц" Антуан де Сент-Экзюпери.',
                        '6. "Герой Нашего Времени" Михаил Лермонтов.',
                        '41. "Гордость и Предубеждение" Джейн Остин.' ,
                        '42. "Два Капитана" Вениамин Каверин.',
                        '43. "Над Кукушкиным Гнездом" Кен Кизи.',
                        '44. "Трилогия о незнайке" Николай Носов.',
                        '45. "Обломов" Иван Гончаров.',
                        '46. "Понедельник Начинается в Субботу" Аркадий и Борис Стругацкие.',
                        '47. "Приключения Тома Сойера" Марк Твен.',
                        '48. "Архипелаг Гулаг" Александр Солженицын.',
                        '49. "Великий Гэтсби" Фрэнсис Скотт Фицджеральд (Досто).'
                    ]}
                    imgSrc={nekrasova}
                />
            </Container>
        </Box>
    )
}

export default Libraries