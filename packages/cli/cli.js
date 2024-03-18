import commandLineArgs from "command-line-args";
import commandLineUsage from "command-line-usage";
import prompts from "prompts";
import { readFile } from "fs/promises";
import gitClone from "./gitClone.js";

const pkg = JSON.parse(
  await readFile(new URL("./package.json", import.meta.url))
);
//配置命令参数
const optionDefinitions = [
  { name: "version", alias: "v", type: Boolean },
  { name: "help", alias: "h", type: Boolean },
];
const options = commandLineArgs(optionDefinitions);
if (options.version) {
  console.log(`v${pkg.version}`);
}
const helpSections = [
  {
    header: "create-gaoui",
    content: "自己定义的vue3脚手架",
  },
  {
    header: "Options",
    optionList: [
      {
        name: "version",
        alias: "v",
        typeLabel: "{underline boolean}",
        description: "版本号",
      },
      {
        name: "help",
        alias: "h",
        typeLabel: "{underline boolean}",
        description: "帮助",
      },
    ],
  },
];
const promptsOptions = [
  { type: "text", name: "project-name", message: "请输入项目名称" },
  {
    type: "select",
    name: "template",
    message: "请选择一个模板",
    choices: [
      { title: "gaoui", value: 1 },
      { title: "easyest", value: 2 },
    ],
  },
  //   { type: "text", name: "user", message: "用户" },
  //   { type: "password", name: "password", message: "密码" },
  //   {
  //     type: "select",
  //     name: "gender",
  //     message: "性别",
  //     choices: [
  //       { title: "男", value: 0 },
  //       { title: "女", value: 1 },
  //     ],
  //   },
  //   {
  //     type: "multiselect",
  //     name: "study",
  //     message: "多选",
  //     choices: [
  //       { title: "Vue", value: 0 },
  //       { title: "React", value: 1 },
  //       { title: "Angular", value: 3 },
  //     ],
  //   },
];
if (options.help) {
  console.log(commandLineUsage(helpSections));
}

const remoteList = {
  1: "https://github.com/fogTomoon/gaoui.git#main",
  2: "https://github.com/qddidi/easyest.git",
};
const getUserInfo = async () => {
  const res = await prompts(promptsOptions);
  console.log("res", res);
  if (!res["project-name"] || !res.template) return;

  gitClone(`direct:${remoteList[res.template]}`, res["project-name"], {
    clone: true,
  });
};
getUserInfo();
