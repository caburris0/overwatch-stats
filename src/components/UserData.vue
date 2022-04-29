<template>
  <div>
    <p class='text'>Top 5 Heroes for {{username}}</p>
    <q-card v-for='(item, index) in userData' :key='index' class='card q-mb-sm'>
      <div class='card-wrapper'>
        <img :src='getImageUrl(item)'/>
      </div>
      <div class='card-wrapper'>
        <p class='hero-names'>
          {{item['hero']}}
        </p>
      </div>
      <div class='card-wrapper q-ml-lg'>
        <p>
          Hours Played: {{item['played']}}
        </p>
      </div>
    </q-card>    
  </div>
</template>

<script>
  export default {
    created () {
      console.log(this.userData);
    },
    props: [
      'userData',
      'username'
    ],
    methods: {
      getImageUrl(item) {
        return item['img']
      }
    },
  }
</script>

<style lang="scss" scoped>
img {
  border-radius: 50%;
  width: 60px;
  height: 60px;
  // margin-top: 15px; 
  margin: 15px 0px 0px 10px;
}

//TODO Add hover
.card {
  box-shadow: none;
  // border: 1px solid black;
  border: 1px solid #d1d1d1;
  background: #F5F5F5;
  width: 100%;
}

.hero-names {
  font-size: 30px;
  margin: 10px 0px 20px 10px;
}

.text {
  font-weight: bold;
  font-size: 20px;
  margin-top: 18px; 
  color: black;
}

.card-wrapper {
  display: inline-block;
}
</style>