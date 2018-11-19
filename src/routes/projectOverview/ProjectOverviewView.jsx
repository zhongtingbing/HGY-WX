import React from 'react';
import './ProjectOverViewView.less';
import Main from '../../layouts/main.jsx';
import classNames from 'classnames';
import BasicCard from '../../components/basicCard'
import CicleProgress from '../../components/cicleProgress'
import Rail from '../../components/rail'
import RingEchart from '../../components/ringEchart'
import {AgeTable, Progress, GXWTEchart, WorkerProblemsTable} from './components'
import Table from '../../components/Table'
import {Icon } from 'antd-mobile'
import NormalEchart from '../../components/normalEchart'
import OLDER_MAN from '../../assets/image/icon01.png'
import OLDER_MAN_50 from '../../assets/image/icon02.png'
import NEW_MAN from '../../assets/image/icon03.png'
import FALSE_MAN from '../../assets/image/icon04.png'
import ENV_BG1 from '../../assets/image/icon_bg01.png'
import ENV_BG2 from '../../assets/image/icon_bg02.png'
import ENV_BG3 from '../../assets/image/icon_bg03.png'

const prefixCls = 'project-overview-view74aa1b'

function WorkContent({title, num, unit}){
  return (
    <div className="_workContent">
      <span >{`${title}：`}</span>
      <span style={{color:'#ff9000',marginRight:'2px'}}>{num}</span>
      <span>{unit}</span>
    </div>
  )
}

let warnData = [
  '1号塔吊超载工作',
  '2号塔吊超载工作',
  '3号塔吊超载工作',
  '4号塔吊超载工作',
  '5号塔吊超载工作',
]

let deviceData = [];
for (let i = 0; i < 4; i++) {
  deviceData.push(
    {
      title: '塔吊',
      onLine: '19',
      warning: '6',
      offLine: '8',
      total: '33'
    })
}

export default function ProjectOverviewView(props) {
  const {
    location,
    title,
    data
  } = props;

  if (warnData.length > 4) {
    warnData = warnData.slice(0, 4)
    warnData.push('......')
  }
  const cls = classNames({
    [prefixCls]: true,
  });
  return (
    <Main>
      <div className={cls}>
        <BasicCard className={`${cls}-card1`} name="项目概况">
          <div className="title">
            <span>项目名称：</span>
            <span>理想之城项目</span>
          </div>
          <div className="content">
            <div className="left">
              <div>
                <span>建筑面积：</span>
                <span>80000㎡</span>
              </div>
              <div>
                <span>管理人员：</span>
                <span>50人</span>
              </div>
              <div>
                <span>工人总数：</span>
                <span>1000人</span>
              </div>
              <div>
                <span>开工时间：</span>
                <span>2018-03-11</span>
              </div>
            </div>
            <div className="right">
              <div>
                <span>土建总包：</span>
                <span>建设公司</span>
              </div>
              <div>
                <span>精装总包：</span>
                <span>工程建设公司</span>
              </div>
              <div>
                <span>监理单位：</span>
                <span>专业咨询公司</span>
              </div>
              <div>
                <span>计划竣工：</span>
                <span>2019-03-11</span>
              </div>
            </div>
          </div>
        </BasicCard>
        <BasicCard className={`${cls}-warn-info`} name="实时报警信息">
          <div className="content">
            <div className="left">
              <div className="alert">
                <span>50</span>
              </div>
              <div>本日报警次数</div>
            </div>
            <div className="right">
              {
                warnData.map((item, index) => (
                  <span key={index}>{item}</span>
                ))
              }
            </div>
          </div>
        </BasicCard>
        <BasicCard className={`${cls}-behavior-management`} name="人员行为管理">
          <div className={`${cls}-behavior-management-top`}>
            <div>
              <CicleProgress value={90} _key='SJJY' title="完成率" startColor="#16e6ea" endColor="#027fff"/>
              <div>三级教育</div>
              <span>1233人</span>
            </div>
            <div>
              <CicleProgress value={40} _key='PX' title="完成率" startColor="#b850ff" endColor="#f34cfe"/>
              <div>培训</div>
              <span>1233人</span>
            </div>
            <div>
              <CicleProgress value={80} _key='RJTJ' title="完成率" startColor="#ff8250" endColor="#febb4a"/>
              <div>入职体检</div>
              <span>1233人</span>
            </div>
          </div>
          <div className="middle">
            <div>
              <img src={OLDER_MAN}/>
              <div style={{marginRight: '30px'}}>
                <span>超龄人员：</span>
                <span style={{color: '#48b3e9'}}>5</span>
                <span className="ren">人</span>
              </div>
              <div style={{marginRight: '20px'}}>
                <span>男：</span>
                <span style={{color: '#48b3e9'}}>5</span>
                <span className="ren">人</span>
              </div>
              <div>
                <span>女：</span>
                <span style={{color: '#48b3e9'}}>0</span>
                <span className="ren">人</span>
              </div>
            </div>
            <div>
              <img src={OLDER_MAN_50}/>
              <div>
                <span>年龄50岁以上人数：</span>
                <span style={{color: '#def87b'}}>10</span>
                <span className="ren">人</span>
              </div>
            </div>
            <div>
              <img src={NEW_MAN}/>
              <div>
                <span>新进场人数：</span>
                <span style={{color: '#29dfe2'}}>10</span>
                <span className="ren">人</span>
              </div>
            </div>
            <div>
              <img src={FALSE_MAN}/>
              <div>
                <span>本日违章人数：</span>
                <span style={{color: '#c06bfe'}}>30</span>
                <span className="ren">人</span>
              </div>
            </div>
            <div className="bottom">
              <div>
                <span>4</span>
                <span>监管违章拍照</span>
              </div>
              <div>
                <span>9</span>
                <span>人冒不一致</span>
              </div>
              <div>
                <span>4</span>
                <span>未戴安全冒</span>
              </div>
              <div>
                <span>4</span>
                <span>未打卡</span>
              </div>
            </div>
          </div>
        </BasicCard>
        <BasicCard className={`${cls}-device`} name="设备状态管理">
          <div>
            <div className="device-status">
              <div style={{backgroundColor: '#1f7dd4'}}/>
              <span>在线</span>
              <div style={{backgroundColor: '#e75639'}}/>
              <span>报警</span>
              <div style={{backgroundColor: '#ddb53c'}}/>
              <span>离线</span>
            </div>
            <div>
              {deviceData.map((item, index) => (
                <Rail key={index} {...item}/>
              ))}
            </div>
            <div className="bottom">
              <div>
                <span>特种车辆进场车：</span>
                <span style={{color:'#ff9000'}}>500</span>
                <span>次</span>
              </div>
              <div>
                <span>验收：</span>
                <span style={{color:'#ff9000'}}>500</span>
                <span>次</span>
              </div>
            </div>
          </div>
        </BasicCard>
        <BasicCard className={`${cls}-env-manager`} name="环境因素管理">
          <div className='main' >
            <div>
              <img src={ENV_BG1}/>
              <span>{87}</span>
              <div>扬尘指数超标</div>
              <div>(次)</div>
            </div>
            <div>
              <img src={ENV_BG2}/>
              <span>{87}</span>
              <div>噪声指数超标</div>
              <div>(次)</div>
            </div>
            <div>
              <img src={ENV_BG3}/>
              <span>{87}</span>
              <div>当月单项目</div>
              <div>日平均报警数</div>
            </div>
          </div>
        </BasicCard>
        <BasicCard className={`${cls}-work-situation`} name="环境因素管理">
          <div className='main' >
            <div className="top">
              <div>
                <CicleProgress value={94} _key='JRHGRS' title="合规率" startColor="#16e6ea" endColor="#027fff"/>
                <div>今日合规人数</div>
                <span>1233人</span>
              </div>
              <div>
                <CicleProgress value={27} _key='JRWGRS' title="违规率" startColor="#ff8250" endColor="#febb4a"/>
                <div>今日违规人数</div>
                <span>1233人</span>
              </div>
            </div>
            <div className="content">
              <WorkContent title="跨区域作业人数" num={55} unit="人"/>
              <WorkContent title="工人平均工作天数" num={180} unit="天"/>
              <WorkContent title="工人平均平均工作时长" num={9} unit="小时"/>
              <WorkContent title="入职满半年人数" num={30} unit="人"/>
              <WorkContent title="初级工人数量" num={17} unit="人"/>
            </div>
            <RingEchart index="special-job"/>
            <div className="age-range">
              <span>年龄结构</span>
              <AgeTable/>
            </div>
          </div>
        </BasicCard>
        <BasicCard className={`${cls}-production`} name="工序状态管理">
          <div className='main'>
            <div className="top">
              <div className="one">
                <div className="ok">
                  <div />
                  <span>合格</span>
                </div>
                <div className="no">
                  <div/>
                  <span>不合格</span>
                </div>
              </div>
              <div className="progress-item">
                <span className="left">闭合工序</span>
                <Progress value={768} percent={95}/>
                <span className="right">95%</span>
              </div>
              <div className="progress-item">
                <span className="left">工序时间比</span>
                <Progress value={768} percent={95}/>
                <span className="right">95%</span>
              </div>
            </div>
            <div className="SCSL">
              <div className="title">实测实量操作率</div>
              <NormalEchart index={'SCSL'}/>
            </div>
            <div className="GXWT">
              <div className="title">工序问题TOP10</div>
              <GXWTEchart index={'GXWT'}/>
            </div>
            <div className="worker-problems">
              <div className="title">工人出现问题数TOP20</div>
              <div onClick={() => {}} className="more">更多<Icon size="xs" color="#4ab4e8" type="right"/></div>
              <Table
                kVMap={[{_key:'name', desc:'姓名', width:40},{_key:'work', desc:'工序名', width:60},{_key:'count', desc:'数量', width:40},]}
                data={[
                  {name: '张博管', work: '地暖部管', count: '40'},
                  {name: '王一件', work: '地平浇筑', count: '40'},
                  {name: '李达人', work: '地暖部管', count: '40'},
                  {name: '赵自强', work: '地平浇筑', count: '40'},
                ]}
              />
            </div>
          </div>
        </BasicCard>
        <BasicCard className={`${cls}-supply-chain`} name="供应链管理">
          <div className='main'>
            <div className="one">
              <div className="ok">
                <div />
                <span>合格</span>
              </div>
              <div className="no">
                <div/>
                <span>不合格</span>
              </div>
            </div>
          </div>
          <div className="two">
            <span>本月材料进场车次：</span>
            <span>500</span>
            <span>次</span>
          </div>
          <div className="progress-item">
            <span className="left">验收次数</span>
            <Progress value={480} percent={95}/>
            <span className="right">95%</span>
          </div>
        </BasicCard>
      </div>
    </Main>
  );
}
