import { defineConfig } from 'vite'

export default defineConfig({
    // 基础配置
    root: '.',
    publicDir: 'public',
    base: "/Template_practices/",
    // 构建配置
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        sourcemap: true,
        copyPublicDir: true
        // rollupOptions: {
        //     output: {
        //         assetFileNames: 'assets/[name]-[hash][extname]',
        //         chunkFileNames: 'assets/[name]-[hash].js',
        //         entryFileNames: 'assets/[name]-[hash].js'
        //     }
        // }
    },

    // CSS 预处理配置
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
          @use "./src/styles/style" as *;
        `
            }
        }
    },

    // 开发服务器配置
    server: {
        port: 3000,
        open: true,
        hot: true
    }
})