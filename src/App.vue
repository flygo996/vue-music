<template>
  <div id="app" @touchmove.prevent>
    <the-header></the-header>
    <the-tab></the-tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <the-player></the-player>
  </div>
</template>
