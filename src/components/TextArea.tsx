import React from 'react';

interface IProps {
    color: string;
    text: string;
    handleTextChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<IProps> = ({ color, text, handleTextChange }) => {
    return (
        <React.Fragment>
            <div className='mt-3'>
                <textarea className="p-2"
                    spellCheck="true"
                    lang={"en"}
                    rows={10}
                    value={text}
                    style={{ color: color }}
                    onChange={handleTextChange}></textarea>
            </div>
        </React.Fragment>
    )
}

export default TextArea