<template>
    <div>
        关于我们
        <hr>
        <ul>
            <router-link tag="li" to="/about" exact>study</router-link>
            <router-link tag="li" to="/about/work">work</router-link>
            <router-link tag="li" to="/about/hobby">hobby</router-link>
        </ul>
        <router-view class="center"></router-view>
    </div>


   
</template>
<script>
    
</script>

<style>
   
</style>
