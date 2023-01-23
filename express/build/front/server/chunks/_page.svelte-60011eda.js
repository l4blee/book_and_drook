// @ts-ignore
import { c as create_ssr_component, d as add_attribute, v as validate_component, e as escape } from './index-3ce6e6d7.js';
import { L as LoginInput } from './LoginInput-4d652a44.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var form;
  var error = false;
  return `${$$result.head += `<!-- HEAD_svelte-96kg8h_START -->${$$result.title = `<title>Book и друг | Вход</title>`, ""}<!-- HEAD_svelte-96kg8h_END -->`, ""}

<div class="${"fixed w-full h-full bg-gray-200"}"><div class="${"flex md:w-1/2 sm:w-full h-full bg-white items-center justify-center shadow-2xl"}"><form class="${"flex flex-col w-[70%]"}"${add_attribute("this", form, 0)}>${validate_component(LoginInput, "LoginInput").$$render(
    $$result,
    {
      label: "Никнейм",
      type: "text",
      id: "nickname",
      pattern: "^[^0-9][a-zA-Z0-9]{4,}$",
      errorMsg: "Никнейм должен содержать не менее 5 латинских букв и цифр"
    },
    {},
    {}
  )}
            ${validate_component(LoginInput, "LoginInput").$$render(
    $$result,
    {
      label: "Пароль",
      type: "password",
      id: "password",
      pattern: "^(?=.*[0-9])(?=.*[!_@#$%^&*])[a-zA-Z0-9!_@#$%^&*]{6,16}$",
      errorMsg: "Пароль должен быть не короче 6 символов и состоять из латинского алфавита, цирф и спецсимволов"
    },
    {},
    {}
  )}

            ${``}

            <button type="${"submit"}" class="${"bg-red-400 rounded-xl w-full h-12 font-semibold " + escape(error, true) + " mt-32"}">Войти</button>
            <span class="${"mt-2 ml-3"}">Ещё нет аккаунта? 
                <a href="${"/register"}" class="${"text-blue-800"}">Присоединиться</a></span></form></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-60011eda.js.map
