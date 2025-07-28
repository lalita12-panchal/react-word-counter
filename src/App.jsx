import { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);

  const handleTextChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);

    // Calculate characters (excluding whitespace)
  const chars = inputText.replace(/\s+/g, '');

    setCharacterCount(chars.length);

    // Calculate sentences (roughly by splitting on .!?)
const sentences = inputText.trim().split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
    setSentenceCount(sentences.length);
  };

  const handleDelete = () => {
    setText('');
    setCharacterCount(0);
    setSentenceCount(0);
  };

  return (
    <>
      <div className='Container'>
        <div className='Container_middle'>
          <div className='right'>
            <textarea
              className='text-input'
              rows="6"
              placeholder='Type or paste your text'
              value={text}
              onChange={handleTextChange}
            />
            <div className='button-div'>
              <button className='button-65' onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
          <div className='left'>
            <div className='Container_middle_para'>
              <h1>Result</h1>
            </div>
            <div className='flex-container'>
              <div>
                <p>
                  <strong>Characters:</strong> {characterCount}
                </p>
              </div>
              <div>
                <p>
                  <strong>Sentences:</strong> {sentenceCount}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
