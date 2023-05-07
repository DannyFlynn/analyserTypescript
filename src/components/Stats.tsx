import React from 'react';

interface IProps {
    wordCount: number;
    characterCount: number;
    readingSpeed: number;
    paragraphCount: number;
}

const Stats: React.FC<IProps> = ({ wordCount, characterCount, readingSpeed, paragraphCount }) => {
    return (
        <React.Fragment>
            <div className='mt-3'>
                <p>Total Words: {wordCount}</p>
                <p>Total Characters: {characterCount}</p>
                <p>Total Paragraphs: {paragraphCount}</p>
                <p>Average read speed: {readingSpeed.toFixed(2)}</p>

            </div>
        </React.Fragment>
    )
}

export default Stats