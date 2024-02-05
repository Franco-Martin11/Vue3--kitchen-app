
<template>
    <LayoutContainer>
        <template #content>
            <div class="flex flex-wrap gap-4 justify-center flex-1">
                <HeaderTextContainer />
                <HeaderFigureContainer />
            </div>
        </template>
    </LayoutContainer>
</template>

<script setup lang="ts">
import LayoutContainer from '@/layout/LayoutContainer.vue';
import HeaderFigureContainer from './components/HeaderFigureContainer.vue';
import HeaderTextContainer from './components/HeaderTextContainer.vue';

</script>
