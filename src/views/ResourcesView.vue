<template>
    <section class="md:mt-20 mt-10">
        <h1 class="font-medium text-2xl leading-9">Featured Articles</h1>

        <div class="grid md:grid-cols-3 gap-9 mt-12">
            <!-- <button @click="getPosts">get postss</button> -->
            <div v-for="p in posts" :key="p.slug" class="flex flex-col max-h-[28rem] overflow-hidden">
                <router-link :to="{ name: 'resource', params: { slug: p.slug } }">
                    <img class="max-h-60 w-full rounded-lg" v-if="p.featured_image" :src="p.featured_image" alt="">

                    <img v-else src="http://via.placeholder.com/250x250" alt="">

                    <div class="mx-3 mt-[19px]">
                        <div class="flex justify-between">
                            <h3 class="leading-5 w-5/6 font-bold font-['Soleil']">{{ p.title }}</h3>
                            <svg class="w-1/6" width="10" height="10" viewBox="0 0 10 10" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.00403 3.1855L1.54878 9.64075L0.488281 8.58025L6.94278 2.125H1.25403V0.625H9.50403V8.875H8.00403V3.1855Z"
                                    fill="black" />
                            </svg>

                        </div>
                        <p class="font-['Soleil'] text-xs text-gray-500">{{ formattedDate(p.published) }}</p>
                        <p class="font-['Soleil'] mt-1">{{ p.summary.length > 120 ? p.summary.slice(0, 120) +
                            '...' : p.summary }}</p>
                    </div>
                </router-link>
            </div>


        </div>
    </section>
</template>

<script setup lang="ts">
import { butterService } from "@/services/ButterCMSService"
import { onMounted, ref } from 'vue'

console.dir(butterService);

const getPosts = () => {
    const response = butterService?.post.list().then((r: any) => {
        console.log(r);

    }).catch((e: any) => {
        console.log(e);

    })


}

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


    posts.value = [
        {
            "status": "published",
            "created": "2023-04-01T11:31:38.411708Z",
            "updated": "2023-04-04T09:52:38.589486Z",
            "published": "2023-04-01T11:31:00Z",
            "title": "MACHINE-LEARNING BASED FRAMEWORK FOR CELLULAR NETWORK (DOWNLINK) CHANNEL UTILIZATION PREDICTION FOR LEASING POLICY – DATA POINTS FOR CHANNEL LEASING SYSTEM",
            "slug": "example-post",
            "body": "<div class=\"p1\">\n<p class=\"p1\"><b>Deliverable: </b><span class=\"s1\">Data collection and extraction process.</span></p>\n<p class=\"p3\"><b>The Location Investigated.</b></p>\n<p class=\"p5\">Sample cellular data collection was carried out at four different cities within Nigeria, which includes Enugu city &ndash; Southeast, Lagos city - Southwest, Kano city &ndash; Northwest and Abuja &ndash; Northcentral of Nigeria. Tests were carried out within a drive of sites in each of the urban areas due to the nature of the project &ndash; targeted congestion areas as shown in Figure 1.</p>\n<p class=\"p5\">&nbsp;</p>\n<table border=\"1\" style=\"border-collapse: collapse; width: 100%;\"><colgroup><col style=\"width: 50.0446%;\"><col style=\"width: 49.9554%;\"></colgroup>\n<tbody>\n<tr>\n<td>\n<p><strong>Enugu</strong></p>\n<p><img src=\"https://cdn.buttercms.com/LhIpVnYiR1WX2OvAynKq\" width=\"435\" height=\"387\"></p>\n</td>\n<td>\n<p><strong>Kano</strong></p>\n<p><img src=\"https://cdn.buttercms.com/83myMiaHQb2jbCuihc6p\" width=\"439\" height=\"375\"></p>\n</td>\n</tr>\n<tr>\n<td>\n<p><strong></strong></p>\n<p><strong>Abuja</strong></p>\n<p><img src=\"https://cdn.buttercms.com/8YQyRsnaRhGIGLntZNFm\" width=\"446\" height=\"422\"></p>\n</td>\n<td>\n<p><strong></strong></p>\n<p><strong>Lagos</strong></p>\n<p><img src=\"https://cdn.buttercms.com/GxBmF8UhSP6RXIbBIFFA\" width=\"434\" height=\"396\"></p>\n</td>\n</tr>\n</tbody>\n</table>\n<p class=\"p1\">Figure 1: Views of Enugu, Kano, Lagos, and Abuja cities of the target area respectively.</p>\n<p class=\"p1\">These areas demonstrate among the highest number of calls traffics in the country, Nigeria.</p>\n<h1 class=\"p1\"></h1>\n</div>",
            "summary": "This is an example blog post. Pretty neat huh?",
            "seo_title": "Example Post SEO Optimized Title",
            "meta_description": "This is our example blog posts SEO optimized meta description.",
            "featured_image_alt": "",
            "url": "example-post",
            "featured_image": "https://cdn.buttercms.com/5I8XxUoQUeybkstQwEhy",
            "author": {
                "bio": "",
                "slug": "ethelbert-eze",
                "email": "nedu47@googlemail.com",
                "title": "",
                "last_name": "Eze",
                "first_name": "Ethelbert",
                "facebook_url": "",
                "linkedin_url": "",
                "instagram_url": "",
                "pinterest_url": "",
                "profile_image": "",
                "twitter_handle": ""
            },
            "tags": [
                {
                    "name": "Example Tag",
                    "slug": "example-tag"
                }
            ],
            "categories": [
                {
                    "name": "Example Category",
                    "slug": "example-category"
                }
            ]
        }
    ]

})
</script>

<style>
.blog-color {
    color: rgba(0, 0, 0, 0.67);
}
</style>