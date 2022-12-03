import { Box, Typography } from "@suid/material"
import { Component } from "solid-js"

const Support: Component = () => {
    return (
        <Box sx={{
            width: '100vw',
            height: '100vh',
            m: '10px'
        }}>
           <Typography fontSize='1.5vw'>Реквизиты для поддержки библиотеки: </Typography> 
           <Typography fontSize='2vw'>5469440013290060; Чирва Михаил Сергеевич</Typography> 
           <Typography fontSize='2vw' fontWeight='bold' mt='5vw'>
                Укажите в комментариях к переводу <span style='color: red'>библиотеку</span>, которую вы хотите поддержать, 
                чтобы мы могли купить для неё книги
                <br/>
                А также свой <span style='color: red'>логин</span> для входа на сайт, 
                чтобы мы могли Вас идентифицировать.
            </Typography> 
        </Box>
    )
}

export default Support