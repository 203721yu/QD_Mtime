<template>
    <div class="header">
        <div class="imgbox">
            
        </div>
        <NavItem
            v-for="nav in navs"
            :key="nav.id"
            :txt="nav.txt"
            :mark="nav.mark"
            :sel="selected"
        >
        </NavItem>
        <i class="fa fa-user-o "></i>
    </div>
    
</template>

<script>
import NavItem from "./Item"
export default {
    data(){
        return {
            selected:this.$route.name,
            navs:[
                {id:1,txt:"首页",mark:"home"},
                {id:2,txt:"购票",mark:"buyticket"},
                {id:3,txt:"商城",mark:"shopping"},
                {id:4,txt:"发现",mark:"find"},
            ]
        }
    },
    components:{
        NavItem
    }
}
</script>

<style lang="scss">
   .header{
       display:flex;
       justify-content: space-between;
       margin:0 10px;
   }
</style>