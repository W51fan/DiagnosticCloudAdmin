<template>
    <div id="page-expansion-panel">
        <v-container grid-list-xl fluid>
            <v-layout row wrap>
                <v-flex lg3 sm6 xs12>
                    <mini-statistic
                        icon="supervisor_account"
                        title="注册企业"
                        sub-title="300"
                        color="indigo"      
                    >
                    </mini-statistic>  
                </v-flex>
                <v-flex lg3 sm6 xs12>
                    <mini-statistic
                        icon="fa-tasks"
                        title="参与测评企业"
                        sub-title="128"
                        color="cyan"      
                    >
                    </mini-statistic>           
                </v-flex>          
                <v-flex lg3 sm6 xs12>
                    <mini-statistic
                        icon="fa-industry"
                        title="涉及行业"
                        sub-title="24"
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
                        <v-card-text style="display: inline-flex;padding: 12px 12px 0 12px;">
                            <v-flex lg10 sm10 xs10>
                                <v-text-field
                                    flat
                                    solo-inverted
                                    prepend-icon="search"
                                    label="企业全称 / 企业简称 / 统一社会信用代码 / 组织机构代码"
                                    class="hidden-sm-and-down"
                                    >
                                </v-text-field>
                            </v-flex>
                            <v-flex lg2 sm2 xs2 style="text-align: center;line-height: 45px;padding: 12px 0;">
                                <div v-if="!showMore" @click="switchPanel()">
                                    更多筛选条件
                                    <v-icon color="blue">keyboard_arrow_down</v-icon>
                                </div>
                                <div v-if="showMore"  @click="switchPanel()">
                                    收起更多筛选条件
                                    <v-icon color="blue">keyboard_arrow_up</v-icon>
                                </div>
                            </v-flex>
                        </v-card-text>
                        <v-card-text style="display: inline-flex;padding: 0 12px;">
                            <v-flex v-if="showMore" lg12 sm12 xs12>
                                <v-card>
                                    <v-card-title class="pb-0">
                                        <span></span>
                                    </v-card-title>
                                    <v-card-text style="display: inline-flex;padding: 0 12px;">
                                        <v-flex lg12 sm12 xs12 style="display: inline-flex;padding: 0 12px;">
                                            <v-flex lg6 sm6 xs6>
                                                <v-card>
                                                    <v-card-title class="pb-0">
                                                        <span>区域</span>
                                                    </v-card-title>
                                                    <v-card-text style="display: inline-flex;padding:0;">
                                                        <v-flex lg4 sm4 xs4>
                                                            <v-select
                                                                :items="countries"
                                                                v-model="e1"
                                                                label="省"
                                                                item-text="country"
                                                                item-value="abbr"
                                                                single-line>
                                                            </v-select>
                                                        </v-flex>
                                                        <v-flex lg4 sm4 xs4>
                                                            <v-select
                                                            :items="countries"
                                                            v-model="e1"
                                                            label="市"
                                                            item-text="country"
                                                            item-value="abbr"
                                                            single-line>
                                                            </v-select>
                                                        </v-flex>
                                                        <v-flex lg4 sm4 xs4>
                                                            <v-select
                                                            :items="countries"
                                                            v-model="e1"
                                                            label="区"
                                                            item-text="country"
                                                            item-value="abbr"
                                                            single-line>
                                                            </v-select>
                                                        </v-flex>
                                                    </v-card-text>            
                                                </v-card>
                                            </v-flex>
                                            <v-flex lg6 sm6 xs6>
                                                <v-card>
                                                    <v-card-title class="pb-0">
                                                        <span>行业</span>
                                                    </v-card-title>
                                                    <v-card-text style="display: inline-flex;padding:0;">
                                                        <v-flex lg12 sm12 xs12>
                                                            <v-select
                                                            :items="countries"
                                                            v-model="e1"
                                                            label="全部"
                                                            item-text="country"
                                                            item-value="abbr"
                                                            single-line>
                                                            </v-select>
                                                        </v-flex>
                                                    </v-card-text>            
                                                </v-card>
                                            </v-flex>
                                        </v-flex>      
                                    </v-card-text>
                                    <v-card-text style="display: inline-flex;padding: 0 25px;">
                                        <v-flex lg12 sm12 xs12 style="display: inline-flex;padding: 0 12px;">
                                            <v-flex lg3 sm3 xs3>
                                                <v-card>
                                                    <v-card-title class="pb-0">
                                                        <span>企业规模</span>
                                                    </v-card-title>
                                                    <v-card-text style="display: inline-flex;padding:0;">
                                                        <v-flex lg12 sm12 xs12>
                                                            <v-select
                                                                :items="countries"
                                                                v-model="e1"
                                                                label="不限"
                                                                item-text="country"
                                                                item-value="abbr"
                                                                single-line>
                                                            </v-select>
                                                        </v-flex>
                                                    </v-card-text>            
                                                </v-card>
                                            </v-flex>
                                            <v-flex lg3 sm3 xs3>
                                                <v-card>
                                                    <v-card-title class="pb-0">
                                                        <span>年销售额</span>
                                                    </v-card-title>
                                                    <v-card-text style="display: inline-flex;padding:0;">
                                                        <v-flex lg12 sm12 xs12>
                                                            <v-select
                                                            :items="countries"
                                                            v-model="e1"
                                                            label="30.0000万以上"
                                                            item-text="country"
                                                            item-value="abbr"
                                                            single-line>
                                                            </v-select>
                                                        </v-flex>
                                                    </v-card-text>            
                                                </v-card>
                                            </v-flex>
                                            <v-flex lg3 sm3 xs3>
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
                                                            <v-date-picker v-model="startDate" no-title scrollable>
                                                                <v-spacer></v-spacer>
                                                                <v-btn flat color="primary" @click="startDateMenu = false">Cancel</v-btn>
                                                                <v-btn flat color="primary" @click="$refs.statDate.save(startDate)">OK</v-btn>
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
                                                            <v-date-picker v-model="endDate" no-title scrollable>
                                                                <v-spacer></v-spacer>
                                                                <v-btn flat color="primary" @click="endDateMenu = false">Cancel</v-btn>
                                                                <v-btn flat color="primary" @click="$refs.endDate.save(endDate)">OK</v-btn>
                                                            </v-date-picker>
                                                            </v-menu>
                                                        </v-flex>
                                                    </v-card-text>            
                                                </v-card>
                                            </v-flex>
                                            <v-flex lg3 sm3 xs3>
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
                                                            <v-date-picker v-model="startDate" no-title scrollable>
                                                                <v-spacer></v-spacer>
                                                                <v-btn flat color="primary" @click="startDateMenu = false">Cancel</v-btn>
                                                                <v-btn flat color="primary" @click="$refs.statDate.save(startDate)">OK</v-btn>
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
                                                            <v-date-picker v-model="endDate" no-title scrollable>
                                                                <v-spacer></v-spacer>
                                                                <v-btn flat color="primary" @click="endDateMenu = false">Cancel</v-btn>
                                                                <v-btn flat color="primary" @click="$refs.endDate.save(endDate)">OK</v-btn>
                                                            </v-date-picker>
                                                            </v-menu>
                                                        </v-flex>
                                                    </v-card-text>            
                                                </v-card>
                                            </v-flex>
                                        </v-flex>
                                    </v-card-text>
                                    <v-card-text style="padding: 0;">
                                        <v-flex lg12 sm12 xs12 style="padding: 0 50px;">
                                            <v-select
                                            label="选择标签"
                                            :items="countries"
                                            chips
                                            tags
                                            v-model="multi4"
                                            multi-line
                                            item-text="country"
                                            item-value="abbr"      
                                            return-object                     
                                            >
                                            <template slot="selection" slot-scope="data">
                                                <v-chip
                                                close
                                                @input="data.parent.selectItem(data.item.abbr)"
                                                class="chip--select-multi"
                                                :selected="data.selected"
                                                :key="JSON.stringify(data.item.abbr)"
                                                >
                                                <v-avatar class="accent">{{ data.item.abbr.slice(0, 1).toUpperCase() }}</v-avatar>
                                                {{ data.item.country }}
                                                </v-chip>
                                            </template>                    
                                            </v-select>
                                        </v-flex>
                                    </v-card-text>    
                                </v-card>
                            </v-flex>
                        </v-card-text>            
                    </v-card>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex lg12 sm12 xs12>
                    <v-card>
                        <v-card-title class="pb-0">
                            <span>企业列表</span>
                        </v-card-title>
                        <v-card-text style="padding: 0 12px;">             
                            <v-flex lg12 sm12 xs12>
                                <v-data-table
                                    :headers="basic.headers"
                                    :items="basic.items"
                                    hide-actions
                                    class="elevation-1">
                                    <template slot="items" slot-scope="props">
                                        <td>{{ props.item.name }}</td>
                                        <td class="text-xs-right">{{ props.item.calories }}</td>
                                        <td class="text-xs-right">{{ props.item.fat }}</td>
                                        <td class="text-xs-right">{{ props.item.carbs }}</td>
                                        <td class="text-xs-right">{{ props.item.protein }}</td>
                                        <td class="text-xs-right">{{ props.item.iron }}</td>
                                    </template>
                                </v-data-table>
                            </v-flex>      
                        </v-card-text>            
                    </v-card>
                </v-flex>
            </v-layout>
             
        </v-container>
        
    </div>
</template>

<script>
import MiniStatistic from "@/components/widgets/statistic/MiniStatistic";

export default {
  components: {
    MiniStatistic
  },
  data: () => ({
    showMore: false,
    basic: {
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' }
        ],
        items: [
          {
            value: false,
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%'
          },
          {
            value: false,
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%'
          },
          {
            value: false,
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%'
          },
          {
            value: false,
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%'
          },
          {
            value: false,
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%'
          },
          {
            value: false,
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%'
          },
          {
            value: false,
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%'
          },
          {
            value: false,
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%'
          },
          {
            value: false,
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%'
          },
          {
            value: false,
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%'
          }
        ]
      }
  }),
  methods: {
    switchPanel() {
      this.showMore = !this.showMore;
    }
  }
};
</script>

<style lang="stylus" scoped>
.theme--light .v-text-field--solo-inverted.v-text-field--solo, .application .theme--light.v-text-field--solo-inverted.v-text-field--solo {
    background: #e8e8e8;
}
</style>


