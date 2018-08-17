<template>
  <div>
    <v-layout>
        <v-flex  lg12 md12 sm12 xs12>
            <v-card>
                <v-container fill-height fluid>
                    <v-layout>
                        <!-- <v-flex  lg1 md1 sm1 xs1 ></v-flex> -->
                        <v-flex lg12 md12 sm12 xs12 align-end flexbox>
                            <v-layout>
                                <v-flex  lg3 md2 sm2 xs2 style="padding: 0 4%;">
                                    <img :src="'/IMAGE/'+companyDetails.logo" style="width: 100%;height: 100%;" >
                                </v-flex>
                                <v-flex  lg9 md10 sm10 xs10 >
                                    <div class="headline">
                                        <span>{{companyDetails.enterpriseName}}</span>
                                    </div>
                                    <div>
                                        <span>管理员：</span><span>{{companyDetails.user}}</span>
                                    </div>
                                    <div>
                                        <span>创建时间：</span><span>{{companyDetails.ent_register_time}}</span>
                                    </div>
                                    <div>
                                        <span>最近测评时间：</span><span>{{companyDetails.testTime}}</span>
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
        <v-flex  lg10 md10 >
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
                            
                            
                           
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex  lg10 md10 sm10 xs10 v-if="showPanel == 2">
                    <div>
                        测评中心
                    </div>
                </v-flex>
                <v-flex  lg10 md10 sm10 xs10 v-if="showPanel == 3">
                    <div>
                        企业用户
                    </div>
                </v-flex>
            </v-layout>
        </v-flex>
        
        
        <v-flex  lg1 md1 hidden-md-and-down></v-flex>
    </v-layout>
  </div>
</template>

<style scoped>
.isActiveItem {
  background-color: rgba(173, 173, 173, 0.4);
  border-right: 1px solid #9e9e9e;
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
    //   remark: null,
    //   shortName: "EHZ",
    //   user: "HELLO KITTY",
    //   scale: "3.000人以上",
    //   income: "30.000万元以上",
    //   user_id: 18
    // },
    selectLabels: [
      { idx: 3, flagName: "汽车零部件" },
      { idx: 4, flagName: "制造业" }
    ],
    editing: null,
    items: [],
    model: [],
    search: null,
    showPanel:1
  }),
  watch: {
    model(val, prev) {
      if (val.length === prev.length) return;

      this.model = val.map(v => {
        if (typeof v === "string") {
          v = {
            text: v,
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
    }
  },
  mounted(){
      let $this = this;
      this.companyDetails.flag.forEach(element => {
          this.model.push({text:element.flagName});
          this.items.push({text:element.flagName});
      });
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
    switchPanel(e){
        this.showPanel =e;
    }
  }
};
</script>

