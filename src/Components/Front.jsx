import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Front() {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        amount: "10",
        category: "any",
        difficulty: "any"
    });

    const handleChange = (event) => {
        let { name, value } = event.target;
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    return (
        <main className="front-page">
            <h1>Quzzical</h1>
            <form className="form" onSubmit={() => navigate('/quiz', { state: { ...formData } })}>

                <label htmlFor="trivia_amount">Number of Questions:</label>
                <input
                    type="number"
                    name="amount"
                    id="trivia_amount"
                    className="form-control"
                    min="1" max="50"
                    value={formData.amount}
                    onChange={handleChange}
                />

                <br />

                <label htmlFor="trivia_category">Select Category: </label>
                <select
                    name="category"
                    className="form-control"
                    value={formData.category}
                    onChange={handleChange}
                >
                    <option value="any">Any Category</option>
                    <option value="9">General Knowledge</option>
                    <option value="10">Entertainment: Books</option>
                    <option value="11">Entertainment: Film</option>
                    <option value="12">Entertainment: Music</option>
                    <option value="13">Entertainment: Musicals &amp; Theatres</option>
                    <option value="14">Entertainment: Television</option>
                    <option value="15">Entertainment: Video Games</option>
                    <option value="16">Entertainment: Board Games</option>
                    <option value="17">Science &amp; Nature</option>
                    <option value="18">Science: Computers</option>
                    <option value="19">Science: Mathematics</option>
                    <option value="20">Mythology</option>
                    <option value="21">Sports</option>
                    <option value="22">Geography</option>
                    <option value="23">History</option>
                    <option value="24">Politics</option>
                    <option value="25">Art</option>
                    <option value="26">Celebrities</option>
                    <option value="27">Animals</option>
                    <option value="28">Vehicles</option>
                    <option value="29">Entertainment: Comics</option>
                    <option value="30">Science: Gadgets</option>
                    <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
                    <option value="32">Entertainment: Cartoon &amp; Animations</option>
                </select>

                <br />

                <label htmlFor="trivia_difficulty">Select Difficulty: </label>
                <select
                    name="difficulty"
                    className="form-control"
                    value={formData.difficulty}
                    onChange={handleChange}
                >
                    <option value="any">Any Difficulty</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>

                <br />

                <button id="start-quiz" type="submit">Start Quiz</button>
            </form>
        </main>
    )
}