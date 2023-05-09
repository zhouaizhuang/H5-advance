export default [
  { path: '/uploadImg', name: 'uploadImg', component: () => import(/* webpackChunkName: "pc" */ '../../views/pc/uploadImg/index.vue')},
  { path: '/Zmap', name: 'Zmap', component: () => import(/* webpackChunkName: "pc" */ '../../views/pc/myMap/index.vue')},
  { path: '/pickArea', name: 'pickArea', component: () => import(/* webpackChunkName: "pc" */ '../../views/pc/pickArea/index.vue')},
  { path: '/sliderVerify_pc', name: 'sliderVerify', component: () => import(/* webpackChunkName: "pc" */ '../../views/pc/sliderVerify/index.vue')},
  { path: '/useQrcode_pc', name: 'useQrcode', component: () => import(/* webpackChunkName: "pc" */ '../../views/pc/useQrcode/index.vue')},
  { path: '/printTable_pc', name: 'printTable_pc', component: () => import(/* webpackChunkName: "pc" */ '../../views/pc/printTable_pc/index.vue')},
  { path: '/noAutoComplete_pc', name: 'noAutoComplete_pc', component: () => import(/* webpackChunkName: "pc" */ '../../views/pc/noAutoComplete_pc/index.vue')},
  { path: '/tabs_pc', name: 'tabs_pc', component: () => import(/* webpackChunkName: "pc" */ '../../views/pc/tabs_pc/index.vue')},
  { path: '/modal_pc', name: 'modal_pc', component: () => import(/* webpackChunkName: "pc" */ '../../views/pc/modal_pc/index.vue')},
  { path: '/drawer_pc', name: 'drawer_pc', component: () => import(/* webpackChunkName: "pc" */ '../../views/pc/drawer_pc/index.vue')},
  { path: '/button_pc', name: 'button_pc', component: () => import(/* webpackChunkName: "pc" */ '../../views/pc/button_pc/index.vue')},
  { path: '/message_pc', name: 'message_pc', component: () => import(/* webpackChunkName: "pc" */ '../../views/pc/message_pc/index.vue')},
  { path: '/drag_pc', name: 'drag_pc', component: () => import(/* webpackChunkName: "pc" */ '../../views/pc/drag_pc/index.vue')},
  { path: '/ueditor_pc', name: 'ueditor_pc', component: () => import(/* webpackChunkName: "pc" */ '../../views/pc/ueditor_pc/index.vue')},
  { path: '/ueditor_pc', name: 'ueditor_pc', component: () => import(/* webpackChunkName: "pc" */ '../../views/pc/ueditor_pc/index.vue')},
  { path: '/previewImg_pc', name: 'previewImg_pc', component: () => import(/* webpackChunkName: "pc" */ '../../views/pc/previewImg_pc/index.vue')},
  { path: '/upLoadImgs_pc', name: 'upLoadImgs_pc', component: () => import(/* webpackChunkName: "pc" */ '../../views/pc/upLoadImgs_pc/index.vue')},
  { path: '/preview_pdf_pc', name: 'preview_pdf_pc', component: () => import(/* webpackChunkName: "pc" */ '../../views/pc/preview_pdf_pc/index.vue')},
  { path: '/mouseRightClick_pc', name: 'mouseRightClick_pc', component: () => import(/* webpackChunkName: "pc" */ '../../views/pc/mouseRightClick_pc/index.vue')},
  { path: '/readExcel_pc', name: 'readExcel_pc', component: () => import(/* webpackChunkName: "pc" */ '../../views/pc/readExcel_pc/index.vue')},
]