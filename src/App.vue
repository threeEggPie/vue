<template>
  <div>
    <h2>{{result}}</h2>
  </div>
</template>

<script>
  import {request} from './network/request'
export default {
  name: 'App',
  data(){
    return {result:''}
  },
  created(){

    request({
      url:'/test'
    }).then(res=>{
      this.result=res;
    })
  }
}

</script>

<style>

</style>
