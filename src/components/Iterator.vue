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
                                <h1 class="title is-4">Iterator</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="content">
                        <p>
                            Basicamente um objeto é considerado um iterator quando implementa o método
                            <b>next ()</b> que por sua vez retorna um objeto que contém duas
                            propriedades:
                        </p>
                        <pre>
        {
            value : valor da execução atual,
            done : booleano
        }
                        </pre>
                    </div>
                    <p class="content">Vejamos alguns exemplos:</p>
                    <div class="content">
                        <div class="content">
                            <pre>
        // Nativos (built-in iterable)

        let array = ["a", "b", "c"]

        for( let x of array) {
            console.log(x)
        }

        let arr = array.entries()

        console.log(arr.next())

        let genFunc = function * () {}

        let genObj = genFunc()

        console.log(genObj.next())
                            </pre>
                        </div>
                        <div class="content">
                            <button class="button is-success" @click="iterArray">Executar</button>
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
        name: 'IteratorProtocol',
        components: {
            Sidebar
        },
        methods: {
            iterArray () {

                let array = ["a", "b", "c"]

                let arr = array.entries()

                // console.log(arr.next())




                let genFunc = function * () {
                    yield 'a'
                    yield 'b'
                }

                let genObj = genFunc()

                console.log(genObj)

                console.log(genObj.next())
                console.log(genObj.next())
                console.log(genObj.next())

            }
        }
    }
</script>
