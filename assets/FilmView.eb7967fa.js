import { a as authoredContent } from "./authored-content.a330709c.js";
import { _ as _export_sfc, o as openBlock, c as createElementBlock, e as createBaseVNode, t as toDisplayString } from "./index.3e968f83.js";
const FilmView_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  props: {
    filmKey: {
      type: String,
      required: true
    }
  },
  computed: {
    descriptor() {
      return authoredContent.films.find((film) => film.key === this.filmKey);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("strong", null, "I am " + toDisplayString($props.filmKey), 1),
    createBaseVNode("p", null, toDisplayString(JSON.stringify($options.descriptor)), 1)
  ]);
}
const FilmView = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  FilmView as default
};
