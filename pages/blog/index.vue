<template>
    <main>
        <ContentList path="/blog/" v-slot="{ list }">
            <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none px-2">
            <div v-for="article in list" :key="article._path">
                <NuxtLink v-if="article._file?.includes('index.md')" :to="article._path">
                    <div class="rounded-lg shadow-lg overflow-hidden">
                    <div class="flex-shrink-0">
                        <NuxtImg class="h-48 w-full bg-[#348fde] py-2 px-4" :src="article.image" :alt="article.alt" />
                    </div>
                    <div class="flex-1 p-4 flex flex-col justify">
                        <div class="flex-1">
                            <p class="text-xl font-semibold text-gray-900">
                                {{ article.title }}
                            </p>
                            <p class="mt-3 text-base text-gray-500">
                                {{ article.description }}
                            </p>
                        </div>
                    </div>
                </div>
                </NuxtLink>
            </div>
        </div>
        </ContentList>
    </main>
</template>
