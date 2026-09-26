import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
  createRouter,
  createRoute,
  createRootRoute,
} from '@tanstack/react-router'
import { Layout } from './components/layout/Layout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Services } from './pages/Services'
import { Clients } from './pages/Clients'
import { Career } from './pages/Career'
import { Contact } from './pages/Contact'
import './index.css'

const rootRoute = createRootRoute({
  component: Layout,
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
})

const indexRedirectRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/index',
  component: Home,
})

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/aboutus',
  component: About,
})

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/ourservices',
  component: Services,
})

const clientsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/clients',
  component: Clients,
})

const careerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/career',
  component: Career,
})

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: Contact,
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  indexRedirectRoute,
  aboutRoute,
  servicesRoute,
  clientsRoute,
  careerRoute,
  contactRoute,
])

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
