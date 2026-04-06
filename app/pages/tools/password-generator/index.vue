<template>
    <main class="my-16">
        <section class="container mx-auto max-w-7xl px-8 py-20 space-y-12 flex flex-col gap-x-12">
        <!-- Header Section -->
            <header class="mb-12 text-center md:text-left">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary-fixed mb-4">
                    <span class="material-symbols-outlined text-sm" data-icon="security"
                        style="font-variation-settings: 'FILL' 1;">security</span>
                    <span class="text-xs font-bold uppercase tracking-widest font-label">Privacy First</span>
                </div>
                <h1 class="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter mb-4 text-white">
                    Password Generator
                </h1>
                <p class="text-on-surface-variant text-lg max-w-2xl leading-relaxed">
                    Generate cryptographically strong, random passwords instantly. All processing happens locally in your
                    browser.
                </p>
            </header>
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <!-- Main Generator Card -->
                <div class="lg:col-span-8 space-y-6">
                    <!-- Result Area -->
                    <div
                        class="bg-white/5 border border-white/5 rounded-xl p-8 shadow-2xl relative overflow-hidden group">
                        <div
                            class="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-50 pointer-events-none">
                        </div>
                        <div class="relative flex flex-col gap-6">
                            <div class="flex items-center justify-between">
                                <span class="text-xs font-bold text-outline-variant uppercase tracking-widest">Your Secure
                                    Password</span>
                                <div class="flex gap-2">
                                    <span
                                        class="px-2 py-0.5 rounded bg-secondary/20 text-secondary-fixed text-[10px] font-bold uppercase tracking-tighter">AES-256
                                        Ready</span>
                                </div>
                            </div>
                            <div class="flex flex-col md:flex-row gap-4 items-center">
                                <div
                                    class="w-full bg-black/40 border border-white/10 rounded-lg p-5 flex items-center justify-between min-h-[80px]">
                                    <span
                                        class="text-2xl md:text-3xl font-mono tracking-wider text-white truncate pr-4">k9#xP!2vL@99*mQ&amp;</span>
                                    <div class="flex gap-2">
                                        <button
                                            class="p-3 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-all active:scale-90"
                                            title="Refresh">
                                            <span class="material-symbols-outlined" data-icon="refresh">refresh</span>
                                        </button>
                                        <button
                                            class="flex items-center gap-2 px-6 py-3 bg-primary text-on-primary font-bold rounded-lg hover:brightness-110 transition-all active:scale-95 shadow-[0_0_20px_rgba(0,80,213,0.3)]">
                                            <span class="material-symbols-outlined"
                                                data-icon="content_copy">content_copy</span>
                                            <span>Copy</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <!-- Strength Indicator -->
                            <div class="space-y-3">
                                <div class="flex justify-between items-end">
                                    <span class="text-sm font-medium text-white/70">Security Strength</span>
                                    <span class="text-sm font-bold text-primary-container">Strong (96 bits)</span>
                                </div>
                                <div class="grid grid-cols-4 gap-2 h-2.5">
                                    <div class="rounded-full bg-error"></div>
                                    <div class="rounded-full bg-tertiary"></div>
                                    <div class="rounded-full bg-secondary"></div>
                                    <div class="rounded-full bg-primary shadow-[0_0_10px_rgba(0,80,213,0.5)]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Basic Options -->
                    <div class="bg-white/5 border border-white/5 rounded-xl p-8">
                        <h3 class="text-xl font-headline font-bold mb-8 flex items-center gap-2">
                            <span class="material-symbols-outlined text-primary-container" data-icon="tune">tune</span>
                            Customization
                        </h3>
                        <div class="space-y-10">
                            <!-- Length Slider -->
                            <div class="space-y-4">
                                <div class="flex justify-between items-center">
                                    <label class="text-sm font-semibold text-white/80">Character Length</label>
                                    <span
                                        class="px-4 py-1 bg-primary/20 text-primary-container text-xl font-black rounded-lg border border-primary/30">16</span>
                                </div>
                                <input
                                    class="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                                    max="64" min="6" type="range" value="16" />
                                <div
                                    class="flex justify-between text-[10px] text-white/40 font-bold uppercase tracking-widest">
                                    <span>6 chars</span>
                                    <span>64 chars</span>
                                </div>
                            </div>
                            <!-- Toggles Grid -->
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <label
                                    class="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 cursor-pointer hover:bg-white/10 transition-colors">
                                    <div class="flex flex-col">
                                        <span class="font-bold text-sm">Uppercase (A-Z)</span>
                                        <span class="text-xs text-white/40">Includes capital letters</span>
                                    </div>
                                    <input :checked="true"
                                        class="w-10 h-6 bg-white/20 rounded-full appearance-none checked:bg-primary relative before:content-[''] before:absolute before:w-4 before:h-4 before:bg-white before:rounded-full before:top-1 before:left-1 checked:before:translate-x-4 transition-all"
                                        type="checkbox" />
                                </label>
                                <label
                                    class="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 cursor-pointer hover:bg-white/10 transition-colors">
                                    <div class="flex flex-col">
                                        <span class="font-bold text-sm">Lowercase (a-z)</span>
                                        <span class="text-xs text-white/40">Includes small letters</span>
                                    </div>
                                    <input :checked="true"
                                        class="w-10 h-6 bg-white/20 rounded-full appearance-none checked:bg-primary relative before:content-[''] before:absolute before:w-4 before:h-4 before:bg-white before:rounded-full before:top-1 before:left-1 checked:before:translate-x-4 transition-all"
                                        type="checkbox" />
                                </label>
                                <label
                                    class="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 cursor-pointer hover:bg-white/10 transition-colors">
                                    <div class="flex flex-col">
                                        <span class="font-bold text-sm">Numbers (0-9)</span>
                                        <span class="text-xs text-white/40">Includes digits</span>
                                    </div>
                                    <input :checked="true"
                                        class="w-10 h-6 bg-white/20 rounded-full appearance-none checked:bg-primary relative before:content-[''] before:absolute before:w-4 before:h-4 before:bg-white before:rounded-full before:top-1 before:left-1 checked:before:translate-x-4 transition-all"
                                        type="checkbox" />
                                </label>
                                <label
                                    class="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 cursor-pointer hover:bg-white/10 transition-colors">
                                    <div class="flex flex-col">
                                        <span class="font-bold text-sm">Symbols (@#$%)</span>
                                        <span class="text-xs text-white/40">Includes special characters</span>
                                    </div>
                                    <input :checked="true"
                                        class="w-10 h-6 bg-white/20 rounded-full appearance-none checked:bg-primary relative before:content-[''] before:absolute before:w-4 before:h-4 before:bg-white before:rounded-full before:top-1 before:left-1 checked:before:translate-x-4 transition-all"
                                        type="checkbox" />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Advanced Panel -->
                <aside class="lg:col-span-4 space-y-6">
                    <div class="bg-white/5 border border-white/5 rounded-xl p-6 sticky top-24">
                        <h4 class="text-sm font-bold text-white uppercase tracking-widest mb-6">Advanced Config
                        </h4>
                        <div class="space-y-6">
                            <div class="space-y-3">
                                <label class="text-xs font-bold text-white/60">Exclude Characters</label>
                                <input
                                    class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:ring-1 focus:ring-primary outline-none text-white"
                                    placeholder="e.g. {}, [], ()" type="text" />
                            </div>
                            <div class="flex items-center gap-3">
                                <input
                                    class="w-5 h-5 rounded border-white/20 bg-white/5 text-primary focus:ring-primary focus:ring-offset-slate-900"
                                    id="ambiguous" type="checkbox" />
                                <label class="text-sm font-medium text-white/80" for="ambiguous">Avoid Ambiguous (i, l, 1,
                                    O, 0)</label>
                            </div>
                            <div class="flex items-center gap-3">
                                <input :checked="true"
                                    class="w-5 h-5 rounded border-white/20 bg-white/5 text-primary focus:ring-primary focus:ring-offset-slate-900"
                                    id="alltypes" type="checkbox" />
                                <label class="text-sm font-medium text-white/80" for="alltypes">Ensure All Selected
                                    Types</label>
                            </div>
                            <hr class="border-white/5" />
                            <div class="space-y-4">
                                <div class="flex items-center justify-between">
                                    <div class="flex flex-col">
                                        <span class="text-sm font-bold">Pronounceable</span>
                                        <span class="text-[10px] text-white/40 uppercase tracking-tighter">Easy to
                                            remember</span>
                                    </div>
                                    <button class="w-12 h-6 bg-tertiary/20 rounded-full relative border border-tertiary/30">
                                        <span class="absolute right-1 top-1 w-4 h-4 bg-tertiary rounded-full"></span>
                                    </button>
                                </div>
                                <p class="text-xs text-white/40 leading-relaxed italic">Note: Making passwords pronounceable
                                    slightly reduces total entropy.</p>
                            </div>
                            <div class="pt-4">
                                <button
                                    class="w-full py-4 bg-white/5 text-white/60 hover:text-white border border-white/10 rounded-xl font-bold transition-all hover:bg-white/10 flex items-center justify-center gap-2">
                                    <span class="material-symbols-outlined text-sm" data-icon="history">history</span>
                                    View History
                                </button>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </section>
    </main>
</template>