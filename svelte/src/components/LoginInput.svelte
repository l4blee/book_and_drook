<script lang='ts'>
    export let label: string;
    export let type: string;
    export let id: string;
    export let errorMsg: string = '';
    export let pattern: string | null  = null;

    import ico from '../assets/error.svg'
    import show from '../assets/show.svg'
    import hide from '../assets/hide.svg'
    
    var error: boolean = false;
    var value: string = '';
    var visible = false;
    var input: HTMLInputElement;
    const regExp = new RegExp(pattern || '')

    const assignType = (node: HTMLInputElement) => {node.type = type}

    function onClick() {
        visible = !visible
        input.type = visible ? 'text' : 'password'
    }
</script>

<div class='flex flex-col mb-4'>
    <label for='email' class='text-md mb-1 ml-2 {error && 'text-red-400'}'>{label}</label>
    <div class='flex relative'>
        <input 
            class='text-sm bg-gray-200 px-2 rounded-xl h-11 {error && "border-2 border-red-400"} w-full'
            name={id} 
            id={id}
            pattern={pattern}
            on:change={() => {if (pattern) error = !regExp.test(value)}}
            on:invalid={() => {error = true}}
            bind:value={value}
            bind:this={input}
            use:assignType
            required
        />
        {#if type === 'password'}
            <button class='absolute h-5 right-3 top-3' on:click|preventDefault={onClick}>
                <img src={visible ? hide : show} alt='show/hide' class='h-5'/>
            </button>
        {/if}
    </div>
    {#if error}
        <span class='text-sm text-red-400 mt-[0.35rem] flex items-center ml-2'>
            <img src={ico} alt='error' class='h-5 mr-1'/>
            {errorMsg}
        </span>
    {/if}
</div>