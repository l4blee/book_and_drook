<script lang="ts">
    export let label: string;
    export let type: string;
    export let id: string;
    export let errorMsg: string;
    export let pwdNotEqual: boolean;
    export let on_change: any;
    export let pattern: string;

    import ico from '../assets/error.svg'

    var error = false;
    var value: string;
    const regExp = new RegExp(pattern)

    const assignType = (node: HTMLInputElement) => {node.type = type}
</script>

<div class='flex flex-col mb-4'>
    <label for='email' class='text-md mb-1 ml-2 {(error || pwdNotEqual ) && 'text-red-400'}'>{label}</label>
    <input 
        class='text-sm bg-gray-200 px-2 rounded-xl h-11 {(error || pwdNotEqual ) && "border-2 border-red-400"} w-full'
        name={id}
        id={id}
        use:assignType
        pattern={pattern}
        on:invalid={() => {error = true}}
        on:change={() => {
            on_change()
            if (pattern) error = !regExp.test(value)
        }}
        bind:value={value}
        required
    />
    {#if error}
        <span class='text-sm text-red-400 mt-[0.35rem] flex items-center ml-2'>
            <img src={ico} alt='error' class='h-5 mr-1'/>
            {errorMsg}
        </span>
    {:else if pwdNotEqual}
        <span class='text-sm text-red-400 mt-[0.35rem] flex items-center ml-2'>
            <img src={ico} alt='error' class='h-5 mr-1'/>
            Пароли не совпадают
        </span>
    {/if}
</div>
