import { Box, Typography } from "@suid/material"
import { Component } from "solid-js"
import { getData } from "../utils"

const Support: Component = () => {
    const data = getData()

    return (
        <Box sx={{
            width: '100vw',
            height: '100vh',
            m: '10px'
        }}>
           <Typography fontSize='1.5vw'>Реквизиты для поддержки библиотеки: </Typography> 
           <Typography fontSize='2vw'>9137453927 - перевод на Сбербанк</Typography> 
           <Typography fontSize='2vw' fontWeight='bold' mt='5vw'>
                Укажите в комментариях к переводу <span style='color: red'>библиотеку</span>, которую вы хотите поддержать, 
                чтобы мы могли купить для неё книги
                <br/>
                А также свой <span style='color: red'>логин ({data() && data()?.nickname})</span> для входа на сайт, 
                чтобы мы могли Вас идентифицировать.
            </Typography> 
        </Box>
    )
}

export default Support