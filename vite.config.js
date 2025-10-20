import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path';
import { theme } from './src/config/theme/themeVariables';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
  // Base public path - use env variable or default to '/'
  base: env.VUE_APP_SUB_ROUTE || env.VITE_APP_SUB_ROUTE || '/',
  define: {
    'process.env': {},
    'global': 'globalThis',
    '__VUE_OPTIONS_API__': true,
    '__VUE_PROD_DEVTOOLS__': false,
    // Expose VUE_APP_* variables to client code
    'import.meta.env.VUE_APP_SUB_ROUTE': JSON.stringify(env.VUE_APP_SUB_ROUTE || ''),
    'import.meta.env.VUE_APP_AUTH0_DOMAIN': JSON.stringify(env.VUE_APP_AUTH0_DOMAIN || ''),
    'import.meta.env.VUE_APP_AUTH0_CLIENT_ID': JSON.stringify(env.VUE_APP_AUTH0_CLIENT_ID || '')
  },
  plugins: [
    vueJsx({
      optimize: true,
      transformOn: true,
      mergeProps: true
    }),
    vue({
      include: [/\.vue$/],
      template: {
        compilerOptions: {
          // Don't treat unicon as custom element - it's a registered Vue component
          isCustomElement: (tag) => false
        }
      },
      script: {
        defineModel: true,
        propsDestructure: true,
        babelParserPlugins: ['jsx', 'decorators-legacy']
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~': path.resolve(__dirname, './node_modules'),
      'antd': path.resolve(__dirname, './src/shims/antd.js'),
      'antd/es/dropdown/style': path.resolve(__dirname, './src/shims/antd.js'),
      'antd/es/table/hooks/useLazyKVMap': path.resolve(__dirname, './src/shims/antd.js'),
      'antd/es/grid/hooks/useBreakpoint': path.resolve(__dirname, './src/shims/antd.js'),
      'react': 'vue',
      'react-dom': 'vue'
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: theme
      }
    }
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: `import { h, Fragment } from 'vue'`
  },
  publicDir: 'public',
  server: {
    port: 8080,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['vue', 'vue-router', 'vuex'],
          'ant-design': ['ant-design-vue', '@ant-design/icons-vue']
        }
      }
    }
  },
  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      'vuex',
      'ant-design-vue',
      '@ant-design/icons-vue',
      'vue-unicons',
      'vue-unicons/dist/icons'
    ],
    exclude: [
      '@ant-design/pro-components'
    ]
  }
  };
});
