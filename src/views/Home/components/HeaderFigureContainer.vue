
<template>
    <div class="">
        <picture>
            <source :srcset="images.headerFigure.xl.imageSrc" media="(min-width: 1024px)" />
            <source :srcset="images.headerFigure.md.imageSrc" media="(min-width: 600px)" />
            <img class="max-w-md" :src="images.headerFigure.sm.imageSrc" :alt="images.headerFigure.md.imageAlt" />
        </picture>

    </div>
</template>

<script setup lang="ts">
import type { Images } from '@/types/types';
const images: Images = {
    headerFigure: {

        sm: {
            imageSrc: '/HeaderFigure/sm-figure/HeaderFigure.webp',
            imageAlt: 'HeaderFigure.webp',
            type: 'webp',
            size: 'sm'
        },
        md: {
            imageSrc: '/HeaderFigure/md-figure/HeaderFigure.webp',
            imageAlt: 'HeaderFigure.webp',
            type: 'webp',
            size: 'md'
        },
        xl: {
            imageSrc: '/HeaderFigure/xl-figure/HeaderFigure.webp',
            imageAlt: 'HeaderFigure.webp',
            type: 'webp',
            size: 'lg'
        }
    }
}
</script>
