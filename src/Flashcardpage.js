import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { useRef, useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function Flashcardpage(props) {

	const navigate = useNavigate();

    const [flashcards, setFlashcards] = useState([])
    const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0)
    const [guessedWord, setGuessedWord] = useState("")
    const [showResult, setShowResult] = useState(false)
    const [correct, setCorrect] = useState(false)



    useEffect(() => {
        console.log("load")

        let newFlashCards = props.flashcards.cards.map(card => {
            return {
                german: card.german,
                indonesian: card.indonesian,
                english: card.english,
                guessed: false,
                correct: false
            }
        })
        console.log(newFlashCards)

        for (var i = newFlashCards.length - 1; i > 0; i--) { 
       
            // Generate random number 
            var j = Math.floor(Math.random() * (i + 1));
                       
            var temp = newFlashCards[i];
            newFlashCards[i] = newFlashCards[j];
            newFlashCards[j] = temp;
        }
        console.log(newFlashCards)

        setFlashcards(newFlashCards)
    }, [])



    const handleChange = (event) => {
        setGuessedWord(event.target.value)
    }

    // const shuffleCards = (flashCards) => {
    //     let nflashCards = props.flashcards.cards.map(card => card)

    //     for (var i = nflashCards.length - 1; i > 0; i--) { 
       
    //         // Generate random number 
    //         var j = Math.floor(Math.random() * (i + 1));
                       
    //         var temp = nflashCards[i];
    //         nflashCards[i] = nflashCards[j];
    //         nflashCards[j] = temp;
    //     }

    //     return nflashCards
    // }

    const submitGuess = (event) => {


        console.log(guessedWord.toLowerCase()+" ? "+flashcards[currentFlashcardIndex].indonesian.toLowerCase())
        if (guessedWord.toLowerCase() == flashcards[currentFlashcardIndex].indonesian.toLowerCase()) {
            console.log("correct")
            updateFlashCard(currentFlashcardIndex, true)
        } else {
            console.log("incorrect")
            updateFlashCard(currentFlashcardIndex, false)

        }

        
        setShowResult(true)
        //setCurrentFlashcardIndex(currentFlashcardIndex+1)
        setGuessedWord("")
    }


    const nextCard = (event) => {

        
        console.log(currentFlashcardIndex + " : "+flashcards.length)

        if (currentFlashcardIndex >= (flashcards.length-1)){
            console.log("YOU COMPLETED WITH A "+getAccuracy()+"% ACCURACY!")

            props.changeResults({
                correct: getCorrectlyGuessed(),
                all: flashcards.length,
                accuracy: getAccuracy(),
                cards: flashcards
            })
            console.log(flashcards)

            navigate("/results")
        } else {
            setShowResult(false)
            setCurrentFlashcardIndex(currentFlashcardIndex+1)
            setGuessedWord("")
        }
    }

    const updateFlashCard = (index, correct) => {
        let c = props.flashcards.cards.map(card => card)

        c[currentFlashcardIndex].guessed = true
        c[currentFlashcardIndex].correct = correct

        setFlashcards(c)
    }

    const getCorrectlyGuessed = () => {
        return flashcards.filter(card => {
            return card.correct
        }).length
    }
    
    const getAccuracy = () => {
        const guessed = getGuessedCount() 
        const correct = getCorrectlyGuessed()

        let accuracy = Math.round((correct / guessed) * 100)

        if (guessed == 0 && correct == 0) accuracy = "100"

        return accuracy
    }

    const getGuessedCount = () => {
        return flashcards.filter(card => {
            return card.guessed
        }).length
    }

    const getWordCount = () => {
        return flashcards.length 
    }

    const isCorrect = () => {
        return flashcards[currentFlashcardIndex].correct
    }

    return (
        <div className="Flashcardpage">
            {
                flashcards[0] != undefined ?
                    <>
                        {/* <h1 className="category-name" >{props.flashcards.name}</h1>
                        <h1 className="category-desc" >{props.flashcards.desc}</h1> */}
                        <div className="back-card"></div>
                        <h1 className="guage-guessed" >{getGuessedCount() + " / " + getWordCount()}</h1>

                        {
                            showResult 
                            ? 
                            <>
                                <h1 className={isCorrect() ? "result-correct" : "result-incorrect"}>{flashcards[currentFlashcardIndex].indonesian}</h1>
                                <button className="button-next-card" onClick={nextCard}>next! →</button>
                            </>
                            
                            : 
                            <>
                                <h1 className="word-to-guess" >{flashcards[currentFlashcardIndex].german}</h1>
                                <div class="guess-wrapper">
                                    <input
                                        className='word-guessed'
                                        name="name"
                                        type="text"
                                        value={guessedWord}
                                        onChange={handleChange}
                                    />
                                    <button className="submit-guess" onClick={submitGuess}>?</button>
                                </div>
                            </>
                            
                        }
                        
                        {/* <div class="guess-wrapper">
                            <input
                                className='word-guessed'
                                name="name"
                                type="text"
                                value={guessedWord}
                                onChange={handleChange}
                            />
                            <button className="submit-guess" onClick={submitGuess}>?</button>
                        </div> */}
                        <h1 className="accuracy" >{getAccuracy() + "% Accuracy"}</h1>
                        
                    </>
                    :
                    <h1>wait. . .</h1>
            }


        </div>
    );
}

export default Flashcardpage;
