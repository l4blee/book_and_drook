<script lang='ts'>
	import LoginInput from "../../../components/LoginInput.svelte";

    var form: HTMLFormElement;
    var error = false;
    var errorMessage = '';

    interface Form {
        nickname: string
        email: string
        password: string
    }

    async function handleSubmit(e: Event) {
        let data: Form = Object.fromEntries(new FormData(form)) as unknown as Form
        await fetch(
            '/auth/login',
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
            errorMessage = res.status === 401 ?
                           'Неверный логин или пароль' : 
                           'Произошла ошибка, попробуйте позже!'
        })
    }

</script>

<svelte:head>
    <title>Book и друг | Вход</title>
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
            <LoginInput label='Пароль' type='password' id='password' 
                        pattern="^(?=.*[0-9])(?=.*[!_@#$%^&*])[a-zA-Z0-9!_@#$%^&*]{'{6,16}'}$"
                        errorMsg='Пароль должен быть не короче 6 символов и состоять из латинского алфавита, цирф и спецсимволов'
            />

            {#if error}
                <span class='text-red-500 text-xl text-center mt-16'>{errorMessage}</span>
            {/if}

            <button type='submit' class='bg-red-400 rounded-xl w-full h-12 font-semibold {error && 'mt-20'} mt-32'>Войти</button>
            <span class='mt-2 ml-3'>
                Ещё нет аккаунта? 
                <a href='/register' class='text-blue-800'>Присоединиться</a>
            </span>
        </form> 
    </div>
</div>