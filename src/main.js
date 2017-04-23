import Vue from 'vue'
import Root from './Root.vue'
import VueRouter from 'vue-router'
import Gen from './components/Gen.vue'
import Iterator from './components/Iterator.vue'
import Iterable from './components/Iterable.vue'
import IterProtocol from './components/IterProtocol.vue'
import GenMethodDefObj from './components/GenMethodDefObj.vue'
import GenMethodDefClass from './components/GenMethodDefClass.vue'
import TypesGen from './components/TypesGen.vue'
import GenFunctions from './components/GenFunctions.vue'
import GenFunctionsExp from './components/GenFunctionsExp.vue'
import Links from './components/Links.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: Gen
    },
    {
        path: '/types-gen',
        component: TypesGen,
        children: [{
                path: '/gen-functions',
                component: GenFunctions
            },
            {
                path: '/gen-functions-exp',
                component: GenFunctionsExp
            },
            {
                path: '/gen-method-def-obj',
                component: GenMethodDefObj
            },
            {
                path: '/gen-method-def-class',
                component: GenMethodDefClass
            }
        ]
    },
    {
        path: '/iterator',
        component: Iterator
    },
    {
        path: '/iterable',
        component: Iterable
    },
    {
        path: '/iteration-protocol',
        component: IterProtocol
    },
    {
        path: '/links',
        component: Links
    }
]

const router = new VueRouter({
    linkActiveClass: 'is-active',
    mode: 'history',
    routes // short for routes: routes
})

new Vue({
    el: '#app',
    router,
    render: h => h(Root)
})
