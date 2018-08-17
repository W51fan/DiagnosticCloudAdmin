<template>
  <v-app id="login" class="primary">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4 lg4>
            <v-card class="elevation-1 pa-3">
              <v-card-text>
                <div class="layout column align-center">
                  <img src="/static/company.png" alt="扁鹊云" >
                  <h1 class="flex my-4 primary--text">扁鹊云管理平台</h1>
                </div>                
                <v-form>
                  <v-text-field append-icon="person" name="login" label="admin" type="text" v-model="model.username"></v-text-field>
                  <v-text-field append-icon="lock" name="password" label="abc123456" id="password" type="password" v-model="model.password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn block color="primary" @click="login" :loading="loading">登录</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-layout row justify-center>
        <v-dialog v-model="showAlert" persistent max-width="290">
        <v-card>
            <v-card-title class="headline">提示</v-card-title>
            <v-card-text>{{AlertMessage}}</v-card-text>
            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn  flat @click.native="showAlert = false">确定</v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>
import base64 from "js-base64";

export default {
  components: {},
  data: () => ({
    loading: false,
    model: {
      username: "",
      password: ""
    },
    showAlert: false,
    AlertMessage: ""
  }),
  mounted: function() {},
  methods: {
    login() {
      this.loading = true;

      let $this = this;
      let apikey = "",
        request = {
          user: this.model.username,
          password: Base64.encode(this.model.password)
        },
        type = "POST",
        url = "/IBUS/DAIG_SER/adminLogin";
      let param = {
        apikey,
        request
      };
      $this
        .$http({
          method: type,
          url: url,
          data: param
        })
        .then(res => {
          $this.loading = false;
          if (res.data.errorCode !== 0) {
            $this.showAlert = true;
            $this.AlertMessage = res.data.errorMsg;
          } else {
            $this.$store.commit("SET_TOKEN", res.data.return.session_id);
            
            $this.$store.commit(
              "logIn/getSession_id",
              res.data.return.session_id
            );
            $this.$store.commit("logIn/getMobile", res.data.return.mobile);
            $this.$store.commit("logIn/getEmail", res.data.return.email);
            $this.$store.commit("logIn/getUser", $this.model.username);
            $this.$store.commit("logIn/getRid", res.data.return.rid);
            $this.$store.commit("logIn/getRemark", res.data.return.remark);
            $this.$router.push("/dashboard");
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<style scoped lang="css">
#login {
  height: 50%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  z-index: 0;
}
</style>
