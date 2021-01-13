<template>
    <div class="home">
      <br/>
      <br/>
      <md-content class="md-primary field title">
        <h1>Welcome in Cistercian Number Converter</h1>
        <br/>
        <h3>please enter a number between<br/> 0 and 9999 </h3>
      </md-content>
      <br/>
      
        <md-field class="field" :md-counter="false">
          <label>Number</label>
          <md-input v-on:keyup.enter="generate" v-model="number" maxlength="10" type="number"></md-input>
        </md-field>
      
        <br/>
      
        <md-button @click="generate" class="md-raised md-primary">Generate Cistercian Notation</md-button>
      
      
      <br/>
      <md-content class="md-accent viewer field">
       
        <md-progress-spinner v-if="loading" md-mode="indeterminate"></md-progress-spinner>
        <img v-else v-for="item in res" :src="item" alt="Some error appear with image 😰, request again to get it"/>

      </md-content>
      <div class="field footer"><a href="https://github.com/cbarange">github : cbarange</a>
        <a href="https://twitter.com/cbarange_dev"> twitter :@cbarange_dev</a></div>
    </div>
</template>

<script>
var axios = require('axios')
var FormData = require('form-data')

export default {
  name: 'home',
  //component: {MdContent,MdField,MdInput,MdButton,MdContent},
  data () {
    return {
      res:[],
      number:'',
      loading:false
    }
  },
  methods: {
    generate:function(){
      this.loading=true 
      axios.get(`https://githubactiontest.herokuapp.com/${this.number}`)
      .then( response => {
        this.res=response.data.results.match(/<img [^>]*src="[^"]*"[^>]*>/gm).map(x => x.replace(/.*src="([^"]*)".*/, '$1'))
        this.loading=false
      })
      .catch( error =>{console.log(error);this.loading=false })

    }
  },
  created:function (){},
  mounted:function (){},
  watch:{}
}
</script>

<style scoped>
.field {
  max-width:30%;
  margin: 0 auto;
}
.footer{
  text-align:center;
  color:#2C3E50;
}
.title {
  padding: 5rem;
  line-height: 2rem;
  letter-spacing: .2rem;
}

.title h3 {
  color:#424949;
}

.viewer {
  padding: 2rem;
  position:relative;
}

</style>
