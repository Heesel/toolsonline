<template>
    <main class="pt-16">
        <Hero/>
        <section class="container max-w-7xl mx-auto px-8 py-20 space-y-24">
            <RecentlyUsed/>
            <PopularTools/>           
        </section>
    </main>
</template>
<script setup lang="ts">
import RecentlyUsed from '~/components/elements/home/RecentlyUsed.vue';
import PopularTools from '~/components/elements/home/PopularTools.vue';
import Hero from '../components/elements/home/Hero.vue';

</script>