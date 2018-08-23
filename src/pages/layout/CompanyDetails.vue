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
                                <v-flex  lg3 md2 sm2 xs2 style="padding: 0 4%;">
                                    <img :src="companyDetails.logo!==''?companyDetails.logo!==null?'/IMAGE/'+companyDetails.logo:'/static/imgs/noImage.png':'/static/imgs/noImage.png'" style="width: 100%;height: 100%;" >
                                </v-flex>
                                <v-flex  lg9 md10 sm10 xs10 >
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
                                                    @click="parent.selectItem(item)"
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
                                                <v-list-tile-action @click.stop>
                                                    <v-btn
                                                    icon
                                                    @click.stop.prevent="edit(index, item)"
                                                    >
                                                    <v-icon>{{ editing !== item ? 'edit' : 'check' }}</v-icon>
                                                    </v-btn>
                                                </v-list-tile-action>
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
                            <v-card flat v-for="item in textShowArray" :key="item.idx" hover ripple="true" style="margin: 5px 10px;">
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
    // companyDetails: {
    //   area: "和平区",
    //   city: "天津市",
    //   email: "billonese@126.com",
    //   ent_register_time: "2018-07-09 10:21:45",
    //   testTime: "--",
    //   enterpriseCode: "237923734927349832F",
    //   enterpriseName: "EHZ",
    //   flag: [
    //     { idx: 3, flagName: "汽车零部件" },
    //     { idx: 4, flagName: "制造业" }
    //   ],
    //   idx: 17,
    //   industryL1: "化学制品",
    //   industryL2: "",
    //   industryL3: "",
    //   industryL4: "",
    //   industryL5: "",
    //   logo: "./image/89caf08896e311e88beb000c291f0997.png",
    //   province: "天津市",
    //   remark: "123",
    //   shortName: "EHZ",
    //   user: "HELLO KITTY",
    //   scale: "3.000人以上",
    //   income: "30.000万元以上",
    //   user_id: 18
    // },
    // user_info: [
    //   {
    //     idx: 145,
    //     name: 233,
    //     image: null,
    //     email: "chengyi@ehz.cn",
    //     mobile: "15712055291",
    //     department: "技术与产品中心",
    //     position: "产品",
    //     birthday: "1912-2-1",
    //     gender: 1,
    //     role_name: "管理员",
    //     createTime: "2018-08-19 20:15:31"
    //   }
    // ],
    // textShowArray: [
    //   {
    //     idx: 322,
    //     user_id: 142,
    //     id: 4,
    //     name: "3C电子行业",
    //     startTime: "2018-08-10 00:19:03",
    //     endTime: "",
    //     completeStatus: 0,
    //     complete_degree: 76,
    //     remark: "适用于电子元器件、IC、配件、电子中间件、终端产品等3C电子行业"
    //   },
    //   {
    //     idx: 326,
    //     user_id: 146,
    //     id: 5,
    //     name: "3C电子行业",
    //     startTime: "2018-08-20 00:19:03",
    //     endTime: "2018-08-20 00:27:38",
    //     completeStatus: 1,
    //     remark: "适用于电子元器件、IC、配件、电子中间件、终端产品等3C电子行业"
    //   }
    // ],
    
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
    TreedataArray: []
  }),
  watch: {
    model(val, prev) {
      if (val.length === prev.length) return;

      this.model = val.map(v => {
        if (typeof v === "string") {
          v = {
            text: v
          };

          this.items.push(v);
        }

        return v;
      });
    }
  },
  computed: {
    companyDetails() {
      return this.$store.state.company.companyDetails;
    },
    session_id() {
      return this.$store.state.logIn.session_id;
    }
  },
  mounted: function() {
    let $this = this;
    this.companyDetails.flag.forEach(element => {
      $this.model.push({ text: element.flagName });
      $this.items.push({ text: element.flagName });
    });
    this.remark =
      this.companyDetails.remark !== null ? this.companyDetails.remark : "";
    this.getEnterpriseUser();
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
      if (e == 2) {
        this.getEnterpriseTestAllInfo();
      }
    },
    switchTest(e) {
      this.TestState = e;
      this.TestState == 1
        ? (this.textShowArray = this.testendArray)
        : this.TestState == 2
          ? (this.textShowArray = this.testingArray)
          : (this.textShowArray = this.EnterpriseTestAllInfo);
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
          $this.EnterpriseTestAllInfo = res.data.return;
          $this.testingArray = res.data.return.doing;
          $this.testendArray = res.data.return.done;
          $this.EnterpriseTestAllInfo = $this.testingArray.concat(
            $this.testendArray
          );
          $this.TestState == 1
            ? ($this.textShowArray = $this.testendArray)
            : $this.TestState == 2
              ? ($this.textShowArray = $this.testingArray)
              : ($this.textShowArray = $this.EnterpriseTestAllInfo);
        })
        .catch(error => {
          console.log(error);
        });
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
          $this.$store.commit("answerPage/getTreedataArray", res.data.tree_struct);
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
            $this.get_tree_struct_data(e.id);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    viewReport(e) {
      this.$router.push("/reportPage");
    },
    searchTest() {
      console.log("searchTest");
    }
  }
};
</script>

