<template>
  <div>
      <br>
      <div class="d-flex flex-raw justify-content-center bd-highlight mb-3">
          <div class="d-flex flex-column">

              <!--quote title-->
              <div class="form-group">
                <div class="display-4 text-light">Quote Colorizer</div>
              </div>

              <!--quote form-->
              <form @submit.prevent="AddQuote">
                  <div class="form-group">
                    <input type="text" style="color:white;" name="userinput" class="form-control" placeholder="Your awesome quote" v-model="quote" autocomplete="off">
                  </div>
                  <div class="form-group">
                    <input type="submit" class="form-control btn btn-sm btn-light" style="color: #6610f2;font-size: 20px;" value="Colorizer">
                  </div>
              </form>

              <!--quote cards-->
              <transition-group name="list" enter-active-class="animated slideInDown">
                  <div v-for="(quote,index) in Quotes" :key="index">
                      <div class="card" v-bind:style="{backgroundColor: quote.color}">
                          <div class="card-body p-3">
                              <p class="card-text">{{ quote.quote }}</p>
                          </div>
                      </div>
                      <br>
                  </div>
              </transition-group>

          </div>
      </div>

  </div>
</template>

<script>
export default {
    data(){
        return{
            Quotes:[],
            quote:'',
            color:''
        }
    },
    methods:{
        //add quote
        AddQuote(){
            if(this.quote != ''){
                fetch('http://api.creativehandles.com/getRandomColor')
                    .then(res => res.json())
                    .then(res =>{
                        this.color = res.color.split('').slice(1).reverse().join('');
                        this.Quotes.push({quote:this.quote,color:'#'+this.color});
                        $('#pageTitle').text(this.quote);
                        this.quote = '';
                    })
            }
        }
    }
}
</script>

<style scope>
    @import  "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css";

    .bg-custom{
        background: #AA076B;
        background: -webkit-linear-gradient(to right, #61045F, #AA076B);
        background: linear-gradient(to right, #61045F, #AA076B);
    }
</style>
