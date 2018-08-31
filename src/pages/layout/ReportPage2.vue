<template>
   <div>
        <h2 style="text-align: center;margin: 30px 0;">
            {{reportData.reportName}}
        </h2>
        <v-layout row wrap>
            <v-flex lg1 md1 sm1 xs1></v-flex>
            <v-flex lg10 md10 sm10 xs10>
                <div>
                    <v-btn color="info">企业基本信息</v-btn>
                    <v-flex lg12 md12 sm12 xs12>
                        <v-divider></v-divider>
                    </v-flex>
                    <div>
                        <h3  style="text-align: center;margin: 10px 0;">{{reportData.enterpriseName}}</h3>
                        <v-layout row wrap>
                            <v-flex lg6 md6 sm6 xs6 style="text-align:center;margin:10px 0;">
                                <span>收入规模：</span><span>{{reportData.scale}}</span>
                            </v-flex>
                            <v-flex lg6 md6 sm6 xs6 style="text-align:center;margin:10px 0;">
                                <span>人员规模:</span><span>{{reportData.income}}</span>
                            </v-flex>
                            <v-flex lg6 md6 sm6 xs6 style="text-align:center;margin:10px 0;">
                                <span>企业区域：</span><span>{{reportData.province}}</span><span>/</span><span>{{reportData.city}}</span><span>/</span><span>{{reportData.area}}</span>
                            </v-flex>
                            <v-flex lg6 md6 sm6 xs6 style="text-align:center;margin:10px 0;">
                                <span>行业类别：</span><span>{{reportData.industryL1}}</span>
                            </v-flex>
                        </v-layout>
                    </div>
                </div>
            </v-flex>
             <v-flex lg1 md1 sm1 xs1></v-flex>
        </v-layout>

        <v-layout row wrap>
            <v-flex lg1 md1 sm1 xs1></v-flex>
            <v-flex lg10 md10 sm10 xs10>
                <div>
                    <v-btn color="info">整体结果</v-btn>
                    <v-flex lg12 md12 sm12 xs12 style="margin:30px 0;">
                        <v-divider></v-divider>
                    </v-flex>
                    <div>
                        <h3  style="margin: 10px 0;">企业能力整体成熟度</h3>
                        <v-layout row wrap>
                            <v-flex lg10 md10 sm10 xs10>
                                <div id="chartOption1" style="width:100%;height:400px"></div>
                            </v-flex>
                            <v-flex lg12 md12 sm12 xs12 style="margin:10px 0;">
                                <div style="margin: 30px 0;">
                                    <div>贵公司的整体水平超过了34%的企业，期望水平超过了86%的企业；</div>
                                    <div>在制造维度上，企业超过了50%的企业，期望水平超过了86%的企业；</div>
                                    <div>在智能维度上，企业超过了30%的企业，期望水平超过了86%的企业；</div>
                                </div>
                            </v-flex>
                        </v-layout>
                    </div>
                </div>
            </v-flex>
             <v-flex lg1 md1 sm1 xs1></v-flex>
        </v-layout>
        
        <v-layout row wrap>
            <v-flex lg1 md1 sm1 xs1></v-flex>
            <v-flex lg10 md10 sm10 xs10>
                <div>
                    <v-btn color="info">综合分析</v-btn>
                    <v-flex lg12 md12 sm12 xs12 style="margin:30px 0;">
                        <v-divider></v-divider>
                    </v-flex>
                    <div>
                        <h3  style="margin: 10px 0;">制造维度模块分析</h3>
                        <v-layout row wrap>
                            <v-flex lg10 md10 sm10 xs10>
                                <div id="chartOption2" style="width:100%;height:400px"></div>
                            </v-flex>
                            <!-- <v-flex lg3 md3 sm1 xs1></v-flex> -->
                            <v-flex lg12 md12 sm12 xs12 style="margin:10px 0;">
                                <div style="margin: 30px 0;">
                                    <v-layout row wrap>
                                        <v-flex v-for="item in level" :key="item.lev" lg1 hidden-lg-and-down></v-flex>
                                        <v-flex v-for="item in level" :key="item.lev" style="margin: 10px 0;" lg4 md6 sm12 xs12>
                                            <span style="font-size:16px;font-weight: 600;margin: 10px;">{{item.name}}</span>
                                            <span>该模块的能力成熟度为：</span><span style="color:red;font-size:14px;font-weight: 600;">{{item.scorePercent}}%</span>
                                            <span style="margin-left:20px;">目标：</span><span style="color:green;font-size:14px;font-weight: 600;">{{(item.expectScore / item.total).toFixed(2) * 100}}%</span>
                                        </v-flex>
                                        <v-flex v-for="item in level" :key="item.lev" lg1 hidden-lg-and-down></v-flex>
                                    </v-layout>
                                </div>
                            </v-flex>
                            <!-- <v-flex lg4 md4 sm1 xs1></v-flex> -->
                        </v-layout>
                    </div>
                    <v-flex lg12 md12 sm12 xs12 style="margin:30px 0;">
                        <v-divider></v-divider>
                    </v-flex>
                    <div>
                        <h5>制造维度同行业分析</h5>
                        <v-layout row wrap>
                            <v-flex lg10 md10 sm10 xs10>
                                <div id="chartOption3" style="width:100%;height:400px"></div>
                            </v-flex> 
                        </v-layout>
                        
                        <div style="margin: 10px;">
                            <span>您的企业制造维度综合能力超过了</span>
                            <span style="color:red;font-size:14px;font-weight: 600;">38%</span>
                            <span>的企业</span>
                        </div>
                    </div>
                    <v-flex lg12 md12 sm12 xs12 style="margin:30px 0;">
                        <v-divider></v-divider>
                    </v-flex>
                    <div>
                        <h5>制造维度同地区分析</h5>
                        <v-layout row wrap>
                            <v-flex lg10 md10 sm10 xs10>
                                <div id="chartOption4" style="width:100%;height:400px"></div>
                            </v-flex> 
                        </v-layout>
                        <div style="margin: 10px;">
                            <span>您的企业制造维度综合能力超过了</span>
                            <span style="color:red;font-size:14px;font-weight: 600;">38%</span>
                            <span>的企业</span>
                        </div>
                    </div>
                    <v-flex lg12 md12 sm12 xs12 style="margin:30px 0;">
                        <v-divider></v-divider>
                    </v-flex>
                    <div>
                        <h5>制造维度同地区分析</h5>
                        <v-layout row wrap>
                            <v-flex lg10 md10 sm10 xs10>
                                <div id="chartOption5" style="width:100%;height:400px"></div>
                            </v-flex> 
                        </v-layout>
                        <div style="margin: 10px;">
                            <span>您的企业制造维度综合能力超过了</span>
                            <span style="color:red;font-size:14px;font-weight: 600;">38%</span>
                            <span>的企业</span>
                        </div>
                    </div>
                    <v-flex lg12 md12 sm12 xs12 style="margin:30px 0;">
                        <v-divider></v-divider>
                    </v-flex>
                    <div>
                        <h5>制造维度同地区分析</h5>
                        <v-layout row wrap>
                            <v-flex lg10 md10 sm10 xs10>
                                <div id="chartOption6" style="width:100%;height:400px"></div>
                            </v-flex> 
                        </v-layout>
                        <div style="margin: 10px;">
                            <span>您的企业制造维度综合能力超过了</span>
                            <span style="color:red;font-size:14px;font-weight: 600;">38%</span>
                            <span>的企业</span>
                        </div>
                    </div>
                    <v-flex lg12 md12 sm12 xs12 style="margin:30px 0;">
                        <v-divider></v-divider>
                    </v-flex>
                    <div>
                        <h5>制造维度指标解读及分析</h5>
                        <v-layout row wrap>
                            <v-flex lg10 md10 sm10 xs10>
                                <ve-bar :data="chartData7" width="100%" height="800px" ref="tab1bar"></ve-bar>
                            </v-flex>
                        </v-layout>
                    </div>
                    <v-flex lg12 md12 sm12 xs12 style="margin:30px 0;">
                        <v-divider></v-divider>
                    </v-flex>
                    <v-btn color="info">综合分析</v-btn>
                    <v-flex lg12 md12 sm12 xs12>
                        <v-divider></v-divider>
                    </v-flex>
                    <div>
                        <h3  style="margin: 10px 0;">智能维度模块分析</h3>
                        <v-layout row wrap>
                            <v-flex lg10 md10 sm10 xs10>
                                <div id="chartOption13" style="width:100%;height:400px"></div>
                            </v-flex>
                            <!-- <v-flex lg3 md3 sm1 xs1></v-flex> -->
                            <v-flex lg12 md12 sm12 xs12 style="margin:10px 0;">
                                <div style="margin: 30px 0;">
                                                <v-layout row wrap>
                                                    <v-flex v-for="item in level" :key="item.lev" lg1 hidden-lg-and-down></v-flex>
                                                    <v-flex v-for="item in level" :key="item.lev" style="margin: 10px 0;" lg4 md6 sm12 xs12>
                                                        <span style="font-size:16px;font-weight: 600;margin: 10px;">{{item.name}}</span>
                                                        <span>该模块的能力成熟度为：</span><span style="color:red;font-size:14px;font-weight: 600;">{{item.scorePercent}}%</span>
                                                        <span style="margin-left:20px;">目标：</span><span style="color:green;font-size:14px;font-weight: 600;">{{(item.expectScore / item.total).toFixed(2) * 100}}%</span>
                                                    </v-flex>
                                                    <v-flex v-for="item in level" :key="item.lev" lg1 hidden-lg-and-down></v-flex>
                                                </v-layout>
                                </div>
                            </v-flex>
                            <!-- <v-flex lg4 md4 sm1 xs1></v-flex> -->
                        </v-layout>
                    </div>
                    <v-flex lg12 md12 sm12 xs12 style="margin:30px 0;">
                        <v-divider></v-divider>
                    </v-flex>
                    <div>
                        <h5>智能维度同行业分析</h5>
                        <v-layout row wrap>
                            <v-flex lg10 md10 sm10 xs10>
                                <div id="chartOption8" style="width:100%;height:400px"></div>
                            </v-flex> 
                        </v-layout>
                        
                        <div style="margin: 10px;">
                            <span>您的企业智能维度综合能力超过了</span>
                            <span style="color:red;font-size:14px;font-weight: 600;">38%</span>
                            <span>的企业</span>
                        </div>
                    </div>
                    <v-flex lg12 md12 sm12 xs12 style="margin:30px 0;">
                        <v-divider></v-divider>
                    </v-flex>
                    <div>
                        <h5>智能维度同地区分析</h5>
                        <v-layout row wrap>
                            <v-flex lg10 md10 sm10 xs10>
                                <div id="chartOption9" style="width:100%;height:400px"></div>
                            </v-flex> 
                        </v-layout>
                        
                        <div style="margin: 10px;">
                            <span>您的企业智能维度综合能力超过了</span>
                            <span style="color:red;font-size:14px;font-weight: 600;">38%</span>
                            <span>的企业</span>
                        </div>
                    </div>
                    <v-flex lg12 md12 sm12 xs12 style="margin:30px 0;">
                        <v-divider></v-divider>
                    </v-flex>
                    <div>
                        <h5>智能维度同地区分析</h5>
                        <v-layout row wrap>
                            <v-flex lg10 md10 sm10 xs10>
                                <div id="chartOption10" style="width:100%;height:400px"></div>
                            </v-flex> 
                        </v-layout>
                        
                        <div style="margin: 10px;">
                            <span>您的企业智能维度综合能力超过了</span>
                            <span style="color:red;font-size:14px;font-weight: 600;">38%</span>
                            <span>的企业</span>
                        </div>
                    </div>
                    <v-flex lg12 md12 sm12 xs12 style="margin:30px 0;">
                        <v-divider></v-divider>
                    </v-flex>
                    <div>
                        <h5>智能维度同地区分析</h5>
                        <v-layout row wrap>
                            <v-flex lg10 md10 sm10 xs10>
                                <div id="chartOption11" style="width:100%;height:400px"></div>
                            </v-flex> 
                        </v-layout>
                        
                        <div style="margin: 10px;">
                            <span>您的企业智能维度综合能力超过了</span>
                            <span style="color:red;font-size:14px;font-weight: 600;">38%</span>
                            <span>的企业</span>
                        </div>
                    </div>
                    <v-flex lg12 md12 sm12 xs12 style="margin:30px 0;">
                        <v-divider></v-divider>
                    </v-flex>
                    <div>
                        <h5>智能维度指标解读及分析</h5>
                        <v-layout row wrap>
                            <v-flex lg10 md10 sm10 xs10>
                                <ve-bar :data="chartData12" width="100%" height="800px" ref="tab1bar12"></ve-bar>
                            </v-flex>
                        </v-layout>
                    </div>
                </div>
            </v-flex>
             <v-flex lg1 md1 sm1 xs1></v-flex>
        </v-layout>

   </div>
</template>

<script>
export default {
  components: {},
  name: "reportPage",
  // props: ["reportParm"],
  data: () => ({
    reportData: {
      reportName: "XX公司XX模块测评报告",
      enterpriseName: "XX科技股份有限公司",
      scale: "3.0000人以上",
      income: "100.0000万元以上",
      province: "天津市",
      city: "天津市",
      area: "和平区",
      industryL1: "化学制品",
      industryL2: "",
      industryL3: "",
      industryL4: "",
      industryL5: ""
    },
    mychart1: Object,
    mychart2: Object,
    mychart3: Object,
    mychart4: Object,
    mychart5: Object,
    mychart6: Object,
    mychart7: Object,
    mychart8: Object,
    mychart9: Object,
    mychart10: Object,
    mychart11: Object,
    mychart12: Object,
    mychart13: Object,
    level: [
      {
        lev: "互联互通",
        score: 15,
        expectScore: 15,
        total: 15,
        name: "互联互通",
        lose: 0,
        scorePercent: 100.0,
        losePercent: 0.0
      },
      {
        lev: "仓库物流",
        score: 12,
        expectScore: 15,
        total: 15,
        name: "仓库物流",
        lose: 3,
        scorePercent: 80.0,
        losePercent: 20.0
      },
      {
        lev: "企业运营",
        score: 7,
        expectScore: 10,
        total: 10,
        name: "企业运营",
        lose: 3,
        scorePercent: 70.0,
        losePercent: 30.0
      },
      {
        lev: "协同制造",
        score: 16,
        expectScore: 19,
        total: 20,
        name: "协同制造",
        lose: 4,
        scorePercent: 80.0,
        losePercent: 20.0
      },
      {
        lev: "战略规划",
        score: 5,
        expectScore: 5,
        total: 5,
        name: "战略规划",
        lose: 0,
        scorePercent: 100.0,
        losePercent: 0.0
      },
      {
        lev: "生产运作",
        score: 30,
        expectScore: 31,
        total: 35,
        name: "生产运作",
        lose: 5,
        scorePercent: 85.7,
        losePercent: 14.299999999999997
      },
      {
        lev: "研发设计",
        score: 20,
        expectScore: 25,
        total: 25,
        name: "研发设计",
        lose: 5,
        scorePercent: 80.0,
        losePercent: 20.0
      },
      {
        lev: "能源设备",
        score: 18,
        expectScore: 19,
        total: 20,
        name: "能源设备",
        lose: 2,
        scorePercent: 90.0,
        losePercent: 10.0
      },
      {
        lev: "过程质量",
        score: 8,
        expectScore: 8,
        total: 10,
        name: "过程质量",
        lose: 2,
        scorePercent: 80.0,
        losePercent: 20.0
      },
      {
        lev: "采购管理",
        score: 8,
        expectScore: 9,
        total: 10,
        name: "采购管理",
        lose: 2,
        scorePercent: 80.0,
        losePercent: 20.0
      },
      {
        lev: "销售服务",
        score: 8,
        expectScore: 10,
        total: 10,
        name: "销售服务",
        lose: 2,
        scorePercent: 80.0,
        losePercent: 20.0
      }
    ],
    chartDataArray3: [],
    chartDataArray7: [
      {
        lev: "产品设计",
        score: 15,
        expectScore: 100,
        total: 100,
        name: "产品设计",
        lose: 5,
        scorePercent: 75.0,
        losePercent: 25.0
      },
      {
        lev: "供应商管理",
        score: 4,
        expectScore: 5,
        total: 100,
        name: "供应商管理",
        lose: 1,
        scorePercent: 80.0,
        losePercent: 20.0
      },
      {
        lev: "出入库管理",
        score: 5,
        expectScore: 5,
        total: 5,
        name: "出入库管理",
        lose: 0,
        scorePercent: 100.0,
        losePercent: 0.0
      },
      {
        lev: "备品备件管理",
        score: 4,
        expectScore: 5,
        total: 5,
        name: "备品备件管理",
        lose: 1,
        scorePercent: 80.0,
        losePercent: 20.0
      },
      {
        lev: "工艺设计",
        score: 5,
        expectScore: 5,
        total: 5,
        name: "工艺设计",
        lose: 0,
        scorePercent: 100.0,
        losePercent: 0.0
      },
      {
        lev: "库存管理",
        score: 3,
        expectScore: 5,
        total: 5,
        name: "库存管理",
        lose: 2,
        scorePercent: 60.0,
        losePercent: 40.0
      },
      {
        lev: "应用集成",
        score: 16,
        expectScore: 19,
        total: 20,
        name: "应用集成",
        lose: 4,
        scorePercent: 80.0,
        losePercent: 20.0
      },
      {
        lev: "成本管理",
        score: 3,
        expectScore: 5,
        total: 5,
        name: "成本管理",
        lose: 2,
        scorePercent: 60.0,
        losePercent: 40.0
      },
      {
        lev: "战略管理",
        score: 5,
        expectScore: 5,
        total: 5,
        name: "战略管理",
        lose: 0,
        scorePercent: 100.0,
        losePercent: 0.0
      },
      {
        lev: "服务管理",
        score: 4,
        expectScore: 5,
        total: 5,
        name: "服务管理",
        lose: 1,
        scorePercent: 80.0,
        losePercent: 20.0
      },
      {
        lev: "生产维修管理",
        score: 5,
        expectScore: 5,
        total: 5,
        name: "生产维修管理",
        lose: 0,
        scorePercent: 100.0,
        losePercent: 0.0
      },
      {
        lev: "生产计划管理",
        score: 12,
        expectScore: 13,
        total: 15,
        name: "生产计划管理",
        lose: 3,
        scorePercent: 80.0,
        losePercent: 20.0
      },
      {
        lev: "生产过程控制",
        score: 13,
        expectScore: 13,
        total: 15,
        name: "生产过程控制",
        lose: 2,
        scorePercent: 86.7,
        losePercent: 13.299999999999997
      },
      {
        lev: "组织建设",
        score: 4,
        expectScore: 5,
        total: 5,
        name: "组织建设",
        lose: 1,
        scorePercent: 80.0,
        losePercent: 20.0
      },
      {
        lev: "网络安全管理",
        score: 5,
        expectScore: 5,
        total: 5,
        name: "网络安全管理",
        lose: 0,
        scorePercent: 100.0,
        losePercent: 0.0
      },
      {
        lev: "虚拟化",
        score: 5,
        expectScore: 5,
        total: 5,
        name: "虚拟化",
        lose: 0,
        scorePercent: 100.0,
        losePercent: 0.0
      },
      {
        lev: "设备管理",
        score: 18,
        expectScore: 19,
        total: 100,
        name: "设备管理",
        lose: 2,
        scorePercent: 90.0,
        losePercent: 10.0
      },
      {
        lev: "质量管理",
        score: 4,
        expectScore: 4,
        total: 5,
        name: "质量管理",
        lose: 1,
        scorePercent: 80.0,
        losePercent: 20.0
      },
      {
        lev: "质量追溯",
        score: 4,
        expectScore: 4,
        total: 5,
        name: "质量追溯",
        lose: 1,
        scorePercent: 80.0,
        losePercent: 20.0
      },
      {
        lev: "通讯网络管理",
        score: 5,
        expectScore: 5,
        total: 5,
        name: "通讯网络管理",
        lose: 0,
        scorePercent: 100.0,
        losePercent: 0.0
      },
      {
        lev: "采购协同管理",
        score: 4,
        expectScore: 4,
        total: 5,
        name: "采购协同管理",
        lose: 1,
        scorePercent: 80.0,
        losePercent: 20.0
      },
      {
        lev: "销售管理",
        score: 4,
        expectScore: 5,
        total: 5,
        name: "销售管理",
        lose: 1,
        scorePercent: 80.0,
        losePercent: 20.0
      }
    ],
    chartDataArray12: [
      {
        lev: "产品设计",
        score: 15,
        expectScore: 100,
        total: 100,
        name: "产品设计",
        lose: 5,
        scorePercent: 75.0,
        losePercent: 25.0
      },
      {
        lev: "供应商管理",
        score: 4,
        expectScore: 5,
        total: 100,
        name: "供应商管理",
        lose: 1,
        scorePercent: 80.0,
        losePercent: 20.0
      },
      {
        lev: "出入库管理",
        score: 5,
        expectScore: 5,
        total: 5,
        name: "出入库管理",
        lose: 0,
        scorePercent: 100.0,
        losePercent: 0.0
      },
      {
        lev: "备品备件管理",
        score: 4,
        expectScore: 5,
        total: 5,
        name: "备品备件管理",
        lose: 1,
        scorePercent: 80.0,
        losePercent: 20.0
      },
      {
        lev: "工艺设计",
        score: 5,
        expectScore: 5,
        total: 5,
        name: "工艺设计",
        lose: 0,
        scorePercent: 100.0,
        losePercent: 0.0
      },
      {
        lev: "库存管理",
        score: 3,
        expectScore: 5,
        total: 5,
        name: "库存管理",
        lose: 2,
        scorePercent: 60.0,
        losePercent: 40.0
      },
      {
        lev: "应用集成",
        score: 16,
        expectScore: 19,
        total: 20,
        name: "应用集成",
        lose: 4,
        scorePercent: 80.0,
        losePercent: 20.0
      },
      {
        lev: "成本管理",
        score: 3,
        expectScore: 5,
        total: 5,
        name: "成本管理",
        lose: 2,
        scorePercent: 60.0,
        losePercent: 40.0
      },
      {
        lev: "战略管理",
        score: 5,
        expectScore: 5,
        total: 5,
        name: "战略管理",
        lose: 0,
        scorePercent: 100.0,
        losePercent: 0.0
      },
      {
        lev: "服务管理",
        score: 4,
        expectScore: 5,
        total: 5,
        name: "服务管理",
        lose: 1,
        scorePercent: 80.0,
        losePercent: 20.0
      },
      {
        lev: "生产维修管理",
        score: 5,
        expectScore: 5,
        total: 5,
        name: "生产维修管理",
        lose: 0,
        scorePercent: 100.0,
        losePercent: 0.0
      },
      {
        lev: "生产计划管理",
        score: 12,
        expectScore: 13,
        total: 15,
        name: "生产计划管理",
        lose: 3,
        scorePercent: 80.0,
        losePercent: 20.0
      },
      {
        lev: "生产过程控制",
        score: 13,
        expectScore: 13,
        total: 15,
        name: "生产过程控制",
        lose: 2,
        scorePercent: 86.7,
        losePercent: 13.299999999999997
      },
      {
        lev: "组织建设",
        score: 4,
        expectScore: 5,
        total: 5,
        name: "组织建设",
        lose: 1,
        scorePercent: 80.0,
        losePercent: 20.0
      },
      {
        lev: "网络安全管理",
        score: 5,
        expectScore: 5,
        total: 5,
        name: "网络安全管理",
        lose: 0,
        scorePercent: 100.0,
        losePercent: 0.0
      },
      {
        lev: "虚拟化",
        score: 5,
        expectScore: 5,
        total: 5,
        name: "虚拟化",
        lose: 0,
        scorePercent: 100.0,
        losePercent: 0.0
      },
      {
        lev: "设备管理",
        score: 18,
        expectScore: 19,
        total: 100,
        name: "设备管理",
        lose: 2,
        scorePercent: 90.0,
        losePercent: 10.0
      },
      {
        lev: "质量管理",
        score: 4,
        expectScore: 4,
        total: 5,
        name: "质量管理",
        lose: 1,
        scorePercent: 80.0,
        losePercent: 20.0
      },
      {
        lev: "质量追溯",
        score: 4,
        expectScore: 4,
        total: 5,
        name: "质量追溯",
        lose: 1,
        scorePercent: 80.0,
        losePercent: 20.0
      },
      {
        lev: "通讯网络管理",
        score: 5,
        expectScore: 5,
        total: 5,
        name: "通讯网络管理",
        lose: 0,
        scorePercent: 100.0,
        losePercent: 0.0
      },
      {
        lev: "采购协同管理",
        score: 4,
        expectScore: 4,
        total: 5,
        name: "采购协同管理",
        lose: 1,
        scorePercent: 80.0,
        losePercent: 20.0
      },
      {
        lev: "销售管理",
        score: 4,
        expectScore: 5,
        total: 5,
        name: "销售管理",
        lose: 1,
        scorePercent: 80.0,
        losePercent: 20.0
      }
    ],
    chartData2: {
      columns: ["标题"],
      rows: []
    },
    chartOption3: {
      columns: ["标题"],
      rows: []
    },
    chartData7: {
      columns: ["标题", , "实际", "预期"],
      rows: []
    },
    chartData12: {
      columns: ["标题", , "实际", "预期"],
      rows: []
    },
    chartData13: {
      columns: ["标题"],
      rows: []
    }
  }),
  mounted: function() {
   var request = {
      enterprise_id: this.reportParm.datas.enterprise_id,
      id: this.reportParm.datas.idx,
      evaluationId:this.reportParm.datas.evaluationId,
      session_id: this.session_id
    };
    var apikey = "";
    var param = {
      apikey,
      request
    };
    var type = "post";
    var url = "/IBUS/DAIG_SYS/get_report_datas";
    this.getReport_datas(type, url, param);
    this.showChart1();
    this.showChart2();
    this.showChart3();
    this.showChart4();
    this.showChart5();
    this.showChart6();
    this.showChart7();
    this.showChart8();
    this.showChart9();
    this.showChart10();
    this.showChart11();
    this.showChart12();
    this.showChart13();
  },
  methods: {
    showChart1() {
      this.option1 = {
        backgroundColor: "#fafafa",
        legend: {
          data: ["期望", "实际", "其他企业"],
          left: "center"
          // right: '0',
          // top: '0%',
        },
        tooltip: {
          trigger: "item",
          showDelay: 0,
          formatter: function(params) {
            if (params.name == "期望" || params.name == "实际") {
              return (
                params.name +
                " <br/>" +
                "智能水平" +
                params.value[0] +
                "%" +
                " <br/>" +
                "制造水平" +
                params.value[1] +
                "%"
              );
            }
          }
        },
        xAxis: [
          {
            name: "智能水平（%）",
            type: "value",
            scale: true,
            axisLabel: {
              formatter: "{value}"
            },
            splitLine: {
              show: false
            },
            max: 100,
            min: 0,
            nameLocation: "end",
            nameTextStyle: {
              padding: [0, 0, -60, -60]
            }
          }
        ],
        yAxis: [
          {
            name: "制造水平（%）",
            type: "value",
            scale: true,
            axisLabel: {
              formatter: "{value}"
            },
            splitLine: {
              show: false
            },
            max: 100,
            min: 0
          }
        ],
        series: [
          {
            name: "期望",
            type: "scatter",
            data: [
              {
                name: "期望",
                value: [91, 60]
                // itemStyle: {
                //   color: "green"
                // }
              }
            ]
            // markPoint: {
            //   label: {
            //     normal: {
            //       position: "inside",
            //       distance: "0",
            //       show: false,
            //       formatter: [
            //         "{a|期望}",
            //         "智能水平{@1}%",
            //         "制造水平{@1}%"
            //       ].join("\n"),
            //       backgroundColor: "#000000",
            //       borderColor: "#555",
            //       borderWidth: 2,
            //       borderRadius: 5,
            //       padding: 10,
            //       color: "white",
            //       offset: [0, -13],
            //       rich: {
            //         a: {
            //           align: "left",
            //           color: "white"
            //         }
            //       }
            //     }
            //   },
            //   data: [
            //     {
            //       type: "max",
            //       symbol: "pin",
            //       symbolOffset: [0, 0]
            //     }
            //   ],
            //   itemStyle: {
            //     color: "#000000",
            //     opacity: "1"
            //   }
            // }
          },
          {
            name: "实际",
            type: "scatter",
            data: [
              {
                name: "实际",
                value: [71, 51]
                // itemStyle: {
                //   color: "red"
                // }
              }
            ]
            // markPoint: {
            //   label: {
            //     normal: {
            //       position: "inside",
            //       distance: "0",
            //       show: false,
            //       formatter: [
            // "{a|实际}",
            // "智能水平{@1}%",
            // "制造水平{@1}%"
            //       ].join("\n"),
            //       backgroundColor: "#000000",
            //       borderColor: "#555",
            //       borderWidth: 2,
            //       borderRadius: 5,
            //       padding: 10,
            //       color: "white",
            //       offset: [0, -13],
            //       rich: {
            //         a: {
            //           align: "left",
            //           color: "white"
            //         }
            //       }
            //     }
            //   },
            //   data: [
            //     {
            //       type: "max",
            //       symbol: "pin",
            //       symbolOffset: [0, 0]
            //     }
            //   ],
            //   itemStyle: {
            //     color: "#000000",
            //     opacity: "1"
            //   }
            // }
          },

          {
            name: "其他企业",
            type: "scatter",
            data: [
              [74.0, 65.6],
              [75.3, 71.8],
              [93.5, 80.7],
              [86.5, 72.6],
              [87.2, 78.8]
            ]
          }
        ]
      };
      this.mychart1 = this.$echarts.init(
        document.getElementById("chartOption1")
      );
      this.mychart1.setOption(this.option1, true);
      window.addEventListener("resize", () => {
        this.mychart1.resize();
      });
    },
    showChart2() {
      //   var lineStyle = {
      //     normal: {
      //       width: 1,
      //       opacity: 0.5
      //     }
      //   };
      this.level.forEach(item => {
        this.chartData2.columns.push(item.name);
      });
      var currentData = { 标题: "实际" },
        expertData = { 标题: "预期" };
      let indicatorArray = [];
      let Edata = [];
      let Cdata = [];
      this.chartData2.columns.forEach(colum => {
        this.level.forEach(lev => {
          if (lev.name == colum) {
            currentData[colum] = lev.score;
            expertData[colum] = lev.expectScore;
            indicatorArray.push({ name: lev.name, max: 100 });
            Edata.push(lev.scorePercent);
            Cdata.push((lev.expectScore / lev.total).toFixed(2) * 100);
          }
        });
      });

      this.chartData2.rows.push(expertData);
      this.chartData2.rows.push(currentData);
      this.option2 = {
        backgroundColor: "#fafafa",
        legend: {
          top: 20,
          left: 20,
          data: ["预期", "实际"]
        },
        radar: [
          {
            indicator: indicatorArray,

            shape: "circle",
            splitNumber: Edata.length,

            name: {
              textStyle: {
                color: "#333"
              }
            },
            splitArea: {
              areaStyle: {
                color: ["rgba(114, 172, 209, 0.2)", "rgba(114, 172, 209, 0.4)"]
              }
            }
          }
        ],
        series: [
          {
            name: "雷达图",
            type: "radar",
            itemStyle: {
              emphasis: {
                // color: 各异,
                lineStyle: {
                  width: 4
                }
              }
            },
            data: [
              {
                value: Edata,
                name: "预期",
                label: {
                  normal: {
                    show: true,
                    formatter: function(params) {
                      return params.value + "%";
                    }
                  }
                },
                itemStyle: {
                  normal: {
                    color: "#19d4ae"
                  }
                }
              },
              {
                value: Cdata,
                name: "实际",
                label: {
                  normal: {
                    show: true,
                    formatter: function(params) {
                      return params.value + "%";
                    }
                  }
                },
                itemStyle: {
                  normal: {
                    color: "#5ab1ef"
                  }
                }
              }
            ]
          }
        ]
      };
      this.mychart2 = this.$echarts.init(
        document.getElementById("chartOption2")
      );
      this.mychart2.setOption(this.option2, true);
      window.addEventListener("resize", () => {
        this.mychart2.resize();
      });
    },
    showChart3() {
      var lineStyle = {
        normal: {
          width: 1,
          opacity: 0.5
        }
      };
      var dataBJ = [
        [55, 9, 56, 0.46, 18, 6, 1],
        [25, 11, 21, 0.65, 34, 9, 2],
        [56, 7, 63, 0.3, 14, 5, 3],
        [33, 7, 29, 0.33, 16, 6, 4],
        [42, 24, 44, 0.76, 40, 16, 5],
        [82, 58, 90, 1.77, 68, 33, 6],
        [74, 49, 77, 1.46, 48, 27, 7],
        [78, 55, 80, 1.29, 59, 29, 8],
        [267, 216, 280, 4.8, 108, 64, 9],
        [185, 127, 216, 2.52, 61, 27, 10],
        [39, 19, 38, 0.57, 31, 15, 11],
        [41, 11, 40, 0.43, 21, 7, 12],
        [64, 38, 74, 1.04, 46, 22, 13],
        [108, 79, 120, 1.7, 75, 41, 14],
        [108, 63, 116, 1.48, 44, 26, 15],
        [33, 6, 29, 0.34, 13, 5, 16],
        [94, 66, 110, 1.54, 62, 31, 17],
        [186, 142, 192, 3.88, 93, 79, 18],
        [57, 31, 54, 0.96, 32, 14, 19],
        [22, 8, 17, 0.48, 23, 10, 20],
        [39, 15, 36, 0.61, 29, 13, 21],
        [94, 69, 114, 2.08, 73, 39, 22],
        [99, 73, 110, 2.43, 76, 48, 23],
        [31, 12, 30, 0.5, 32, 16, 24],
        [42, 27, 43, 1, 53, 22, 25],
        [154, 117, 157, 3.05, 92, 58, 26],
        [234, 185, 230, 4.09, 123, 69, 27],
        [160, 120, 186, 2.77, 91, 50, 28],
        [134, 96, 165, 2.76, 83, 41, 29],
        [52, 24, 60, 1.03, 50, 21, 30],
        [46, 5, 49, 0.28, 10, 6, 31]
      ];
      var dataSH = [[187, 143, 201, 1.39, 89, 53, 31]];
      var dataYours = [];
      var dataOthers = [];
      var indicator = [];
      this.level.forEach(item => {
        indicator.push({ name: item.name, max: 100 });
        dataYours.push(item.scorePercent);
        dataOthers.push();
      });

      this.option3 = {
        backgroundColor: "#fafafa",
        legend: {
          top: 20,
          left: 20,
          data: ["同行业其他企业", "您的企业"],
          itemGap: 20,
          //   textStyle: {
          //     color: "#fff",
          //     fontSize: 14
          //   },
          selectedMode: "multiple"
        },
        radar: {
          indicator: [
            { name: "销售服务", max: 300 },
            { name: "互联互通", max: 250 },
            { name: "设备管理", max: 300 },
            { name: "采购管理", max: 5 },
            { name: "过程质量", max: 200 },
            { name: "研发设计", max: 100 }
          ],
          shape: "circle",

          name: {
            textStyle: {
              color: "rgb(238, 197, 102)"
            }
          },
          splitLine: {
            lineStyle: {
              color: [
                "rgba(0, 134,128, 0.1)",
                "rgba(0, 134,128, 0.2)",
                "rgba(0, 134,128, 0.4)",
                "rgba(0, 134,128, 0.6)",
                "rgba(0, 134,128, 0.8)",
                "rgba(0, 134,128, 1)"
              ].reverse()
            }
          },
          splitArea: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "rgba(238, 197, 102, 0.5)"
            }
          }
        },
        series: [
          {
            name: "同行业其他企业",
            type: "radar",
            lineStyle: lineStyle,
            data: dataBJ,
            symbol: "none",
            itemStyle: {
              normal: {
                color: "#F9713C"
              }
            },
            areaStyle: {
              normal: {
                opacity: 0.05
              }
            }
          },
          {
            name: "您的企业",
            type: "radar",
            lineStyle: lineStyle,
            data: dataSH,
            symbol: "none",
            itemStyle: {
              normal: {
                color: "blue"
              }
            },
            areaStyle: {
              normal: {
                opacity: 0.1
              }
            }
          }
        ]
      };
      this.mychart3 = this.$echarts.init(
        document.getElementById("chartOption3")
      );
      this.mychart3.setOption(this.option3, true);
      window.addEventListener("resize", () => {
        this.mychart3.resize();
      });
    },
    showChart4() {
      var lineStyle = {
        normal: {
          width: 1,
          opacity: 0.5
        }
      };
      var dataBJ = [
        [55, 9, 56, 0.46, 18, 6, 1],
        [25, 11, 21, 0.65, 34, 9, 2],
        [56, 7, 63, 0.3, 14, 5, 3],
        [33, 7, 29, 0.33, 16, 6, 4],
        [42, 24, 44, 0.76, 40, 16, 5],
        [82, 58, 90, 1.77, 68, 33, 6],
        [74, 49, 77, 1.46, 48, 27, 7],
        [78, 55, 80, 1.29, 59, 29, 8],
        [267, 216, 280, 4.8, 108, 64, 9],
        [185, 127, 216, 2.52, 61, 27, 10],
        [39, 19, 38, 0.57, 31, 15, 11],
        [41, 11, 40, 0.43, 21, 7, 12],
        [64, 38, 74, 1.04, 46, 22, 13],
        [108, 79, 120, 1.7, 75, 41, 14],
        [108, 63, 116, 1.48, 44, 26, 15],
        [33, 6, 29, 0.34, 13, 5, 16],
        [94, 66, 110, 1.54, 62, 31, 17],
        [186, 142, 192, 3.88, 93, 79, 18],
        [57, 31, 54, 0.96, 32, 14, 19],
        [22, 8, 17, 0.48, 23, 10, 20],
        [39, 15, 36, 0.61, 29, 13, 21],
        [94, 69, 114, 2.08, 73, 39, 22],
        [99, 73, 110, 2.43, 76, 48, 23],
        [31, 12, 30, 0.5, 32, 16, 24],
        [42, 27, 43, 1, 53, 22, 25],
        [154, 117, 157, 3.05, 92, 58, 26],
        [234, 185, 230, 4.09, 123, 69, 27],
        [160, 120, 186, 2.77, 91, 50, 28],
        [134, 96, 165, 2.76, 83, 41, 29],
        [52, 24, 60, 1.03, 50, 21, 30],
        [46, 5, 49, 0.28, 10, 6, 31]
      ];
      var dataSH = [[187, 143, 201, 1.39, 89, 53, 31]];
      var dataYours = [];
      var dataOthers = [];
      var indicator = [];
      this.level.forEach(item => {
        indicator.push({ name: item.name, max: 100 });
        dataYours.push(item.scorePercent);
        dataOthers.push();
      });

      this.option4 = {
        backgroundColor: "#fafafa",
        legend: {
          top: 20,
          left: 20,
          data: ["广东省其他企业", "您的企业"],
          itemGap: 20,
          //   textStyle: {
          //     color: "#fff",
          //     fontSize: 14
          //   },
          selectedMode: "multiple"
        },
        radar: {
          indicator: [
            { name: "销售服务", max: 300 },
            { name: "互联互通", max: 250 },
            { name: "设备管理", max: 300 },
            { name: "采购管理", max: 5 },
            { name: "过程质量", max: 200 },
            { name: "研发设计", max: 100 }
          ],
          shape: "circle",

          name: {
            textStyle: {
              color: "rgb(238, 197, 102)"
            }
          },
          splitLine: {
            lineStyle: {
              color: [
                "rgba(0, 134,128, 0.1)",
                "rgba(0, 134,128, 0.2)",
                "rgba(0, 134,128, 0.4)",
                "rgba(0, 134,128, 0.6)",
                "rgba(0, 134,128, 0.8)",
                "rgba(0, 134,128, 1)"
              ].reverse()
            }
          },
          splitArea: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "rgba(238, 197, 102, 0.5)"
            }
          }
        },
        series: [
          {
            name: "广东省其他企业",
            type: "radar",
            lineStyle: lineStyle,
            data: dataBJ,
            symbol: "none",
            itemStyle: {
              normal: {
                color: "#F9713C"
              }
            },
            areaStyle: {
              normal: {
                opacity: 0.05
              }
            }
          },
          {
            name: "您的企业",
            type: "radar",
            lineStyle: lineStyle,
            data: dataSH,
            symbol: "none",
            itemStyle: {
              normal: {
                color: "blue"
              }
            },
            areaStyle: {
              normal: {
                opacity: 0.1
              }
            }
          }
        ]
      };
      this.mychart4 = this.$echarts.init(
        document.getElementById("chartOption4")
      );
      this.mychart4.setOption(this.option4, true);
      window.addEventListener("resize", () => {
        this.mychart4.resize();
      });
    },
    showChart5() {
      var lineStyle = {
        normal: {
          width: 1,
          opacity: 0.5
        }
      };
      var dataBJ = [
        [55, 9, 56, 0.46, 18, 6, 1],
        [25, 11, 21, 0.65, 34, 9, 2],
        [56, 7, 63, 0.3, 14, 5, 3],
        [33, 7, 29, 0.33, 16, 6, 4],
        [42, 24, 44, 0.76, 40, 16, 5],
        [82, 58, 90, 1.77, 68, 33, 6],
        [74, 49, 77, 1.46, 48, 27, 7],
        [78, 55, 80, 1.29, 59, 29, 8],
        [267, 216, 280, 4.8, 108, 64, 9],
        [185, 127, 216, 2.52, 61, 27, 10],
        [39, 19, 38, 0.57, 31, 15, 11],
        [41, 11, 40, 0.43, 21, 7, 12],
        [64, 38, 74, 1.04, 46, 22, 13],
        [108, 79, 120, 1.7, 75, 41, 14],
        [108, 63, 116, 1.48, 44, 26, 15],
        [33, 6, 29, 0.34, 13, 5, 16],
        [94, 66, 110, 1.54, 62, 31, 17],
        [186, 142, 192, 3.88, 93, 79, 18],
        [57, 31, 54, 0.96, 32, 14, 19],
        [22, 8, 17, 0.48, 23, 10, 20],
        [39, 15, 36, 0.61, 29, 13, 21],
        [94, 69, 114, 2.08, 73, 39, 22],
        [99, 73, 110, 2.43, 76, 48, 23],
        [31, 12, 30, 0.5, 32, 16, 24],
        [42, 27, 43, 1, 53, 22, 25],
        [154, 117, 157, 3.05, 92, 58, 26],
        [234, 185, 230, 4.09, 123, 69, 27],
        [160, 120, 186, 2.77, 91, 50, 28],
        [134, 96, 165, 2.76, 83, 41, 29],
        [52, 24, 60, 1.03, 50, 21, 30],
        [46, 5, 49, 0.28, 10, 6, 31]
      ];
      var dataSH = [[187, 143, 201, 1.39, 89, 53, 31]];
      var dataYours = [];
      var dataOthers = [];
      var indicator = [];
      this.level.forEach(item => {
        indicator.push({ name: item.name, max: 100 });
        dataYours.push(item.scorePercent);
        dataOthers.push();
      });

      this.option5 = {
        backgroundColor: "#fafafa",
        legend: {
          top: 20,
          left: 20,
          data: ["深圳市其他企业", "您的企业"],
          itemGap: 20,
          //   textStyle: {
          //     color: "#fff",
          //     fontSize: 14
          //   },
          selectedMode: "multiple"
        },
        radar: {
          indicator: [
            { name: "销售服务", max: 300 },
            { name: "互联互通", max: 250 },
            { name: "设备管理", max: 300 },
            { name: "采购管理", max: 5 },
            { name: "过程质量", max: 200 },
            { name: "研发设计", max: 100 }
          ],
          shape: "circle",

          name: {
            textStyle: {
              color: "rgb(238, 197, 102)"
            }
          },
          splitLine: {
            lineStyle: {
              color: [
                "rgba(0, 134,128, 0.1)",
                "rgba(0, 134,128, 0.2)",
                "rgba(0, 134,128, 0.4)",
                "rgba(0, 134,128, 0.6)",
                "rgba(0, 134,128, 0.8)",
                "rgba(0, 134,128, 1)"
              ].reverse()
            }
          },
          splitArea: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "rgba(238, 197, 102, 0.5)"
            }
          }
        },
        series: [
          {
            name: "深圳市其他企业",
            type: "radar",
            lineStyle: lineStyle,
            data: dataBJ,
            symbol: "none",
            itemStyle: {
              normal: {
                color: "#F9713C"
              }
            },
            areaStyle: {
              normal: {
                opacity: 0.05
              }
            }
          },
          {
            name: "您的企业",
            type: "radar",
            lineStyle: lineStyle,
            data: dataSH,
            symbol: "none",
            itemStyle: {
              normal: {
                color: "blue"
              }
            },
            areaStyle: {
              normal: {
                opacity: 0.1
              }
            }
          }
        ]
      };
      this.mychart5 = this.$echarts.init(
        document.getElementById("chartOption5")
      );
      this.mychart5.setOption(this.option5, true);
      window.addEventListener("resize", () => {
        this.mychart5.resize();
      });
    },
    showChart6() {
      var lineStyle = {
        normal: {
          width: 1,
          opacity: 0.5
        }
      };
      var dataBJ = [
        [55, 9, 56, 0.46, 18, 6, 1],
        [25, 11, 21, 0.65, 34, 9, 2],
        [56, 7, 63, 0.3, 14, 5, 3],
        [33, 7, 29, 0.33, 16, 6, 4],
        [42, 24, 44, 0.76, 40, 16, 5],
        [82, 58, 90, 1.77, 68, 33, 6],
        [74, 49, 77, 1.46, 48, 27, 7],
        [78, 55, 80, 1.29, 59, 29, 8],
        [267, 216, 280, 4.8, 108, 64, 9],
        [185, 127, 216, 2.52, 61, 27, 10],
        [39, 19, 38, 0.57, 31, 15, 11],
        [41, 11, 40, 0.43, 21, 7, 12],
        [64, 38, 74, 1.04, 46, 22, 13],
        [108, 79, 120, 1.7, 75, 41, 14],
        [108, 63, 116, 1.48, 44, 26, 15],
        [33, 6, 29, 0.34, 13, 5, 16],
        [94, 66, 110, 1.54, 62, 31, 17],
        [186, 142, 192, 3.88, 93, 79, 18],
        [57, 31, 54, 0.96, 32, 14, 19],
        [22, 8, 17, 0.48, 23, 10, 20],
        [39, 15, 36, 0.61, 29, 13, 21],
        [94, 69, 114, 2.08, 73, 39, 22],
        [99, 73, 110, 2.43, 76, 48, 23],
        [31, 12, 30, 0.5, 32, 16, 24],
        [42, 27, 43, 1, 53, 22, 25],
        [154, 117, 157, 3.05, 92, 58, 26],
        [234, 185, 230, 4.09, 123, 69, 27],
        [160, 120, 186, 2.77, 91, 50, 28],
        [134, 96, 165, 2.76, 83, 41, 29],
        [52, 24, 60, 1.03, 50, 21, 30],
        [46, 5, 49, 0.28, 10, 6, 31]
      ];
      var dataSH = [[187, 143, 201, 1.39, 89, 53, 31]];
      var dataYours = [];
      var dataOthers = [];
      var indicator = [];
      this.level.forEach(item => {
        indicator.push({ name: item.name, max: 100 });
        dataYours.push(item.scorePercent);
        dataOthers.push();
      });

      this.option6 = {
        backgroundColor: "#fafafa",
        legend: {
          top: 20,
          left: 20,
          data: ["南山区其他企业", "您的企业"],
          itemGap: 20,
          //   textStyle: {
          //     color: "#fff",
          //     fontSize: 14
          //   },
          selectedMode: "multiple"
        },
        radar: {
          indicator: [
            { name: "销售服务", max: 300 },
            { name: "互联互通", max: 250 },
            { name: "设备管理", max: 300 },
            { name: "采购管理", max: 5 },
            { name: "过程质量", max: 200 },
            { name: "研发设计", max: 100 }
          ],
          shape: "circle",

          name: {
            textStyle: {
              color: "rgb(238, 197, 102)"
            }
          },
          splitLine: {
            lineStyle: {
              color: [
                "rgba(0, 134,128, 0.1)",
                "rgba(0, 134,128, 0.2)",
                "rgba(0, 134,128, 0.4)",
                "rgba(0, 134,128, 0.6)",
                "rgba(0, 134,128, 0.8)",
                "rgba(0, 134,128, 1)"
              ].reverse()
            }
          },
          splitArea: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "rgba(238, 197, 102, 0.5)"
            }
          }
        },
        series: [
          {
            name: "南山区其他企业",
            type: "radar",
            lineStyle: lineStyle,
            data: dataBJ,
            symbol: "none",
            itemStyle: {
              normal: {
                color: "#F9713C"
              }
            },
            areaStyle: {
              normal: {
                opacity: 0.05
              }
            }
          },
          {
            name: "您的企业",
            type: "radar",
            lineStyle: lineStyle,
            data: dataSH,
            symbol: "none",
            itemStyle: {
              normal: {
                color: "blue"
              }
            },
            areaStyle: {
              normal: {
                opacity: 0.1
              }
            }
          }
        ]
      };
      this.mychart6 = this.$echarts.init(
        document.getElementById("chartOption6")
      );
      this.mychart6.setOption(this.option6, true);
      window.addEventListener("resize", () => {
        this.mychart6.resize();
      });
    },
    showChart7() {
      var showData = [];
      this.chartDataArray7.forEach(lev => {
        var arry = {};
        this.chartData7.columns.forEach(colum => {
          if (colum == "标题") {
            arry[colum] = lev.name;
          } else if (colum == "实际") {
            arry[colum] = lev.score;
          } else if (colum == "预期") {
            arry[colum] = lev.expectScore;
          }
        });
        showData.push(arry);
      });
      this.chartData7.rows = showData;
      window.addEventListener("resize", () => {
        this.$refs.tab1bar7.echarts.resize();
      });
    },
    showChart8() {
      var lineStyle = {
        normal: {
          width: 1,
          opacity: 0.5
        }
      };
      var dataBJ = [
        [55, 9, 56, 0.46, 18, 6, 1],
        [25, 11, 21, 0.65, 34, 9, 2],
        [56, 7, 63, 0.3, 14, 5, 3],
        [33, 7, 29, 0.33, 16, 6, 4],
        [42, 24, 44, 0.76, 40, 16, 5],
        [82, 58, 90, 1.77, 68, 33, 6],
        [74, 49, 77, 1.46, 48, 27, 7],
        [78, 55, 80, 1.29, 59, 29, 8],
        [267, 216, 280, 4.8, 108, 64, 9],
        [185, 127, 216, 2.52, 61, 27, 10],
        [39, 19, 38, 0.57, 31, 15, 11],
        [41, 11, 40, 0.43, 21, 7, 12],
        [64, 38, 74, 1.04, 46, 22, 13],
        [108, 79, 120, 1.7, 75, 41, 14],
        [108, 63, 116, 1.48, 44, 26, 15],
        [33, 6, 29, 0.34, 13, 5, 16],
        [94, 66, 110, 1.54, 62, 31, 17],
        [186, 142, 192, 3.88, 93, 79, 18],
        [57, 31, 54, 0.96, 32, 14, 19],
        [22, 8, 17, 0.48, 23, 10, 20],
        [39, 15, 36, 0.61, 29, 13, 21],
        [94, 69, 114, 2.08, 73, 39, 22],
        [99, 73, 110, 2.43, 76, 48, 23],
        [31, 12, 30, 0.5, 32, 16, 24],
        [42, 27, 43, 1, 53, 22, 25],
        [154, 117, 157, 3.05, 92, 58, 26],
        [234, 185, 230, 4.09, 123, 69, 27],
        [160, 120, 186, 2.77, 91, 50, 28],
        [134, 96, 165, 2.76, 83, 41, 29],
        [52, 24, 60, 1.03, 50, 21, 30],
        [46, 5, 49, 0.28, 10, 6, 31]
      ];
      var dataSH = [[187, 143, 201, 1.39, 89, 53, 31]];
      var dataYours = [];
      var dataOthers = [];
      var indicator = [];
      this.level.forEach(item => {
        indicator.push({ name: item.name, max: 100 });
        dataYours.push(item.scorePercent);
        dataOthers.push();
      });

      this.option8 = {
        backgroundColor: "#fafafa",
        legend: {
          top: 20,
          left: 20,
          data: ["同行业其他企业", "您的企业"],
          itemGap: 20,
          //   textStyle: {
          //     color: "#fff",
          //     fontSize: 14
          //   },
          selectedMode: "multiple"
        },
        radar: {
          indicator: [
            { name: "销售服务", max: 300 },
            { name: "互联互通", max: 250 },
            { name: "设备管理", max: 300 },
            { name: "采购管理", max: 5 },
            { name: "过程质量", max: 200 },
            { name: "研发设计", max: 100 }
          ],
          shape: "circle",

          name: {
            textStyle: {
              color: "rgb(238, 197, 102)"
            }
          },
          splitLine: {
            lineStyle: {
              color: [
                "rgba(0, 134,128, 0.1)",
                "rgba(0, 134,128, 0.2)",
                "rgba(0, 134,128, 0.4)",
                "rgba(0, 134,128, 0.6)",
                "rgba(0, 134,128, 0.8)",
                "rgba(0, 134,128, 1)"
              ].reverse()
            }
          },
          splitArea: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "rgba(238, 197, 102, 0.5)"
            }
          }
        },
        series: [
          {
            name: "同行业其他企业",
            type: "radar",
            lineStyle: lineStyle,
            data: dataBJ,
            symbol: "none",
            itemStyle: {
              normal: {
                color: "#F9713C"
              }
            },
            areaStyle: {
              normal: {
                opacity: 0.05
              }
            }
          },
          {
            name: "您的企业",
            type: "radar",
            lineStyle: lineStyle,
            data: dataSH,
            symbol: "none",
            itemStyle: {
              normal: {
                color: "blue"
              }
            },
            areaStyle: {
              normal: {
                opacity: 0.1
              }
            }
          }
        ]
      };
      this.mychart8 = this.$echarts.init(
        document.getElementById("chartOption8")
      );
      this.mychart8.setOption(this.option8, true);
      window.addEventListener("resize", () => {
        this.mychart8.resize();
      });
    },
    showChart9() {
      var lineStyle = {
        normal: {
          width: 1,
          opacity: 0.5
        }
      };
      var dataBJ = [
        [55, 9, 56, 0.46, 18, 6, 1],
        [25, 11, 21, 0.65, 34, 9, 2],
        [56, 7, 63, 0.3, 14, 5, 3],
        [33, 7, 29, 0.33, 16, 6, 4],
        [42, 24, 44, 0.76, 40, 16, 5],
        [82, 58, 90, 1.77, 68, 33, 6],
        [74, 49, 77, 1.46, 48, 27, 7],
        [78, 55, 80, 1.29, 59, 29, 8],
        [267, 216, 280, 4.8, 108, 64, 9],
        [185, 127, 216, 2.52, 61, 27, 10],
        [39, 19, 38, 0.57, 31, 15, 11],
        [41, 11, 40, 0.43, 21, 7, 12],
        [64, 38, 74, 1.04, 46, 22, 13],
        [108, 79, 120, 1.7, 75, 41, 14],
        [108, 63, 116, 1.48, 44, 26, 15],
        [33, 6, 29, 0.34, 13, 5, 16],
        [94, 66, 110, 1.54, 62, 31, 17],
        [186, 142, 192, 3.88, 93, 79, 18],
        [57, 31, 54, 0.96, 32, 14, 19],
        [22, 8, 17, 0.48, 23, 10, 20],
        [39, 15, 36, 0.61, 29, 13, 21],
        [94, 69, 114, 2.08, 73, 39, 22],
        [99, 73, 110, 2.43, 76, 48, 23],
        [31, 12, 30, 0.5, 32, 16, 24],
        [42, 27, 43, 1, 53, 22, 25],
        [154, 117, 157, 3.05, 92, 58, 26],
        [234, 185, 230, 4.09, 123, 69, 27],
        [160, 120, 186, 2.77, 91, 50, 28],
        [134, 96, 165, 2.76, 83, 41, 29],
        [52, 24, 60, 1.03, 50, 21, 30],
        [46, 5, 49, 0.28, 10, 6, 31]
      ];
      var dataSH = [[187, 143, 201, 1.39, 89, 53, 31]];
      var dataYours = [];
      var dataOthers = [];
      var indicator = [];
      this.level.forEach(item => {
        indicator.push({ name: item.name, max: 100 });
        dataYours.push(item.scorePercent);
        dataOthers.push();
      });

      this.option9 = {
        backgroundColor: "#fafafa",
        legend: {
          top: 20,
          left: 20,
          data: ["广东省其他企业", "您的企业"],
          itemGap: 20,
          //   textStyle: {
          //     color: "#fff",
          //     fontSize: 14
          //   },
          selectedMode: "multiple"
        },
        radar: {
          indicator: [
            { name: "销售服务", max: 300 },
            { name: "互联互通", max: 250 },
            { name: "设备管理", max: 300 },
            { name: "采购管理", max: 5 },
            { name: "过程质量", max: 200 },
            { name: "研发设计", max: 100 }
          ],
          shape: "circle",

          name: {
            textStyle: {
              color: "rgb(238, 197, 102)"
            }
          },
          splitLine: {
            lineStyle: {
              color: [
                "rgba(0, 134,128, 0.1)",
                "rgba(0, 134,128, 0.2)",
                "rgba(0, 134,128, 0.4)",
                "rgba(0, 134,128, 0.6)",
                "rgba(0, 134,128, 0.8)",
                "rgba(0, 134,128, 1)"
              ].reverse()
            }
          },
          splitArea: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "rgba(238, 197, 102, 0.5)"
            }
          }
        },
        series: [
          {
            name: "广东省其他企业",
            type: "radar",
            lineStyle: lineStyle,
            data: dataBJ,
            symbol: "none",
            itemStyle: {
              normal: {
                color: "#F9713C"
              }
            },
            areaStyle: {
              normal: {
                opacity: 0.05
              }
            }
          },
          {
            name: "您的企业",
            type: "radar",
            lineStyle: lineStyle,
            data: dataSH,
            symbol: "none",
            itemStyle: {
              normal: {
                color: "blue"
              }
            },
            areaStyle: {
              normal: {
                opacity: 0.1
              }
            }
          }
        ]
      };
      this.mychart9 = this.$echarts.init(
        document.getElementById("chartOption9")
      );
      this.mychart9.setOption(this.option9, true);
      window.addEventListener("resize", () => {
        this.mychart9.resize();
      });
    },
    showChart10() {
      var lineStyle = {
        normal: {
          width: 1,
          opacity: 0.5
        }
      };
      var dataBJ = [
        [55, 9, 56, 0.46, 18, 6, 1],
        [25, 11, 21, 0.65, 34, 9, 2],
        [56, 7, 63, 0.3, 14, 5, 3],
        [33, 7, 29, 0.33, 16, 6, 4],
        [42, 24, 44, 0.76, 40, 16, 5],
        [82, 58, 90, 1.77, 68, 33, 6],
        [74, 49, 77, 1.46, 48, 27, 7],
        [78, 55, 80, 1.29, 59, 29, 8],
        [267, 216, 280, 4.8, 108, 64, 9],
        [185, 127, 216, 2.52, 61, 27, 10],
        [39, 19, 38, 0.57, 31, 15, 11],
        [41, 11, 40, 0.43, 21, 7, 12],
        [64, 38, 74, 1.04, 46, 22, 13],
        [108, 79, 120, 1.7, 75, 41, 14],
        [108, 63, 116, 1.48, 44, 26, 15],
        [33, 6, 29, 0.34, 13, 5, 16],
        [94, 66, 110, 1.54, 62, 31, 17],
        [186, 142, 192, 3.88, 93, 79, 18],
        [57, 31, 54, 0.96, 32, 14, 19],
        [22, 8, 17, 0.48, 23, 10, 20],
        [39, 15, 36, 0.61, 29, 13, 21],
        [94, 69, 114, 2.08, 73, 39, 22],
        [99, 73, 110, 2.43, 76, 48, 23],
        [31, 12, 30, 0.5, 32, 16, 24],
        [42, 27, 43, 1, 53, 22, 25],
        [154, 117, 157, 3.05, 92, 58, 26],
        [234, 185, 230, 4.09, 123, 69, 27],
        [160, 120, 186, 2.77, 91, 50, 28],
        [134, 96, 165, 2.76, 83, 41, 29],
        [52, 24, 60, 1.03, 50, 21, 30],
        [46, 5, 49, 0.28, 10, 6, 31]
      ];
      var dataSH = [[187, 143, 201, 1.39, 89, 53, 31]];
      var dataYours = [];
      var dataOthers = [];
      var indicator = [];
      this.level.forEach(item => {
        indicator.push({ name: item.name, max: 100 });
        dataYours.push(item.scorePercent);
        dataOthers.push();
      });

      this.option10 = {
        backgroundColor: "#fafafa",
        legend: {
          top: 20,
          left: 20,
          data: ["深圳市其他企业", "您的企业"],
          itemGap: 20,
          //   textStyle: {
          //     color: "#fff",
          //     fontSize: 14
          //   },
          selectedMode: "multiple"
        },
        radar: {
          indicator: [
            { name: "销售服务", max: 300 },
            { name: "互联互通", max: 250 },
            { name: "设备管理", max: 300 },
            { name: "采购管理", max: 5 },
            { name: "过程质量", max: 200 },
            { name: "研发设计", max: 100 }
          ],
          shape: "circle",

          name: {
            textStyle: {
              color: "rgb(238, 197, 102)"
            }
          },
          splitLine: {
            lineStyle: {
              color: [
                "rgba(0, 134,128, 0.1)",
                "rgba(0, 134,128, 0.2)",
                "rgba(0, 134,128, 0.4)",
                "rgba(0, 134,128, 0.6)",
                "rgba(0, 134,128, 0.8)",
                "rgba(0, 134,128, 1)"
              ].reverse()
            }
          },
          splitArea: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "rgba(238, 197, 102, 0.5)"
            }
          }
        },
        series: [
          {
            name: "深圳市其他企业",
            type: "radar",
            lineStyle: lineStyle,
            data: dataBJ,
            symbol: "none",
            itemStyle: {
              normal: {
                color: "#F9713C"
              }
            },
            areaStyle: {
              normal: {
                opacity: 0.05
              }
            }
          },
          {
            name: "您的企业",
            type: "radar",
            lineStyle: lineStyle,
            data: dataSH,
            symbol: "none",
            itemStyle: {
              normal: {
                color: "blue"
              }
            },
            areaStyle: {
              normal: {
                opacity: 0.1
              }
            }
          }
        ]
      };
      this.mychart10 = this.$echarts.init(
        document.getElementById("chartOption10")
      );
      this.mychart10.setOption(this.option10, true);
      window.addEventListener("resize", () => {
        this.mychart10.resize();
      });
    },
    showChart11() {
      var lineStyle = {
        normal: {
          width: 1,
          opacity: 0.5
        }
      };
      var dataBJ = [
        [55, 9, 56, 0.46, 18, 6, 1],
        [25, 11, 21, 0.65, 34, 9, 2],
        [56, 7, 63, 0.3, 14, 5, 3],
        [33, 7, 29, 0.33, 16, 6, 4],
        [42, 24, 44, 0.76, 40, 16, 5],
        [82, 58, 90, 1.77, 68, 33, 6],
        [74, 49, 77, 1.46, 48, 27, 7],
        [78, 55, 80, 1.29, 59, 29, 8],
        [267, 216, 280, 4.8, 108, 64, 9],
        [185, 127, 216, 2.52, 61, 27, 10],
        [39, 19, 38, 0.57, 31, 15, 11],
        [41, 11, 40, 0.43, 21, 7, 12],
        [64, 38, 74, 1.04, 46, 22, 13],
        [108, 79, 120, 1.7, 75, 41, 14],
        [108, 63, 116, 1.48, 44, 26, 15],
        [33, 6, 29, 0.34, 13, 5, 16],
        [94, 66, 110, 1.54, 62, 31, 17],
        [186, 142, 192, 3.88, 93, 79, 18],
        [57, 31, 54, 0.96, 32, 14, 19],
        [22, 8, 17, 0.48, 23, 10, 20],
        [39, 15, 36, 0.61, 29, 13, 21],
        [94, 69, 114, 2.08, 73, 39, 22],
        [99, 73, 110, 2.43, 76, 48, 23],
        [31, 12, 30, 0.5, 32, 16, 24],
        [42, 27, 43, 1, 53, 22, 25],
        [154, 117, 157, 3.05, 92, 58, 26],
        [234, 185, 230, 4.09, 123, 69, 27],
        [160, 120, 186, 2.77, 91, 50, 28],
        [134, 96, 165, 2.76, 83, 41, 29],
        [52, 24, 60, 1.03, 50, 21, 30],
        [46, 5, 49, 0.28, 10, 6, 31]
      ];
      var dataSH = [[187, 143, 201, 1.39, 89, 53, 31]];
      var dataYours = [];
      var dataOthers = [];
      var indicator = [];
      this.level.forEach(item => {
        indicator.push({ name: item.name, max: 100 });
        dataYours.push(item.scorePercent);
        dataOthers.push();
      });

      this.option11 = {
        backgroundColor: "#fafafa",
        legend: {
          top: 20,
          left: 20,
          data: ["南山区其他企业", "您的企业"],
          itemGap: 20,
          //   textStyle: {
          //     color: "#fff",
          //     fontSize: 14
          //   },
          selectedMode: "multiple"
        },
        radar: {
          indicator: [
            { name: "销售服务", max: 300 },
            { name: "互联互通", max: 250 },
            { name: "设备管理", max: 300 },
            { name: "采购管理", max: 5 },
            { name: "过程质量", max: 200 },
            { name: "研发设计", max: 100 }
          ],
          shape: "circle",

          name: {
            textStyle: {
              color: "rgb(238, 197, 102)"
            }
          },
          splitLine: {
            lineStyle: {
              color: [
                "rgba(0, 134,128, 0.1)",
                "rgba(0, 134,128, 0.2)",
                "rgba(0, 134,128, 0.4)",
                "rgba(0, 134,128, 0.6)",
                "rgba(0, 134,128, 0.8)",
                "rgba(0, 134,128, 1)"
              ].reverse()
            }
          },
          splitArea: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "rgba(238, 197, 102, 0.5)"
            }
          }
        },
        series: [
          {
            name: "南山区其他企业",
            type: "radar",
            lineStyle: lineStyle,
            data: dataBJ,
            symbol: "none",
            itemStyle: {
              normal: {
                color: "#F9713C"
              }
            },
            areaStyle: {
              normal: {
                opacity: 0.05
              }
            }
          },
          {
            name: "您的企业",
            type: "radar",
            lineStyle: lineStyle,
            data: dataSH,
            symbol: "none",
            itemStyle: {
              normal: {
                color: "blue"
              }
            },
            areaStyle: {
              normal: {
                opacity: 0.1
              }
            }
          }
        ]
      };
      this.mychart11 = this.$echarts.init(
        document.getElementById("chartOption11")
      );
      this.mychart11.setOption(this.option11, true);
      window.addEventListener("resize", () => {
        this.mychart11.resize();
      });
    },
    showChart12() {
      var showData = [];
      this.chartDataArray12.forEach(lev => {
        var arry = {};
        this.chartData12.columns.forEach(colum => {
          if (colum == "标题") {
            arry[colum] = lev.name;
          } else if (colum == "实际") {
            arry[colum] = lev.score;
          } else if (colum == "预期") {
            arry[colum] = lev.expectScore;
          }
        });
        showData.push(arry);
      });
      this.chartData12.rows = showData;
      window.addEventListener("resize", () => {
        this.$refs.tab1bar12.echarts.resize();
      });
    },
    showChart13() {
      //   var lineStyle = {
      //     normal: {
      //       width: 1,
      //       opacity: 0.5
      //     }
      //   };
      this.level.forEach(item => {
        this.chartData13.columns.push(item.name);
      });
      var currentData = { 标题: "实际" },
        expertData = { 标题: "预期" };
      let indicatorArray = [];
      let Edata = [];
      let Cdata = [];
      this.chartData13.columns.forEach(colum => {
        this.level.forEach(lev => {
          if (lev.name == colum) {
            currentData[colum] = lev.score;
            expertData[colum] = lev.expectScore;
            indicatorArray.push({ name: lev.name, max: 100 });
            Edata.push(lev.scorePercent);
            Cdata.push((lev.expectScore / lev.total).toFixed(2) * 100);
          }
        });
      });

      this.chartData13.rows.push(expertData);
      this.chartData13.rows.push(currentData);
      this.option13 = {
        backgroundColor: "#fafafa",
        legend: {
          top: 20,
          left: 20,
          data: ["预期", "实际"]
        },
        radar: [
          {
            indicator: indicatorArray,

            shape: "circle",
            splitNumber: Edata.length,

            name: {
              textStyle: {
                color: "#333"
              }
            },
            splitArea: {
              areaStyle: {
                color: ["rgba(114, 172, 209, 0.2)", "rgba(114, 172, 209, 0.4)"]
              }
            }
          }
        ],
        series: [
          {
            name: "雷达图",
            type: "radar",
            itemStyle: {
              emphasis: {
                // color: 各异,
                lineStyle: {
                  width: 4
                }
              }
            },
            data: [
              {
                value: Edata,
                name: "预期",
                label: {
                  normal: {
                    show: true,
                    formatter: function(params) {
                      return params.value + "%";
                    }
                  }
                },
                itemStyle: {
                  normal: {
                    color: "#19d4ae"
                  }
                }
              },
              {
                value: Cdata,
                name: "实际",
                label: {
                  normal: {
                    show: true,
                    formatter: function(params) {
                      return params.value + "%";
                    }
                  }
                },
                itemStyle: {
                  normal: {
                    color: "#5ab1ef"
                  }
                }
              }
            ]
          }
        ]
      };
      this.mychart13 = this.$echarts.init(
        document.getElementById("chartOption13")
      );
      this.mychart13.setOption(this.option13, true);
      window.addEventListener("resize", () => {
        this.mychart13.resize();
      });
    },
    getReport_datas(type, url, param) {
      let $this = this;
      $this
        .$http({
          method: type,
          url: url,
          data: param
        })
        .then(res => {
          console.log(res);
          $this.reportData.scale = res.data.return.report_info.scale;
          
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  computed: {
    reportParm() {
      return this.$store.state.evlaluating.evaluatingPage.reportParm;
    },
    session_id() {
      return this.$store.state.loginPage.session_id;
    }
  },
  updated: function() {}
};
</script>


<style scoped>
</style>

