<!--文件列表页-->
<template>
  <div>
    <Header></Header>
    <div class="article_list">
      <ul>
        <li v-for="i in list" :key="i.id">
          <time v-text="$utils.goodTime(i.add_time)"></time>
          <router-link :to="'/content/' + i.id">
            {{ i.title }}
          </router-link>
        </li>
      </ul>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/header'
import Footer from '../components/footer'
export default {
  comments: { Header, Footer },
  data () {
    return {
      list: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$api.get('articleBaseInfos', null, r => {
        // r 为json 字符串，需要将其转换为json对象，才可以
        this.list = JSON.parse(r)['results']
      })
    }
  }
}
</script>
