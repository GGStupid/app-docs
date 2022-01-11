import { defineConfig } from 'dumi';

export default defineConfig({
  locales: [['zh-CN', '中文']],
  title: 'Niu-UI',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
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
