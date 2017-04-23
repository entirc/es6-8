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
                                <h1 class="title is-4">Iteration Protocol</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="content">
                        <p>
                            ES6 introduz um novo mecanismo para iterar sobre dados:
                            o protocolo de iteração.
                        </p>
                        <p>
                            Dois conceitos são centrais para o protocolo (convenção) de
                            iteração:
                        </p>
                            <ul>
                                <li>Iterators</li>
                                <li>Iterables</li>
                            </ul>
                        </p>
                        <p>Alguns objetos podem ser ambos.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Sidebar from './shared-comps/Sidebar.vue'
    export default {
        name: 'IterationProtocol',
        components: {
            Sidebar
        },
        methods: {
            iterationProtocol() {

                let a = ['a', 'b', 'c'];
                let iterator = a.entries();

                console.log(iterator.next().value); // [0, 'a']
                console.log(iterator.next().value); // [1, 'b']
                console.log(iterator.next().value); // [2, 'c']

            }
        }
    }
</script>
