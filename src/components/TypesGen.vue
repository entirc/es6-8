<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
    import Sidebar from './shared-comps/Sidebar.vue'
    export default {
        name: 'TypesGen',
        components: {
            Sidebar
        }
    }
</script>
