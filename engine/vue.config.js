module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'VUE代码前端生产自动化工具 作者chendm',
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
  },
};
