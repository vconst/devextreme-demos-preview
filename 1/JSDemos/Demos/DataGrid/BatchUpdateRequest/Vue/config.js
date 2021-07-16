window.config = {
  transpiler: 'plugin-babel',
  meta: {
    '*.vue': {
      loader: 'vue-loader'
    },
    'devextreme/localization.js': {
      "esModule": true
    },
    'devextreme-aspnet-data-nojquery': {
      'esModule': true
    },
  },
  paths: {
    'npm:': '../../../../../node_modules/'
  },
  map: {
    'vue': 'npm:vue/dist/vue.esm-browser.js',
    'vue-loader': 'npm:dx-systemjs-vue-browser/index.js',
    'devextreme-aspnet-data-nojquery': 'npm:devextreme-aspnet-data-nojquery/index.js',
    'whatwg-fetch': 'npm:whatwg-fetch/fetch.js',
    'mitt': 'npm:mitt/dist/mitt.umd.js',
    'rrule': 'npm:rrule/dist/es5/rrule.js',
    'luxon': 'npm:luxon/build/global/luxon.min.js',
    'es6-object-assign': 'npm:es6-object-assign',
    'devextreme': 'npm:devextreme/cjs',
    'devextreme-vue': 'npm:devextreme-vue',
    'jszip': 'npm:jszip/dist/jszip.min.js',
    'devextreme-quill': 'npm:devextreme-quill/dist/dx-quill.min.js',
    'devexpress-diagram': 'npm:devexpress-diagram/dist/dx-diagram.js',
    'devexpress-gantt': 'npm:devexpress-gantt/dist/dx-gantt.js',
    '@devextreme/vdom': 'npm:@devextreme/vdom',
    'inferno': 'npm:inferno/dist/inferno.min.js',
    'inferno-compat': 'npm:inferno-compat/dist/inferno-compat.min.js',
    'inferno-create-element': 'npm:inferno-create-element/dist/inferno-create-element.min.js',
    'inferno-dom': 'npm:inferno-dom/dist/inferno-dom.min.js',
    'inferno-hydrate': 'npm:inferno-hydrate/dist/inferno-hydrate.min.js',
    'inferno-clone-vnode': 'npm:inferno-clone-vnode/dist/inferno-clone-vnode.min.js',
    'inferno-create-class': 'npm:inferno-create-class/dist/inferno-create-class.min.js',
    'inferno-extras': 'npm:inferno-extras/dist/inferno-extras.min.js',
    'plugin-babel': 'npm:systemjs-plugin-babel/plugin-babel.js',
    'systemjs-babel-build': 'npm:systemjs-plugin-babel/systemjs-babel-browser.js'
  },
  packages: {
    'devextreme-vue': {
      main: 'index.js'
    },
    'devextreme': {
      defaultExtension: 'js'
    },
    '@devextreme/vdom': {
      defaultExtension: 'js'
    },
    'devextreme/events/utils': {
      main: 'index'
    },
    'devextreme/events': {
      main: 'index'
    },
    'es6-object-assign': {
      main: './index.js',
      defaultExtension: 'js'
    }
  },
  packageConfigPaths: [
    "npm:@devextreme/*/package.json",
  ],
  babelOptions: {
    sourceMaps: false,
    stage0: true
  }
};
System.config(window.config);
