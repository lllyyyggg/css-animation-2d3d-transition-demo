import React from 'react'
import './Touch.css'
class Touch extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseEnter = this.handleMouseEnter.bind(this)
        this.handleMouseLeave = this.handleMouseLeave.bind(this)
        this.state= {
            left_width : '0px',
            left_content:''
        }
    }
    handleMouseEnter() {
        this.setState({...this.state, left_width : '80px',left_content:<div style={{minWidth:'80px'}}>hello world</div>})
    }
    handleMouseLeave() {   
        this.setState({...this.state, left_width : '0px',left_content:<div style={{minWidth:'70px'}}>hello world</div>})
    }
    render() {
        return (
            <div className='touch'>
                <div id="left" className='left' style={{
                    width : this.state.left_width
                }}>{this.state.left_content}</div>
                <div className='right' onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}></div>
            </div>
        )
    }
}

export default Touch