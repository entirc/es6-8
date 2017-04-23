<template>
    <div>
        <div class="columns">
            <div class="column is-4">
                <sidebar></sidebar>
            </div>
            <div class="column">
                <div class="column">
                    <div class="hero is-warning">
                        <div class="hero-body">
                            <div class="container">
                                <h1 class="title is-4">Iterable</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="content">
                        <p>
                            Iterables são estruturas de dados que podem ser iteradas,
                            como (as nativas): Strings, Arrays, Maps, Sets.
                        </p>
                        <p>
                            O protocolo iterable permite que objetos JavaScript definam
                            ou personalizem seu comportamento de iteração.
                        </p>
                    </div>
                    <div class="content">
                        <div class="content">
                            <pre>
        // Strings
        let str = 'angelo'

        for(let char of str) {
            // console.log(char)
        }

        // Arguments
        function args(...rest) {
            for (let v of rest) {
                console.log(v)
            }
        }

        // args([1,2,3])

        // Objetos não são iteráveis nativamente

        const obj = { first: 'angelo', last: 'rubin' }

        /*
        for(let x of obj) {
            console.log(x)
        }
        */

        let objectEntries = Object.entries(obj)

        for (const [key, value] of objectEntries) {
            console.log(`${key}: ${value}`)
        }

        for (const v in objectEntries) {
            // console.log(v)
        }
                            </pre>
                        </div>
                        <div class="content">
                            <button class="button is-success" @click="iterable">Executar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Sidebar from './shared-comps/Sidebar.vue'
    export default {
        name: 'Iterable',
        components: {
            Sidebar
        },
        methods: {
            iterable () {

                // Strings
                let str = 'angelo'

                for(let char of str) {
                    // console.log(char)
                }

                for(let x in [1,2,3]) {
                    // console.log(x)
                }

                // Arguments
                function args(...rest) {
                    for (let v of rest) {
                        console.log(v)
                    }
                }

                // args([1,2,3])

                // Objetos não são iteráveis nativamente

                const obj = { first: 'angelo', last: 'rubin' }

                /*
                for(let x of obj) {
                    // console.log(x)
                }
                */


                let objectEntries = Object.entries(obj)

                for (const [key, value] of objectEntries) {
                    // console.log(`${key}: ${value}`)
                }

                for (const v in objectEntries) {
                    // console.log(v)
                }

                // Criando objetos iteráveis

                let myIterable = {}

                myIterable[Symbol.iterator] = function * () {
                    yield 1
                    yield 2
                    yield 3
                }

                console.log([...myIterable])

            }
        }
    }
</script>
