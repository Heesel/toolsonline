<template>
    <div class="pt-20 max-w-7xl mx-auto px-8">
        <footer class="flex flex-col md:flex-row justify-between items-center gap-6 py-12 border-t border-white/5">
            <div class="space-y-4 text-center md:text-left">
                <div class="text-lg font-bold text-slate-100">ToolsOnline</div>
                <p class="text-slate-500 text-sm max-w-xs">Built for Precision. Designed for Speed. Your daily
                    workstation for everything utility.</p>
                <div class="text-slate-500 text-xs mt-4">&copy; {{ year }} ToolsOnline. Built for Precision.</div>
            </div>
            <div class="flex flex-wrap justify-center gap-x-8 gap-y-4">
                <a class="footer-link" href="#">Privacy Policy</a>
                <a class="footer-link" href="#">Terms of Service</a>
                <a class="footer-link" href="#">API Documentation</a>
                <a class="footer-link" href="#">Contact Us</a>
            </div>
            <div class="flex gap-4">
                <div
                    class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                    <span class="material-symbols-outlined text-xl text-slate-400 hover:text-primary">terminal</span>
                </div>
                <div
                    class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                    <span class="material-symbols-outlined text-xl text-slate-400 hover:text-primary">database</span>
                </div>
            </div>
        </footer>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const year = ref(new Date().getFullYear());


</script>