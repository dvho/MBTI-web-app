import React from 'react';

function PreferencesGraph(props) {
    return(
        <div className='preferences-graph-container'>
            <div className='preferences-graph-container-box'><div className='label'>Extroversion</div>
                <div style={{height: props.state.extroversion * 3}} className='preference graph-bar-left extroversion'>{props.state.extroversion}</div>
            </div>
            <div className='preferences-graph-container-box'><div className='label'>Introversion</div>
                <div style={{height: props.state.introversion * 3}} className='preference graph-bar-right introversion'>{props.state.introversion}</div>
            </div>
            <div className='preferences-graph-container-box'><div className='label'>Sensing</div>
                <div style={{height: props.state.sensing * 3}} className='preference graph-bar-left sensing'>{props.state.sensing}</div>
            </div>
            <div className='preferences-graph-container-box'><div className='label'>Intuition</div>
                <div style={{height: props.state.intuition * 3}} className='preference graph-bar-right intuition'>{props.state.intuition}</div>
            </div>
            <div className='preferences-graph-container-box'><div className='label'>Thinking</div>
                <div style={{height: props.state.thinking * 3}} className='preference graph-bar-left thinking'>{props.state.thinking}</div>
            </div>
            <div className='preferences-graph-container-box'><div className='label'>Feeling</div>
                <div style={{height: props.state.feeling * 3}} className='preference graph-bar-right feeling'>{props.state.feeling}</div>
            </div>
            <div className='preferences-graph-container-box'><div className='label'>Judging</div>
                <div style={{height: props.state.judging * 3}} className='preference graph-bar-left judging'>{props.state.judging}</div>
            </div>
            <div className='preferences-graph-container-box'><div className='label'>Perceiving</div>
                <div style={{height: props.state.perceiving * 3}} className='preference graph-bar-right perceiving'>{props.state.perceiving}</div>
            </div>
        </div>
    )
}

export default PreferencesGraph;
