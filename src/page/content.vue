<!--文章详情页-->
<template>
  <div>
    <MyHeader></MyHeader>
    <h2 v-text="dat.title"></h2>
    <p v-if="dat.author">作者：{{ dat.author }}发表于：{{ $utils.goodTime(dat.add_time) }}</p>
    <hr>
    <div v-for="item in dat.tags" :key="item.name">
      <span>{{ item.name }}</span>
    </div>
    <article v-html="dat.details[0].formatted_content"></article>
  </div>
</template>

<script>
import MyHeader from '../components/header.vue'
import MyFooter from '../components/footer.vue'
export default {
  components: { MyHeader, MyFooter },
  data () {
    return {
      id: this.$route.params.id,
      dat: {}
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$api.get('articleDetailInfos/' + this.id, null, r => {
        this.dat = JSON.parse(r)
      })
    }
  }
}
</script>
