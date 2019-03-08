import React from 'react';

function IntroComponent () {
    return(
        <div>
            <h1 className='app-title'>Continuous-Choice Myers-Briggs Type Indicator (MBTI)</h1>
            <p className='app-intro'>This exam is an upgrade to the iconic forced-choice Myers-Briggs Type Indicator used ubiquitously throughout the world. The original forces the examinee to choose starkly between two extremes, many of which are not opposite, having caused a long history of unease and inaccurate data. This updated version allows the examinee to indicate preferences more granularly by leaning toward one answer or the other at varying degrees rather than choosing entirely between the two.</p>
            <ol className='app-directions'>
                <li>Scroll through the questions and slide sliders left and right according to your preferences.</li>
                <li>Do not over-analyze the questions. Answer quickly and honestly, and keep scrolling.</li>
                <li>Answer questions the <i>way you are</i> not the <i>way you’d like to be seen by others</i>.</li>
            </ol>

        </div>
    )
}

export default IntroComponent;
