<template>
    <nav class="fixed top-0 w-full z-50 glass-nav border-b border-white/5">
        <div class="flex justify-between items-center px-8 h-16 max-w-7xl mx-auto">
            <div class="flex items-center gap-12">
                <NuxtLink class="text-2xl font-black text-white tracking-tighter font-headline" to="/">ToolsOnline</NuxtLink>
                <div class="hidden md:flex gap-8 items-center">
                    <NuxtLink activeClass="navigation-link-active" class="navigation-link" to="/">Home</NuxtLink>
                    <NuxtLink activeClass="navigation-link-active" class="navigation-link" to="/tools">Tools</NuxtLink>
                   
                </div>
            </div>
            <div class="flex-1 max-w-md ml-auto hidden lg:block">
                <div class="relative group">
                    <span
                        class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400">search</span>
                    <input
                        class="w-full bg-white/5 border-0 rounded-full py-2 pl-10 pr-4 text-sm focus:ring-0 outline-none transition-all placeholder:text-slate-600"
                        placeholder="Search for a tool..." type="text" />
                </div>
            </div>
        </div>
    </nav>
</template>