<script setup lang="ts">
defineProps<{
    title?: String,
    info?: String,
}>();
</script>

<template>
    <main ref="rootRef">
        <div class="card">
            <div class="border-top"></div>
            <div class="border-bottom"></div>
            <h1>{{ title }}</h1>
            <div class="details">
                <p>{{ info }}</p>
            </div>
        </div>
    </main>
</template>


<style scoped>
main {
    display: flex;
    width: 100%;
    min-height: 50vh;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    animation: height 3s;
    transition: all 1s;
}

.border-top {
    position: absolute;
    top: 10px;
    left: 10px;
    border-left: 3px solid;
    border-top: 3px solid;
    width: 25%;
    height: 75%;
    animation: border-open 2s;
    border-radius: 0%;
    border-color: grad;
}

.border-bottom {
    position: absolute;
    bottom: 10px;
    right: 10px;
    border-bottom: 1px solid;
    width: 130%;
    height: 75%;
    animation: border-open 2s;
    border-radius: 50%;

}

h1 {
    color: var(--color-heading);
    font-size: 2rem;
    letter-spacing: .05em;
}

.card {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    max-width: 1080px;
    height: fit-content;
    min-height: 250px;
    padding: 50px;
    padding-right: 0px;
    animation: card-open 1s;
    transition: all 1s;
}

.details {
    margin-left: 2%;
    padding-left: 10px;
    padding-right: 30px;
    border-left: 3px solid;
}

@keyframes card-open {
    0% {
        max-width: 500px;
        opacity: 0;
    }

    90% {
        opacity: 1;
    }

    100% {
        max-width: 1080px;
    }
}

@keyframes border-open {
    from {
        width: 0%;
        height: 0%;
        border-radius: 0%;
    }

    75% {
        border-radius: 0%;
    }
}

@keyframes height {
    0% {
        min-height: 100vh;
    }

    75% {
        min-height: 100vh;
    }

    100% {
        min-height: 50vh;
    }
}

@media (min-width: 720px) {
    h1 {
        font-size: 4rem;
        letter-spacing: .05em;
    }

    .details {
        margin-left: 20%;
    }

    .card {
        padding: 50px;
        padding-right: 50px;
    }
}
</style>
