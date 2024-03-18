import run from "../utils/run";
import { pkgPath } from "../utils/paths";
import { series } from "gulp";
export const publishCli = async () => {
  run("release-it", `${pkgPath}/cli`);
};
export default series(async () => publishCli());
