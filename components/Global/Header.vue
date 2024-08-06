<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <div class="fixed w-full py-4 z-10 bg-white border-b border-solid border-gray-200">
        <HPopover>
            <div class="max-w-7xl mx-auto px-6">
                <nav class="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
                    <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                        <div class="flex items-center justify-between w-full md:w-auto">
                            <NuxtLink href="/">
                                <span class="sr-only">Kailash B. Poudel</span>
                                <NuxtImg class="h-8 w-auto" src="/logo.png" alt="Kailash B. Poudel" />
                            </NuxtLink>
                            <div class="-mr-2 flex items-center md:hidden">
                                <HPopoverButton
                                    class="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span class="sr-only">Open main menu</span>
                                    <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                                </HPopoverButton>
                            </div>
                        </div>
                    </div>
                    <div class="hidden md:flex md:space-x-10">
                        <NuxtLink v-for="item in navigation" :key="item.name" :href="item.href"
                            class="font-medium text-gray-500 hover:text-gray-900">{{ item.name }}</NuxtLink>
                    </div>
                    <div class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                        <span class="inline-flex rounded-md shadow">
                            <a href="/Kailash-Bandu-Poudel-CV.pdf"
                                class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50">
                                Download CV </a>
                        </span>
                    </div>
                </nav>
            </div>

            <transition enter-active-class="duration-150 ease-out" enter-from-class="opacity-0 scale-95"
                enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in"
                leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
                <HPopoverPanel focus
                    class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                    <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div class="px-5 pt-4 flex items-center justify-between">
                            <NuxtLink href="/">
                                <span class="sr-only">Kailash B. Poudel</span>
                                <NuxtImg class="h-8 w-auto" src="/logo.png" alt="Kailash B. Poudel" />
                            </NuxtLink>
                            <div class="-mr-2">
                                <HPopoverButton
                                    class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span class="sr-only">Close menu</span>
                                    <MinusIcon class="h-6 w-6" aria-hidden="true" />
                                </HPopoverButton>
                            </div>
                        </div>
                        <div class="px-2 pt-2 pb-3">
                            <NuxtLink v-for="item in navigation" :key="item.name" :href="item.href"
                                class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                                {{ item.name }}</NuxtLink>
                        </div>
                        <a href="/Kailash-Bandu-Poudel-CV.pdf"
                            class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100">
                            Download CV </a>
                    </div>
                </HPopoverPanel>
            </transition>
        </HPopover>
    </div>
</template>

<script setup>
import { Bars3Icon, MinusIcon } from '@heroicons/vue/24/outline'

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Experience', href: '/experience' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
]
</script>