import { useEffect, React, useState } from "react";
import Question from "./Question";
import { nanoid } from "nanoid";
import { useLocation } from "react-router-dom";

export default function Quiz() {

    const [questions, setQuestions] = useState([]);
    const [score, setScore] = useState(0);

    const { state } = useLocation();

    let url = null;

    if (state.category == "any" && state.difficulty == "any") {
        url = `https://opentdb.com/api.php?amount=${state.amount}&type=multiple&encode=url3986`;
    } else if (state.category == "any") {
        url = `https://opentdb.com/api.php?amount=${state.amount}&difficulty=${state.difficulty}&type=multiple&encode=url3986`;
    } else if (state.difficulty == "any") {
        url = `https://opentdb.com/api.php?amount=${state.amount}&category=${state.category}type=multiple&encode=url3986`;
    } else {
        url = `https://opentdb.com/api.php?amount=${state.amount}&category=${state.category}&difficulty=${state.difficulty}&type=multiple&encode=url3986`;
    }

    //useeffect to load question from OTDB api
    useEffect(() => {
        (async function () {
            const response = await fetch(url);
            const data = await response.json();
            let all_question = [];
            data.results.map((obj) => {
                let que = {
                    id: nanoid(),
                    que: obj.question,
                    options: [
                        { value: obj.correct_answer },
                        { value: obj.incorrect_answers[0] },
                        { value: obj.incorrect_answers[1] },
                        { value: obj.incorrect_answers[2] },
                    ],
                    correct_answer: obj.correct_answer,
                    checked: null,
                    score: null,
                    disabled: false
                }
                shuffle(que.options);   //Shuffling the option randomly in-place.
                all_question.push(que);
            });
            setQuestions(all_question);
        })();
    }, []);

    //function to handle Selection of option.
    const handleSelection = (e, id) => {
        setQuestions(questions.map((que) => {
            if (que.id === id) {
                return { ...que, checked: e.target.value }
            } else {
                return que
            }
        }))
    }
    //function to handle the final submission of quiz.
    const handleSumbit = () => {
        let total_score = 0;
        setQuestions(questions.map((que) => {
            let que_score = 0
            if (que.checked === que.correct_answer) {
                total_score++;
                que_score = 1;
            }
            //console.log(que_score);
            return { ...que, score: que_score, disabled: true }
        }));
        setScore(total_score);
    }

    //Fisher-Yates Inplace shuffle.
    function shuffle(array) {
        var i = array.length,
            j = 0,
            temp;
        while (i--) {
            j = Math.floor(Math.random() * (i + 1));
            // swap randomly chosen element with current element
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    return (
        <div className="quiz-container">
            <div className="header">
                <h1>Quiz</h1>
                <hr />
                <h3>Category : {state.category}</h3>
                <h3>Difficulty : {state.difficulty}</h3>
                <hr />
            </div>
            <ul className="Quiz">
                {!!questions && questions.map((obj) => {
                    return <Question key={obj.id} info={obj} handleSelection={handleSelection} />
                })}
            </ul>
            <button onClick={handleSumbit}>Submit Answers</button>
        </div>
    )
}