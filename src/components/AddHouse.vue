<template>
     <v-row justify="center">
    <v-btn
      color="light-grey"
      dark
      @click.stop="dialog = true"
    >
    ADD NEW HOUSE
    </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>

        <v-card-text>
            <div >
              <v-text-field
                v-model="houseName"
                color="dark"
                label="House Name"
                name="HouseName"
                type="text"
              ></v-text-field>
            
              <v-text-field
                v-model="housePassword"
                color="dark"
                label="House Pass"
                name="HousePassword"
                type="password"
              ></v-text-field>
            </div>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            SUBMIT
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
      name:'AddHouse',
    

        data(){
            return{
                dialog: false,
                houseName: '',
                housePassword:'',
            }

    
    },
  }
</script>
    
</template>
<script>
export default {
    
}
</script>