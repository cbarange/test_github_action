<template>
    <div>
      <br/>
      <br/>
      <md-content class="md-primary field title">
        <h1>Welcome in Cistercian Number Converter</h1>
        <br/>
        <h3>please enter a number between<br/> 0 and 9999 </h3>
      </md-content>
      <br/>
      <md-field class="field">
        <label>Number</label>
        <md-input v-model="number" type="number"></md-input>
      </md-field>
      <md-button @click="generate()" class="md-raised md-primary">Generate Cistercian Notation</md-button>
      <br/>
      <md-content class="md-accent viewer field">
       
        {{res}}

      </md-content>
    </div>
</template>

<script>
var axios = require('axios')
var FormData = require('form-data')

export default {
  name: 'home',
  data () {
    return {
      res:'Waiting...',
      number:''
    }
  },
  methods: {
    generate:function(){
      var data = new FormData();
      data.append('tool', 'nombres-cisterciens')
      data.append('number', '1258')

      axios({
        method: 'post',
        url: 'https://www.dcode.fr/api/',
        data : data,
        headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'multipart/form-data'},
      })
      .then( response => this.res=JSON.stringify(response.data) )
      .catch( error =>console.log(error))

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
