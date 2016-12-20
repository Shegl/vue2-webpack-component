export default{
  name: 'Component',

  data(){
    return {
      msg: 'Hello World {{name}}!'
    }
  },

  mounted: function () {
    this.$nextTick(function () {
      console.log('Component is ready')
    })
  },

  components: {}
}