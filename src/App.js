//Short version = http://wvit.org/wp-content/uploads/2018/09/Keys-to-Family-Communication-1-of-9.pdf
//Long version = https://d3jc3ahdjad7x7.cloudfront.net/spokaLTFBEADL9JnMd7njgJd96nyp7YNgICG2tlJWifcI7GP.pdf

import React from 'react';
import './style.css';
import IntroComponent from './components/IntroComponent';
import QuestionComponent from './components/QuestionComponent';
import ArticleComponent from './components/ArticleComponent';
import PreferencesGraph from './components/PreferencesGraph';
import questionsData from './questionsData'; //Array of objects containing each of the MBTI questions and responses.
import allArticles from './allArticles'; //Array of objects containing the result literature for each of the 16 personality types.
let count = 1; //Initialize count
let article = {} //Initialize article as empty object

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            allResults: allArticles, //Put allArticles in state
            allQuestions: questionsData, //Put questionsData in state
            personalityArticle: allArticles[0], //Initialize personalityArticle as ANY of the 16 articles (i.e. not as an empty object) so that .map() in ArticleComponent doesn't try to map something undefined while set as visiblity none.
            count: count,
            testComplete: undefined,
            extroversion: 0,
            introversion: 0,
            sensing: 0,
            intuition: 0,
            thinking: 0,
            feeling: 0,
            judging: 0,
            perceiving: 0
        }
        this.handleChange = this.handleChange.bind(this); //Bind event handler to the constructor
        this.handleSubmit = this.handleSubmit.bind(this); //Bind event handler to the constructor
        this.updateCount = this.updateCount.bind(this); //Bind updateCount function constructor
        this.scroll = this.scroll.bind(this); //Bind scroll function to the constructor
        this.resetPreferences = this.resetPreferences.bind(this); //Bind resetPreferences function to the constructor
    }

    handleChange(e) {
        const {id, value} = e.target; //Destructure the target into id and value outside of setState to avoid a known issue with React

        this.setState(prevState => { //Pass callback function, rather than individual property(ies), into setState method...

            const updateAllQuestions = prevState.allQuestions.map(item => { //...to map over prevState.allQuestion, identify and update the new value of the target and set the new array inclusive of this property in state.
                if (item.id === parseInt(id, 10)) { //e.target.id is a string, so parse to an integer and if it equals the current item's id as they're being mapped over update the allQuestions.choice property with e.target.value

                    item.choice = value -50; //e.target.value will be between 0 and 100 so subtract 50 to get allQuestions.choice of between -50 and 50
                    return item;
                }
                return item; //else return unchanged item.
            });
            return {allQuestions: updateAllQuestions} //Then return the updated array to setState.
        });

    }

    handleSubmit(e) {

        e.preventDefault();

        let eI = 0; //Initialize eI value at 0
        let sN = 0; //Initialize sN value at 0
        let tF = 0; //Initialize tF value at 0
        let jP = 0; //Initialize jP value at 0
        let ei = 'X'; //Initialize types
        let sn = 'X'; //Initialize types
        let tf = 'X'; //Initialize types
        let jp = 'X' //Initialize types
        let extroversion = 0; //Initialize preferences
        let introversion = 0; //Initialize preferences
        let sensing = 0; //Initialize preferences
        let intuition = 0; //Initialize preferences
        let thinking = 0; //Initialize preferences
        let feeling = 0; //Initialize preferences
        let judging = 0; //Initialize preferences
        let perceiving = 0; //Initialize preferences
        let i; //Initialize iterator
        let tempCompleteStatus = undefined; //Initialize tempCompleteStatus

        for (i = 0; i < this.state.allQuestions.length; i++) { //For each of the questions identify their category and score accordingly
            if (this.state.allQuestions[i].category === 'EI') {
                eI += this.state.allQuestions[i].choice;
            }
            if (this.state.allQuestions[i].category === 'SN') {
                sN += this.state.allQuestions[i].choice;
            }
            if (this.state.allQuestions[i].category === 'TF') {
                tF += this.state.allQuestions[i].choice;
            }
            if (this.state.allQuestions[i].category === 'JP') {
                jP += this.state.allQuestions[i].choice;
            }
        }

        if (eI === 0 || sN === 0 || tF === 0 || jP === 0) { //If any of the categories equal 0 testComplete in state changes from undefined to false (without calling this.setState?) and the words "Calculate My Personality Type" on the button in the render change to "Please Finish Answering Questions." Then the count is premptively toggled so when it passes through this if statement if toggles again and the net result is unchanged (i.e. we stay on the same "page")...
            tempCompleteStatus = false;
            count = (count + 1) % 2;
        } else { //... else we can set it to true without premptively toggling count so when it does hit the count line we see the "new page" of the article.
            tempCompleteStatus = true;
        }

        //Divide category totals by the number of questions in that category (eI has 9 instead of 10 because one question was obsolete) so that we have preferences on a -50 through 50 scale and can thereby calculate each of the 8 preferences as a percentage 0 - 100%
        eI = eI/9;
        sN = sN/20;
        tF = tF/20;
        jP = jP/20;

        //Calculate the percentage inclination of each of the preferences and round to the tenths decimal place
        if (eI < 0) {
            ei = 'E';
            extroversion = ((Math.round((eI - 50) * -10)) / 10).toFixed(1);
            introversion = (100 - extroversion).toFixed(1);
        } else {
            ei = 'I';
            introversion = ((Math.round((eI + 50) * 10)) / 10).toFixed(1);
            extroversion = (100 - introversion).toFixed(1);
        }
        if (sN < 0) {
            sn = 'S';
            sensing = ((Math.round((sN - 50) * -10)) / 10).toFixed(1);
            intuition = (100 - sensing).toFixed(1);
        } else {
            sn = 'N';
            intuition = ((Math.round((sN + 50) * 10)) / 10).toFixed(1);
            sensing = (100 - intuition).toFixed(1);
        }
        if (tF < 0) {
            tf = 'T';
            thinking = ((Math.round((tF - 50) * -10)) / 10).toFixed(1);
            feeling = (100 - thinking).toFixed(1);
        } else {
            tf = 'F';
            feeling = ((Math.round((tF + 50) * 10)) / 10).toFixed(1);
            thinking = (100 - feeling).toFixed(1);
        }
        if (jP < 0) {
            jp = 'J';
            judging = ((Math.round((jP - 50) * -10)) / 10).toFixed(1);
            perceiving = (100 - judging).toFixed(1);
        } else {
            jp = 'P';
            perceiving = ((Math.round((jP + 50) * 10)) / 10).toFixed(1);
            judging = (100 - perceiving).toFixed(1);
        }

        count = (count + 1) % 2; //Toggle count between 1 and 2 to conditionally style components as visible or not (though this breaks the DRY principle, better to be done both within handleSubmit and as this.state.updateCount since functions within state can't call eachother)

        article = this.state.allResults.find(i => i.acronym === `${ei}${sn}${tf}${jp}`) //In the array of 16 articles in state find the article with the acronym property that matches the concatonation of the four letters

        this.setState({ //Set personalityArticle,count, and the percent inclination for all 8 preferenes in state
            personalityArticle: article,
            count: count,
            extroversion: extroversion,
            introversion: introversion,
            sensing: sensing,
            intuition: intuition,
            thinking: thinking,
            feeling: feeling,
            judging: judging,
            perceiving: perceiving,
            testComplete: tempCompleteStatus
        });

        setTimeout(this.scroll, 0); //This is a workaround React's error that you should only set the state using the setState method. This allows state to update and captures the face that window.scrollTo(0,0) needs to happen after the setState's parent function has returned. Previously I'd tried setting testComplete in the earlier conditional statement that checks to make sure that each of eI, sN, tF and jP don't equal zero. This worked because by the time setState was run testComplete was already true and so window.scrollTo(0,0) would happen but, though it worked, React put an error in the console. Naturally, I made a temporary version of testComplete within the scope of handleSubmit later to be updated when setState was called to see if this would fix the console error, which it did, but then my window.scrollTo(0,0) line wasn't running on the condition that testComplete was true. Why? What I learned empirically is that in React the setState method doesn't actually update state until its parent function has returned, so setting testComplete in my setState method wasn't working to trigger window.scrollTo(0,0) because when it was hitting the window.scrollTo(0,0) line testComplete was still either undefined or false in state. What worked was of course allowing state to update with setState, binding a function containing window.scrollTo(0,0) to the constructor and calling it from a setTimeout after setState so that after setState's parent function had returned, i.e. after state was actually set, the scroll function would have the updated version of state and be able to scroll if {testComplete: true} or not scroll if {testComplete: undefined} or {testComplete: false}

    }

    scroll() {
        if (this.state.testComplete === true) {
            window.scrollTo(0,0); //When submit is handled scroll to the top of "the new page." Because this is really the same page with visibility toggled, if this code isn't included in the submit handler the window will simply remain scrolled to the bottom of the page where it currently is (where the button is) when the button is clicked/submit is handled.
        }
    }

    updateCount() {
        count = (count + 1) % 2; //Toggle count between 1 and 2 to conditionally style components as visible or not (though this breaks the DRY principle, better to be done both within handleSubmit and as this.state.updateCount since functions within state can't call each other)
    }

    resetPreferences() { //If preferences aren't reset when "Take Test Again" button is clicked then we won't get the CSS height animations from height: 0.
        this.updateCount();
        this.setState ({
            extroversion: 0,
            introversion: 0,
            sensing: 0,
            intuition: 0,
            thinking: 0,
            feeling: 0,
            judging: 0,
            perceiving: 0
        });
    }

    render() {

        const questionsRendered = this.state.allQuestions.map((i) => <QuestionComponent key={i.id} item={i} sliding={this.handleChange}/>) //Create an array of components based on the array of questions (saved in state) passing the bound event handler method as a prop and passing each object as a prop which will be drilled into from the component side.
        return(
            <form id="whole-page" className="animate-opacity">

                <h1 style={{display: this.state.count === 1 ? 'none' : 'block'}} className='nickname'>"{this.state.personalityArticle.nickname}"</h1>

                <div style={{visibility: this.state.count === 1 ? 'hidden' : 'visible'}}><PreferencesGraph state={this.state}/></div>

                <div style={{display: this.state.count === 0 ? 'none' : 'block'}}><IntroComponent/>
                </div>

                <div style={{display: this.state.count === 0 ? 'none' : 'block'}}>{questionsRendered}
                    <button onClick={this.handleSubmit}>{this.state.testComplete === undefined ? 'Calculate My Personality Type' : 'Please Finish Answering Questions'}</button>
                </div>

                <div style={{display: this.state.count === 1 ? 'none' : 'block'}}>

                    <ArticleComponent key={this.state.personalityArticle.id} article={this.state.personalityArticle}/>

                    <button style={{display: this.state.count === 1 ? 'none' : 'block'}} onClick={this.resetPreferences}>Take Test Again</button>
                </div>

            </form>

        )
    }
}

export default App;
