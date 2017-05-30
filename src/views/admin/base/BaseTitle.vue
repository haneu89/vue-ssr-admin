<template>
  <div>
    <h1 class="text-center">empty</h1>
    <section class="content">
      <div class="row">
        <div class="col-md-12 ">
          <div class="box box-info">
            <div class="box-header with-border">
              <h3 class="box-title">홈페이지 기본 설정</h3>
            </div>
            <!-- /.box-header -->
            <!-- form start -->
            <div class="form-horizontal">
              <div class="box-body">
                <div class="form-group">
                  <label for="pageTitle" class="col-sm-2 control-label">홈페이지 제목</label>

                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="pageTitle" placeholder="myhome" v-model="items.title">
                  </div>
                </div>
                <div class="form-group">
                  <label for="pateMeta" class="col-sm-2 control-label">메타태그 설정</label>

                  <div class="col-sm-10">
                    <textarea class="form-control" rows="6" id="pateMeta" v-model="items.meta"></textarea>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-sm-offset-2 col-sm-10">
                    <div class="checkbox">
                      <label>
                        <input type="checkbox"> Remember me
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /.box-body -->
              <div class="box-footer">
                <button type="submit" class="btn btn-default">Cancel</button>
                <button class="btn btn-info pull-right" @click="saveTitleMeta"  >Save</button>
              </div>
              <!-- /.box-footer -->
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 ">
          <div class="box box-info">
            <div class="box-header with-border">
              <h3 class="box-title">약관 관리</h3>
            </div>
            <!-- /.box-header -->
            <!-- form start -->
            <div class="form-horizontal">
              <div class="box-body">
                <div class="form-group">
                  <label for="pateMeta" class="col-sm-2 control-label">개인정보 취급방침</label>

                  <div class="col-sm-10">
                    <textarea class="form-control" rows="6" id="pateMeta"></textarea>
                  </div>
                </div>
              </div>
              <!-- /.box-body -->
              <div class="box-footer">
                <button type="submit" class="btn btn-default">Cancel</button>
                <button type="submit" class="btn btn-info pull-right">Save</button>
              </div>
              <!-- /.box-footer -->
            </div>
          </div>
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
