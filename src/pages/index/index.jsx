import React from 'react'
import './index.less'
import { AppBar,Toolbar,Input,Typography } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import { Row,Col,Button } from 'antd'
import Star from '../../components/star/star'

class Index extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    let W = document.body.clientWidth,
        H = document.body.clientHeight;

    // 配置
    const starConfig = {
      W: W,
      H: H,
      speed: 0.005
    }
    return (
      <div className="main">
        <div className="content">
          <AppBar color="primary" position="static">
            <Toolbar>
              <Typography variant="title" color="inherit" noWrap>
                React demos
              </Typography>
              {/* <div className="search">
                <div className="searchIcon">
                  <Search/>
                </div>
                 <Input
                   placeholder="Search..."
                   disableUnderline
                   className="inputChange"
                   />
              </div> */}
            </Toolbar>
          </AppBar>
        </div>
        <Star {...starConfig}/>
      </div>
    )
  }
}

export default Index;
