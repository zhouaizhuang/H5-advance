export default [
  { path: '/vPermission', name: 'vPermission', component: () => import(/* webpackChunkName: "vueAdvance" */ '../../views/vueAdvance/vPermission/index.vue') },
  { path: '/vCopy', name: 'vCopy', component: () => import(/* webpackChunkName: "vueAdvance" */ '../../views/vueAdvance/vCopy/index.vue') },
  { path: '/vDebounce', name: 'vDebounce', component: () => import(/* webpackChunkName: "vueAdvance" */ '../../views/vueAdvance/vDebounce/index.vue') },
  { path: '/vThrottie', name: 'vThrottie', component: () => import(/* webpackChunkName: "vueAdvance" */ '../../views/vueAdvance/vThrottie/index.vue') },
  { path: '/vWaterMarker', name: 'vWaterMarker', component: () => import(/* webpackChunkName: "vueAdvance" */ '../../views/vueAdvance/vWaterMarker/index.vue') },
  { path: '/vDraggable', name: 'vDraggable', component: () => import(/* webpackChunkName: "vueAdvance" */ '../../views/vueAdvance/vDraggable/index.vue') },
  { path: '/vLongpress', name: 'vLongpress', component: () => import(/* webpackChunkName: "vueAdvance" */ '../../views/vueAdvance/vLongpress/index.vue') },
  { path: '/vLazyImg', name: 'vLazyLoad', component: () => import(/* webpackChunkName: "vueAdvance" */ '../../views/vueAdvance/vLazyImg/index.vue') },
  { path: '/vDefaultImg', name: 'vDefaultImg', component: () => import(/* webpackChunkName: "vueAdvance" */ '../../views/vueAdvance/vDefaultImg/index.vue') },
  { path: '/vReachBottom', name: 'vReachBottom', component: () => import(/* webpackChunkName: "vueAdvance" */ '../../views/vueAdvance/vReachBottom/index.vue') },
  { path: '/vFocus', name: 'vFocus', component: () => import(/* webpackChunkName: "vueAdvance" */ '../../views/vueAdvance/vFocus/index.vue') },
  { path: '/propsEmit', name: 'propsEmit', component: () => import(/* webpackChunkName: "vueAdvance" */ '../../views/vueAdvance/propsEmit/father.vue') },
  { path: '/parentChild', name: 'parentChild', component: () => import(/* webpackChunkName: "vueAdvance" */ '../../views/vueAdvance/parentChild/father.vue') },
  { path: '/eventBus', name: 'eventBus', component: () => import(/* webpackChunkName: "vueAdvance" */ '../../views/vueAdvance/eventBus/index.vue') },
  { path: '/attrsListeners', name: 'attrsListeners', component: () => import(/* webpackChunkName: "vueAdvance" */ '../../views/vueAdvance/attrsListeners/father.vue') },
  { path: '/provideInject', name: 'provideInject', component: () => import(/* webpackChunkName: "vueAdvance" */ '../../views/vueAdvance/provideInject/father.vue') },
  { path: '/refs', name: 'refs', component: () => import(/* webpackChunkName: "vueAdvance" */ '../../views/vueAdvance/refs/father.vue') },
  { path: '/useVuex', name: 'useVuex', component: () => import(/* webpackChunkName: "vueAdvance" */ '../../views/vueAdvance/useVuex/index.vue') },
  { path: '/mixIn', name: 'mixIn', component: () => import(/* webpackChunkName: "vueAdvance" */ '../../views/vueAdvance/mixIn/index.vue') },
  { path: '/vSlot', name: 'vSlot', component: () => import(/* webpackChunkName: "vueAdvance" */ '../../views/vueAdvance/vSlot/index.vue') },
  { path: '/vueAni', name: 'vueAni', component: () => import(/* webpackChunkName: "vueAdvance" */ '../../views/vueAdvance/vueAni/index.vue') },
  { path: '/params1/:id', name: 'params1', component: () => import(/* webpackChunkName: "vueAdvance" */ '../../views/vueAdvance/params1/index.vue') },
  { path: '/params2', name: 'params2', component: () => import(/* webpackChunkName: "vueAdvance" */ '../../views/vueAdvance/params2/index.vue') },
  { path: '/query1', name: 'query1', component: () => import(/* webpackChunkName: "vueAdvance" */ '../../views/vueAdvance/query1/index.vue') },
  { path: '/myVmodel', name: 'myVmodel', component: () => import(/* webpackChunkName: "vueAdvance" */ '../../views/vueAdvance/myVmodel/index.vue') },
  { path: '/useWatch', name: 'useWatch', component: () => import(/* webpackChunkName: "vueAdvance" */ '../../views/vueAdvance/useWatch/index.vue') },
  { path: '/asyncCom', name: 'asyncCom', component: () => import(/* webpackChunkName: "vueAdvance" */ '../../views/vueAdvance/asyncCom/index.vue') },
  { path: '/renderCom', name: 'renderCom', component: () => import(/* webpackChunkName: "vueAdvance" */ '../../views/vueAdvance/renderCom/index.vue') },
]