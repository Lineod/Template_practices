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
        copyPublicDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about.html'),
                news: resolve(__dirname, 'link.html'),
                ref_thx: resolve(__dirname, 'ref_thk.html'),
                targets: resolve(__dirname, 'targets.html')
                // 添加您所有的 HTML 文件
            }
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
            open: '/index.html',
            hot: true
        }
    }
})