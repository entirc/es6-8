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
                                <h1 class="title is-4">Generator Method Definition - Class</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <p class="content">
                        <pre>
        class MyClass {
            * genMethod() {
                yield 'Angelo'
                yield 'Helton'
            }
        }

        const myInst = new MyClass()
        const genObj = myInst.genMethod()
                        </pre>
                    </p>
                    <div class="content">
                        <button class="button is-success" @click="genMethodDefClass">Executar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Sidebar from './shared-comps/Sidebar.vue'
    export default {
        name: 'GenMethodDefClass',
        components: {
            Sidebar
        },
        methods: {

            genMethodDefClass () {

                class MyClass {
                    * genMethod() {
                        yield 'Angelo'
                        yield 'Helton'
                    }
                }

                 const myInst = new MyClass()
                 const genObj = myInst.genMethod()

                 console.log(genObj.next())
                 console.log(genObj.next())
                 console.log(genObj.next())

            }

        }
    }
</script>
