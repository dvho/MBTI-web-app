import React from 'react';

function PreferencesGraph(props) {
    return(
        <div>
            <div className='preferences-pairs'>
                <div className='graph-heading'>E/I</div>
                <div className='graph-heading'>S/N</div>
                <div className='graph-heading'>T/F</div>
                <div className='graph-heading'>J/P</div>
            </div>
            <div className='preferences-graph-container'>
                <div className='preferences-graph-container-box'><div className='label'>Extroversion</div>
                    <div style={{height: props.state.extroversion * 3}} className='preference graph-bar-left'>{props.state.extroversion}</div>
                </div>
                <div className='preferences-graph-container-box'><div className='label'>Introversion</div>
                    <div style={{height: props.state.introversion * 3}} className='preference graph-bar-right'>{props.state.introversion}</div>
                </div>
                <div className='preferences-graph-container-box'><div className='label'>Sensing</div>
                    <div style={{height: props.state.sensing * 3}} className='preference graph-bar-left'>{props.state.sensing}</div>
                </div>
                <div className='preferences-graph-container-box'><div className='label'>Intuition</div>
                    <div style={{height: props.state.intuition * 3}} className='preference graph-bar-right'>{props.state.intuition}</div>
                </div>
                <div className='preferences-graph-container-box'><div className='label'>Thinking</div>
                    <div style={{height: props.state.thinking * 3}} className='preference graph-bar-left'>{props.state.thinking}</div>
                </div>
                <div className='preferences-graph-container-box'><div className='label'>Feeling</div>
                    <div style={{height: props.state.feeling * 3}} className='preference graph-bar-right'>{props.state.feeling}</div>
                </div>
                <div className='preferences-graph-container-box'><div className='label'>Judging</div>
                    <div style={{height: props.state.judging * 3}} className='preference graph-bar-left'>{props.state.judging}</div>
                </div>
                <div className='preferences-graph-container-box'><div className='label'>Perceiving</div>
                    <div style={{height: props.state.perceiving * 3}} className='preference graph-bar-right'>{props.state.perceiving}</div>
                </div>
            </div>
        </div>
    )
}

export default PreferencesGraph;
