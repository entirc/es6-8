<template>
    <div>
        <div class="columns">
            <div class="column is-4">
                <sidebar></sidebar>
            </div>
            <div class="column">
                <div class="column">
                    <div class="hero is-primary">
                        <div class="hero-body">
                            <div class="container">
                                <h1 class="title is-4">Generator Method Definition - Objects</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="content">
                        <pre>
        let obj = {
            genMethod: function * (items) {
                for (let i = 0; i < items.length; i++) {
                    yield items[i]
                }
            }
        }

        let iterator = obj.genMethod([1, 2, 3])

        console.log(iterator.next())
        console.log(iterator.next())


        let obj2 = {
            * genMethod(items) {

                for (let i = 0; i < items.length; i++) {
                    yield items[i]
                }

            }
        }

        let iter = obj2.genMethod([1, 2, 3])

        console.log(iter.next())
        console.log(iter.next())

                        </pre>
                    </div>
                    <div class="content">
                        <button class="button is-success" @click="genMethodDefObj">Executar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Sidebar from './shared-comps/Sidebar.vue'
    export default {
        name: 'GenMethodDefObj',
        components: {
            Sidebar
        },
        methods: {
            genMethodDefObj() {

                let obj1 = {
                    genMethod: function * (items) {
                        for (let i = 0; i < items.length; i++) {
                            yield items[i]
                        }
                    }
                }

                let iter1 = obj1.genMethod([1, 2, 3])

                console.log(iter1.next())
                console.log(iter1.next())
                console.log(iter1.next())







                /**
                 * Forma abreviada de declaração de método de objeto
                 **/
                let obj2 = {
                    * genMethod(items) {

                        for (let i = 0; i < items.length; i++) {
                            yield items[i]
                        }

                    }
                }

                let iter2 = obj2.genMethod([1, 2, 3])

                // console.log(iter2.next())
                // console.log(iter2.next())

            }
        }
    }
</script>
