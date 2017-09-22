<template>
   <div>
   		<MyHeader></MyHeader>
   		<MyContent></MyContent>
   </div>
</template>

<script>
import MyHeader from '../components/header.vue'
import MyContent from '../components/content.vue'
export default {
  name: 'index',
  components: { MyHeader, MyContent },
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

