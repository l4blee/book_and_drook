// @ts-ignore
import { c as create_ssr_component, d as add_attribute, v as validate_component, e as escape } from './index-3ce6e6d7.js';
import { L as LoginInput } from './LoginInput-4d652a44.js';

const ico = "/_app/immutable/assets/error-55c507cd.svg";
const RepeatPwd = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label } = $$props;
  let { type } = $$props;
  let { id } = $$props;
  let { errorMsg } = $$props;
  let { pwdNotEqual } = $$props;
  let { on_change } = $$props;
  let { pattern } = $$props;
  var value;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.errorMsg === void 0 && $$bindings.errorMsg && errorMsg !== void 0)
    $$bindings.errorMsg(errorMsg);
  if ($$props.pwdNotEqual === void 0 && $$bindings.pwdNotEqual && pwdNotEqual !== void 0)
    $$bindings.pwdNotEqual(pwdNotEqual);
  if ($$props.on_change === void 0 && $$bindings.on_change && on_change !== void 0)
    $$bindings.on_change(on_change);
  if ($$props.pattern === void 0 && $$bindings.pattern && pattern !== void 0)
    $$bindings.pattern(pattern);
  return `<div class="${"flex flex-col mb-4"}"><label for="${"email"}" class="${"text-md mb-1 ml-2 " + escape(pwdNotEqual && "text-red-400", true)}">${escape(label)}</label>
    <input class="${"text-sm bg-gray-200 px-2 rounded-xl h-11 " + escape(pwdNotEqual && "border-2 border-red-400", true) + " w-full"}"${add_attribute("name", id, 0)}${add_attribute("id", id, 0)}${add_attribute("pattern", pattern, 0)} required${add_attribute("value", value, 0)}>
    ${`${pwdNotEqual ? `<span class="${"text-sm text-red-400 mt-[0.35rem] flex items-center ml-2"}"><img${add_attribute("src", ico, 0)} alt="${"error"}" class="${"h-5 mr-1"}">
            Пароли не совпадают
        </span>` : ``}`}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var pwdNotEqual = false;
  var form;
  var error = false;
  function validateRepeat() {
    let data = Object.fromEntries(new FormData(form));
    console.log(data);
    pwdNotEqual = data.password !== data.repeat;
  }
  return `${$$result.head += `<!-- HEAD_svelte-pfaiqq_START -->${$$result.title = `<title>Book и друг | Регистрация</title>`, ""}<!-- HEAD_svelte-pfaiqq_END -->`, ""}

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
      label: "Email",
      type: "email",
      id: "email",
      pattern: "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$",
      errorMsg: "Неверный Email"
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
      errorMsg: "Пароль должен быть не короче 6 символов и состоять из латинского алфавита, цифр и спецсимволов"
    },
    {},
    {}
  )}
            ${validate_component(RepeatPwd, "RepeatPwd").$$render(
    $$result,
    {
      label: "Повторите пароль",
      type: "password",
      id: "repeat",
      pattern: "^(?=.*[0-9])(?=.*[!_@#$%^&*])[a-zA-Z0-9!_@#$%^&*]{6,16}$",
      errorMsg: "Невалидный пароль",
      pwdNotEqual,
      on_change: validateRepeat
    },
    {},
    {}
  )}
            
            ${``}

            <button type="${"submit"}" class="${"bg-red-400 rounded-xl w-full h-12 font-semibold " + escape(error, true) + " mt-32"}">Присоединиться</button>
            <span class="${"mt-2 ml-3"}">Уже есть аккаунт? 
                <a href="${"/login"}" class="${"text-blue-800"}">Войти</a></span></form></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-2bf23a07.js.map
