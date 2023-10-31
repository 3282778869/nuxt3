// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: '测试项目',
            meta: [
                {name: 'keywords', content: '测试，项目'},
                {name: 'description', content: '一个nuxt3的测试项目'}
            ]
        }
    }
})
