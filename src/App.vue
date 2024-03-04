<script>
import Navigation from './components/Navigation.vue'
export default {
    components: {
        Navigation,
    },
}
</script>

<template>
    <header class="absolute top-0 left-0 w-svw bg-white/30 backdrop-blur-lg p-4">
        <Navigation></Navigation>
    </header>
    <router-view></router-view>
</template>
