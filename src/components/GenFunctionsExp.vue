<template>
    <div>
        <div class="columns">
            <div class="column is-4">
                <sidebar></sidebar>
            </div>
            <div class="column">
                <div class="column">
                    <div class="hero is-danger">
                        <div class="hero-body">
                            <div class="container">
                                <h1 class="title is-4">Generator Function Expression</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <p></p>
                    <div class="content">
                    <pre>
        let createIterator = function * (items) {
            for (let i = 0; i < items.length; i++) {
                yield items[i]
            }
        }

        let iterator = createIterator([1, 2, 3])

        console.log(iterator.next())
        console.log(iterator.next())
        console.log(iterator.next())
                    </pre>
                </div>
                    <div class="content">
                        <button @click="genFuncExp" class="button is-success" type="button">executar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Sidebar from './shared-comps/Sidebar.vue'
    export default {
        name: 'GeneratorsFunctionsExpression',
        components: {
            Sidebar
        },
        methods: {
            genFuncExp () {

                let createIterator = function * (items) {
                    for (let i = 0; i < items.length; i++) {
                        yield items[i]
                    }
                }

                let iterator = createIterator([1, 2, 3])

                console.log(iterator.next())
                console.log(iterator.next())
                console.log(iterator.next())
                console.log(iterator.next())

            }
        }
    }
</script>
