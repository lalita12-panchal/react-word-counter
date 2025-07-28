function App() {
  const [text, setText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);

  const handleTextChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);

    const chars = inputText.replace(/\s+/g, '');
    setCharacterCount(chars.length);

    const sentences = inputText.split(/[.!?]+/).filter(Boolean);
    setSentenceCount(sentences.length);
  };

  const handleDelete = () => {
    setText('');
    setCharacterCount(0);
    setSentenceCount(0);
  };

  return (
    <>
      <div className='app-wrapper'>
        {/* 🔥 New Heading Section */}
        <h1 className="main-heading">This is a Word Counter Application</h1>

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
      </div>
    </>
  );
}
