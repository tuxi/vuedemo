<template>
  <div>index page</div>
</template>

<script>
export default {
  name: 'index',
  created () {
    this.$api.get('articleBaseInfos', null, r => {
      // console.log(r)
      window.alert(r)
    })
  }
}
</script>
