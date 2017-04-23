<template>
    <div>
        <div class="columns">
            <div class="column">
                <sidebar></sidebar>
            </div>
            <div class="column">
                <div class="column">
                    <div class="hero is-primary">
                        <div class="hero-body">
                            <div class="container">
                                <h1 class="title is-4"> ES6 - </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    Content Here
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Sidebar from './shared-comps/Sidebar.vue'
    export default {
        name: 'IteratorProtocol',
        components: {
            Sidebar
        }
    }
</script>
