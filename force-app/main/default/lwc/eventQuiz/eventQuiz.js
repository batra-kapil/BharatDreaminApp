// quizComponent.js
import { LightningElement, track, api } from 'lwc';
import submitQuiz from "@salesforce/apex/EventAppCtrl.submitQuiz";
import hasSubmittedQuiz from "@salesforce/apex/EventAppCtrl.hasSubmittedQuiz";
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class EventQuiz extends LightningElement {
    @api attendeeId;
    @api eventId;
    @api attendeeRegId;
    @track hasSubmitted = false;
    @track questions = [
        {
            id: 'q1',
            text: 'What is the capital of France?',
            options: [
                { id: 'q1a', text: 'London', correct: false },
                { id: 'q1b', text: 'Paris', correct: true },
                { id: 'q1c', text: 'Berlin', correct: false },
                { id: 'q1d', text: 'Rome', correct: false }
            ],
            //selectedOption: null
        },
        {
            id: 'q2',
            text: 'Which planet is known as the Red Planet?',
            options: [
                { id: 'q2a', text: 'Jupiter', correct: false },
                { id: 'q2b', text: 'Mars', correct: true },
                { id: 'q2c', text: 'Mercury', correct: false },
                { id: 'q2d', text: 'Saturn', correct: false }
            ],
            //selectedOption: null
        },
        // Add more questions similarly
    ];

    @track totalScore = 0;

    connectedCallback() {
        this.checkIfSubmitted();
    }

    checkIfSubmitted() {
        hasSubmittedQuiz({ attendeeId: this.attendeeId })
            .then((result) => {
                this.hasSubmitted = result;
            })
            .catch((error) => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error',
                        message: error.body.message,
                        variant: 'error'
                    })
                );
            });
    }
    handleOptionSelect(event) {
        const questionId = event.target.name;
        const selectedOptionId = event.target.value;

        // Update selected option for the respective question
        this.questions = this.questions.map(question => {
            if (question.id === questionId) {
                question.selectedOption = selectedOptionId;
            }
            return question;
        });
    }
    voteType;
    handleSubmit() {
        if (!this.validateQuestions()) {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error',
                    message: 'Please answer all the questions before submitting.',
                    variant: 'error'
                })
            );
            return;
        }
        else
            {
        // Calculate total score based on correct answers
        this.totalScore = this.calculateScore();
        // Call Apex method to insert the result
        console.log('##data '+this.totalScore+'##Id '+this.attendeeId);
        submitQuiz({ totalPoints: this.totalScore, attendeeId: this.attendeeId })
            .then(() => {
                this.hasSubmitted=true;
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Quiz submitted successfully!',
                        variant: 'success'
                    })
                );
                
            })
            .catch(error => {
                console.log('##catch');
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error',
                        message: error.body.message,
                        variant: 'error'
                    })
                );
            });
            }

        
    }

    validateQuestions() {
        const allAnswered = this.questions.every(question => question.selectedOption !== undefined);
        return allAnswered;
    }

    calculateScore() {
        let score = 0;
        this.questions.forEach(question => {
            const selectedOption = question.options.find(option => option.id === question.selectedOption);
            if (selectedOption && selectedOption.correct) {
                score += 500; // 500 points per correct answer
            }
        });
        return score;
    }
}
