import React from 'react';

function IntroComponent () {
    return(
        <div>
            <h1 className='app-title'>Continuous-Choice Myers-Briggs Type Indicator (MBTI)</h1>
            <p className='app-intro'>This exam is an upgrade to the iconic forced-choice <i>Myers-Briggs Type Indicator</i> used ubiquitously throughout the world. The original forces the examinee to choose starkly between a pair of two extremes (referred to as "forced-choice" questioning), having caused a long history of unease and inaccurate data. Moreover, many of the pairs are not logical opposites, compounding frustration and inaccuracies. This updated version allows the indication of preferences with more granularity by leaning toward one answer or the other within a range of 0-100 rather than choosing entirely between the two.</p>
            <div className='app-directions'>
                <p>1. Scroll through the questions and slide sliders left and right according to your preferences.</p>
                <p>2. Do not over-analyze the questions. Answer quickly and honestly, and keep scrolling.</p>
                <p>3. Answer questions the <i>way you are</i> not the <i>way you’d like to be seen by others</i>.</p>
            </div>
        </div>
    )
}

export default IntroComponent;
