import React, { Component } from 'react'
import ReadbookBtn from './readbook-btn'
var audioObj = null;

function AudioPlayerDisk ({ imgUrl, play }){
    return (
        <div 
            className={[
                'audio-player-machine',
                play ? 'audio-player-play' : ''
            ].join(' ')}>
            <div className="audio-player-disk">
                <div className="audio-player-bg"></div>
                <div 
                    className="audio-player-cover"
                    style={{ backgroundImage: 'url(' + imgUrl + ')'}}>
                </div>
            </div>
            <div className="audio-player-rod"></div>
        </div>
    )
}
class Audio extends Component {
    constructor (props){
        super(props)
        audioObj = React.createRef()
    }
    render (){
        const { playEvent, pauseEvent, endedEvent, audioUrl} = this.props
        return (
            <audio 
                ref={ audioObj }
                onPlay={ playEvent }
                onPause={ pauseEvent }
                onEnded={ endedEvent }
                src={ audioUrl }>
            </audio>
        )
    }
}
function AudioPlayerRight({ data, play, clickBtn}){
    return (
    <div className="audio-player-right">
        <h2>{ data.name }</h2>
        <h2>{ data.title }</h2>
        <p>{ data.info }</p>
        <div className="audio-player-btn">
            <ReadbookBtn 
                btn-color={  play ? 'orange' : 'blue'} 
                btn-style="round"
                active="false"
                click={ clickBtn }
                slot={
                    ()=>(<p>
                        { play ? '暂停' : '播放'}
                        <span 
                            className={{
                                'audio-btn-icon': true, 
                                'audio-btn-play-icon': !play,
                                'audio-btn-pause-icon': play,
                            }}
                        >
                        </span>
                    </p>
                )}>
                
            </ReadbookBtn>
        </div>
    </div>)
}
class AudioPlayer extends Component {
    constructor ( props ){
        super(props)
        this.state = {
            data : props.data,
            play : false
        }
        
        
    }
    playEvent (){
        this.setState({ play: true})
        audioObj.current.play()
    }
    pauseEvent (){
        this.setState({ play: false})
        audioObj.current.pause()
    }
    endedEvent (){
        this.setState({ play: false})
        audioObj.current.currentTime = 0
    };
    clickBtn (){
        if(this.state.play){
            this.pauseEvent()
        }else{
            this.playEvent()
        }
    }
    render (){
        return (
            <div className="audio-player">
            <div className="audio-player-left">
                <AudioPlayerDisk imgUrl={ this.state.data.imgUrl } play={ this.state.play }></AudioPlayerDisk>
            </div>
            <AudioPlayerRight 
                data={ this.state.data }
                play={ this.state.play }
                clickBtn={ this.clickBtn.bind(this) }
            >
            </AudioPlayerRight>
            <Audio 
                audioUrl={ this.state.data.audioUrl }
                playEvent={ this.playEvent.bind(this) }
                pauseEvent={ this.pauseEvent.bind(this) }
                endedEvent={ this.endedEvent.bind(this) }
            >
            </Audio>
        </div>
        )
    }
    
}
export default AudioPlayer