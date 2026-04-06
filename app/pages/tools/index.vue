<template>
    <main class="my-16">
        <section class="container mx-auto max-w-7xl px-8 py-20 space-y-12 flex flex-col lg:flex-row gap-x-12">       
            <div class="">
                <ToolCategoriesBar/>
            </div>
            <div class="flex-1">
                <header class="mb-12">
                    <h1 class="text-4xl md:text-5xl font-headline font-extrabold text-white tracking-tight leading-none mb-4">
                        Explore all <span class="text-primary">Tools.</span>
                    </h1>
                    <p class="text-gray-400 max-w-xl text-lg leading-relaxed">
                        A curated collection of premium utility tools designed for creators, developers, and professionals who
                        value high-speed precision.
                    </p>
                </header>
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    <!-- Tool Card 1 -->
                    <div v-for="n in 9" class="group p-8 rounded-xl bg-white/5 hover:bg-white/6 transition-all duration-300 relative overflow-hidden">
                        <div
                            class="absolute -right-4 -top-4 w-24 h-24 metric-bloom opacity-0 group-hover:opacity-100 transition-opacity">
                        </div>
                        <div class="mb-6 inline-flex p-3 rounded-full bg-blue-600">
                            <span class="material-symbols-outlined text-3xl" data-icon="functions">functions</span>
                        </div>
                        <h3 class="text-xl font-headline font-bold text-white mb-2">Equation Solver</h3>
                        <p class="text-sm text-gray-400">Resolve complex algebraic expressions in real-time.</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script setup lang="ts">
import ToolCategoriesBar from '~/components/elements/tools/ToolCategoriesBar.vue';

</script>