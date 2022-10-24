const navLinks = [
  {
    title: "首页",
    link: "/",
  },
  {
    title: "成员信息",
    link: "/members",
  },
  {
    title: "培训课程",
    link: "/courses",
    submenu: [
      {
        title: "算法培训",
        link: "/apps",
      },
      {
        title: "电控培训",
        link: "/members",
      },
    ],
  },
  {
    title: "实验室网盘",
    link: "/apps",
    submenu: [
      {
        title: "实验室网盘(内网)",
        link: "/apps",
      },
      {
        title: "实验室网盘(校园网)",
        link: "/members",
      },
    ],
  },
];

export default navLinks;
