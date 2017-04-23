<template>
    <div>
        <div class="columns">
            <div class="column is-4">
                <sidebar></sidebar>
            </div>
            <div class="column">
                <div class="column">
                    <div class="hero is-info">
                        <div class="hero-body">
                            <div class="container">
                                <h1 class="title is-4">Generator Function</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="content">
                        <p>
                            Quando criamos um generator function, nós não podemos acessá-lo diretamente como uma função,
                            ao fazermos uma chamada a um generator function recebemos um objeto generator como resposta.
                        </p>
                        <p>Vejamos um exemplo:</p>
                        <pre>
        function * genFunc() { }

        const gen = genFunc()
                      </pre>

                    </div>

                    <div class="content">
                        <button class="button is-success" @click="generatorFunction">Executar</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Sidebar from './shared-comps/Sidebar.vue'
    export default {
        name: 'GeneratorFunction',
        components: {
            Sidebar
        },
        methods: {
            generatorFunction() {

                function * genFunc() { }

                let gen = genFunc()

                // console.log(gen)

                // console.log(gen.next())

            }
        }
    }
</script>
