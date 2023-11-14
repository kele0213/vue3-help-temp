import { createRouter, createWebHistory } from 'vue-router'

const files = require.context('@/views', true, /route\.js/)
console.log('files', files)
const routes = files.keys().map((key) => {
  const page = require('@/views' + key.replace('.', ''))
  return page.default
})

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
