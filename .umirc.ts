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
      title: '百度',
      path: 'https://github.com/umijs/dumi',
    },
  ],
  // more config: https://d.umijs.org/config
});
