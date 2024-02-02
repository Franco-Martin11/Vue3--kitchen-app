
<template>
    <LayoutContainer>
        <template #content>
            <HeaderTextContainer />
            <HeaderFigureContainer />
        </template>
    </LayoutContainer>
</template>

<script setup lang="ts">
import LayoutContainer from '@/layout/LayoutContainer.vue';
import HeaderFigureContainer from './components/HeaderFigureContainer.vue';
import HeaderTextContainer from './components/HeaderTextContainer.vue';


</script>
