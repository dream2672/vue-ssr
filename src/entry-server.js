import { createApp } from './main'

export default context => {
  // 因为有可能会是异步路由钩子函数或组件，所以我们将返回一个 Promise，
  // 以便服务器能够等待所有的内容在渲染前，
  // 就已经准备就绪。
  return new Promise((resolve, reject) => {
    const { app } = createApp(context)
    
    if (context.url === '/') {
      resolve(app)
    } else {
      reject({ code: 404, url: context.url })
    }
  })
}
