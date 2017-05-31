<template>
  <div>
    <h1 class="text-center">empty</h1>
    <section class="content">
      <div class="row">
        <div class="col-md-12 ">
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'BaseTitle',
  data () {
    return {
      items: {
        title: null,
        meta: null
      }
    }
  },
  computed: {
    datetime () {
      return new Date()
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.$http.get('/api/admin/test')
      .then(res => {
        console.log(res)
        this.items = res.data
      })
    },
    saveTitleMeta () {
      this.$http.put('/api/admin/test', this.items)
      .then(res => console.log(res))
    }
  }
}
</script>

<style>
</style>
