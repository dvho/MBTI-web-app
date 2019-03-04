import React from 'react';
import ParagraphComponent from './ParagraphComponent';
import UnorderedListComponent from './UnorderedListComponent';
import OrderedListComponent from './OrderedListComponent';

function ArticleComponent(props) {

    const intro = props.article.intro.map((i) => <ParagraphComponent key={i} p={i}/>);
    const traits = props.article.traits.map((i) => <UnorderedListComponent key={i} li={i}/>);
    const relationshipStrengths = props.article.relationshipStrengths.map((i) => <UnorderedListComponent key={i} li={i}/>);
    const relationshipWeaknesses = props.article.relationshipWeaknesses.map((i) => <UnorderedListComponent key={i} li={i}/>);
    const succeeding = props.article.succeeding.map((i) => <ParagraphComponent key={i} p={i}/>);
    const strengths = props.article.strengths.map((i) => <UnorderedListComponent key={i} li={i}/>);
    const gifts = props.article.gifts.map((i) => <UnorderedListComponent key={i} li={i}/>);
    const problems = props.article.problems.map((i) => <ParagraphComponent key={i} p={i}/>);
    var weaknesses = []; //Initialize empty weaknesses array so that map() doesn't try to work in cases where props.article.weaknesses is undefined (must be a var, not const, otherwise React with throw an error in the logs 'weaknesses' is constant  no-const-assign). All of this must be done because ENFJ doesn't have a weaknesses prop.

    if (props.article.weaknesses) { //If props.article.weaknesses does not equal undefined...
        weaknesses = props.article.weaknesses.map((i) => <UnorderedListComponent key={i} li={i}/>); //...set const weaknesses equal to mapping over the array and outputting an unordered list using UnorderedListComponent. All of this must be done because ENFJ doesn't have a weaknesses prop.
    }

    const problemsExplanation = props.article.problemsExplanation.map((i) => <ParagraphComponent key={i} p={i}/>);
    const solutions = props.article.solutions.map((i) => <ParagraphComponent key={i} p={i}/>);
    const livingHappily = props.article.livingHappily.map((i) => <ParagraphComponent key={i} p={i}/>);
    const suggestions = props.article.suggestions.map((i) => <ParagraphComponent key={i} p={i}/>);
    const tenRules = props.article.tenRules.map((i) => <OrderedListComponent key={i} li={i}/>);

    return (
        <div>

            <h1>"{props.article.nickname}"</h1>

            <h2>{props.article.title}</h2>

            {intro}

            <h3>Jungian functional preference ordering:</h3>

            <ul>
                <li>Dominant - {props.article.jungOrder.dominant}</li>
                <li>Auxilary - {props.article.jungOrder.auxilary}</li>
                <li>Tertiary - {props.article.jungOrder.tertiary}</li>
                <li>Inferior - {props.article.jungOrder.inferior}</li>
            </ul>

            <h3>{props.article.acronym}'s generally have the following traits:</h3>

            <ul>
                {traits}
            </ul>

            <p style={{display: props.article.traitsBlurb ? 'block' : 'none'}}>{props.article.traitsBlurb}</p>

            <div style={{display: props.article.relationshipsBlurb ? 'block' : 'none'}}>

                <h3>{props.article.acronym} Relationships</h3>

                <p>{props.article.relationshipsBlurb}</p>

            </div>

            <h3>{props.article.acronym} Strengths</h3>

                <ul>
                    {relationshipStrengths}
                </ul>

            <h3>{props.article.acronym} Weaknesses</h3>

                <ul>
                    {relationshipWeaknesses}
                </ul>

            <h3>What does Success mean to an {props.article.acronym}</h3>

            {succeeding}

            <h3>Allowing Your {props.article.acronym} Strengths to Flourish</h3>

            <p>{props.article.flourishing}</p>

            <ul>
                {strengths}
            </ul>

            <p>{props.article.giftsIntro}</p>

            <ul>
                {gifts}
            </ul>

            <h3>Potential Problem Areas</h3>

            {problems}

            <p style={{display: props.article.weaknessesIntro ? 'block' : 'none'}}>{props.article.weaknessesIntro}</p>

            <ul style={{display: props.article.weaknesses !== [] ? 'block' : 'none'}}>
                {weaknesses}
            </ul>

            <h3>Explanation of Problems</h3>
            {problemsExplanation}

            <h3>Solutions</h3>
            {solutions}

            <h3>Living Happily in our World as an {props.article.acronym}</h3>
            {livingHappily}

            <h3>Specific Suggestions</h3>
            {suggestions}

            <h3>Ten Rules to Live By to Achieve {props.article.acronym} Success</h3>

            <ol>
                {tenRules}
            </ol>

        </div>
    )
}

export default ArticleComponent;
