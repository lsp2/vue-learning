import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'notelist',
      component: () => import('../views/NoteList.vue')
    },
    {
      path: '/music',
      name: 'musicplayer',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MusicPlayer.vue')
    }
  ]
})

export default router
