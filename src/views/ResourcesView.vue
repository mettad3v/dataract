<template>
    <section class="md:mt-20 mt-10">
        <h1 class="font-medium text-2xl leading-9">Featured Articles</h1>

        <div class="grid md:grid-cols-3 gap-9 mt-12">
            <!-- <button @click="getPosts">get postss</button> -->
            <div v-for="p in posts" :key="p.slug" class="flex flex-col  overflow-hidden">
                <router-link :to="{ name: 'resource', params: { slug: p.slug } }">
                    <img class="max-h-60 w-full rounded-lg" v-if="p.featured_image" :src="p.featured_image" alt="">

                    <img v-else src="http://via.placeholder.com/250x250" alt="">

                    <div class="mx-1 mt-[19px]">
                        <div class="flex justify-between">
                            <h3 class="leading-5 w-full font-bold font-['Soleil']">{{ p.title }}</h3>
                            <!-- <svg class="w-1/6" width="10" height="10" viewBox="0 0 10 10" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.00403 3.1855L1.54878 9.64075L0.488281 8.58025L6.94278 2.125H1.25403V0.625H9.50403V8.875H8.00403V3.1855Z"
                                    fill="black" />
                            </svg> -->

                        </div>
                        <p class="font-['Soleil'] text-xs mt-1 text-gray-500">{{ formattedDate(p.published) }}</p>
                        <p class="font-['Soleil'] mt-1">{{ p.summary.length > 120 ? p.summary.slice(0, 120) +
                            '...' : p.summary }}</p>
                        <div class="w-full bg-gray-200 flex items-center justify-center rounded">
                            <span class="text-xs w-full text-center text-gray-800 p-2 rounded">Read more</span>
                        </div>
                    </div>
                </router-link>
            </div>


        </div>
    </section>
</template>

<script setup lang="ts">
import { butterService } from "@/services/ButterCMSService"
import { onMounted, ref } from 'vue'


const posts: any = ref([])

const formattedDate = (isoDate: string) => {
    const dateObj = new Date(isoDate);

    const options: any = {
        month: "long",
        day: "numeric",
        year: "numeric"
    };

    const formattedDate = dateObj.toLocaleDateString("en-US", options)
        .replace(/(\d+)(st|nd|rd|th)/, "$1$2,"); // add commas after the day suffix

    return formattedDate
}

onMounted(async () => {
    const response: any = (
        await butterService.post.list({
            page: 1,
            page_size: 10,
        })
    ).data
    console.log(response);

    posts.value = response.data

})
</script>

<style>
.blog-color {
    color: rgba(0, 0, 0, 0.67);
}
</style>