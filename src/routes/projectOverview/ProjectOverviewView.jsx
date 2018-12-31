import React from 'react';
import './ProjectOverViewView.less';
import Main from '../../layouts/main.jsx';
import classNames from 'classnames';
import BasicCard from 'components/basicCard'
import CicleProgress from 'components/cicleProgress'
import Rail from 'components/rail'
import RingEchart from 'components/ringEchart'
import {AgeTable, Progress, GXWTEchart, WorkerProblemsTable} from './components'
import Table from 'components/Table'
import {Icon } from 'antd-mobile'
import NormalEchart from '../../components/normalEchart'
import OLDER_MAN from '../../assets/image/icon01.png'
import OLDER_MAN_50 from '../../assets/image/icon02.png'
import NEW_MAN from '../../assets/image/icon03.png'
import FALSE_MAN from '../../assets/image/icon04.png'
import ENV_BG1 from '../../assets/image/icon_bg01.png'
import ENV_BG2 from '../../assets/image/icon_bg02.png'
import ENV_BG3 from '../../assets/image/icon_bg03.png'
import RING_01 from '../../assets/image/ring/ring01.png'
import RING_02 from '../../assets/image/ring/ring02.png'
import RING_03 from '../../assets/image/ring/ring03.png'
import RING_04 from '../../assets/image/ring/ring04.png'
import RING_05 from '../../assets/image/ring/ring05.png'
import RING_06 from '../../assets/image/ring/ring06.png'
import RING_07 from '../../assets/image/ring/ring07.png'
import RING_08 from '../../assets/image/ring/ring08.png'
import RING_09 from '../../assets/image/ring/ring09.png'
import RING_10 from '../../assets/image/ring/ring10.png'
const prefixCls = 'project-overview-view74aa1b'

function ringImgRender (value) {
  let val = parseInt(value)
  if(val < 10) {
    return RING_01
  }
  if(val < 20) {
    return RING_02
  }
  if(val < 30) {
    return RING_03
  }
  if(val < 40) {
    return RING_04
  }
  if(val < 50) {
    return RING_05
  }
  if(val < 60) {
    return RING_06
  }
  if(val < 70) {
    return RING_07
  }
  if(val < 80) {
    return RING_08
  }
  if(val < 90) {
    return RING_09
  }
  return RING_10
};

function WorkContent({title, num, unit}){
  return (
    <div className="_workContent">
      <span >{`${title}：`}</span>
      <span style={{color:'#ff9000',marginRight:'2px'}}>{num}</span>
      <span>{unit}</span>
    </div>
  )
}

export default function ProjectOverviewView(props) {
  let {
    loading,
    XMGK,
    SSBJ,
    SJJY,
    AGE50,
    KQYZYRS,
    CJGR,
    CLRY,
    GRPJGZSC,
    GRPJGZTS,
    BHGX,
    GXSJB,
    GYL,
    HGRS,
    HJYS,
    GXWTS,
    NLJG,
    PX,
    RZMBN,
    RZTJ,
    SBZTGL,
    SCSLGZL,
    TSGZ,
    TZCL,
    WGRS,
    WZ,
    XJC,
    GRWTS,
    moreClick
  } = props;

  function warnDataHandle(warnData){
    warnData = warnData.slice(0, 4)
    warnData.push('......')
    return warnData
  }
  const cls = classNames({
    [prefixCls]: true,
  });
  return (
    <Main loading={loading}>
      {
        loading ? <div></div>:
          <div className={cls}>
            <BasicCard className={`${cls}-card1`} name="项目概况">
              <div className="title">
                <span>项目名称：</span>
                <span>{XMGK.projectName}</span>
              </div>
              <div className="content">
                <div className="left">
                  <div>
                    <span>建筑面积：</span>
                    <span>{XMGK.area}</span>
                  </div>
                  <div>
                    <span>管理人员：</span>
                    <span>{XMGK.manager}</span>
                  </div>
                  <div>
                    <span>工人总数：</span>
                    <span>{XMGK.workerCount}</span>
                  </div>
                  <div>
                    <span>开工时间：</span>
                    <span>{XMGK.openTime}</span>
                  </div>
                </div>
                <div className="right">
                  <div>
                    <span>土建总包：</span>
                    <span>{XMGK.civil}</span>
                  </div>
                  {/*<div>*/}
                    {/*<span>精装总包：</span>*/}
                    {/*<span>{XMGK.hardcover}</span>*/}
                  {/*</div>*/}
                  <div>
                    <span>监理单位：</span>
                    <span>{XMGK.supervisor}</span>
                  </div>
                  <div>
                    <span>计划竣工：</span>
                    <span>{XMGK.plan}</span>
                  </div>
                </div>
              </div>
            </BasicCard>
            <BasicCard className={`${cls}-warn-info`} name="实时报警信息">
              <div className="content">
                <div className="left-8887">
                  <img src={ringImgRender(SSBJ.count)}/>
                  <div className="alert">
                    <span>{SSBJ.count}</span>
                  </div>
                  <div>本日报警次数</div>
                </div>
                <div className="right">
                  {
                    warnDataHandle(SSBJ.info).map((item, index) => (
                      <span key={index}>{item}</span>
                    ))
                  }
                </div>
              </div>
            </BasicCard>
            <BasicCard className={`${cls}-behavior-management`} name="人员行为管理">
              <div className={`${cls}-behavior-management-top`}>
                <div>
                  <CicleProgress value={SJJY.rate} _key='SJJY' title="完成率" startColor="#16e6ea" endColor="#027fff"/>
                  <div>三级教育</div>
                  <span>{SJJY.count}人</span>
                </div>
                <div>
                  <CicleProgress value={PX.rate} _key='PX' title="完成率" startColor="#b850ff" endColor="#f34cfe"/>
                  <div>培训</div>
                  <span>{PX.count}人</span>
                </div>
                <div>
                  <CicleProgress value={RZTJ.rate} _key='RJTJ' title="完成率" startColor="#ff8250" endColor="#febb4a"/>
                  <div>入职体检</div>
                  <span>{RZTJ.count}人</span>
                </div>
              </div>
              <div className="middle">
                <div>
                  <img src={OLDER_MAN}/>
                  <div style={{marginRight: '30px'}}>
                    <span>超龄人员：</span>
                    <span style={{color: '#48b3e9'}}>{CLRY.total}</span>
                    <span className="ren">人</span>
                  </div>
                  <div style={{marginRight: '20px'}}>
                    <span>男：</span>
                    <span style={{color: '#48b3e9'}}>{CLRY.male}</span>
                    <span className="ren">人</span>
                  </div>
                  <div>
                    <span>女：</span>
                    <span style={{color: '#48b3e9'}}>{CLRY.female}</span>
                    <span className="ren">人</span>
                  </div>
                </div>
                <div>
                  <img src={OLDER_MAN_50}/>
                  <div>
                    <span>年龄50岁以上人数：</span>
                    <span style={{color: '#def87b'}}>{AGE50.count}</span>
                    <span className="ren">人</span>
                  </div>
                </div>
                <div>
                  <img src={NEW_MAN}/>
                  <div>
                    <span>新进场人数：</span>
                    <span style={{color: '#29dfe2'}}>{XJC.count}</span>
                    <span className="ren">人</span>
                  </div>
                </div>
                <div>
                  <img src={FALSE_MAN}/>
                  <div>
                    <span>本日违章人数：</span>
                    <span style={{color: '#c06bfe'}}>{WZ.total}</span>
                    <span className="ren">人</span>
                  </div>
                </div>
                <div className="bottom">
                  {
                    WZ.info.map((item, index) => {
                      return (
                        <div key ={index}>
                          <span style={{fontSize:'12px'}}>{item.name}</span>
                          <span>{item.value}</span>
                        </div>
                        )
                    })
                  }
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
                  {SBZTGL.map((item, index) => (
                    <Rail key={index} {...item}/>
                  ))}
                </div>
                <div className="bottom">
                  <div>
                    <span>特种车辆进场车：</span>
                    <span style={{color:'#ff9000'}}>{TZCL.jc}</span>
                    <span>次</span>
                  </div>
                  <div>
                    <span>验收：</span>
                    <span style={{color:'#ff9000'}}>{TZCL.ys}</span>
                    <span>次</span>
                  </div>
                </div>
              </div>
            </BasicCard>
            <BasicCard className={`${cls}-env-manager`} name="环境因素管理">
              <div className='main' >
                <div>
                  <img src={ENV_BG1}/>
                  <span>{HJYS.find(item=>item.name.indexOf('扬尘')>-1).value}</span>
                  <div>扬尘指数超标</div>
                  <div>(次)</div>
                </div>
                <div>
                  <img src={ENV_BG2}/>
                  <span>{HJYS.find(item=>item.name.indexOf('噪声指数超标')>-1).value}</span>
                  <div>噪声指数超标</div>
                  <div>(次)</div>
                </div>
                <div>
                  <img src={ENV_BG3}/>
                  <span>{HJYS.find(item=>item.name.indexOf('报警')>-1).value}</span>
                  <div>当月单项目</div>
                  <div>日平均报警数</div>
                </div>
              </div>
            </BasicCard>
            <BasicCard className={`${cls}-work-situation`} name="劳务情况">
              <div className='main' >
                <div className="top">
                  <div>
                    <CicleProgress value={HGRS.rate} _key='JRHGRS' title="合规率" startColor="#16e6ea" endColor="#027fff"/>
                    <div>今日合规人数</div>
                    <span>{HGRS.count}人</span>
                  </div>
                  <div>
                    <CicleProgress value={WGRS.rate} _key='JRWGRS' title="违规率" startColor="#ff8250" endColor="#febb4a"/>
                    <div>今日违规人数</div>
                    <span>{WGRS.count}人</span>
                  </div>
                </div>
                <div className="content">
                  <WorkContent title="跨区域作业人数" num={KQYZYRS.count} unit="人"/>
                  <WorkContent title="工人平均工作天数" num={GRPJGZTS.count} unit="天"/>
                  <WorkContent title="工人平均平均工作时长" num={GRPJGZSC.count} unit="小时"/>
                  <WorkContent title="入职满半年人数" num={RZMBN.count} unit="人"/>
                  <WorkContent title="初级工人数量" num={CJGR.count} unit="人"/>
                </div>
                <RingEchart
                  index="special-job"
                  desc="特殊工种"
                  data={TSGZ}
                />
                <div className="age-range">
                  <span>年龄结构</span>
                  <AgeTable
                    data={NLJG}
                  />
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
                  {
                    <div className="progress-item">
                      <span className="left">{BHGX.name}</span>
                      <Progress value={BHGX.count} percent={parseFloat(BHGX.rate)}/>
                      <span className="right">{BHGX.rate}</span>
                    </div>
                  }
                  {
                    <div className="progress-item">
                      <span className="left">{GXSJB.name}</span>
                      <span className="right">{GXSJB.rate}</span>
                    </div>
                  }
                </div>
                <div className="SCSL">
                  <div className="title">实测实量操作率</div>
                  <NormalEchart
                    index={'SCSL'}
                    isYPercent={true}
                    XData={SCSLGZL.XData}
                    YData={SCSLGZL.YData}
                  />
                </div>
                <div className="GXWT">
                  <div className="title">工序问题TOP10</div>
                  <GXWTEchart
                    index={'GXWT'}
                    data={GXWTS}
                  />
                </div>
                <div className="worker-problems">
                  <div className="title">工人出现问题数TOP20</div>
                  <div
                    onClick={() => {moreClick([{_key:'name', desc:'姓名', width:40},{_key:'workstage', desc:'工序名', width:60},{_key:'count', desc:'数量', width:40},],
                      GRWTS)}}
                    className="more">
                    更多<Icon size="xs" color="#4ab4e8" type="right"/>
                  </div>
                  <Table
                    kVMap={[{_key:'name', desc:'姓名', width:40},{_key:'workstage', desc:'工序名', width:60},{_key:'count', desc:'数量', width:40},]}
                    data={GRWTS.slice(0,4)}
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
                <span>{GYL.jccc}</span>
                <span>次</span>
              </div>
              <div className="progress-item">
                <span className="left">验收次数</span>
                <Progress value={GYL.yscc} percent={GYL.rate}/>
                <span className="right">{GYL.rate}</span>
              </div>
            </BasicCard>
          </div>
      }
    </Main>
  );
}
