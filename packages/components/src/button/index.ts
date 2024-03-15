import _Button from "./button.vue";
import type { App, Plugin } from "vue";
type SCFWithInstall<T> = T & Plugin;
const withInstall = <T>(comp: T) => {
  (comp as SCFWithInstall<T>).install = (app: App) => {
    const name = (comp as any).name;
    app.component(name, comp as SCFWithInstall<T>);
  };
  return comp as SCFWithInstall<T>;
};
export const Button = withInstall(_Button);
export default Button;
