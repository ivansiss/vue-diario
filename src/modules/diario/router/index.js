
export default {

    name: 'diario',
    component: () => import(/* webpackChunkName: "diario-layout" */ '@/modules/diario/layouts/DiarioLayout.vue'),
    children: [
        {
        path: '',
        name: 'no-entry',
        component: () => import(/* webpackChunkName: "diario-no-entry" */ '@/modules/diario/views/NoEntrySelected.vue'),
        },
        {
            path: ':id',
            name: 'entry',
            component: () => import(/* webpackChunkName: "entry-view" */ '@/modules/diario/views/EntryView.vue'),
        }
    ]
};