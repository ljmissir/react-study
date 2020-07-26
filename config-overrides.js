const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        // style设为true需要安装less和less-loader
        style: false,
    }),
    addLessLoader({
        javascriptEnabled: true,
        // 下面是自定义主题颜色
        modifyVars: { '@primary-color': '#d31f1a' }
    })
);