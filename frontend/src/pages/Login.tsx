import { Link } from "@solidjs/router";
import Visibility from "@suid/icons-material/Visibility";
import VisibilityOff from "@suid/icons-material/VisibilityOff";
import { Box, Button, Container, FormControl, IconButton, Input, InputLabel, Typography } from "@suid/material";
import { Component, createSignal, onMount } from "solid-js";

const Login: Component = () => {
    const [showPwd, setShowPwd] = createSignal(false)
    const [headerError, setHeaderError] = createSignal({
        status: false,
        message: ''
    })
    const [formData, updateForm] = createSignal({
        login: null, 
        password: null
    })

    function onSubmit(event: Event) {
        event.preventDefault()

        let origin = window.location.search.substring(1).split('=')[1]
        let modifiedData = undefined
        if (origin) {
            modifiedData = {
                ...formData(),
                origin: origin
            }
        } else {
            modifiedData = formData()
        }
        
        fetch(
            '/auth/login',
            {
                method: 'POST',
                body: JSON.stringify(modifiedData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(response => {
            if (response.status === 401) {
                setHeaderError({
                    status: true,
                    message: 'Неверный логин или пароль.'
                })
                return
            }
            if (response.status !== 200) {
                setHeaderError({
                    status: true, 
                    message: 'Произошла ошибка, попробуйте позже.'
                })
                return
            }

            if (response.redirected) {
                window.location.assign(response.url)
            }
        })
        .catch((_) => {
            setHeaderError({
                status: true, 
                message: 'Произошла ошибка, попробуйте позже.'
            })
            return
        })
    }

    function onChange(event: Event) {
        updateForm({
          ...formData(),
          [(event.target as HTMLElement).id]: (event.target as HTMLTextAreaElement).value
        })
    }

    onMount(() => {
        document.title = 'Book и друг | Авторизация'
    })

    return (
        <Box sx={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Container sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '400px',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '#00000029 0 0 25px',
                padding: '25px',
                borderRadius: '8px',
            }}>
                <Typography sx={{
                    fontSize: '22px',
                    width: '100%',
                    textAlign: 'center'
                }}>
                    Вход
                </Typography>
                {headerError().status && <Typography sx={{color: '#d32f2f', textAlign: 'center'}}>{headerError().message}</Typography>}
                <form 
                    onSubmit={onSubmit}
                    style='width: 90%'
                >
                    <FormControl 
                        fullWidth 
                        sx={{
                            mt: '15px'
                    }}>
                        <InputLabel for='login'>Логин</InputLabel>
                        <Input id='login' inputProps={{pattern: '[a-zA-Z0-9-0]{3,20}'}} onChange={onChange}/>
                    </FormControl>
                    <FormControl 
                        fullWidth 
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'end',
                            mt: '15px'
                    }}>
                        <InputLabel for='password'>Пароль</InputLabel>
                        <Input fullWidth id='password' type={showPwd() ? 'text' : 'password'} onChange={onChange}/>
                        <IconButton
                            onClick={() => setShowPwd(!showPwd())}
                            children={showPwd() ?  <VisibilityOff/> : <Visibility/>}
                            size='large'
                            sx={{
                                ml: '5px',
                                width: '25px', 
                                height: '25px'
                            }}
                        />
                    </FormControl>
                    <Button fullWidth type='submit' sx={{mt: '10px'}}>Войти</Button>
                </form>
                <Typography>Ещё нет аккаунта? <Link href='/register' children={'Создать'}/></Typography>
            </Container>
        </Box>
    )
}

export default Login;
