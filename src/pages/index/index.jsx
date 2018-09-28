import React from 'react'
import './index.less'
import { AppBar,Toolbar,Input,Typography } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import { Row,Col,Button } from 'antd'
import { MiniArea } from 'ant-design-pro/lib/Charts'
import moment from 'moment';

class Index extends React.Component {
  constructor(props){
    super(props);
    console.log(moment);
  }
  render () {
    const visitData = [
      {
        x: "2017-09-01",
        y: 100
      },
      {
        x: "2017-09-02",
        y: 200
      },
      {
        x: "2017-09-03",
        y: 88
      },
      {
        x: "2017-09-04",
        y: 50
      }
    ];
    return (
      <div className="main">
        <AppBar color="primary" position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" noWrap>
              React demos
            </Typography>
            <div className="search">
              <div className="searchIcon">
                <Search/>
              </div>
               <Input
                 placeholder="Search..."
                 disableUnderline
                 className="inputChange"
                 />
            </div>
          </Toolbar>
        </AppBar>

        <Row>
          <Col span={24}>
          <MiniArea
              line
              color="#cceafe"
              height={45}
              data={visitData}
            />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Index;
