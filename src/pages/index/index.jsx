import React from 'react'
import './index.less'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import SearchIcon from '@material-ui/icons/Search'
import Input from '@material-ui/core/Input'
import Typography from '@material-ui/core/Typography'

class Index extends React.Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <div className="main">
        <AppBar color="primary" position="fixed">
          <Toolbar>
            <Typography variant="title" color="inherit" noWrap>
              React demos
            </Typography>
            <div className="search">
              <div className="searchIcon">
                <SearchIcon/>
              </div>
               <Input
                 placeholder="Search..."
                 disableUnderline
                 className="inputChange"
                 />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default Index;
