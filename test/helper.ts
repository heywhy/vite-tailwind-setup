import merge from 'deepmerge'
import { mount as mountUtil } from '@vue/test-utils'
import { render as render$ } from '@testing-library/vue'
import { ComponentOptions, FunctionalComponent } from 'vue'
import {
  createRouter,
  createWebHistory,
  RouteLocationRaw,
  RouteRecordRaw,
} from 'vue-router'
import { routes } from 'src/router/routes'

export const mix = (...args: object[]) => merge.all(args)

type Component = FunctionalComponent | ComponentOptions
export const mount = (component: Component, opts: object = {}) =>
  mountUtil(component as any, opts)

type Params = Parameters<typeof render$>
type Options = Params[1] & {
  routes?: RouteRecordRaw[]
  route?: RouteLocationRaw
}

export const render = async (component: Params[0], opts?: Options) => {
  const router = createRouter({
    history: createWebHistory(),
    routes: opts?.routes || routes,
  })

  let options: Params[1] = mix(opts || {}, {
    global: {
      plugins: [router],
    },
  })

  const result = render$(component, options)

  await router.isReady()

  // if (opts?.route) {
  //   await router.push(opts.route)
  // }

  return { ...result, router }
}
