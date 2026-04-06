<template>
    <section class="relative min-h-153 flex flex-col items-center justify-center px-6 overflow-hidden">
        <div class="absolute inset-0 pointer-events-none opacity-20"
            style="background-image: url('/images/background.png'); background-size: cover; background-position: center;">
        </div>
        <div class="relative z-10 text-center max-w-4xl mx-auto space-y-8">
            <div class="space-y-4">
                <h1 class="text-5xl md:text-7xl font-black font-headline tracking-tighter leading-none text-white">
                    Every Tool You Need, <br />
                    <span class="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">All in
                        One Place</span>
                </h1>
            </div>
            <div class="relative max-w-2xl mx-auto mt-12">
                <div
                    class="flex items-center bg-white/5 backdrop-blur-md p-2 rounded-full border border-white/10 shadow-2xl">
                    <span class="material-symbols-outlined ml-4 text-slate-400">search</span>
                    <input
                        class="flex-1 bg-transparent border-0 focus:ring-0 outline-none text-lg py-4 px-4 text-white placeholder:text-slate-500 font-medium"
                        placeholder="Try 'Hex to RGB' or 'Scientific Calculator'..." type="text" />
                    <button type="button"
                        class="bg-linear-to-r from-blue-700 to-blue-300 text-white px-8 py-4 rounded-full font-bold text-sm hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-primary/20 cursor-pointer">
                        Quick Search
                    </button>
                </div>
            </div>
            <div class="flex flex-wrap justify-center gap-3 mt-8">
                <button type="button" class="px-6 py-2 rounded-full bg-secondary-dim/20 border border-secondary/20 text-green-400 text-sm font-semibold hover:bg-green-400/10 transition-all flex items-center gap-2 cursor-pointer">
                    <span class="material-symbols-outlined text-sm">cached</span> Convert
                </button>
                <button type="button"
                    class="px-6 py-2 rounded-full bg-blue-900/20 border border-blue-900/20 text-blue-400 text-sm font-semibold hover:bg-blue-900/40 transition-all flex items-center gap-2 cursor-pointer">
                    <span class="material-symbols-outlined text-sm">calculate</span> Calculate
                </button>
                <button type="button"
                    class="px-6 py-2 rounded-full bg-orange-900/40 border border-orange-900/40 text-orange-400 text-sm font-semibold hover:bg-orange-900/60 transition-all flex items-center gap-2 cursor-pointer">
                    <span class="material-symbols-outlined text-sm">edit</span> Edit
                </button>
                <button type="button"
                    class="px-6 py-2 rounded-full bg-white/10 border border-white/10 text-slate-300 text-sm font-semibold hover:bg-white/20 transition-all flex items-center gap-2 cursor-pointer">
                    <span class="material-symbols-outlined text-sm">mood</span> Fun
                </button>
            </div>
        </div>
    </section>
</template>