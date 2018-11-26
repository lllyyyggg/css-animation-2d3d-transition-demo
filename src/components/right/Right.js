import React from 'react'
import './Right.css'
class Right extends React.Component {

    render() {
        return (
                <div className='right-bar'>
                    <div><div className='inline-div left'><span>文字聊天</span></div><div className='inline-div right'><a href='http://www.baidu.com'><i className='fa fa-comment-o '></i></a></div></div>
                    <div><div className='inline-div left'><span>拍摄照片</span></div><div className='inline-div right'><a href='http://www.baidu.com'><i className='fa fa-camera '></i></a></div></div>
                    <div><div className='inline-div left'><span>拍摄视频</span></div><div className='inline-div right'><a href='http://www.baidu.com'><i className='fa fa-caret-square-o-left'></i></a></div></div>
                </div>
        )
    }
}

export default Right