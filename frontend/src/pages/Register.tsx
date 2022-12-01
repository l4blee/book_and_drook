import { Link } from "@solidjs/router";
import Visibility from "@suid/icons-material/Visibility";
import VisibilityOff from "@suid/icons-material/VisibilityOff";
import { Box, Button, Container, FormControl, FormHelperText, IconButton, Input, InputLabel, Typography } from "@suid/material"
import { Component, createSignal, onMount } from "solid-js";

const Register: Component = () => {
    const [showPwd, setShowPwd] = createSignal(false)
    const [pwdsError, setPwdsError] = createSignal(false)
    const [headerError, setHeaderError] = createSignal({
        status: false,
        message: ''
    })

    const [formData, updateForm] = createSignal({
        login: null,
        password: null,
        password_repeat: null,
    })

    function onChange(event: Event) {
        updateForm({
          ...formData(),
          [(event.target as HTMLElement).id]: (event.target as HTMLTextAreaElement).value
        })
    }

    function submit(event: SubmitEvent) {
        event.preventDefault()
        
        if (formData().password !== formData().password_repeat) {
            setPwdsError(true)
            return
        }

        const data = formData()
        const modifiedData = {
            login: data.login,
            password: data.password
        }        

        fetch(
            '/auth/register',
            {
                method: 'POST',
                body: JSON.stringify(modifiedData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then((response) => {
            if (response.status === 409) {
                setHeaderError({
                    status: true, 
                    message: 'Пользователь с этим логином уже существует!'
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

    onMount(() => {
        document.title = 'Book и друг | Регистрация'
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
                    Регистрация
                </Typography>
                {headerError().status && <Typography sx={{color: '#d32f2f', textAlign: 'center'}}>{headerError().message}</Typography>}
                <form 
                    onSubmit={submit}
                    style='width: 90%'
                >
                    <FormControl 
                        fullWidth 
                        sx={{
                            mt: '15px'
                    }}>
                        <InputLabel for='login' required>Логин</InputLabel>
                        <Input id='login' required onChange={onChange}/>
                    </FormControl>
                    <FormControl 
                        fullWidth 
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'end',
                            mt: '15px'
                    }}>
                        <InputLabel for='password' required>Пароль</InputLabel>
                        <Input fullWidth id='password' type={showPwd() ? 'text' : 'password'} required onChange={onChange}/>
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
                    <FormControl 
                        fullWidth 
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'end',
                            mt: '15px'
                    }}>
                        <InputLabel for='password_repeat' required>Повтор пароля</InputLabel>
                        <Input 
                            fullWidth 
                            id='password_repeat' 
                            type='password' 
                            required 
                            onChange={(event) => {onChange(event); setPwdsError(false)}}/>
                        {pwdsError() && <FormHelperText error>Пароли не совпадают</FormHelperText>}
                    </FormControl>
                    <Button fullWidth type='submit' sx={{mt: '10px'}}>Зарегистрироваться</Button>
                </form>
                <Typography sx={{
                    mt: '5px'
                }}>
                    Уже есть аккаунт? 
                    <Link href='/login' children={'Войти'}/>
                </Typography>
            </Container>
        </Box>
    )
}

export default Register