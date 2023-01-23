<script lang='ts'>
	import RepeatPwd from "../../../components/RepeatPwd.svelte";
    import LoginInput from "../../../components/LoginInput.svelte";

    var pwdNotEqual = false;
    var form: HTMLFormElement;
    
    var error = false;
    var errorMessage = '';

    interface Form {
        nickname: string
        email: string
        password: string
        repeat: string
    }

    async function handleSubmit(e: Event) {
        if (pwdNotEqual) return;
        let data: Form = Object.fromEntries(new FormData(form)) as unknown as Form
        await fetch(
            '/auth/register',
            {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then((res) => {
            if (res.ok && res.redirected) {
                window.location.assign(res.url)
                return
            }

            error = true
            errorMessage = res.status === 409 ?
                           'Пользователь с таким именем уже существует!' : 
                           'Произошла ошибка, попробуйте позже!'
        })
    }

    function validateRepeat() {
        let data: Form = Object.fromEntries(new FormData(form)) as unknown as Form
        console.log(data);
        pwdNotEqual = data.password !== data.repeat
    }
</script>

<svelte:head>
    <title>Book и друг | Регистрация</title>
</svelte:head>

<div class='fixed w-full h-full bg-gray-200'>
    <div class='flex
                md:w-1/2 sm:w-full h-full bg-white
                items-center justify-center
                shadow-2xl'>
        <form class='flex flex-col w-[70%]' on:submit|preventDefault={handleSubmit} bind:this={form}>
            <LoginInput label='Никнейм' type='text' id='nickname' 
                        pattern="^[^0-9][a-zA-Z0-9]{'{4,}'}$"
                        errorMsg='Никнейм должен содержать не менее 5 латинских букв и цифр'
            />
            <LoginInput label='Email' type='email' id='email'
                        pattern='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{'{2,3}'})+$'
                        errorMsg='Неверный Email'
            />
            <LoginInput label='Пароль' type='password' id='password'
                        pattern="^(?=.*[0-9])(?=.*[!_@#$%^&*])[a-zA-Z0-9!_@#$%^&*]{'{6,16}'}$"
                        errorMsg='Пароль должен быть не короче 6 символов и состоять из латинского алфавита, цифр и спецсимволов'
            />
            <RepeatPwd label='Повторите пароль' type='password' id='repeat'
                       pattern="^(?=.*[0-9])(?=.*[!_@#$%^&*])[a-zA-Z0-9!_@#$%^&*]{'{6,16}'}$"
                       errorMsg='Невалидный пароль'
                       pwdNotEqual={pwdNotEqual}
                       on_change={validateRepeat}
            />
            
            {#if error}
                <span class='text-red-500 text-xl text-center mt-16'>{errorMessage}</span>
            {/if}

            <button type='submit' class='bg-red-400 rounded-xl w-full h-12 font-semibold {error && 'mt-20'} mt-32'>Присоединиться</button>
            <span class='mt-2 ml-3'>
                Уже есть аккаунт? 
                <a href='/login' class='text-blue-800'>Войти</a>
            </span>
        </form> 
    </div>
</div>