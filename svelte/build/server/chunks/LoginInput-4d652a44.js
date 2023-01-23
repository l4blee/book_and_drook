import { c as create_ssr_component, e as escape, d as add_attribute } from './index-3ce6e6d7.js';

const show = "/_app/immutable/assets/show-e6993c45.svg";
const LoginInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label } = $$props;
  let { type } = $$props;
  let { id } = $$props;
  let { errorMsg = "" } = $$props;
  let { pattern = null } = $$props;
  var error = false;
  var value = "";
  var input;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.errorMsg === void 0 && $$bindings.errorMsg && errorMsg !== void 0)
    $$bindings.errorMsg(errorMsg);
  if ($$props.pattern === void 0 && $$bindings.pattern && pattern !== void 0)
    $$bindings.pattern(pattern);
  return `<div class="${"flex flex-col mb-4"}"><label for="${"email"}" class="${"text-md mb-1 ml-2 " + escape(error, true)}">${escape(label)}</label>
    <div class="${"flex relative"}"><input class="${"text-sm bg-gray-200 px-2 rounded-xl h-11 " + escape(error, true) + " w-full"}"${add_attribute("name", id, 0)}${add_attribute("id", id, 0)}${add_attribute("pattern", pattern, 0)} required${add_attribute("value", value, 0)}${add_attribute("this", input, 0)}>
        ${type === "password" ? `<button class="${"absolute h-5 right-3 top-3"}"><img${add_attribute("src", show, 0)} alt="${"show/hide"}" class="${"h-5"}"></button>` : ``}</div>
    ${``}</div>`;
});

export { LoginInput as L };
//# sourceMappingURL=LoginInput-4d652a44.js.map
