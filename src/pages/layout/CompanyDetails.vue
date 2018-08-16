<template>
  <v-layout>
    <!-- <v-flex  lg1 md1 hidden-md-and-down></v-flex> -->
    <v-flex  lg12 md12 sm12 xs12>
      <v-card>
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                  <img src="" alt="">
                <span class="headline">{{companyDetails.enterpriseName}}</span>
              </v-flex>
            </v-layout>
          </v-container>
        <v-card-title>
          <div>
            <span class="grey--text">Number 10</span><br>
            <span>Whitehaven Beach</span><br>
            <span>Whitsunday Island, Whitsunday Islands</span>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
    <!-- <v-flex  lg1 md1 hidden-md-and-down></v-flex> -->
  </v-layout>
</template>

<style scoped>

</style>


<script>
export default {
    name:"",
    data:()=>({}),
    computed:{
        companyDetails(){
             return this.$store.state.company.companyDetails;
        }
    }
}
</script>

