import React from 'react'
import './Touch.css'
class Touch extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseEnter = this.handleMouseEnter.bind(this)
        this.handleMouseLeave = this.handleMouseLeave.bind(this)
        this.state= {
            left_width : '0%',
            left_content: <div style={{minWidth:'80px'}}>
            定
            海
            神
            针
            清
            屏
            专
            用
            清
            屏
            专
            用
            清
            屏
            专
            用
            清
            屏
            专
            用
            清
            屏
            专
            用
            清
            屏
            专
            用
            。</div>
        }
    }
    handleMouseEnter() {
        this.setState({...this.state, left_width : '75%',left_content: this.state.left_content})
    }
    handleMouseLeave() {   
        this.setState({...this.state, left_width : '0%',left_content: this.state.left_content})
    }
    render() {
        return (
            <div>    
                <div className='foo'
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave = {this.handleMouseLeave}
                >
                <div className='right' style={{display:'inline-block', width:'25%',height:'50px', backgroundColor: 'green', float:'right'}}></div> 
                    <div className='left' style={{display:'inline-block', width: this.state.left_width,height:'50px', backgroundColor: 'red', float:'right' }}>{this.state.left_content}</div> 
                </div>
                <br/>
                <br/>
                <br/>
            </div>
        )
    }
}

export default Touch