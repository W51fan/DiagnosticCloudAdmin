<template>
    <div id="pageBadge" style="margin-bottom: 81px;">
        <v-layout>
            <v-flex lg12 md12 sm12 xs12>
                <v-card>
                    <v-container fill-height fluid>
                        <v-layout row wrap>
                            <v-flex lg12 md12 sm12 xs12 align-end flexbox>
                                <v-layout>
                                    <v-flex lg3 md3 sm3 xs3 style="padding: 0 3% 0 0;max-height: 82px;">
                                        <img :src="enterpriseLogo!==''?enterpriseLogo!==null?'/IMAGE/'+enterpriseLogo:'/static/imgs/noImage.png':'/static/imgs/noImage.png'" style="width: 100%;height: 100%;" >
                                    </v-flex>
                                    <v-flex lg9 md9 sm9 xs9 >
                                        <v-layout row wrap>
                                            <v-flex lg5 md10 sm10 xs10 >
                                                    <div class="headline">
                                                        <span>{{enterpriseName}}</span>
                                                    </div>
                                                    <div style="padding: 10px 0;font-size: 20px;">
                                                        <span>{{testName}}</span>
                                                    </div>
                                                </v-flex>
                                                <v-flex lg5 md10 sm10 xs10 style="margin: 12px 0;">
                                                    <div style="padding: 10px 0;">
                                                        <el-progress :percentage="Math.floor(answerDetails.answered_count-1/answerDetails.count*100)" ></el-progress>
                                                    </div>
                                                </v-flex>
                                                <v-flex lg2 md2 sm2 xs2 style="text-align: center;">
                                                    <div style="padding: 10px 0;cursor: pointer;" @click="close()">
                                                        <v-icon x-large>highlight_off</v-icon>
                                                    </div>
                                                </v-flex>
                                        </v-layout>
                                    </v-flex>
                                </v-layout>
                            </v-flex>

                            
                        </v-layout>
                    </v-container>
                    <v-flex lg12 md12 sm12 xs12>
                        <v-divider></v-divider>
                    </v-flex>

                    <v-container fill-height fluid>
                        <v-layout row wrap>
                            <v-flex lg12 md12 sm12 xs12 align-end>
                                <v-layout>
                                    <v-flex lg3 md3 sm3 xs3 style="padding: 0 3% 0 0;">
                                       <!-- <el-input
                                        placeholder="输入关键字进行过滤"
                                        v-model="filterText">
                                        </el-input> -->

                                        <el-tree
                                        class="filter-tree"
                                        :data="TreedataArray"
                                        :props="defaultProps"
                                        default-expand-all
                                        highlight-current
                                        @node-click="selectTree"
                                        
                                        ref="tree">
                                        </el-tree>
                                    </v-flex>

                                    <v-flex lg1 md1 sm1 xs1>
                                        <v-divider vertical></v-divider>
                                    </v-flex>

                                    <v-flex lg9 md9 sm9 xs9>
                                        <v-layout row wrap>
                                            <v-flex lg12 md12 sm12 xs12 style="margin: 30px 0;">
                                                <v-layout row wrap style="margin: 15px 0;">
                                                       <div style="font-size: 24px;font-weight: 600;margin: 10px 0;">
                                                            <span>{{showAnswerArray.level1}}</span>
                                                            <span>/</span>
                                                            <span>{{showAnswerArray.level2}}</span>
                                                            <span>/</span>
                                                            <span>{{showAnswerArray.level3}}</span>
                                                            <span v-if="showAnswerArray.level4 !== ''&&showAnswerArray.level4!==null">/</span>
                                                            <span>{{showAnswerArray.level4}}</span>
                                                            <span v-if="showAnswerArray.level5 !== ''&&showAnswerArray.level5!==null">/</span>
                                                            <span>{{showAnswerArray.level5}}</span>
                                                        </div>
                                                        <v-spacer></v-spacer>
                                                        <v-flex lg4 md4 sm12 xs12 style="display: inline-flex;margin: 10px 0;">
                                                            <div style="display: inline-flex;cursor: pointer;" @click="preQuestion()">
                                                                <i class="material-icons" style="color: rgb(0, 150, 136);">keyboard_arrow_left</i>
                                                                <span style="line-height: 24px;color: rgb(0, 150, 136);">前一题</span>
                                                            </div>
                                                            <div>
                                                                
                                                                <span style="margin: 0 5px;">第</span>
                                                                <input v-model="currentQuestionIndex" autofocus :pattern="[0-answerDetails.return.length]" style="width: 30px;border: 1px solid #009688;margin: 0 5px;text-align: center;height: 20px;" v-bind:oninput="changeQuestion()" v-bind:onpropertychange="changeQuestion()"></input>
                                                                <span style="margin: 0 5px;">/</span>
                                                                <span>{{answerDetails.return.length}}</span>
                                                                <span style="margin: 0 5px;">题</span>
                                                                <div style="display: inline-flex;margin-left: 10px;cursor: pointer;" @click="nextQuestion()">
                                                                        <span style="line-height: 24px;color: rgb(0, 150, 136);">后一题</span>
                                                                        <i class="material-icons" style="color: rgb(0, 150, 136);">keyboard_arrow_right</i>
                                                                </div>
                                                            </div>
                                                        </v-flex>
                                                </v-layout>
                                                
                                                <div style="font-weight: 600;font-size: 20px;padding: 10px 0;">
                                                    <span style="font-size:16px;font-weight:400;">期望</span>
                                                    <span style="font-size:16px;font-weight:400;">实际</span>
                                                    <span style="margin-left:5px;">
                                                        {{questionIndex}}.{{showAnswerArray.question}}
                                                    </span>
                                                </div>
                                                <div v-for="(q, i) in showAnswerArray.answerLists" :key="q">
                                                    <div style="padding: 16px 0;display:inline-flex;font-size: 16px;">
                                                        <!-- <v-radio v-model="a" disabled :value="i+1" ></v-radio> -->
                                                        <input type="radio"  :value="i+1"  :disabled="true" :checked="showAnswerArray.answered == i+1" style="height: 24px;width: 24px;margin-right: 16px;">
                                                        <input type="radio"  :value="i+1"  :disabled="true" :checked="showAnswerArray.expected == i+1" style="height: 24px;width: 24px;margin-right: 16px;">
                                                        <!-- <v-radio v-model="q.expected" disabled :value="i+1" ></v-radio> -->
                                                        <span>{{i+1}}、{{q}}</span>
                                                    </div>
                                                </div>
                                                
                                            </v-flex>
                                        </v-layout>
                                    </v-flex>
                                </v-layout>
                            </v-flex>

                            
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<style scoped>
</style>

<script>
export default {
  name: "AnswerPage",
  data: () => ({
    // answerDetails: {
    //   errorCode: 0,
    //   errorMsg: "获取完成",
    //   answered_count: 26,
    //   count: 35,
    //   return: [
    //     {
    //       id: 161,
    //       question:
    //         "企业是否有清晰的智能制造战略规划、实施步骤以及相应的预算支撑？",
    //       answerType: 1,
    //       answerLists: [
    //         "智能制造的持续推动与公司的长远战略挂钩，并被不断进行优化和完善",
    //         "智能制造发展战略正在推动公司发生变革，公司管理结构得到优化",
    //         "公司已经按照发展规划实施智能制造，已有资金投入",
    //         "有企业三年及以上智能制造战略的具体规划",
    //         "有简单的智能制造升级的想法，并在内部进行了多次研讨",
    //         "无企业智能制造战略规划"
    //       ],
    //       level1: "制造维度",
    //       level2: "战略规划",
    //       level3: "战略管理",
    //       level4: "",
    //       level5: "",
    //       answered: 1,
    //       expected: 1,
    //       idx: 327
    //     },
    //     {
    //       id: 162,
    //       question: "公司是否为智能制造建立的专门的组织？",
    //       answerType: 1,
    //       answerLists: [
    //         "组织中的人才体系覆盖智能制造所涉及到的所有专业",
    //         "组织中有精益管理、自动化、信息化以及智能制造整体规划人才",
    //         "组织中有精益管理、自动化、信息化人才",
    //         "组织中有精益管理、自动化人才",
    //         "组织中有精益管理人才",
    //         "组织中无智能制造体系专业人才"
    //       ],
    //       level1: "制造维度",
    //       level2: "企业运营",
    //       level3: "组织建设",
    //       level4: "",
    //       level5: "",
    //       answered: 2,
    //       expected: 1,
    //       idx: 327
    //     },
    //     {
    //       id: 163,
    //       question: "企业是否能快速的计算出生产成本并加以分析？",
    //       answerType: 1,
    //       answerLists: [
    //         "及时得到资金信息应用于成本控制，通过资金流动状况反映物流和生产经营情况，随时分析企业的经济效益，参与决策，指导和控制生产经营活动。",
    //         "通过与其它业务系统的支持以及和MES等车间管理系统集成，做到成本的实时控制以及和企业级成本的信息交互",
    //         "和财务系统集成，保证数据的准确性，提高与财务人员的协同效率",
    //         "统一管理实物形态的物料流动，由生产活动直接产生财务数据，实现了物流与资金流的集成和统一，保证了生产和财务数据一致",
    //         "利用一些手工采集的数据进行成本核算，准确性差",
    //         "无法对生产成本进行核算"
    //       ],
    //       level1: "制造维度",
    //       level2: "企业运营",
    //       level3: "成本管理",
    //       level4: "",
    //       level5: "",
    //       answered: 1,
    //       expected: 1,
    //       idx: 327
    //     },
    //     {
    //       id: 164,
    //       question: "公司是否有标准的产品文档结构设计与应用流程？",
    //       answerType: 1,
    //       answerLists: [
    //         "产品设计文档实现信息化管理，并在部门内进行共享",
    //         "产品设计文档实现信息化管理",
    //         "标准的产品设计已形成策划方案，并将文档归档",
    //         "大部分产品设计文档归档",
    //         "部分产品设计已形成策划方案并将文档归档",
    //         "无产品策划归档文档"
    //       ],
    //       level1: "制造维度",
    //       level2: "研发设计",
    //       level3: "产品设计",
    //       level4: "",
    //       level5: "",
    //       answered: 1,
    //       expected: 1,
    //       idx: 327
    //     },
    //     {
    //       id: 165,
    //       question: "公司是否具有完善的物料/BOM管理体系？",
    //       answerType: 1,
    //       answerLists: [
    //         "构建集成产品设计信息的三维模型，进行关键环节的设计仿真优化",
    //         "实现计算机辅助三维设计及产品设计内部的协同，有验证与确认",
    //         "与CAD、ERP系统有做很好的集成连接，实现企业内部业务的协同高效",
    //         "具有完善的物料/BOM管理体系，包括物料认证流程以及审批流程",
    //         "物料信息库信息不完整，未维护在统一的数据库中，工程师操作困难",
    //         "零部件数量众多，维护工作量大，且BOM信息基本由人工维护"
    //       ],
    //       level1: "制造维度",
    //       level2: "研发设计",
    //       level3: "产品设计",
    //       level4: "",
    //       level5: "",
    //       answered: 1,
    //       expected: 1,
    //       idx: 327
    //     },
    //     {
    //       id: 166,
    //       question: "公司是否具有完善的研发项目管理流程？",
    //       answerType: 1,
    //       answerLists: [
    //         "基于项目中产生的量化数据，进行项目分析，便于产品的智能优化",
    //         "基于与上下游供应链协同研发的项目，项目输出内外部集中管控",
    //         "项目输出内部集中管控，具备完整性，确保研发数据安全",
    //         "有标准的研发项目管理流程",
    //         "简单的项目管理体系",
    //         "无完善的项目管理体系"
    //       ],
    //       level1: "制造维度",
    //       level2: "研发设计",
    //       level3: "产品设计",
    //       level4: "",
    //       level5: "",
    //       answered: 1,
    //       expected: 1,
    //       idx: 327
    //     },
    //     {
    //       id: 167,
    //       question: "公司是否具有完善的产品变更管理流程？",
    //       answerType: 1,
    //       answerLists: [
    //         "基于产品变更产生的量化数据，进行产品分析，便于企业事前进行调整",
    //         "客户个性化要求高,能为客户提供不同的配置的产品供选择",
    //         "电子产品生产周期短，与生产、物料等方面的协调配合度非常高",
    //         "有标准的变更管理流程，有详细的记录，所有部门有统一的版本标准",
    //         "简单的变更管理流程",
    //         "产品变更频繁，无完善的产品变更管理流程"
    //       ],
    //       level1: "制造维度",
    //       level2: "研发设计",
    //       level3: "产品设计",
    //       level4: "",
    //       level5: "",
    //       answered: 1,
    //       expected: 1,
    //       idx: 327
    //     },
    //     {
    //       id: 168,
    //       question: "公司是否有工艺流程的优化创新机制？",
    //       answerType: 1,
    //       answerLists: [
    //         "基于知识库辅助工艺创新推理及在线自主优化",
    //         "实现工艺设计关键环节的仿真以及工艺设计的内部协同",
    //         "实现计算机辅助工艺规划和工艺设计，有质量监控，需求工程、设计与开发、验证与确认等功能",
    //         "有标准的工艺设计流程及相关文档管理",
    //         "简单的工艺设计流程和标准",
    //         "无工艺设计流程"
    //       ],
    //       level1: "制造维度",
    //       level2: "研发设计",
    //       level3: "工艺设计",
    //       level4: "",
    //       level5: "",
    //       answered: 1,
    //       expected: 1,
    //       idx: 327
    //     },
    //     {
    //       id: 169,
    //       question: "供应商管理是否全面高效？",
    //       answerType: 1,
    //       answerLists: [
    //         "实现企业级供应商协同管理，供应商及其资源能够有效参与到企业的产品设计和生产制造甚至日常销售过程中。",
    //         "实现企业级信息化管理，供应商识别、准入、维护和评估以及供应商退出管理",
    //         "运用软件系统实现供应商信息化管理",
    //         "有一套完整的供应商管理流程，包含供应商的进入和考核管理，并严格执行",
    //         "简单的手工word或Excel供应商管理机制",
    //         "无供应商管理体系"
    //       ],
    //       level1: "制造维度",
    //       level2: "采购管理",
    //       level3: "供应商管理",
    //       level4: "",
    //       level5: "",
    //       answered: 1,
    //       expected: 1,
    //       idx: 327
    //     },
    //     {
    //       id: 170,
    //       question: "公司是否启用供应链内外部协同机制，满足柔性化生产要求？",
    //       answerType: 1,
    //       answerLists: [
    //         "内部实现采购信息与与生产、仓储等管理过程联合，外部实现信息与供应商的实时传递，保证生产的及时供料以及物料的成套性",
    //         "信息实时传递，采购管理系统与生产、仓储管理等业务系统的集成",
    //         "利用软件信息实现采购信息的共享，实现与供应商的交互",
    //         "有一套标准的产供销协同管理流程以及供应商管理体系",
    //         "有简单的产供销协同机制以及供应商协同机制",
    //         "无内外部协同管理"
    //       ],
    //       level1: "制造维度",
    //       level2: "采购管理",
    //       level3: "采购协同管理",
    //       level4: "",
    //       level5: "",
    //       answered: 1,
    //       expected: 1,
    //       idx: 327
    //     },
    //     {
    //       id: 171,
    //       question: "公司生产计划（替代料）管理模式？",
    //       answerType: 1,
    //       answerLists: [
    //         "在原有系统基础上，提供预测数据模型，实现市场预测功能",
    //         "主生产计划系统与销售订单系统对接",
    //         "运用软件系统实现主生产计划的管理",
    //         "有一套标准的主生产计划流程，充分考虑替代料，并严格执行",
    //         "简单的手工word或Excel计划制作并下发",
    //         "无生产计划管理"
    //       ],
    //       level1: "制造维度",
    //       level2: "生产运作",
    //       level3: "生产计划管理",
    //       level4: "",
    //       level5: "",
    //       answered: 1,
    //       expected: 1,
    //       idx: 327
    //     },
    //     {
    //       id: 172,
    //       question: "公司是否有物料需求（替代料）管理流程？",
    //       answerType: 1,
    //       answerLists: [
    //         "系统根据主生产计划可以将物料需求细化到每天",
    //         "运用软件系统实现从主生产计划中运算物料需求",
    //         "运用软件系统实现物料需求的管理",
    //         "有一套标准的物料需求计划流程，充分考虑替代料，并严格执行",
    //         "简单的手工word或Excel物料需求清单制作并下发",
    //         "无物料需求管理"
    //       ],
    //       level1: "制造维度",
    //       level2: "生产运作",
    //       level3: "生产计划管理",
    //       level4: "",
    //       level5: "",
    //       answered: 1,
    //       expected: 1,
    //       idx: 327
    //     },
    //     {
    //       id: 173,
    //       question: "生产计划中是否考虑过紧急计划？",
    //       answerType: 1,
    //       answerLists: [
    //         "系统制定紧急计划并对后续生产计划进行联动调整",
    //         "系统进行紧急计划制定",
    //         "线下利用工具安排紧急生产计划",
    //         "有一套标准的紧急计划流程",
    //         "通过人工方式增加紧急计划",
    //         "没有考虑过紧急计划"
    //       ],
    //       level1: "制造维度",
    //       level2: "生产运作",
    //       level3: "生产计划管理",
    //       level4: "",
    //       level5: "",
    //       answered: 1,
    //       expected: 1,
    //       idx: 327
    //     },
    //     {
    //       id: 174,
    //       question: "生产现场的工艺管理？",
    //       answerType: 1,
    //       answerLists: [
    //         "通过信息化手段自动分发工艺资料等到工位",
    //         "工艺资料信息化管理，实现版本统一管理",
    //         "作业指导书管理电子化，使用智能终端进行呈现",
    //         "有标准的作业指导书，登记发放有受控管理",
    //         "有简单的作业指导书",
    //         "无生产作业指导书，员工靠经验生产"
    //       ],
    //       level1: "制造维度",
    //       level2: "生产运作",
    //       level3: "生产过程控制",
    //       level4: "",
    //       level5: "",
    //       answered: 1,
    //       expected: 1,
    //       idx: 327
    //     },
    //     {
    //       id: 175,
    //       question: "生产制程的防呆防错？",
    //       answerType: 1,
    //       answerLists: [
    //         "通过生产模型的搭建与仿真技术，控制生产过程中非授权操作、上料错误、站点误投、异常信息报警等",
    //         "以生产计划/工单为抓手，实现生产上下游环节的协同",
    //         "以生产计划/工单为抓手，实现生产与供应、物流、质量、设备、动力各个部门间的业务协同",
    //         "在工艺设计和自动化的基础上，利用信息化从全局角度并利用数据统计技术进行更加全面的防错处理",
    //         "利用工艺设计和自动化装置等手段进行防错",
    //         "人工目视化防错"
    //       ],
    //       level1: "制造维度",
    //       level2: "生产运作",
    //       level3: "生产过程控制",
    //       level4: "",
    //       level5: "",
    //       answered: 1,
    //       expected: 1,
    //       idx: 327
    //     },
    //     {
    //       id: 176,
    //       question: "生产过程的控制管理？",
    //       answerType: 1,
    //       answerLists: [
    //         "管理人员采用移动设备进行生产管理异常的处理和生产管理，如手机APP等",
    //         "管理人员采用移动方式进行生产数据的实时查询，如手机APP、智能手表等",
    //         "管理人员通过各类智能终端大屏进行生产现场的数据实时查询或管理",
    //         "生产人员与关键核心设备采用设备自带触摸设备进行人机交互操作，自动采集相关数据",
    //         "通过手工记录表单，了解生产实际状况",
    //         "无生产过程管理"
    //       ],
    //       level1: "制造维度",
    //       level2: "生产运作",
    //       level3: "生产过程控制",
    //       level4: "",
    //       level5: "",
    //       answered: 1,
    //       expected: 1,
    //       idx: 327
    //     },
    //     {
    //       id: 177,
    //       question: "生产过程维修管理与成品出厂后维修管理的流程？",
    //       answerType: 1,
    //       answerLists: [
    //         "基于大数据分析，并依据缺陷与不良原因，缺陷与解决方案，缺陷与不良位置，缺陷与责任部门的交叉分析，找出有效的改善措施",
    //         "建立对外的维修管理平台，对成品出厂后的销售和服务过程中质量相关问题进行有效管理",
    //         "通过信息技术手段，建立一套线上的维修管理系统，用于内部各部门的业务协同",
    //         "有标准的维修管理流程，包括维修动作分类、PCBA返修、成品返修、RMA管理",
    //         "有简单的维修填单记录",
    //         "无维修的标准流程"
    //       ],
    //       level1: "制造维度",
    //       level2: "生产运作",
    //       level3: "生产维修管理",
    //       level4: "",
    //       level5: "",
    //       answered: 1,
    //       expected: 1,
    //       idx: 327
    //     },
    //     {
    //       id: 178,
    //       question: "生产过程质量管理机制？",
    //       answerType: 1,
    //       answerLists: [
    //         "通过在线监测分析和预判，具备自动修复和校正参数",
    //         "关键工位自动形成各类控制图，知识库，纠正措施",
    //         "运用信息技术实现质量过程检验、管理的信息化",
    //         "有标准的质量过程管理流程，并有详细记录",
    //         "有简单的质量过程记录",
    //         "无质量过程记录"
    //       ],
    //       level1: "制造维度",
    //       level2: "过程质量",
    //       level3: "质量管理",
    //       level4: "",
    //       level5: "",
    //       answered: 1,
    //       expected: 1,
    //       idx: 327
    //     },
    //     {
    //       id: 179,
    //       question: "公司是否具有完善的生产追溯管理机制？",
    //       answerType: 1,
    //       answerLists: [
    //         "实现产品质量全生命周期管理，并为新产品提供建议",
    //         "运用RFID、二维码等形式实现多功能追溯",
    //         "将质量信息用信息技术保存，提高查询效率",
    //         "有标准的质量追溯措施，并严格执行",
    //         "有简单的批次追溯记录",
    //         "无质量追溯功能"
    //       ],
    //       level1: "制造维度",
    //       level2: "过程质量",
    //       level3: "质量追溯",
    //       level4: "",
    //       level5: "",
    //       answered: 1,
    //       expected: 1,
    //       idx: 327
    //     },
    //     {
    //       id: 180,
    //       question:
    //         "企业设备是否能实现自动化、联网化，设备管理是否有系统支持？",
    //       answerType: 1,
    //       answerLists: [
    //         "设备实现与车间管理系统互通，可以接受管理指令",
    //         "设备实现与管理系统联网，可以直接采集数据",
    //         "大部分设备为先进的数控设备，可以直接采数",
    //         "大部分设备具有PLC等控制模块，但需要进行改造",
    //         "简单的加工生产设备",
    //         "手工操作"
    //       ],
    //       level1: "制造维度",
    //       level2: "能源设备",
    //       level3: "设备管理",
    //       level4: "",
    //       level5: "",
    //       answered: 1,
    //       expected: 1,
    //       idx: 327
    //     },
    //     {
    //       id: 181,
    //       question: "设备的日常管理流程？",
    //       answerType: 1,
    //       answerLists: [
    //         "保养信息可自动反馈和过程优化，形成经验沉淀",
    //         "保养信息具有数据分析功能，自动形成保养报表",
    //         "保养管理信息化，由系统进行保养预警管理",
    //         "有规范的保养流程，并将相关记录录入电脑文档",
    //         "有简单的保养流程，有简单记录",
    //         "设备缺乏保养，无设备日常保养记录"
    //       ],
    //       level1: "制造维度",
    //       level2: "能源设备",
    //       level3: "设备管理",
    //       level4: "",
    //       level5: "",
    //       answered: 1,
    //       expected: 1,
    //       idx: 327
    //     },
    //     {
    //       id: 182,
    //       question: "设备数据收集的自动化程度？",
    //       answerType: 1,
    //       answerLists: [
    //         "综合设备与生产相关信息，可追溯所有产品质量、人员、设备所有参数、状态等数据",
    //         "生产设备整合数据进行数据收集，能自动或由工作人员确认后系统自动回报数据",
    //         "人员在生产线借由现场计算机、数据收集器或人员操作等方式，实时记录设备数据",
    //         "现场设备工员填表整理数据，事后统计载入系统，包括生产数据和检测数据",
    //         "设备支持数据收集，没有采集利用",
    //         "设备不支持数据收集"
    //       ],
    //       level1: "制造维度",
    //       level2: "能源设备",
    //       level3: "设备管理",
    //       level4: "",
    //       level5: "",
    //       answered: 1,
    //       expected: 1,
    //       idx: 327
    //     },
    //     {
    //       id: 183,
    //       question: "设备综合效率OEE管理？",
    //       answerType: 1,
    //       answerLists: [
    //         "通过OEE数据采集的分析与应用，构建数字化工厂的基础",
    //         "通过OEE的计算，挖掘生产潜力，提高生产效率",
    //         "设备的运转状态与企业的内部业务结合，形成全员参与的的设备维护的综合管理体制",
    //         "全产线的OEE计算统计，并且建立对应的考核体系",
    //         "关键设备的OEE计算",
    //         "无OEE计算数据"
    //       ],
    //       level1: "制造维度",
    //       level2: "能源设备",
    //       level3: "设备管理",
    //       level4: "",
    //       level5: "",
    //       answered: 1,
    //       expected: 1,
    //       idx: 327
    //     },
    //     {
    //       id: 184,
    //       question: "仓库对物料的管理标准？",
    //       answerType: 1,
    //       answerLists: [
    //         "与配送等其它系统集成，能够实现最优库存和即时供货",
    //         "有严格的管理规范，包括湿敏元件、呆滞料、物料有效期的管理",
    //         "货架管理采用智能货架系统，能实时了解货物状态。",
    //         "标准的定位管理和颜色区分管理，信息化看板。",
    //         "有简单的标识、标牌管理，",
    //         "无管理标准"
    //       ],
    //       level1: "制造维度",
    //       level2: "仓库物流",
    //       level3: "库存管理",
    //       level4: "",
    //       level5: "",
    //       answered: 1,
    //       expected: 1,
    //       idx: 327
    //     },
    //     {
    //       id: 185,
    //       question: "备品备件管理流程？",
    //       answerType: 1,
    //       answerLists: [
    //         "备品备件管理与采购管理实现无缝信息连接",
    //         "备品备件管理信息化，设置安全库存预警机制",
    //         "备品备件管理信息化，库存信息一目了然",
    //         "有规范的备品备件流程，并将相关记录录入电脑",
    //         "备品备件管理靠经验采购，有简单记录",
    //         "无备品备件管理流程和相关记录"
    //       ],
    //       level1: "制造维度",
    //       level2: "仓库物流",
    //       level3: "备品备件管理",
    //       level4: "",
    //       level5: "",
    //       answered: 1,
    //       expected: 1,
    //       idx: 327
    //     },
    //     {
    //       id: 186,
    //       question: "公司仓储出入库流程的管理机制？",
    //       answerType: 1,
    //       answerLists: [
    //         "实现全流程无人化、信息化、自动化作业",
    //         "采用仓储管理系统和控制系统进行控制管理；",
    //         "通过信息技术实现快速出入库管理，如RFID、二维码等。",
    //         "有标准的出入库管理流程，并严格执行",
    //         "有简单的出入库填单记录",
    //         "无出入库标准管理"
    //       ],
    //       level1: "制造维度",
    //       level2: "仓库物流",
    //       level3: "出入库管理",
    //       level4: "",
    //       level5: "",
    //       answered: 1,
    //       expected: 1,
    //       idx: 327
    //     },
    //     {
    //       id: 187,
    //       question:
    //         "客户及订单信息是否有信息化系统管理，并能通过系统实现销售决策数据支持？",
    //       answerType: 1,
    //       answerLists: [
    //         "实现对电子商务平台的大数据分析和个性化营销等功能",
    //         "应用知识模型优化销售预测，制定更为准确的销售计划",
    //         "通过信息系统实现销售全过程管理，强化客户关系管理",
    //         "通过信息系统对销售业务进行简单管理",
    //         "通过Execl等常规手段进行销售信息管理",
    //         "无销售信息管理要求"
    //       ],
    //       level1: "制造维度",
    //       level2: "销售服务",
    //       level3: "销售管理",
    //       level4: "",
    //       level5: "",
    //       answered: 1,
    //       expected: 1,
    //       idx: 327
    //     },
    //     {
    //       id: 188,
    //       question:
    //         "客户服务体系是否有规范的流程及智能化服务内容，可快速、专业的响应客户诉求？",
    //       answerType: 1,
    //       answerLists: [
    //         "通过智能客服机器人，提供智能服务、个性化服务等",
    //         "实现面向客户的精细化知识管理，提供移动客服方式",
    //         "具有规范的服务体系和客户服务制度，通过信息系统进行客户服务管理",
    //         "设立客户服务部门，通过信息化手段管理客户服务信息，并把反馈给相关部门",
    //         "通过电话等常规手段进行客户服务信息管理",
    //         "无客户信息服务管理要求"
    //       ],
    //       level1: "制造维度",
    //       level2: "销售服务",
    //       level3: "服务管理",
    //       level4: "",
    //       level5: "",
    //       answered: 1,
    //       expected: 1,
    //       idx: 327
    //     },
    //     {
    //       id: 189,
    //       question: "企业是否具备对制造全过程物料的跟踪和可追溯性？",
    //       answerType: 1,
    //       answerLists: [
    //         "基于生产数据与大数据的分析，提升产品追溯能力，保障产品质量提升",
    //         "实现生产执行系统与上层企业运营系统的集成，实现企业内部信息和数据的集中管理",
    //         "通过信息技术的支持，对生产车间现场进行动态跟踪、监控、信息采集与管理",
    //         "生产现场有相应的可视化看板对关键信息进行电子化呈现与展示",
    //         "主要依赖于人工对生产过程进行管理以及对生产信息进行记录",
    //         "缺乏对生产过程的实时跟踪，且生产过程不具备可追溯性"
    //       ],
    //       level1: "智能维度",
    //       level2: "协同制造",
    //       level3: "应用集成",
    //       level4: "",
    //       level5: "",
    //       answered: 1,
    //       expected: 1,
    //       idx: 327
    //     },
    //     {
    //       id: 190,
    //       question:
    //         "企业是否在研发过程中建立了各部门的协同机制，能够将不同部门的协同工作按计划保质保量完成?",
    //       answerType: 1,
    //       answerLists: [
    //         "基于高效的研发设计流程和大数据分析，缩短产品开发、设计周期",
    //         "实现跨区域、跨平台的全面协同，提供高效汇聚的研发资源",
    //         "重视信息技术、数据管理技术在研发设计环节所起到的作用，并已加以运用",
    //         "各部门之间的协同环节执行不到位，导致研发工作无法得到高效率的保障",
    //         "企业有健全的研发体系",
    //         "各部门在研发设计环节缺乏统一的工作流程"
    //       ],
    //       level1: "智能维度",
    //       level2: "协同制造",
    //       level3: "应用集成",
    //       level4: "",
    //       level5: "",
    //       answered: 1,
    //       expected: 1,
    //       idx: 327
    //     },
    //     {
    //       id: 191,
    //       question:
    //         "客户服务体系是否有系统化支撑，可通过大数据分析与各业务部门联动提供精准服务？",
    //       answerType: 1,
    //       answerLists: [
    //         "通过智能客服机器人，提供智能服务、个性化服务等",
    //         "实现面向客户的精细化知识管理，提供移动客服方式",
    //         "有客户服务知识库，可通过云平台提供客户服务，并与客户关系管理系统集成，提升服务质量和客户关系",
    //         "通过信息系统进行客户服务管理，并把客户服务信息反馈给相关部门，维护客户关系",
    //         "有标准完善的客户服务体系，并能严格执行"
    //       ],
    //       level1: "智能维度",
    //       level2: "协同制造",
    //       level3: "应用集成",
    //       level4: "",
    //       level5: "",
    //       answered: 1,
    //       expected: 1,
    //       idx: 327
    //     },
    //     {
    //       id: 192,
    //       question:
    //         "产品服务体系是否有系统化支撑？是否可以通过大数据分析与各业务部门联动提供精准服务？",
    //       answerType: 1,
    //       answerLists: [
    //         "通过物联网技术、增强现实/虚拟现实技术和云计算、大数据分析技术，实现智能运维和创新性应用服务",
    //         "可通过平台提供自助在线服务，并与其他系统集成，实现企业内部联动",
    //         "可通过网络和远程工具被动提供产品服务",
    //         "具有规范的产品服务制度，并可以通过信息系统记录产品服务管理",
    //         "初步建立产品服务制度，无系统支持产品服务运维信息",
    //         "无产品服务体系"
    //       ],
    //       level1: "智能维度",
    //       level2: "协同制造",
    //       level3: "应用集成",
    //       level4: "",
    //       level5: "",
    //       answered: 1,
    //       expected: 1,
    //       idx: 327
    //     },
    //     {
    //       id: 193,
    //       question:
    //         "企业通讯网络做到业务场景全覆盖，从底层设备到上层系统及业务部门、车间级、设备间纵向横向网络通讯的贯通？",
    //       answerType: 1,
    //       answerLists: [
    //         "能够实现企业上下游系统间的互联互通，实现生产与经营的无缝集成",
    //         "能够实现生产管理与企业管理系统间的互联互通",
    //         "能够实现制造环节设备间的互联互通与信息采集与发送",
    //         "生产现场覆盖无线网络及有线网络，可用于设备连接及办公通讯",
    //         "具备有线网络功能，覆盖办公区域",
    //         "无网络通信设备"
    //       ],
    //       level1: "智能维度",
    //       level2: "互联互通",
    //       level3: "通讯网络管理",
    //       level4: "",
    //       level5: "",
    //       answered: 1,
    //       expected: 1,
    //       idx: 327
    //     },
    //     {
    //       id: 194,
    //       question: "网络物理隔离、防火墙、信息安全制度、数据备份等是否完善？",
    //       answerType: 1,
    //       answerLists: [
    //         "确保云数据中心访问的安全性，提供专用通信协议或安全通信协议服务，抵御通信协议的攻击破坏",
    //         "具备网络协议信息过滤和数据流量管控功能，能够对网络边界的完整性进行检查",
    //         "确保数据传输和重要子网的安全性，并具备自恢复能力",
    //         "开展子网管理，具有入侵检测、用户鉴别、访问控制、完整性检测等安全功能",
    //         "具备网络关键设备冗余能力",
    //         "无网络安全要求和标准"
    //       ],
    //       level1: "智能维度",
    //       level2: "互联互通",
    //       level3: "网络安全管理",
    //       level4: "",
    //       level5: "",
    //       answered: 1,
    //       expected: 1,
    //       idx: 327
    //     },
    //     {
    //       id: 195,
    //       question:
    //         "服务器是否云化，企业是否建设了公有云、私有云、混合云环境？",
    //       answerType: 1,
    //       answerLists: [
    //         "企业已建设完善的私有云环境、结合工业云实现了企业混合云的建设，企业IT资源统一规划、资源利用率高，IT部门运维效率高",
    //         "企业内部已搭建完善的私有云环境，资源利用率，成本效益明显",
    //         "企业内部大部分系统运行虚拟化环境中，运维管理效率高，相对独立服务器资源利用率高",
    //         "已开始企业内部私有云的建设，部分应用系统能够很好的运行在虚拟化环境",
    //         "已经有服务器云化规划，还未实施，但已有了实施计划时间的安排",
    //         "无云化管理，系统运行在物理服务器上，服务器管理工作量大，服务器资源利用率低"
    //       ],
    //       level1: "智能维度",
    //       level2: "互联互通",
    //       level3: "虚拟化",
    //       level4: "",
    //       level5: "",
    //       answered: 1,
    //       expected: 1,
    //       idx: 327
    //     }
    //   ]
    // },
    // TreedataArray: [
    //   {
    //     level: 1,
    //     label: "制造维度",
    //     children: [
    //       {
    //         level: 2,
    //         label: "战略规划",
    //         children: [
    //           {
    //             level: 3,
    //             label: "战略管理",
    //             children: []
    //           }
    //         ]
    //       },
    //       {
    //         level: 2,
    //         label: "企业运营",
    //         children: [
    //           {
    //             level: 3,
    //             label: "组织建设",
    //             children: []
    //           },
    //           {
    //             level: 3,
    //             label: "成本管理",
    //             children: []
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     level: 1,
    //     label: "智能维度",
    //     children: [
    //       {
    //         level: 2,
    //         label: "互联互通",
    //         children: []
    //       }
    //     ]
    //   }
    // ],
    showAnswerArray: [],
    // testName: "3C电子行业",
    // enterpriseName: "华制",
    // enterpriseLogo: "",
    currentQuestionIndex: 1,
    questionIndex: 1,
    defaultProps: {
      children: "children",
      label: "label"
    }
  }),
  watch: {
    currentQuestionIndex(newVal, oldVal) {
      if (newVal < 0 || newVal > this.questionLength) {
        newVal = oldVal;
      }
    }
  },
  computed: {
    answerDetails() {
      return this.$store.state.answerPage.answerDetails;
    },
    TreedataArray() {
      return this.$store.state.answerPage.TreedataArray;
    },
    testName() {
      return this.$store.state.answerPage.testName;
    },
    enterpriseName() {
      return this.$store.state.answerPage.enterpriseName;
    },
    enterpriseLogo() {
      return this.$store.state.answerPage.enterpriseLogo;
    }
  },
  mounted: function() {
    this.showAnswerArray = this.answerDetails.return[0];
    this.questionLength = this.answerDetails.return.length;
  },
  methods: {
    choiceQuestion() {
      debugger;
      this.$vuetify.goTo(200);
    },
    preQuestion() {
      if (this.currentQuestionIndex == 1 || this.questionIndex == 1) return;

      this.currentQuestionIndex--;
      this.questionIndex = this.currentQuestionIndex;
      this.showAnswerArray = this.answerDetails.return[
        this.currentQuestionIndex - 1
      ];
    },
    nextQuestion() {
      if (
        this.currentQuestionIndex == this.questionLength ||
        this.questionIndex == this.questionLength
      )
        return;
      this.currentQuestionIndex++;
      this.questionIndex = this.currentQuestionIndex;
      this.showAnswerArray = this.answerDetails.return[
        this.currentQuestionIndex - 1
      ];
    },
    close() {
      this.$router.push("/CompanyDetails");
    },
    changeQuestion() {
      if (
        this.currentQuestionIndex > this.questionLength ||
        this.currentQuestionIndex < 0
      )
        return;
      this.showAnswerArray = this.answerDetails.return[
        this.currentQuestionIndex - 1
      ];
      this.questionIndex = this.currentQuestionIndex;
    },
    selectTree(data, node) {
      let $this = this;
      let level = data.level;
      let key = "level" + level;
      let qIndex = this.answerDetails.return.findIndex(function(item, index) {
        return item[key].indexOf(data.label) !== -1;
      });

      this.currentQuestionIndex = qIndex + 1;
      this.questionIndex = this.currentQuestionIndex;
      this.showAnswerArray = this.answerDetails.return[qIndex];
    }
  }
};
</script>

