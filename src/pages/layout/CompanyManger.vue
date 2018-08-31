<template>
    <div id="page-expansion-panel">
        <v-container grid-list-xl fluid text-xs-center>
            <v-layout row wrap>
                <v-flex lg3 md4 sm6 xs12>
                    <mini-statistic
                        icon="supervisor_account"
                        title="注册企业"
                        :sub-title="ent_count"
                        color="indigo"      
                    >
                    </mini-statistic>  
                </v-flex>
                <v-flex lg3 md4 sm6 xs12>
                    <mini-statistic
                        icon="fa-tasks"
                        title="测评企业"
                        :sub-title="test_ent"
                        color="cyan"      
                    >
                    </mini-statistic>           
                </v-flex>          
                <v-flex lg3 md4 sm6 xs12>
                    <mini-statistic
                        icon="fa-industry"
                        title="涉及行业"
                        :sub-title="industry_count"
                        color="pink"      
                    >
                    </mini-statistic>            
                </v-flex>  
            </v-layout>
            <v-layout row wrap>
                <v-flex lg12 sm12 xs12>
                    <v-card>
                        <v-card-title class="pb-0">
                            <span>关键字</span>
                        </v-card-title>
                        
                        <v-card-text style="padding: 12px 12px 0 12px;">
                            <v-layout row wrap>
                                <v-flex lg9 sm8 xs12>
                                    <v-text-field
                                        flat
                                        solo-inverted
                                        v-model="searchKey"
                                        prepend-icon="search"
                                        label="企业全称 / 企业简称 / 统一社会信用代码 / 组织机构代码"
                                        >
                                    </v-text-field>
                                </v-flex>
                                <v-flex lg1 sm1 xs6 style="text-align: center;line-height: 45px;padding: 12px 0;">
                                    <div v-if="!showMore">
                                       <v-btn color="info"  @click="getCompanysList()">搜索</v-btn>
                                    </div>
                                </v-flex>
                                <v-flex lg2 sm3 xs6 style="text-align: center;line-height: 45px;padding: 12px 0;">
                                    <div v-if="!showMore" @click="switchPanel()">
                                        更多筛选条件
                                        <v-icon color="blue">keyboard_arrow_down</v-icon>
                                    </div>
                                    <div v-if="showMore" @click="switchPanel()">
                                        收起更多筛选条件
                                        <v-icon color="blue">keyboard_arrow_up</v-icon>
                                    </div>
                                </v-flex>
                            </v-layout>
                    
                            <v-layout row wrap style="margin: 0;" v-show="showMore">
                                <v-flex lg6 sm12 xs12>
                                    <v-layout row wrap >
                                        <v-flex lg4 sm4 xs12>
                                            <v-select
                                                :items="provinceArray"
                                                v-model="selectProvince"
                                                @change="choseProvince"
                                                label="选择省"
                                                item-text="value"
                                                item-value="id"
                                                return-object
                                                solo
                                                >
                                            </v-select>
                                        </v-flex>
                                        <v-flex lg4 sm4 xs12>
                                            <v-select
                                                :items="shiArray"
                                                v-model="selectCity"
                                                @change="choseCity"
                                                label="选择市"
                                                item-text="value"
                                                item-value="id"
                                                return-object
                                                solo
                                                >
                                            </v-select>
                                        </v-flex>
                                        <v-flex lg4 sm4 xs12>
                                            <v-select
                                                :items="quArray"
                                                v-model="selectCounty"
                                                @change="choseBlock"
                                                label="选择区"
                                                item-text="value"
                                                item-value="id"
                                                return-object
                                                solo
                                                >
                                            </v-select>
                                        </v-flex>
                                    </v-layout>           
                                </v-flex>
                                <v-flex lg6 sm12 xs12>
                                    <v-layout row wrap >
                                        <v-flex lg12 sm12 xs12>
                                            <v-select
                                                :items="Industry1"
                                                v-model="SelectIndustry1"
                                                label="选择行业"
                                                solo
                                                >
                                            </v-select>
                                        </v-flex>
                                    </v-layout> 
                                </v-flex>
                            </v-layout>

                            <v-layout row wrap style="margin: 0;" v-show="showMore">
                                <v-flex lg3 sm6 xs12>
                                    <v-card style="height:100%">
                                        <v-card-title class="pb-0">
                                            <span>企业规模</span>
                                        </v-card-title>
                                        <v-card-text style="padding:0;">
                                            <v-flex lg12 sm12 xs12 d-flex>
                                                <v-select
                                                    :items="companySizeItems"
                                                    v-model="companySize"
                                                    label="请选择"
                                                    single-line
                                                    >
                                                </v-select>
                                            </v-flex>
                                        </v-card-text>            
                                    </v-card>
                                </v-flex>
                                <v-flex lg3 sm6 xs12>
                                    <v-card style="height:100%">
                                        <v-card-title class="pb-0">
                                            <span>年销售额</span>
                                        </v-card-title>
                                        <v-card-text style="padding:0;">
                                            <v-flex lg12 sm12 xs12 d-flex>
                                                <v-select
                                                    :items="companyInputItems"
                                                    v-model="companyInput"
                                                    label="请选择"
                                                    single-line
                                                    >
                                                </v-select>
                                            </v-flex>
                                        </v-card-text>            
                                    </v-card>
                                </v-flex>
                                <v-flex lg3 sm6 xs12>
                                    <v-card>
                                        <v-card-title class="pb-0">
                                            <span>注册时间</span>
                                        </v-card-title>
                                        <v-card-text style="display: inline-flex;padding:0;">
                                            <v-flex sm6 lg6>
                                                <v-menu
                                                    class="pr-2"
                                                    ref="RegStartDate"
                                                    lazy
                                                    :close-on-content-click="false"
                                                    v-model="RegStartDateMenu"
                                                    transition="scale-transition"
                                                    offset-y
                                                    full-width
                                                    :nudge-bottom="-22"
                                                    max-width="290px"
                                                    :return-value.sync="RegStartDate"
                                                    >
                                                    <v-text-field
                                                        slot="activator"
                                                        label="开始日期"
                                                        v-model="RegStartDate"
                                                        append-icon="event"
                                                        readonly
                                                    ></v-text-field>
                                                    <v-date-picker v-model="RegStartDate" locale="zh-cn"  scrollable>
                                                        <v-spacer></v-spacer>
                                                        <v-btn flat color="primary" @click="RegStartDateMenu = false">取消</v-btn>
                                                        <v-btn flat color="primary" @click="$refs.RegStartDate.save(RegStartDate)">确定</v-btn>
                                                    </v-date-picker>
                                                </v-menu>
                                            </v-flex>
                                            <v-flex sm6 lg6>
                                                <v-menu
                                                ref="RegEndDate"
                                                lazy
                                                class="pr-2"
                                                :close-on-content-click="false"
                                                v-model="RegEndDateMenu"
                                                transition="scale-transition"
                                                offset-y
                                                full-width
                                                :nudge-bottom="-22"
                                                min-width="290px"
                                                :return-value.sync="RegEndDate"
                                                >
                                                <v-text-field
                                                    slot="activator"
                                                    label="结束日期"
                                                    v-model="RegEndDate"
                                                    append-icon="event"
                                                    readonly
                                                ></v-text-field>
                                                <v-date-picker v-model="RegEndDate" locale="zh-cn" scrollable>
                                                    <v-spacer></v-spacer>
                                                    <v-btn flat color="primary" @click="RegEndDateMenu = false">取消</v-btn>
                                                    <v-btn flat color="primary" @click="$refs.RegEndDate.save(RegEndDate)">确定</v-btn>
                                                </v-date-picker>
                                                </v-menu>
                                            </v-flex>
                                        </v-card-text>            
                                    </v-card>
                                </v-flex>
                                <v-flex lg3 sm6 xs12>
                                    <v-card>
                                        <v-card-title class="pb-0">
                                            <span>最近测评时间</span>
                                        </v-card-title>
                                        <v-card-text style="display: inline-flex;padding:0;">
                                            <v-flex sm6 lg6>
                                                <v-menu
                                                    class="pr-2"
                                                    ref="startTestDateMenu"
                                                    lazy
                                                    :close-on-content-click="false"
                                                    v-model="startTestDateMenu"
                                                    transition="scale-transition"
                                                    offset-y
                                                    full-width
                                                    :nudge-bottom="-22"
                                                    max-width="290px"
                                                    :return-value.sync="startTestDate">
                                                        <v-text-field
                                                            slot="activator"
                                                            label="开始日期"
                                                            v-model="startTestDate"
                                                            append-icon="event"
                                                            readonly
                                                        ></v-text-field>
                                                        <v-date-picker v-model="startTestDate" locale="zh-cn" scrollable>
                                                            <v-spacer></v-spacer>
                                                            <v-btn flat color="primary" @click="startTestDateMenu = false">取消</v-btn>
                                                            <v-btn flat color="primary" @click="$refs.startTestDateMenu.save(startTestDate)">确定</v-btn>
                                                        </v-date-picker>
                                                </v-menu>
                                            </v-flex>
                                            <v-flex sm6 lg6>
                                                <v-menu
                                                ref="endTestDateMenu"
                                                lazy
                                                class="pr-2"
                                                :close-on-content-click="false"
                                                v-model="endTestDateMenu"
                                                transition="scale-transition"
                                                offset-y
                                                full-width
                                                :nudge-bottom="-22"
                                                min-width="290px"
                                                :return-value.sync="endTestDate"
                                                >
                                                <v-text-field
                                                    slot="activator"
                                                    label="结束日期"
                                                    v-model="endTestDate"
                                                    append-icon="event"
                                                    readonly
                                                ></v-text-field>
                                                <v-date-picker v-model="endTestDate" locale="zh-cn" scrollable>
                                                    <v-spacer></v-spacer>
                                                    <v-btn flat color="primary" @click="endTestDateMenu = false">取消</v-btn>
                                                    <v-btn flat color="primary" @click="$refs.endTestDateMenu.save(endTestDate)">确定</v-btn>
                                                </v-date-picker>
                                                </v-menu>
                                            </v-flex>
                                        </v-card-text>            
                                    </v-card>
                                </v-flex>
                            </v-layout>

                            <v-layout row wrap style="margin: 0;" v-show="showMore">
                                <v-flex lg9 sm9 xs12>
                                    <v-select
                                        label="选择标签"
                                        :items="labelItems"
                                        chips
                                        tags
                                        v-model="labelItem"
                                        solo
                                        item-text="flagName"
                                        item-value="idx"      
                                        return-object                     
                                        >
                                        <template slot="selection" slot-scope="data">
                                            <v-chip
                                            close
                                            @input="data.parent.selectItem(data.item.idx)"
                                            class="chip--select-multi"
                                            :selected="data.selected"
                                            :key="data.item.idx"
                                            >
                                            {{ data.item.flagName }}
                                            </v-chip>
                                        </template>                    
                                    </v-select>
                                </v-flex>
                                <v-flex lg3 sm3 xs12>
                                    <v-btn color="info" style="width:100%" @click="getCompanysList()">搜索</v-btn>
                                </v-flex>
                            </v-layout>

                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <div style="padding: 0 12px;" v-show="companyLists.length !== 0">企业列表</div>
                <v-flex lg12 sm12 xs12>
                    <v-layout row column>
                        <v-flex lg12 sm12 xs12>
                                <v-card  v-for="item in companyLists" :key="item.idx" hover ripple="true">
                                    <v-tooltip top>
                                        <v-layout row wrap style="margin: 10px 0;padding: 10px;" slot="activator" @click="get_enterprise_user(item)">
                                            <v-flex lg1 sm1 xs1>
                                                <v-avatar
                                                    tile
                                                    style="height: 100%; width: 100%;"
                                                    >
                                                    <img :src="item.logo!==''?item.logo!==null?'/IMAGE/'+item.logo:'/static/imgs/noImage.png':'/static/imgs/noImage.png'">
                                                </v-avatar>
                                            </v-flex>
                                            <v-flex lg3 sm3 xs3 style="text-align: left;">
                                                <div>{{item.enterpriseName}}</div>
                                                <div>
                                                    <span>{{item.province}}/</span> <span>{{item.city}}/</span> <span>{{item.area}}</span>
                                                </div>
                                            </v-flex>
                                            <v-flex lg3 sm3 xs3 style="text-align: left;">
                                                <div>行业</div>
                                                <div>{{item.industryL1}}</div>
                                            </v-flex>
                                            <v-flex lg3 sm3 xs3 text-align: left;>
                                                <v-chip class="teal" style="color:white;" v-for="e in item.flag" :key="e.idx">
                                                    {{e.flagName}}
                                                </v-chip>
                                            </v-flex>
                                            <v-flex lg2 sm2 xs2 style="text-align: left;">
                                                <div>注册时间</div>
                                                <div>{{item.ent_register_time}}</div>
                                            </v-flex>
                                            <!-- <v-flex lg1 sm1 xs1>
                                                <div>
                                                    <i class="material-icons" @click="get_enterprise_user()" title="查看" style="cursor: pointer;">view_list</i>
                                                </div>
                                            </v-flex> -->
                                        </v-layout>
                                        <v-layout row column style="font-size:20px;">
                                            <div>
                                                <span>{{item.enterpriseName}}</span>
                                            </div>
                                            <div>
                                                <span>统一社会信用代码/组织机构代码：</span><span>{{item.enterpriseCode}}</span>
                                            </div>
                                            <div>
                                                <span>企业规模：</span><span>{{item.scale}}</span>
                                            </div>
                                            <div>
                                                <span>年销售额：</span><span>{{item.income}}</span>
                                            </div>
                                            <div>
                                                <span>最近测评时间：</span><span>{{item.recently_testTime}}</span>
                                            </div>
                                        </v-layout>
                                    </v-tooltip>
                                </v-card>                        
                        </v-flex>
                    </v-layout>
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
   
    </div>
</template>

<style lang="stylus" scoped>
</style>

<script>
import MiniStatistic from "@/components/widgets/statistic/MiniStatistic";
import mapdata from "./mapdata.js";

export default {
  components: {
    MiniStatistic
  },
  data: () => ({
    showMore: false,
    ent_count: "",
    industry_count: "",
    test_ent: "",
    searchKey: "",
    selectProvince: "",
    selectCity: "",
    selectCounty: "",
    provinceArray: "",
    shiArray: "",
    quArray: "",
    city: "",
    block: "",
    SelectIndustry1: "",
    SelectIndustry2: "",
    SelectIndustry3: "",
    SelectIndustry4: "",
    SelectIndustry5: "",
    Industry1: [],
    companySize: "",
    companySizeItems: ["100人以内", "500人以内", "1000人以内", "大于1000人"],
    companyInputItems: ["1000万以内", "5000万以内", "1亿以内", "大于1亿"],
    companyInput: "",
    labelItems: [
      {
        key: "标签1",
        value: "标签1"
      },
      {
        key: "标签2",
        value: "标签2"
      },
      {
        key: "标签3",
        value: "标签3"
      },
      {
        key: "标签4",
        value: "标签4"
      },
      {
        key: "标签5",
        value: "标签5"
      },
      {
        key: "标签6",
        value: "标签6"
      },
      {
        key: "标签7",
        value: "标签7"
      },
      {
        key: "标签8",
        value: "标签8"
      }
    ],
    labelItem: "",
    RegStartDateMenu: false,
    RegStartDate: "",
    RegEndDateMenu: false,
    RegEndDate: "",
    startTestDateMenu: false,
    startTestDate: "",
    endTestDateMenu: false,
    endTestDate: "",
    companyLists: "",
    showAlert: false,
    AlertMessage: ""
  }),
  computed: {
    session_id() {
      return this.$store.state.logIn.session_id;
    },
    user() {
      return this.$store.state.logIn.user;
    }
  },
  mounted: function() {
    this.getStatisticEnterprise();
    this.getCompanysList();
  },
  created: function() {
    this.getCityData();
    this.getflagInfo();
  },
  methods: {
    switchPanel() {
      this.showMore = !this.showMore;
    },
    getStatisticEnterprise() {
      this.loading = true;
      let $this = this;
      let apikey = "",
        request = {
          user: this.user,
          session_id: this.session_id
        },
        type = "POST",
        url = "/IBUS/DAIG_SER/statisticEnterprise";
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
          $this.ent_count = res.data.return.ent_count;
          $this.industry_count = res.data.return.industry_count;
          $this.test_ent = res.data.return.test_ent;
          $this.get_industry_type();
        })
        .catch(error => {
          console.log(error);
        });
    },
    getCityData() {
      var data = mapdata;
      this.provinceArray = [];
      this.city = [];
      this.block = [];
      this.shiArray = [];
      this.quArray = [];
      // 省市区数据分类
      for (var item in data) {
        if (item.match(/0000$/)) {
          //省
          this.provinceArray.push({
            id: item,
            value: data[item],
            children: []
          });
        } else if (item.match(/00$/)) {
          //市
          this.city.push({ id: item, value: data[item], children: [] });
        } else {
          //区
          this.block.push({ id: item, value: data[item] });
        }
      }

      // 分类市级
      for (var index in this.provinceArray) {
        for (var index1 in this.city) {
          if (
            this.provinceArray[index].id.slice(0, 2) ===
            this.city[index1].id.slice(0, 2)
          ) {
            this.provinceArray[index].children.push(this.city[index1]);
          }
        }
      }

      // 分类区级
      for (var item1 in this.city) {
        for (var item2 in this.block) {
          if (
            this.block[item2].id.slice(0, 4) === this.city[item1].id.slice(0, 4)
          ) {
            this.city[item1].children.push(this.block[item2]);
          }
        }
      }
      //   console.log(this.provinceArray);
      //   console.log(this.city);
      //   console.log(this.block);
      //   console.log(this.shiArray);
      //   console.log(this.quArray);
      if (this.selectProvince) {
        for (var i in this.provinceArray) {
          if (this.provinceArray[i].id === this.selectProvince) {
            this.shiArray = this.provinceArray[i].children;
            // console.log(this.shiArray);
          }
        }
        for (var j in this.city) {
          if (this.city[j].id === this.selectCity) {
            this.quArray = this.city[j].children;
            // console.log(this.quArray);
          }
        }
      }
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
          $this.labelItems = res.data.return.info;
          //   console.log($this.labelItems);
        })
        .catch(error => {
          console.log(error);
        });
    },
    getCompanysList() {
      this.loading = true;
      let $this = this;
      let arry = [];
      for (let i in this.labelItem) {
        arry.push($this.labelItem[i].idx);
      }
      let apikey = "",
        request = {
          session_id: this.session_id,
          key: this.searchKey,
          province: this.selectProvince.value ? this.selectProvince.value : "",
          city: this.selectCity.value ? this.selectCity.value : "",
          area: this.selectCounty.value ? this.selectCounty.value : "",
          industryL1: this.SelectIndustry1,
          industryL2: this.SelectIndustry2,
          industryL3: this.SelectIndustry3,
          industryL4: this.SelectIndustry4,
          industryL5: this.SelectIndustry5,
          income: this.companyInput,
          scale: this.companySize,
          test_st_time: this.startTestDate,
          test_en_time: this.endTestDate,
          res_st_time: this.RegStartDate,
          res_en_time: this.RegEndDate,
          flag: arry
        },
        type = "POST",
        url = "/IBUS/DAIG_SER/get_all_enterprise";
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
          $this.companyLists = res.data.return;
          if ($this.companyLists == "") {
            $this.showAlert = true;
            $this.AlertMessage = "没有满足条件的企业";
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    get_enterprise_user(e) {
      console.log(e);
      this.$store.commit("company/getCompanyDetails", e);
      this.$router.push("/companyDetails");
    },
    get_industry_type() {
      let $this = this,
        apikey = "",
        request = {
          value: ""
        };
      $this.$http
        .post("/IBUS/DAIG_SYS/get_industry_type", {
          apikey,
          request
        })
        .then(res => {
          let IndustryData = res.data.return;
          IndustryData.forEach(element => {
            $this.Industry1.push(element.lable);
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 选省
    choseProvince(e) {
      for (var index2 in this.provinceArray) {
        if (e.value === this.provinceArray[index2].value) {
          this.shiArray = this.provinceArray[index2].children;
          this.selectCity = this.provinceArray[index2].children[0];
          debugger;
          this.selectCounty = this.provinceArray[
            index2
          ].children[0].children[0];
          this.quArray = this.provinceArray[index2].children[0].children;
          //   this.selectCounty = this.provinceArray[
          //     index2
          //   ].children[0].children[0].value;
          this.E = this.quArray[0].value;
        }
      }
    },
    // 选市
    choseCity(e) {
      for (var index3 in this.city) {
        if (e.value === this.city[index3].value) {
          this.quArray = this.city[index3].children;
          this.qu = this.city[index3].children[0].value;
          this.selectCounty = this.city[index3].children[0];
          this.E = this.quArray[0].value;
          // console.log(this.E)
        }
      }
    },
    // 选区
    choseBlock(e) {
      this.E = e.value;
      this.selectCounty = e;
      // console.log(this.E)
    }
  }
};
</script>



