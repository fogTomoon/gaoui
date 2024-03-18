import {
  __export,
  computed,
  createElementBlock,
  defineComponent,
  normalizeClass,
  openBlock,
  renderSlot,
  unref
} from "./chunk-HYLD5MID.js";

// ../node_modules/.pnpm/easyest@1.0.7/node_modules/easyest/es/src/index.mjs
var src_exports = {};
__export(src_exports, {
  Button: () => a,
  Icon: () => a2
});

// ../node_modules/.pnpm/easyest@1.0.7/node_modules/easyest/es/src/button/button.vue_vue_type_script_setup_true_lang.mjs
import "D:/workspace/htmlDemo/myComponent/node_modules/.pnpm/easyest@1.0.7/node_modules/easyest/es/src/button/style/index.css";
var m = defineComponent({ name: "ea-button" });
var d = defineComponent({
  ...m,
  props: {
    type: null,
    size: null
  },
  setup(n) {
    const t2 = n, o = computed(() => ({ [`ea-button--${t2.type}`]: t2.type }));
    return (r2, f) => (openBlock(), createElementBlock("button", {
      class: normalizeClass(["ea-button", unref(o)])
    }, [
      renderSlot(r2.$slots, "default")
    ], 2));
  }
});

// ../node_modules/.pnpm/@easyest+utils@1.0.2/node_modules/@easyest/utils/dist/es/withinstall/index.js
var index = (comp) => {
  comp.install = (app) => {
    const name = comp.name || comp.__name;
    app.component(name, comp);
  };
  return comp;
};

// ../node_modules/.pnpm/easyest@1.0.7/node_modules/easyest/es/src/button/index.mjs
var a = index(d);

// ../node_modules/.pnpm/easyest@1.0.7/node_modules/easyest/es/src/icon/icon.vue_vue_type_script_setup_true_lang.mjs
import "D:/workspace/htmlDemo/myComponent/node_modules/.pnpm/easyest@1.0.7/node_modules/easyest/es/src/icon/style/index.css";
var t = { class: "ea-icon" };
var p = defineComponent({
  name: "icon",
  setup(c) {
    return (r2, s) => (openBlock(), createElementBlock("div", t, "Icon1"));
  }
});

// ../node_modules/.pnpm/easyest@1.0.7/node_modules/easyest/es/src/icon/index.mjs
var a2 = index(p);

// ../node_modules/.pnpm/easyest@1.0.7/node_modules/easyest/es/index.mjs
var r = {
  install: (t2) => {
    for (let e in src_exports)
      t2.use(src_exports[e]);
  }
};
export {
  a as Button,
  a2 as Icon,
  r as default
};
//# sourceMappingURL=easyest.js.map
