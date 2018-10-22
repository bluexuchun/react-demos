import React from 'react'
import './star.less'


export default class Star extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      W: this.props.W || document.body.clientWidth,
      H: this.props.H || document.body.clientHeight,
      // 景深
      fl: this.props.fl || 250,
      // 生成点的数量
      starNums: this.props.starNums || 100,
      // 存储点
      star: [],
      // 点的范围
      range: this.props.range || {
        x: 350,
        y: 150
      },
      // 速度
      speed: this.props.speed || 0.01,
      // 背景颜色
      background: this.props.background || 'white',
      // 球的颜色
      starColor: this.props.starColor || 'rgba(33,150,243,0.5)'
    }
  }

  stars(x,y,r){
    let stars = {
      x:x,
      y:y,
      r:r
    }
    return stars;
  }

  initCanvas(ctx){
    ctx.beginPath();
    ctx.fillStyle = this.state.background;
    ctx.fillRect(0,0,this.state.W,this.state.H);
    for (var i = 0; i < this.state.starNums; i++) {
      let x = Math.random() * ( this.state.W - this.state.range.x * 2) + this.state.range.x,
          y = Math.random() * ( this.state.H - this.state.range.y * 2) + this.state.range.y,
          dx = this.state.W/2 - x,
          dy = this.state.H/2 - y;
      let r = Math.sqrt(dx * dx + dy * dy) / this.state.fl;

      this.state.star[i] = this.stars(x,y,r);
    }
  }

  draw(ctx){
    for (var i = 0; i < this.state.starNums; i++) {
      let x = this.state.star[i].x,
          y = this.state.star[i].y,
          r = this.state.star[i].r;
      ctx.beginPath();
      ctx.arc(x,y,r,0,2 * Math.PI);
      ctx.fillStyle = this.state.starColor;
      ctx.fill();
    }
  }

  update(){
    for (var i = 0; i < this.state.starNums; i++) {
      if(this.state.star[i].x > this.state.W || this.state.star[i].x < 0 || this.state.star[i].y > this.state.H || this.state.star[i].y < 0){
        this.state.star[i].x = Math.random() * ( this.state.W - this.state.range.x * 2) + this.state.range.x;
        this.state.star[i].y = Math.random() * ( this.state.H - this.state.range.y * 2) + this.state.range.y;
        let dx = this.state.W/2 - this.state.star[i].x,
            dy = this.state.H/2 - this.state.star[i].y;
        this.state.star[i].r = Math.sqrt(dx * dx + dy * dy) / this.state.fl;
      }
      this.state.star[i].x += (this.state.W / 2 - this.state.star[i].x) * -1 * this.state.speed;
      this.state.star[i].y += (this.state.H / 2 - this.state.star[i].y) * -1 * this.state.speed;
    }
  }

  startAnimate = (ctx) => {
    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    ctx.fillRect(0,0,this.state.W,this.state.H);
    ctx.globalAlpha = 1;
    // ctx.clearRect(0,0,this.state.W,this.state.H);
    requestAnimationFrame(this.startAnimate.bind(this,ctx));
    this.draw(ctx);
    this.update();
  }

  componentDidMount(){
    let canvas = document.getElementById('canvas');
    canvas.width = this.state.W;
    canvas.height = this.state.H;
    let ctx = canvas.getContext("2d");
    this.initCanvas(ctx);
    requestAnimationFrame(this.startAnimate.bind(this,ctx));
  }

  render (){

    return (
      <div className="mainCas">
        <canvas id="canvas"></canvas>
      </div>
    )
  }

}
