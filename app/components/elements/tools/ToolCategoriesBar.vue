<template>
    <aside class="hidden lg:block sticky top-24 h-fit w-64 rounded-2xl bg-white/5 no-border space-y-2">
        <div class="p-6 pb-2">
            <h2 class="text-lg font-bold text-slate-900 dark:text-white font-['Inter']">Categories</h2>
        </div>
        <nav class="flex flex-col p-4 gap-y-3">
            <button v-for="category in categories" :key="category.name" @click="selectCategory(category)" :class="{'bg-white/5 text-white': selectedCategory === category}" class="flex items-center gap-3 px-4 py-3 font-bold rounded-xl transition-all hover:translate-x-1 duration-200 font-['Inter'] text-sm">
                <span class="material-symbols-outlined" :data-icon="category.icon">{{ category.icon }}</span>
                <span>{{ category.name }}</span>
            </button>
        </nav>
    </aside>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const categories = ref([
    { name: 'Calculators', icon: 'calculate' },
    { name: 'Converters',  icon: 'swap_horiz' },
    { name: 'Generators',  icon: 'build' },
    { name: 'Analyzers',   icon: 'analytics' },
    { name: 'Optimizers',  icon: 'tune' },
]);

const selectedCategory = ref(categories.value[0]);

function selectCategory(category: { name: string; icon: string }) {
    selectedCategory.value = category;
}


</script>