import { a as authoredContent } from "./authored-content.a330709c.js";
import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createVNode, w as withCtx, b as createTextVNode, t as toDisplayString, F as Fragment, d as renderList, e as createBaseVNode, f as createBlock } from "./index.3e968f83.js";
const FilmCard_vue_vue_type_style_index_0_scoped_955a5576_lang = "";
const _hoisted_1$1 = { class: "filmCard" };
const _sfc_main$1 = {
  __name: "FilmCard",
  props: {
    filmKey: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(_component_router_link, {
          to: { name: "film", params: { filmKey: __props.filmKey } }
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(__props.filmKey), 1)
          ]),
          _: 1
        }, 8, ["to"])
      ]);
    };
  }
};
const FilmCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-955a5576"]]);
const FilmsView_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  components: { FilmCard },
  computed: {
    released() {
      console.log("site content", authoredContent);
      return authoredContent.films.filter((film) => film.released);
    }
  }
};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h3", null, "In Production", -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h3", null, "Released", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FilmCard = resolveComponent("FilmCard");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    (openBlock(true), createElementBlock(Fragment, null, renderList($options.released, (film) => {
      return openBlock(), createBlock(_component_FilmCard, {
        filmKey: film.key
      }, null, 8, ["filmKey"]);
    }), 256))
  ]);
}
const FilmsView = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  FilmsView as default
};
