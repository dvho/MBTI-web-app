//Short version = http://wvit.org/wp-content/uploads/2018/09/Keys-to-Family-Communication-1-of-9.pdf
//Long version = https://d3jc3ahdjad7x7.cloudfront.net/spokaLTFBEADL9JnMd7njgJd96nyp7YNgICG2tlJWifcI7GP.pdf

import React from 'react';
import './style.css';
import QuestionComponent from './QuestionComponent';
import questionsData from './questionsData'; //Array of objects containing each of the MBTI questions and responses.
import testResults from './testResults'; //Array of objects containing the result literature for each of the 16 personality types.
let count = 1;

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            allResults: testResults,
            allQuestions: questionsData, //Put questionsData in state
            personalityType: '',
            count: count
        }
        this.handleChange = this.handleChange.bind(this); //Bind event handler to the constructor
        this.handleSubmit = this.handleSubmit.bind(this); //Bind event handler to the constructor
        this.updateCount = this.updateCount.bind(this); //Bind event handler to the constructor
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
        let i;
        let eI = 0; //Initialize eI value at 0
        let sN = 0; //Initialize sN value at 0
        let tF = 0; //Initialize tF value at 0
        let jP = 0; //Initialize jP value at 0
        let ei = 'e'; //Initialize types
        let sn = 's'; //Initialize types
        let tf = 't'; //Initialize types
        let jp = 'j' //Initialize types

        for (i = 0; i < this.state.allQuestions.length; i++) {
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

        ei = eI <= 0 ? 'E' : 'I';
        sn = sN <= 0 ? 'S' : 'N';
        tf = tF <= 0 ? 'T' : 'F';
        jp = jP <= 0 ? 'J' : 'P';

        count = (count + 1) % 2;

        this.setState({
            personalityType: `${ei}${sn}${tf}${jp}`,
            count: count
        })
    }

    updateCount() {
        count = (count + 1) % 2; //Count alternates between 1 and 2 to conditionally style components as visible or not
    }

    render() {

        console.log(this.state.allResults)
        const questionsRendered = this.state.allQuestions.map((i) => <QuestionComponent key={i.id} item={i} sliding={this.handleChange}/>) //Create an array of components based on the array of questions (saved in state) passing the bound event handler method as a prop and passing each object as a prop which will be drilled into from the component side.
        return(
            <form>
                <div style={{display: this.state.count === 0 ? 'none' : 'block'}}>{questionsRendered}<button onClick={this.handleSubmit}>Calculate My Personality Type</button></div>

                <div style={{display: this.state.count === 1 ? 'none' : 'block'}}>
                    {this.state.personalityType} {this.state.allResults[0].title}
                    <button style={{display: this.state.count === 1 ? 'none' : 'block'}} onClick={this.updateCount}>Take Test Again</button>
                </div>
            </form>

        )
    }
}

export default App;
