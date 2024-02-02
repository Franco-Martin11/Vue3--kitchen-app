
<template>
    <LayoutContainer>
        <template #content>
            <HeaderTextContainer />
            <HeaderFigureContainer />
            <RouterLink to="/Product">

                <RedirectCard />
            </RouterLink>
        </template>
    </LayoutContainer>
</template>

<script setup lang="ts">
import LayoutContainer from '@/layout/LayoutContainer.vue';
import HeaderFigureContainer from './components/HeaderFigureContainer.vue';
import HeaderTextContainer from './components/HeaderTextContainer.vue';
import RedirectCard from '@/assets/icons/RedirectCard.svg?component'
import { RouterLink } from 'vue-router';


</script>
