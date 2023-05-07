import React, { useState, useEffect } from 'react';


//bootstrap
import { Container } from 'react-bootstrap';

//components
import TextArea from './TextArea';
import Buttons from './Buttons';
import Stats from './Stats';


const MainContainer: React.FC = () => {

    //handleTextArea
    const [text, setText] = useState<string>("");

    //changes color of text
    const [color, setColor] = useState<string>('#000000');

    //button will be default on uppercase when pressed user can select to go to lower case 
    const [uppercase, setUppercase] = useState<boolean>(true);

    //count words
    const [wordCount, setWordCount] = useState<number>(0);
    const [characterCount, setCharacterCount] = useState<number>(0);
    const [paragraphCount, setParagraphCount] = useState<number>(0);

    //avr read speed
    const [readingSpeed, setReadingSpeed] = useState<number>(0);

    useEffect(() => {
        // Load the saved text from the local storage
        const savedText = localStorage.getItem('savedText');
        if (savedText) {
            setText(savedText);
        }
    }, []);

    useEffect(() => {
        // Save the text to the local storage
        localStorage.setItem('savedText', text);
    }, [text]);


    //text area control
    const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {

        const newText = event.target.value;
        setText(newText);

    }

    //change color of text
    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>): void => {

        setColor(event.target.value);

    }

    //uppercase or lowercase uppercase by default
    const handleUpperCase = (): void => {

        setText(uppercase === true ? text.toUpperCase() : text.toLowerCase());
        setUppercase(!uppercase);

    }

    //reset text
    const resetText = (): void => {

        setText("");
        setWordCount(0);
        setCharacterCount(0);
        setReadingSpeed(0);
        setParagraphCount(0);
        localStorage.clear();
    }

    //counts current words and characters in text area an it ignores whitespace
    const count = (): void => {

        const trimmedText = text;

        //count words and character and remove whitespace
        const wordCount = trimmedText.split(/\s+/).filter(space => space !== "");
        const characterCount = trimmedText.split("").filter(space => space.trim() !== "");

        setWordCount(wordCount.length);
        setCharacterCount(characterCount.length);

        avgReadSpeed(wordCount.length);
        paragraphCounter(text);


    }

    //avr read speed on wwhat words are in text area
    const avgReadSpeed = (words: number): void => {

        const readingSpeed = 225;
        const readingTimeInMinutes = words / readingSpeed;
        const readingTimeInSeconds = readingTimeInMinutes * 60;
        setReadingSpeed(readingTimeInSeconds);
        speakText()
    }

    const paragraphCounter = (paraCount: string): void => {

        const paragraphs = paraCount.split(/\n\s*\n/).filter(paragraph => paragraph.trim() !== '');
        setParagraphCount(paragraphs.length);

    }

    //wanted to implement a speach feaute for visually impaired
    const speakText = () => {
        if ('speechSynthesis' in window) {
            const synthesis = window.speechSynthesis;
            const utterance = new SpeechSynthesisUtterance(text);
            synthesis.speak(utterance);
        } else {
            console.log('Text-to-speech not supported in this browser.');
        }
    };

    return (
        <React.Fragment>
            <Container className='mt-4'>
                <div>
                    <p className='display-6'>Word Analyser</p>
                </div>
                <Buttons color={color} handleColorChange={handleColorChange} handleUpperCase={handleUpperCase} uppercase={uppercase} resetText={resetText} count={count} />
                <TextArea color={color} text={text} handleTextChange={handleTextChange} />
                <Stats wordCount={wordCount} characterCount={characterCount} readingSpeed={readingSpeed} paragraphCount={paragraphCount} />
            </Container>
        </React.Fragment>
    )
}

export default MainContainer