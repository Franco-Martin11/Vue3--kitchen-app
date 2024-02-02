
<template>
    <div class="">
        <picture>
            <source :srcset="images.headerFigure.thumbnail.xl.imageSrc" media="(min-width: 1024px)" />
            <source :srcset="images.headerFigure.thumbnail.md.imageSrc" media="(min-width: 600px)" />
            <img class="max-w-md" :src="images.headerFigure.thumbnail.sm.imageSrc" :alt="images.headerFigure.imageAlt" />
        </picture>

    </div>
</template>

<script setup lang="ts">
const images = {
    headerFigure: {
        type: 'webp', imageAlt: 'Hero Figure',
        thumbnail: {
            sm: {
                imageSrc: '/Hero/HeroFigure_1x.webp',
                size: 'sm'
            },
            md: {
                imageSrc: '/Hero/HeroFigure_2x.webp',
                size: 'md'
            },
            xl: {
                imageSrc: '/Hero/HeroFigure_3x.webp',
                size: 'lg'
            }
        }
    }
}
</script>
