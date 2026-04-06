<template>
    <div class="space-y-8">
        <div class="flex justify-between items-end">
            <div class="space-y-1">
                <span class="text-tertiary-fixed text-xs font-bold uppercase tracking-widest">Your Flow</span>
                <h2 class="text-3xl font-black font-headline text-white">Recently Used</h2>
            </div>
            <a class="text-blue-400 text-sm font-bold hover:underline" href="#">Clear History</a>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div
                class="md:col-span-2 bg-linear-to-br from-blue-600/20 to-indigo-600/20 p-8 rounded-xl border border-blue-500/10 flex flex-col justify-between min-h-60 card-hover group cursor-pointer">
                <div class="space-y-4">
                    <div
                        class="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                        <span class="material-symbols-outlined text-3xl">precision_manufacturing</span>
                    </div>
                    <div>
                        <h3 class="text-xl font-bold text-white">Advanced Unit Converter</h3>
                        <p class="text-slate-400 text-sm mt-1">Last used 2 hours ago • Metric &amp; Imperial</p>
                    </div>
                </div>
                <div class="flex gap-2">
                    <span
                        class="px-3 py-1 rounded-full bg-white/5 text-[10px] font-bold uppercase tracking-tighter text-blue-400">Essential</span>
                </div>
            </div>
            <div
                class="bg-surface-container-lowest/5 p-6 rounded-xl border border-white/5 card-hover group cursor-pointer flex flex-col items-center text-center justify-center gap-4">
                <div
                    class="w-14 h-14 rounded-full bg-tertiary/10 text-tertiary-fixed flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span class="material-symbols-outlined text-3xl">qr_code_2</span>
                </div>
                <div>
                    <h3 class="font-bold text-white">QR Generator</h3>
                    <p class="text-slate-500 text-xs">Vibrant custom themes</p>
                </div>
            </div>
            <div
                class="bg-surface-container-lowest/5 p-6 rounded-xl border border-white/5 card-hover group cursor-pointer flex flex-col items-center text-center justify-center gap-4">
                <div
                    class="w-14 h-14 rounded-full bg-secondary/10 text-secondary-fixed flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span class="material-symbols-outlined text-3xl">compress</span>
                </div>
                <div>
                    <h3 class="font-bold text-white">Image Optimizer</h3>
                    <p class="text-slate-500 text-xs">90% size reduction</p>
                </div>
            </div>
        </div>
    </div>
</template>