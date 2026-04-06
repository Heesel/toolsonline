<template>
    <section class="relative min-h-153.25 flex flex-col items-center justify-center px-6 overflow-hidden hero-gradient">
        <div class="absolute inset-0 pointer-events-none opacity-20"
            style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAaC5uVX5RkMf4l8__uPDU2Ay7CZstbWpJ_1EmDU6tI0UUMLhGpzaN_hcyJiNMbcM7qsTYfM-BIl-AzSFPESfmCRPVX4cvb5tYky1jcThXtzyRQ7N1E6_IaGjKtfnjkB-mjBW3GRdW-n5GfI9AGm-guIQm074MMxbJlZvDflhpG6tjEhl1uTaIhEz4imNGKSFuocGSvLslmessXcOjvt3rfkjVsWMBUj7Q-YcuUgjI8OMQ3C6-8npztesnwnmuO0Ud39u-k3ZiDEno3')">
        </div>
        <div class="relative z-10 text-center max-w-4xl mx-auto space-y-8">
            <div class="space-y-4">
                <span
                    class="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary-fixed-dim text-xs font-bold tracking-widest uppercase mb-4">Precision
                    Suite 2.0</span>
                <h1 class="text-5xl md:text-7xl font-black font-headline tracking-tighter leading-none text-white">
                    Every Tool You Need, <br />
                    <span class="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">All in
                        One Place</span>
                </h1>
            </div>
            <div class="relative max-w-2xl mx-auto mt-12">
                <div
                    class="flex items-center bg-white/5 backdrop-blur-md p-2 rounded-full border border-white/10 shadow-2xl">
                    <span class="material-symbols-outlined ml-4 text-slate-400"
                        style="font-variation-settings: 'FILL' 1;">search</span>
                    <input
                        class="flex-1 bg-transparent border-0 focus:ring-0 outline-none text-lg py-4 px-4 text-white placeholder:text-slate-500 font-medium"
                        placeholder="Try 'Hex to RGB' or 'Scientific Calculator'..." type="text" />
                    <button
                        class="bg-linear-to-r from-primary to-primary-container text-white px-8 py-4 rounded-full font-bold text-sm hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-primary/20">
                        Quick Search
                    </button>
                </div>
            </div>
            <div class="flex flex-wrap justify-center gap-3 mt-8">
                <button
                    class="px-6 py-2 rounded-full bg-secondary-dim/20 border border-secondary/20 text-secondary-fixed-dim text-sm font-semibold hover:bg-secondary-dim/30 transition-all flex items-center gap-2">
                    <span class="material-symbols-outlined text-sm">cached</span> Convert
                </button>
                <button
                    class="px-6 py-2 rounded-full bg-primary-dim/20 border border-primary/20 text-primary-fixed-dim text-sm font-semibold hover:bg-primary-dim/30 transition-all flex items-center gap-2">
                    <span class="material-symbols-outlined text-sm">calculate</span> Calculate
                </button>
                <button
                    class="px-6 py-2 rounded-full bg-tertiary-dim/20 border border-tertiary/20 text-tertiary-fixed-dim text-sm font-semibold hover:bg-tertiary-dim/30 transition-all flex items-center gap-2">
                    <span class="material-symbols-outlined text-sm">edit</span> Edit
                </button>
                <button
                    class="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-semibold hover:bg-white/10 transition-all flex items-center gap-2">
                    <span class="material-symbols-outlined text-sm">mood</span> Fun
                </button>
            </div>
        </div>
    </section>
</template>