import { ViteSSG } from 'vite-ssg'
import './style.css'
import App from './App.vue'
import { routes } from './router'

// Export the SSG-ready app creation function
export const createApp = ViteSSG(
  App,
  { routes },
  async ({ app, router, routes, isClient, initialState }) => {
    // Custom initialization logic can be added here
  }
)
