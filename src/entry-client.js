import { createApp } from './main'

const { app, store } = createApp()
// setTimeout(() => {
//   console.log(app)
//   // console.log(app.$children.map(item => item.$options)[0].asyncData())
// })

if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}
app.$mount('#app')
