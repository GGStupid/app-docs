import { defineConfig } from 'dumi';

export default defineConfig({
  locales: [['zh-CN', '中文']],
  title: 'Niu-UI',
  favicon: '/favicon.svg',
  logo: '/favicon.svg',
  outputPath: 'docs-dist',
  mode: 'site',
  navs: [
    null,
    {
      title: 'github',
      path: 'https://github.com/GGStupid/app-docs',
    },
  ],
  // more config: https://d.umijs.org/config
});
