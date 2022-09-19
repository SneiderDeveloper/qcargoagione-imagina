export default {
    cargo: {
        //permission: 'page.pages.manage',
        activated: true,
        authenticated: true,
        path: '/cargo/index',
        name: 'qcargoagione.admin.cargo',
        crud : import('../_crud/cargo.vue'),
        page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
        layout: () => import('@imagina/qsite/_layouts/master.vue'),
        title: 'icargo.cms.sidebar.cargoInfo',
        icon: 'fa-light fa-truck-container',
        subHeader: {
          refresh: true,
        }
    }
}
