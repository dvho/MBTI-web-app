import React from 'react';

function QuestionComponent (props) {
    return(
        <div className="question-block">
            <div style={{opacity: `${((props.item.choice * -1) + 80)/100}`, transform: `scale(${((props.item.choice * -1) + 100)/90})`}} className="percent-left percent">{-props.item.choice + 50}%</div>
            <div style={{opacity: `${(props.item.choice + 80)/100}`, transform: `scale(${(props.item.choice + 100)/90})`}} className="percent-right percent">{props.item.choice + 50}%</div>

            <div className="question"><p style={{animation: props.item.choice === -50 || props.item.choice === 50 ? `animate-question .35s ease` : ``}}>{props.item.question}</p></div>
            <div className="container-1">
                <div style={{opacity: `${((props.item.choice * -1) + 80)/100}`, textShadow: `0px 0px 12px rgba(255, 255, 240, ${(props.item.choice)/-50}`}} className="answer-1">{props.item.answerA}</div>
                <div className="center-slider"><input type="range" min="0" max="100" className="slider" id={props.item.id} onChange={props.sliding}/></div>
                <div style={{opacity: `${(props.item.choice + 80)/100}`, textShadow: `0px 0px 12px rgba(255, 255, 240, ${(props.item.choice)/50}`}} className="answer-2">{props.item.answerB}</div>
            </div>
            <div style={{height: `${(props.item.choice * -1.5) + 75}px`, marginTop: `-${(props.item.choice * -1.5) + 75}px`, opacity: `${((((props.item.choice) * -1)+50)/100)}`}} className="graphs left-graph"></div>
            <div style={{height: `${(props.item.choice * 1.5) + 75}px`, marginTop: `-${(props.item.choice * 1.5) + 75}px`, opacity: `${(props.item.choice + 50)/100}`}} className="graphs right-graph"></div>
        </div>
    )
}

export default QuestionComponent;
