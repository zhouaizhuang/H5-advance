import * as func from "./func.js"
export default {
  name: '',
  components:{},
  data(){
    return {
      numPages:1, // 总页数
      pageNum:1, // 当前页码
    }
  },
  methods:{
    ...func,
  },
  created(){
    
  },
  mounted(){
    this.showpdf('http://218.93.39.18:48079/admin-api/infra/file/4/get/19c5f539aefef6d3a23416186b68edad6f649a56c0e84155f3e2a904e9ecefbd.pdf')
  },
}