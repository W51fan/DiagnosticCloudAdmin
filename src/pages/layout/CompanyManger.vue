<template>
    <div id="page-expansion-panel">
        <v-container grid-list-xl fluid text-xs-center>
            <v-layout row wrap>
                <v-flex lg3 sm6 xs12>
                    <mini-statistic
                        icon="supervisor_account"
                        title="注册企业"
                        :sub-title="ent_count"
                        color="indigo"      
                    >
                    </mini-statistic>  
                </v-flex>
                <v-flex lg3 sm6 xs12>
                    <mini-statistic
                        icon="fa-tasks"
                        title="参与测评企业"
                        :sub-title="industry_count"
                        color="cyan"      
                    >
                    </mini-statistic>           
                </v-flex>          
                <v-flex lg3 sm6 xs12>
                    <mini-statistic
                        icon="fa-industry"
                        title="涉及行业"
                        :sub-title="test_ent"
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
                                                    ref="statDate"
                                                    lazy
                                                    :close-on-content-click="false"
                                                    v-model="startDateMenu"
                                                    transition="scale-transition"
                                                    offset-y
                                                    full-width
                                                    :nudge-bottom="-22"
                                                    max-width="290px"
                                                    :return-value.sync="startDate"
                                                    >
                                                    <v-text-field
                                                        slot="activator"
                                                        label="开始日期"
                                                        v-model="startDate"
                                                        append-icon="event"
                                                        readonly
                                                    ></v-text-field>
                                                    <v-date-picker v-model="startDate" locale="zh-cn"  scrollable>
                                                        <v-spacer></v-spacer>
                                                        <v-btn flat color="primary" @click="startDateMenu = false">取消</v-btn>
                                                        <v-btn flat color="primary" @click="$refs.statDate.save(startDate)">确定</v-btn>
                                                    </v-date-picker>
                                                </v-menu>
                                            </v-flex>
                                            <v-flex sm6 lg6>
                                                <v-menu
                                                ref="endDate"
                                                lazy
                                                class="pr-2"
                                                :close-on-content-click="false"
                                                v-model="endDateMenu"
                                                transition="scale-transition"
                                                offset-y
                                                full-width
                                                :nudge-bottom="-22"
                                                min-width="290px"
                                                :return-value.sync="endDate"
                                                >
                                                <v-text-field
                                                    slot="activator"
                                                    label="结束日期"
                                                    v-model="endDate"
                                                    append-icon="event"
                                                    readonly
                                                ></v-text-field>
                                                <v-date-picker v-model="endDate" locale="zh-cn" scrollable>
                                                    <v-spacer></v-spacer>
                                                    <v-btn flat color="primary" @click="endDateMenu = false">取消</v-btn>
                                                    <v-btn flat color="primary" @click="$refs.endDate.save(endDate)">确定</v-btn>
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
                                                ref="statDate"
                                                lazy
                                                :close-on-content-click="false"
                                                v-model="startTestDateMenu"
                                                transition="scale-transition"
                                                offset-y
                                                full-width
                                                :nudge-bottom="-22"
                                                max-width="290px"
                                                :return-value.sync="startTestDate"
                                                >
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
                                                    <v-btn flat color="primary" @click="$refs.statTestDate.save(startTestDate)">确定</v-btn>
                                                </v-date-picker>
                                                </v-menu>
                                            </v-flex>
                                            <v-flex sm6 lg6>
                                                <v-menu
                                                ref="endDate"
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
                                                    <v-btn flat color="primary" @click="$refs.endTestDate.save(endTestDate)">确定</v-btn>
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
                                    <v-card @click="get_enterprise_user()" v-for="item in companyLists" :key="item.idx" hover>
                                        <v-layout row wrap style="margin: 10px 0;padding: 10px;">
                                            <v-flex lg1 sm1 xs1>
                                                <v-avatar
                                                    tile
                                                    style="height: 100%; width: 100%;"
                                                    >
                                                    <img :src="'/IMAGE/'+item.logo">
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
                                    </v-card>
                                </v-flex>
                            </v-layout>
                </v-flex>
            </v-layout>          
        </v-container>   
    </div>
</template>

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
    Industry1: ["汽车", "电子元器件", "制造业"],
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
    startDateMenu: "",
    startDate: "",
    endDateMenu: "",
    endDate: "",
    startTestDateMenu: "",
    startTestDate: "",
    endTestDateMenu: "",
    endTestDate: "",
    companyLists:"",
    // companyLists: [
    //   {
    //     idx: 1,
    //     enterpriseName: "222",
    //     shortName: "22",
    //     logo: "./image/961bf7328af511e889e7fa163e9b6a44.png",
    //     enterpriseCode: "2",
    //     province: "120000",
    //     city: "天津市",
    //     area: "和平区",
    //     industryL1: "united-states1",
    //     industryL2: "",
    //     industryL3: "",
    //     industryL4: "",
    //     industryL5: "",
    //     flag: [{ idx: 3, flagName: "汽车零部件" }],
    //     ent_register_time: "2018-07-09 10:21:45",
    //     user_id: 1,
    //     user: "扁鹊",
    //     email: "zuxiaojun@ehz.cn1",
    //     remark: "",
    //     recently_testTime: ""
    //   },
    //   {
    //     idx: 23,
    //     enterpriseName: "123456",
    //     shortName: "123",
    //     logo: "./image/e93a221e8b3511e889e7fa163e9b6a44.jpeg",
    //     enterpriseCode: "",
    //     province: "460000",
    //     city: "海口市",
    //     area: "秀英区",
    //     industryL1: "united-states6",
    //     industryL2: "",
    //     industryL3: "",
    //     industryL4: "",
    //     industryL5: "",
    //     flag: [
    //       { idx: 3, flagName: "汽车零部件" },
    //       { idx: 4, flagName: "汽车" },
    //       { idx: 5, flagName: "制造业" },
    //       { idx: 6, flagName: "新能源" },
    //       { idx: 7, flagName: "机械加工" },
    //       { idx: 8, flagName: "机械制造" },
    //       { idx: 13, flagName: "电池" },
    //       { idx: 43, flagName: "微电子" }
    //     ],
    //     ent_register_time: "2018-07-09 10:21:45",
    //     user_id: 14,
    //     user: "吹咩",
    //     email: "abc297872@163.com1",
    //     remark: null,
    //     recently_testTime: ""
    //   },
    //   {
    //     idx: 17,
    //     enterpriseName: "EHZ",
    //     shortName: "EHZ",
    //     logo: "./image/89caf08896e311e88beb000c291f0997.png",
    //     enterpriseCode: "",
    //     province: "440000",
    //     city: "440300",
    //     area: "440304",
    //     industryL1: "化学制品",
    //     industryL2: "",
    //     industryL3: "",
    //     industryL4: "",
    //     industryL5: "",
    //     flag: "",
    //     ent_register_time: "2018-07-09 10:21:45",
    //     user_id: 18,
    //     user: "HELLO KITTY",
    //     email: "billonese@126.com",
    //     remark: null,
    //     recently_testTime: "2018-08-09 20:22:40"
    //   },
    //   {
    //     idx: 20,
    //     enterpriseName: "阿达撒大声地无群多",
    //     shortName: "大大所多",
    //     logo: "./image/301aa59e8b1f11e889e7fa163e9b6a44.jpeg",
    //     enterpriseCode: "asdasdas",
    //     province: "130000",
    //     city: "130300",
    //     area: "130304",
    //     industryL1: "japan1",
    //     industryL2: "",
    //     industryL3: "",
    //     industryL4: "",
    //     industryL5: "",
    //     flag: [{ idx: 4, flagName: "通用制造" }],
    //     ent_register_time: "2018-07-09 10:21:45",
    //     user_id: 26,
    //     user: null,
    //     email: "alexzxj1@aliyun.com",
    //     remark: null,
    //     recently_testTime: "2018-07-19 14:02:04"
    //   },
    //   {
    //     idx: 28,
    //     enterpriseName: "伍氏狗皮膏药店",
    //     shortName: "伍氏膏药",
    //     logo: "./image/0da4fcda907911e889e7fa163e9b6a44.jpeg",
    //     enterpriseCode: "weqweqe",
    //     province: "140000",
    //     city: "140200",
    //     area: "140211",
    //     industryL1: "brazil1",
    //     industryL2: "",
    //     industryL3: "",
    //     industryL4: "",
    //     industryL5: "",
    //     flag: "",
    //     ent_register_time: "2018-07-09 10:21:45",
    //     user_id: 27,
    //     user: "伍一帆（假明星）",
    //     email: "alexzxj@aliyun.com1",
    //     remark: null,
    //     recently_testTime: "2018-07-26 11:03:53"
    //   },
    //   {
    //     idx: 29,
    //     enterpriseName: "祖小军祖传烧烤店",
    //     shortName: "火爆撸串店",
    //     logo: "./image/9766c760900a11e889e7fa163e9b6a44.png",
    //     enterpriseCode: "",
    //     province: "510000",
    //     city: "成都市",
    //     area: "锦江区",
    //     industryL1: "容器与包装",
    //     industryL2: "",
    //     industryL3: "",
    //     industryL4: "",
    //     industryL5: "",
    //     flag: "",
    //     ent_register_time: "2018-07-09 10:21:45",
    //     user_id: 33,
    //     user: "小军",
    //     email: "abc2978723@163.com1",
    //     remark: null,
    //     recently_testTime: "2018-07-25 15:30:18"
    //   },
    //   {
    //     idx: 35,
    //     enterpriseName: "teteter",
    //     shortName: "rrter",
    //     logo: "./image/076d75e090dd11e889e7fa163e9b6a44.jpeg",
    //     enterpriseCode: "",
    //     province: "120000",
    //     city: "天津市",
    //     area: "和平区",
    //     industryL1: "金属与采矿",
    //     industryL2: "",
    //     industryL3: "",
    //     industryL4: "",
    //     industryL5: "",
    //     flag: "",
    //     ent_register_time: "2018-07-09 10:21:45",
    //     user_id: 44,
    //     user: null,
    //     email: "wuyifan@ehz.cn3",
    //     remark: null,
    //     recently_testTime: ""
    //   },
    //   {
    //     idx: 82,
    //     enterpriseName: "灌灌灌灌灌",
    //     shortName: "都是",
    //     logo: "./image/310d6cac9a0611e8aee7000c291f0997.jpeg",
    //     enterpriseCode: "123456789",
    //     province: "130000",
    //     city: "石家庄市",
    //     area: "长安区",
    //     industryL1: "金属与采矿",
    //     industryL2: "铜",
    //     industryL3: "",
    //     industryL4: "",
    //     industryL5: "",
    //     flag: "",
    //     ent_register_time: "2018-08-06 22:53:34",
    //     user_id: 46,
    //     user: null,
    //     email: "alexzxj@aliyun.com",
    //     remark: "",
    //     recently_testTime: "2018-08-09 19:28:35"
    //   },
    //   {
    //     idx: 84,
    //     enterpriseName: "华制",
    //     shortName: "沪指",
    //     logo: "./image/7113d96e9c7a11e8aee7000c291f0997.png",
    //     enterpriseCode: "",
    //     province: "150000",
    //     city: "呼和浩特市",
    //     area: "新城区",
    //     industryL1: "金属与采矿",
    //     industryL2: "铜",
    //     industryL3: "",
    //     industryL4: "",
    //     industryL5: "",
    //     flag: "",
    //     ent_register_time: "2018-08-09 20:23:29",
    //     user_id: 130,
    //     user: "小军",
    //     email: "wuyifan@ehz.cn",
    //     remark: "",
    //     recently_testTime: "2018-08-10 01:46:32"
    //   },
    //   {
    //     idx: 85,
    //     enterpriseName: "asdfasd",
    //     shortName: "asdf",
    //     logo: "",
    //     enterpriseCode: "",
    //     province: "150000",
    //     city: "呼和浩特市",
    //     area: "新城区",
    //     industryL1: "机械制造",
    //     industryL2: "建筑机械与重型卡车",
    //     industryL3: "",
    //     industryL4: "",
    //     industryL5: "",
    //     flag: "",
    //     ent_register_time: "2018-08-09 20:41:07",
    //     user_id: 131,
    //     user: null,
    //     email: "jiran@ehz.cn",
    //     remark: "",
    //     recently_testTime: "2018-08-09 20:41:14"
    //   }
    // ]
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
      console.log(this.provinceArray);
      console.log(this.city);
      console.log(this.block);
      console.log(this.shiArray);
      console.log(this.quArray);
      if (this.selectProvince) {
        for (var i in this.provinceArray) {
          if (this.provinceArray[i].id === this.selectProvince) {
            this.shiArray = this.provinceArray[i].children;
            console.log(this.shiArray);
          }
        }
        for (var j in this.city) {
          if (this.city[j].id === this.selectCity) {
            this.quArray = this.city[j].children;
            console.log(this.quArray);
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
          console.log($this.labelItems);
        })
        .catch(error => {
          console.log(error);
        });
    },
    getCompanysList() {
      this.loading = true;
      let $this = this;
      let arry =[];
      for(let i in this.labelItem){
          arry.push($this.labelItem[i].idx);
      }
      let apikey = "",
        request = {
          session_id: this.session_id,
          key: this.searchKey,
          province: this.selectProvince,
          city: this.selectCity,
          area: this.selectCounty,
          industryL1: this.SelectIndustry1,
          industryL2: this.SelectIndustry2,
          industryL3: this.SelectIndustry3,
          industryL4: this.SelectIndustry4,
          industryL5: this.SelectIndustry5,
          income: this.companyInput,
          scale: this.companySize,
          test_time: "",
          res_st_time: "",
          res_en_time: "",
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
          console.log($this.companyLists);
        })
        .catch(error => {
          console.log(error);
        });
    },
    get_enterprise_user() {}
  }
};
</script>

<style lang="stylus" scoped>
.theme--light .v-text-field--solo-inverted.v-text-field--solo, .application .theme--light.v-text-field--solo-inverted.v-text-field--solo {
    background: #e8e8e8;
}
</style>


