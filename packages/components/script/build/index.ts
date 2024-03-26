import delPath from '../utils/delpath';
import { series, parallel, src, dest } from 'gulp';
import { componentPath, pkgPath } from '../utils/paths';
import less from 'gulp-less';
import autoprefixer from 'gulp-autoprefixer';
import run from '../utils/run';
export const removeDist = () => {
  console.log('Removing dist', pkgPath);
  return delPath(`${pkgPath}/easyest`);
};
export const buildStyle = () => {
  return src(`${componentPath}/src/**/style/**.less`)
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/easyest/lib/src`))
    .pipe(dest(`${pkgPath}/easyest/es/src`));
};
export const buildComponent = async () => {
  run('pnpm run build', componentPath);
};
export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent()
  )
);
