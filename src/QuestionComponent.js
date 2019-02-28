import React from 'react';

function QuestionComponent (props) {
    return(
        <div className="question-block">
            <div className="percent-left percent">{-props.item.choice + 50}%</div>
            <div className="percent-right percent">{props.item.choice + 50}%</div>

            <div className="question"><p>{props.item.question}</p></div>
            <div className="container-1">
                <div className="box-1">{props.item.answerA}</div>
                <div className="box-2"><input type="range" min="0" max="100" className="slider" id={props.item.id} onChange={props.sliding}/></div>
                <div className="box-3">{props.item.answerB}</div>
            </div>
            <div style={{height: `${(props.item.choice * -1.5) + 75}px`, marginTop: `-${(props.item.choice * -1.5) + 75}px`, opacity: `${((((props.item.choice) * -1)+50)/200)}`}} className="graphs left-graph"></div>
            <div style={{height: `${(props.item.choice * 1.5) + 75}px`, marginTop: `-${(props.item.choice * 1.5) + 75}px`, opacity: `${(props.item.choice + 50)/200}`}} className="graphs right-graph"></div>
        </div>
    )
}

export default QuestionComponent;
