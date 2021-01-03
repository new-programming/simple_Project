<template>
    <div class="container">
        <header class="header">
            <nav class="header__nav">
                <div class="header__nav__item"></div>
                <div class="header__nav__item"></div>
                <div class="header__nav__item"></div>
                <div class="header__nav__item"></div>
                <div class="header__nav__item"></div>
                <div class="header__nav__item"></div>
            </nav>
            <div class="header__entry">
                <div class="header__entry__item"></div>
                <div class="header__entry__item"></div>
                <div class="header__entry__item"></div>
            </div>
        </header>
        <main>
            <div class="hero">
                <h1>MORE<br>EXCITING<br>EXPERIENCE</h1>
            </div>
            <section class="contents">
                <h2 class="main-title">SERVICE</h2>
                <div class="contents__item"></div>
                <div class="contents__item"></div>
                <div class="contents__item"></div>
                <div class="contents__item"></div>
                <div class="contents__item"></div>
                <div class="contents__item"></div>
            </section>
            <section class="concept">
                <h2 class="main-title">CONCEPT</h2>
                <p></p>
            </section>
        </main>
        <footer>
            <p>&copy;LEE DAEWON</p>
        </footer>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                button: "button",
            }
        },

        mounted() {
            this.test()
        },

        methods: {
            test() {
                console.log(123)
            }            
        }
    }
</script>
