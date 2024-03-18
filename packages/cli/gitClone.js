import download from "download-git-repo";
import chalk from "chalk";
import ora from "ora";
import { resolve } from "path";

let gitClone = (remote, name, option) => {
  console.log("23");
  const downSpinner = ora("正在下载模板...").start();
  return new Promise((resolve, reject) => {
    download(remote, name, option, (err) => {
      if (err) {
        downSpinner.fail();
        console.log("err", chalk.red(err));
        reject(err);
        return;
      }
      downSpinner.succeed(chalk.green("模板下载成功！"));
      resolve();
    });
  });
};
export default gitClone;
