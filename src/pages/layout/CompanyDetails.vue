<template>
  <div>
    <v-layout>
        <v-flex lg12 md12 sm12 xs12>
            <v-card>
                <v-container fill-height fluid>
                    <v-layout>
                        <!-- <v-flex  lg1 md1 sm1 xs1 ></v-flex> -->
                        <v-flex lg12 md12 sm12 xs12 align-end flexbox>
                            <v-layout>
                                <v-flex  lg3 md4 sm4 xs5 style="padding: 0 4%;">
                                    <img :src="companyDetails.logo!==''?companyDetails.logo!==null?'/IMAGE/'+companyDetails.logo:'/static/imgs/noImage.png':'/static/imgs/noImage.png'" style="width: 180px;" >
                                </v-flex>
                                <v-flex  lg9 md8 sm8 xs7 >
                                    <div class="headline">
                                        <span>{{companyDetails.enterpriseName}}</span>
                                    </div>
                                    <div style="padding: 10px 0;">
                                        <span>管理员：</span><span>{{companyDetails.user}}</span>
                                    </div>
                                    <div style="padding: 10px 0;">
                                        <span>创建时间：</span><span>{{companyDetails.ent_register_time}}</span>
                                    </div>
                                    <div style="padding: 10px 0;">
                                        <span>最近测评时间：</span><span>{{companyDetails.recently_testTime}}</span>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                        <!-- <v-flex  lg1 md1 sm1 xs1 ></v-flex> -->
                    </v-layout>
                </v-container>
            </v-card>
        </v-flex>
        <!-- <v-flex  lg1 md1 hidden-md-and-down></v-flex> -->
    </v-layout>

    <v-layout style="padding-top:30px">
        <v-flex  lg1 md1 hidden-md-and-down></v-flex>
        <v-flex  lg10 md12 sm12 xs12>
            <v-layout>
                <v-flex lg2 md2 sm2 xs2 style="text-align: center;background-color: white;border-right: 2px solid #efefef;font-size: larger;" >
                    <div>
                        <div style="padding:20px 0;cursor: pointer;" :class="{isActiveItem:showPanel == 1}" @click="switchPanel(1)">
                            <span>企业信息</span>
                        </div>
                        <div style="padding:20px 0;cursor: pointer;" :class="{isActiveItem:showPanel == 2}" @click="switchPanel(2)">
                            <span>测评中心</span>
                        </div>
                        <div style="padding:20px 0;cursor: pointer;" :class="{isActiveItem:showPanel == 3}" @click="switchPanel(3)">
                            <span>企业用户</span>
                        </div>
                    </div>
                </v-flex> 
                <v-flex  lg10 md10 sm10 xs10 v-if="showPanel == 1">
                    <v-card flat>
                        <v-card-text>
                            <v-layout row wrap>
                                <v-flex  lg6 md6 sm12 xs12>
                                    <div style="text-align: left;padding: 10px 8%;">
                                        <span style="font-weight: 600;">企业简称：</span><span>{{companyDetails.shortName}}</span>
                                    </div>
                                </v-flex>
                                <v-flex  lg6 md6 sm12 xs12>
                                    <div style="text-align: left;padding: 10px 8%;">
                                        <span style="font-weight: 600;">社会统一信用代码/组织机构代码：</span><span>{{companyDetails.enterpriseCode}}</span>
                                    </div>
                                </v-flex>
                            </v-layout>
                            <v-layout row wrap>
                                <v-flex  lg6 md6 sm12 xs12>
                                    <div style="text-align: left;padding: 10px 8%;">
                                        <span style="font-weight: 600;">区域：</span><span>{{companyDetails.province}}/</span><span>{{companyDetails.city}}/</span><span>{{companyDetails.area}}</span>
                                    </div>
                                </v-flex>
                                <v-flex  lg6 md6 sm12 xs12>
                                    <div style="text-align: left;padding: 10px 8%;">
                                        <span style="font-weight: 600;">所属行业：</span><span>{{companyDetails.industryL1}}</span>
                                    </div>
                                </v-flex>
                            </v-layout>
                            <v-layout row wrap>
                                <v-flex  lg6 md6 sm12 xs12>
                                    <div style="text-align: left;padding: 10px 8%;">
                                        <span style="font-weight: 600;">企业规模：</span><span>{{companyDetails.scale}}</span>
                                    </div>
                                </v-flex>
                                <v-flex  lg6 md6 sm12 xs12>
                                    <div style="text-align: left;padding: 10px 8%;">
                                        <span style="font-weight: 600;">年销售额：</span><span>{{companyDetails.income}}</span>
                                    </div>
                                </v-flex>
                            </v-layout>
                            
                            <v-layout>
                                <v-flex  lg1 md1 sm2 xs2 style="margin: 10px 0 0 4%;">
                                    <div style="text-align: left;">
                                         <span style="font-weight: 600;">标签：</span>
                                    </div>
                                </v-flex>
                                <v-flex  lg11 md11 sm10 xs10>
                                    <v-layout row wrap>
                                        <v-combobox
                                            v-model="model"
                                            :filter="filter"
                                            :hide-no-data="!search"
                                            :items="items"
                                            :search-input.sync="search"
                                            hide-selected
                                            label="选择标签"
                                            change="changeFlag"
                                            multiple
                                            small-chips
                                            solo>
                                            <template slot="no-data">
                                                <v-list-tile>
                                                    <span class="subheading">按回车新增</span>
                                                    <v-chip
                                                    label
                                                    small
                                                    >
                                                    {{ search }}
                                                    </v-chip>
                                                </v-list-tile>
                                            </template>
                                            <template
                                                v-if="item === Object(item)"
                                                slot="selection"
                                                slot-scope="{ item, parent, selected }"
                                                >
                                                <v-chip
                                                    :selected="selected"
                                                    label
                                                    small
                                                >
                                                    <span class="pr-2">
                                                    {{ item.text }}
                                                    </span>
                                                    <v-icon
                                                    small
                                                    @click="deleteItem(item)"
                                                    >close</v-icon>
                                                </v-chip>
                                            </template>
                                            <template
                                                slot="item"
                                                slot-scope="{ index, item, parent }"
                                                >
                                                <v-list-tile-content>
                                                    <v-text-field
                                                    v-if="editing === item"
                                                    v-model="editing.text"
                                                    autofocus
                                                    flat
                                                    background-color="transparent"
                                                    hide-details
                                                    solo
                                                    @keyup.enter="edit(index, item)"
                                                    ></v-text-field>
                                                    <v-chip
                                                    v-else
                                                    color="blue lighten-3"
                                                    dark
                                                    label
                                                    small
                                                    >
                                                    {{ item.text }}
                                                    </v-chip>
                                                </v-list-tile-content>
                                                <v-spacer></v-spacer>
                                                <!-- <v-list-tile-action @click.stop>
                                                    <v-btn
                                                    icon
                                                    @click.stop.prevent="edit(index, item)"
                                                    >
                                                    <v-icon>{{ editing !== item ? 'edit' : 'check' }}</v-icon>
                                                    </v-btn>
                                                </v-list-tile-action> -->
                                            </template>
                                        </v-combobox>
                                    </v-layout>
                                </v-flex>
                            </v-layout>
                            
                            <v-layout>
                                <v-flex  lg12 md12 sm12 xs12 style="margin: 10px 0 0 4%;">
                                    <div style="text-align: left;">
                                         <span style="font-weight: 600;">备注（可选）：</span>
                                         <i class="material-icons" @click="editMarked()" style="cursor: pointer;">edit</i>
                                         <i class="material-icons" @click="saveMarked()" style="cursor: pointer;">save</i>
                                    </div>
                                </v-flex>
                            </v-layout>
                            <v-layout>
                                <v-flex  lg12 md12 sm12 xs12 style="margin: 10px 0 0 4%;">
                                    <v-layout row wrap>
                                       <v-flex lg8 md12 sm12 xs12>
                                            <v-textarea
                                            solo
                                            name="marked"
                                            :disabled="markedReadonly"
                                            autofocus="autofocus"
                                            no-resize
                                            label="请输入备注"
                                            v-model="remark"
                                            ></v-textarea>
                                            <div>
                                                <span v-if="showRemarkErr" style="color: red;">备注长度不能超过125</span>
                                            </div>
                                        </v-flex>
                                    </v-layout>
                                </v-flex>
                            </v-layout>
                           
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex  lg10 md10 sm10 xs10 v-if="showPanel == 2" style="background-color: white;">
                    <div>
                         <v-toolbar  tabs style="background-color: white;">
                             <v-tabs
                                slot="extension"
                                v-model="currentItem"
                                color="white"
                                align-with-title>
                                <v-tab
                                    v-for="item in textitems"
                                    @click="switchTest(item.state)"
                                    :key="item.state"
                                    >
                                    {{ item.value }}
                                </v-tab>
                                <v-spacer></v-spacer>
                                <v-text-field 
                                    class="mx-3"
                                    flat
                                    label="搜索"
                                    v-model="testKey"
                                    single-line
                                    style="padding: 4px;"
                                ></v-text-field>
                                <v-btn icon @click="searchTest()">
                                    <v-icon>search</v-icon>
                                </v-btn>
                            </v-tabs>    
                        </v-toolbar>
                    </div>
                    <v-layout>
                        <v-flex  lg12 md12 sm12 xs12>
                            <v-card v-if="textShowArray.length == 0" hover ripple="true" style="height:400px;text-align: center;">
                                <div style="font-size: 30px;padding-top: 10%;">
                                    <span>没有相关测评数据</span>
                                </div>
                            </v-card>
                            <v-card v-if="textShowArray.length !== 0" flat v-for="item in textShowArray" :key="item.idx" hover ripple="true" style="margin: 5px 10px;">
                                <v-layout row wrap style="margin: 10px 0;padding: 10px;">
                                            <v-flex lg5 md6 sm12 xs12 style="text-align: left;margin: 10px 0;">
                                                <div>
                                                    <div style="font-weight: 600;font-size: 16px;">{{item.name}}</div>
                                                    <div >{{item.remark}}</div>
                                                </div>
                                            </v-flex>
                                            <v-flex lg3 md6 sm12 xs12 style="text-align: left;margin: 10px 0;" v-if="item.endTime!==null && item.endTime!==''">
                                                <div>
                                                    <div>
                                                        <span>测评时间：</span> 
                                                        <span>{{item.startTime}}</span>
                                                    </div>
                                                    <div>
                                                        <span>完成时间：</span> 
                                                        <span>{{item.endTime}}</span>
                                                    </div>
                                                </div>
                                            </v-flex>
                                            <v-flex lg3 md6 sm12 xs12 style="text-align: left;margin: 22px 0;" v-else>
                                                <div>
                                                    <div>
                                                        <span>测评时间：</span> 
                                                        <span>{{item.startTime}}</span>
                                                    </div>
                                                </div>
                                            </v-flex>
                                            <v-flex lg2 md6 sm6 xs6 style="text-align: left;margin: 10px 0;">
                                                <div style="margin-top: 15px;">
                                                    <el-progress :percentage="item.complete_degree" v-if="item.completeStatus == 0"></el-progress>
                                                    <el-progress :percentage="100" status="success" v-if="item.completeStatus == 1"></el-progress>
                                                </div>
                                            </v-flex>
                                            <v-flex lg2 md6 sm6 xs6 style="text-align: center;">
                                                <div style="display: inline-flex;margin-top: 20px;">
                                                    <div style="color: #228fff;font-weight: 400;padding-right: 10px;cursor: pointer;" @click="viewAnswer(item)">看问卷</div>
                                                    <div style="color: #228fff;font-weight: 400;padding-right: 10px;cursor: pointer;" v-if="item.endTime!==null && item.endTime!==''" @click="viewReport(item)">看报告</div>
                                                </div>
                                            </v-flex>
                                </v-layout>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-flex>
                <v-flex  lg10 md10 sm10 xs10 v-if="showPanel == 3" style="background-color: white;">
                    <div>
                         <v-toolbar  tabs style="background-color: white;">
                            <v-spacer></v-spacer>
                                <v-text-field 
                                    class="mx-3"
                                    flat
                                    label="搜索"
                                    single-line
                                    v-model="userKey"
                                    style="padding: 4px;"
                                ></v-text-field>
                                <v-btn icon @click="searchUser()">
                                    <v-icon>search</v-icon>
                                </v-btn>    
                        </v-toolbar>
                    </div>
                    <div>
                        <v-card flat v-for="item in user_info" :key="item.idx" hover ripple="true">
                            <v-layout row wrap style="margin: 10px 0;padding: 10px;">
                                <v-flex lg1 md4 sm3 xs3>
                                    <v-avatar
                                        tile
                                        style="height: 100%; width: 100%;"
                                        >
                                        <img :src="item.image!==''?item.image!==null?'/IMAGE/'+item.image:'/static/imgs/ic_user.png':'/static/imgs/ic_user.png'">
                                    </v-avatar>
                                </v-flex>
                               
                                <v-flex lg2 md4 sm7 xs7 style="text-align: left;">
                                    <div style="display: inline-flex;">
                                        <div>{{item.name!==''?item.name!==null?item.name:'--':'--'}}</div>
                                        <div style="padding: 0 10px;" v-if="item.gender ==0">
                                            <i class="fa fa-venus" aria-hidden="true"></i>
                                        </div>
                                        <div style="padding: 0 10px;" v-if="item.gender ==1">
                                            <i class="fa fa-mars" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <span>{{item.department!==''?item.department!==null?item.department:'部门':'部门'}}</span>
                                        <span>|</span> 
                                        <span>{{item.position!==''?item.position!==null?item.position:'职位':'职位'}}</span>
                                    </div>
                                </v-flex>
                                <v-flex lg1 md4 sm2 xs2 style="text-align: left;">
                                    <div>{{item.role_name}}</div>
                                </v-flex>
                                <v-flex lg3 md6 sm6 xs6 text-align: left;>
                                    <div>
                                        <div style="display: inline-flex;">
                                            <i class="material-icons">phone</i>
                                            <div>{{item.mobile}}</div>    
                                        </div>
                                    </div>
                                    <div>
                                        <div style="display: inline-flex;">
                                            <i class="material-icons">mail</i>
                                            <div>{{item.email}}</div>    
                                        </div>
                                    </div>
                                </v-flex>
                                <v-flex lg2 md6 sm6 xs6 text-align: left;>
                                    <div>
                                        <span>出生日期：</span>
                                        <span>{{item.birthday!==''?item.birthday!==null?item.birthday:'--/--':'--/--'}}</span>
                                    </div>
                                </v-flex>
                                <v-flex lg3 md6 sm6 xs12 style="text-align: left;">
                                    <div style="display: inline-flex;">
                                        <div>注册时间:</div>
                                        <div>{{item.createTime}}</div>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-card>
                    </div>
                </v-flex>
            </v-layout>
        </v-flex>
        
        
        <v-flex  lg1 md1 hidden-md-and-down></v-flex>
    </v-layout>

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
  </div>
</template>

<style scoped>
.isActiveItem {
  background-color: rgba(173, 173, 173, 0.4);
  border-right: 1px solid #9e9e9e;
  box-shadow: 0 1px 1px 0 rgba(60, 64, 67, 0.08),
    0 1px 3px 1px rgba(60, 64, 67, 0.16);
}
.v-toolbar {
  box-shadow: 0 0 rgba(0, 0, 0, 0), 0 0 0 rgba(0, 0, 0, 0),
    0 0 0 rgba(0, 0, 0, 0);
}
</style>


<script>
export default {
  name: "",
  data: () => ({
    testKey: "",
    userKey: "",
    currentItem: "tab-Web",
    textitems: [
      { state: 3, value: "全部" },
      { state: 2, value: "测评中" },
      { state: 1, value: "已完成" }
    ],
    testCenter: [],
    selectLabels: [
      { idx: 3, flagName: "汽车零部件" },
      { idx: 4, flagName: "制造业" }
    ],
    autofocus: true,
    editing: null,
    items: [],
    model: [],
    search: null,
    showPanel: 1,
    markedReadonly: true,
    remark: "",
    TestState: "",
    serachKey: "",
    TestState: 3,
    user_info: [],
    testingArray: [],
    testendArray: [],
    EnterpriseTestAllInfo: [],
    textShowArray: [],
    showAlert: false,
    AlertMessage: "",
    TreedataArray: [],
    showRemarkErr: false,
    deleItem: ""
  }),
  watch: {
    model(val, prev) {
      let $this = this;
      if (val.length == 9) {
        // this.model = prev;
        this.delete_flag_for_enterprise(val[val.length - 1].text);
        this.model.pop();

        this.showAlert = true;
        this.AlertMessage = "最多只能绑定8个标签";
        return;
      }
      if (val.length === prev.length) return;
      if (val.length > prev.length) {
        if (typeof val[val.length - 1] === "string") {
          let v = {
            text: val[val.length - 1]
          };
          //    this.model.push(v);
          //   this.items.push(v);
          this.model[val.length - 1] = {
            text: val[val.length - 1]
          };
          this.add_flag_for_enterprise(v.text);
        } else {
          this.add_flag_for_enterprise(val[val.length - 1].text);
        }
      } else {
        // this.model.push(prev[val.length - 1]);
        if (this.deleItem == "") {
          prev.forEach(function(item) {
            if (val.indexOf(item) == -1) {
              $this.model.push(item);
            }
          });
        }
      }

      //   this.model = val.map(v => {
      //     if (typeof v === "string") {
      //       v = {
      //         text: v
      //       };

      //       this.model.push(v);
      //       $this.add_flag_for_enterprise(v.text);
      //     }

      //     return v;
      //   });
      //   this.items = val.map(v => {
      //     if (typeof v === "string") {
      //       v = {
      //         text: v
      //       };

      //       this.items.push(v);
      //     }
      //   });

      //   if (val.length < prev.length) {
      //     let text;
      //     prev.forEach(item => {
      //       if (val.indexOf(item) == -1) {
      //         text = item;
      //       }
      //     });
      //     $this.delete_flag_for_enterprise(text.text);
      //   }
    },
    remark(val, prev) {
      if (val.length > 125) {
        this.showRemarkErr = true;
      } else {
        this.showRemarkErr = false;
      }
    }
  },
  computed: {
    companyDetails() {
      return this.$store.state.company.companyDetails;
    },
    session_id() {
      return this.$store.state.logIn.session_id;
    },
    showPanel2() {
      return this.$store.state.answerPage.showPanel2;
    }
  },
  mounted: function() {
    let $this = this;
    this.getflagInfo();
    this.companyDetails.flag.forEach(element => {
      $this.model.push({ text: element.flagName });
      //   $this.items.push({ text: element.flagName });
    });
    this.remark =
      this.companyDetails.remark !== null ? this.companyDetails.remark : "";
    this.getEnterpriseUser();
    if (this.showPanel2) {
      this.switchPanel(2);
    }
  },
  methods: {
    edit(index, item) {
      if (!this.editing) {
        this.editing = item;
        this.index = index;
      } else {
        this.editing = null;
        this.index = -1;
      }
    },
    filter(item, queryText, itemText) {
      //   if (item.header) return false;

      const hasValue = val => (val != null ? val : "");

      const text = hasValue(itemText);
      const query = hasValue(queryText);

      return (
        text
          .toString()
          .toLowerCase()
          .indexOf(query.toString().toLowerCase()) > -1
      );
    },
    switchPanel(e) {
      this.showPanel = e;
      this.remark = "";
      this.testKey = "";
      if (e == 2) {
        this.getEnterpriseTestAllInfo();
      }
    },
    switchTest(e) {
      this.TestState = e;

      this.loading = true;
      let $this = this;
      let apikey = "",
        request = {
          session_id: this.session_id,
          key: this.testKey,
          enterprise_id: this.companyDetails.idx,
          status: this.TestState
        },
        type = "POST",
        url = "/IBUS/DAIG_SER/getEnterpriseTestAllInfo";
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
          //   $this.EnterpriseTestAllInfo = res.data.return;
          //   $this.testingArray = res.data.return.doing;
          //   $this.testendArray = res.data.return.done;
          //   $this.EnterpriseTestAllInfo = $this.testingArray.concat(
          //     $this.testendArray
          //   );
          $this.textShowArray = res.data.return.info;
          //   $this.TestState == 1
          //     ? ($this.textShowArray = $this.testendArray)
          //     : $this.TestState == 2
          //       ? ($this.textShowArray = $this.testingArray)
          //       : ($this.textShowArray = $this.EnterpriseTestAllInfo);
        })
        .catch(error => {
          console.log(error);
        });
    },
    getEnterpriseUser() {
      this.loading = true;
      let $this = this;
      let apikey = "",
        request = {
          session_id: this.session_id,
          idx: this.companyDetails.idx
        },
        type = "POST",
        url = "/IBUS/DAIG_SER/get_enterprise_user";
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
          $this.user_info = res.data.return.user_info;
        })
        .catch(error => {
          console.log(error);
        });
    },
    editMarked() {
      this.markedReadonly = !this.markedReadonly;
    },
    saveMarked() {
      if (this.showRemarkErr) {
        this.showAlert = true;
        this.AlertMessage = "备注长度不能超过125";
        return;
      }
      this.loading = true;
      let $this = this;
      let apikey = "",
        request = {
          session_id: this.session_id,
          idx: this.companyDetails.idx,
          remark: this.remark
        },
        type = "POST",
        url = "/IBUS/DAIG_SER/modify_enterprise_mark";
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
          $this.markedReadonly = !$this.markedReadonly;
        })
        .catch(error => {
          console.log(error);
        });
    },
    getEnterpriseTestAllInfo() {
      this.loading = true;
      let $this = this;
      let apikey = "",
        request = {
          session_id: this.session_id,
          key: "",
          enterprise_id: this.companyDetails.idx,
          status: ""
        },
        type = "POST",
        url = "/IBUS/DAIG_SER/getEnterpriseTestAllInfo";
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
          //   $this.EnterpriseTestAllInfo = res.data.return;
          $this.testingArray = res.data.return.doing;
          $this.testendArray = res.data.return.done;
          $this.EnterpriseTestAllInfo = $this.testingArray.concat(
            $this.testendArray
          );
          //   $this.TestState == 1
          //     ? ($this.textShowArray = $this.testendArray)
          //     : $this.TestState == 2
          //       ? ($this.textShowArray = $this.testingArray)
          //       : ($this.textShowArray = $this.EnterpriseTestAllInfo);
          $this.textShowArray = $this.EnterpriseTestAllInfo;
        })
        .catch(error => {
          console.log(error);
        });
    },
    getflagInfo() {
      this.loading = true;
      let $this = this;
      let apikey = "",
        request = {
          type: 3
        },
        type = "POST",
        url = "/IBUS/DAIG_SER/get_flag_info";
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
          res.data.return.info.forEach(element => {
            $this.items.push({ text: element.flagName });
          });
        })
        .catch(error => {
          console.log(error);
        });
    },
    add_flag_for_enterprise(e) {
      this.loading = true;
      let $this = this;
      let apikey = "",
        request = {
          session_id: this.session_id,
          flag: e,
          idx: this.companyDetails.idx
        },
        type = "POST",
        url = "/IBUS/DAIG_SER/add_flag_for_enterprise";
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
          if (res.data.errorCode !== 0) {
            $this.showAlert = true;
            $this.AlertMessage = res.data.errorMsg;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    delete_flag_for_enterprise(e) {
      this.loading = true;
      let $this = this;
      let apikey = "",
        request = {
          session_id: this.session_id,
          flag: e,
          idx: this.companyDetails.idx
        },
        type = "POST",
        url = "/IBUS/DAIG_SER/delete_flag_for_enterprise";
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
          if (res.data.errorCode !== 0) {
            $this.showAlert = true;
            $this.AlertMessage = res.data.errorMsg;
          } else {
            $this.deleItem = "";
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    changeFlag(e) {
      console.log(e);
    },
    get_tree_struct_data(id) {
      this.loading = true;
      let $this = this;
      let apikey = "",
        request = {
          id: id
        },
        type = "POST",
        url = "/IBUS/DAIG_SER/get_tree_struct_data";
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
          $this.$store.commit(
            "answerPage/getTreedataArray",
            res.data.tree_struct
          );
          $this.$store.commit("SET_TreedataArray", res.data.tree_struct);

          $this.$router.push("/answerPage");
        })
        .catch(error => {
          console.log(error);
        });
    },
    viewAnswer(e) {
      this.loading = true;
      let $this = this;
      let apikey = "",
        request = {
          session_id: this.session_id,
          id: e.id,
          user_id: e.user_id,
          completeStatus: e.completeStatus
        },
        type = "POST",
        url = "/IBUS/DAIG_SER/get_test_all_info";
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
          if (res.data.errorCode !== 0) {
            $this.loading = false;
            $this.showAlert = true;
            $this.AlertMessage = res.data.errorMsg;
          } else {
            $this.loading = false;

            $this.$store.commit("answerPage/getAnswerDetails", res.data);
            $this.$store.commit("answerPage/getTestName", e.name);
            $this.$store.commit(
              "answerPage/getEnterpriseName",
              $this.companyDetails.enterpriseName
            );
            $this.$store.commit(
              "answerPage/getEnterpriseLogo",
              $this.companyDetails.logo
            );
            $this.$store.commit("SET_AnswerDetails", res.data);
            $this.$store.commit("SET_TestName", e.name);
            $this.$store.commit(
              "SET_EnterpriseName",
              $this.companyDetails.enterpriseName
            );
            $this.$store.commit(
              "SET_EnterpriseLogo",
              $this.companyDetails.logo
            );

            $this.get_tree_struct_data(e.id);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    viewReport(e) {
      this.$store.commit("reportPage/getReportParm", {
        key: "evaluationId",
        value: e.id
      });
      this.$store.commit("reportPage/getReportParm", {
        key: "enterpriseId",
        value: this.companyDetails.idx
      });
      this.$store.commit("reportPage/getReportParm", {
        key: "idx",
        value: e.idx
      });
      this.$store.commit("SET_EvaluationId", e.id);
      this.$store.commit("SET_EnterpriseId", this.companyDetails.idx);
      this.$store.commit("SET_EvaluationIdx", e.idx);

      this.$router.push("/reportPage");
    },
    searchTest() {
      this.loading = true;
      let $this = this;
      let apikey = "",
        request = {
          session_id: this.session_id,
          key: this.testKey,
          enterprise_id: this.companyDetails.idx,
          status: this.TestState
        },
        type = "POST",
        url = "/IBUS/DAIG_SER/getEnterpriseTestAllInfo";
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
          //   $this.EnterpriseTestAllInfo = res.data.return;
          //   $this.testingArray = res.data.return.doing;
          //   $this.testendArray = res.data.return.done;
          //   $this.EnterpriseTestAllInfo = $this.testingArray.concat(
          //     $this.testendArray
          //   );
          $this.textShowArray = res.data.return.info;
          //   $this.TestState == 1
          //     ? ($this.textShowArray = $this.testendArray)
          //     : $this.TestState == 2
          //       ? ($this.textShowArray = $this.testingArray)
          //       : ($this.textShowArray = $this.EnterpriseTestAllInfo);
        })
        .catch(error => {
          console.log(error);
        });
    },
    searchUser() {},
    deleteItem(e) {
      console.log(e);
      let array = [];
      this.model.forEach(function(item) {
        if (item.text !== e.text) {
          array.push(item);
        }
      });
      this.deleItem = e;
      this.model = array;
      this.delete_flag_for_enterprise(e.text);
    }
  }
};
</script>

