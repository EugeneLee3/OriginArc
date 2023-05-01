import React, { useState } from 'react'
import axios from 'axios';

import '../styles/character.css';

function CharacterGeneration() {
  const [userPrompt, setUserPrompt] = useState('');
  const [promptOutput, setPromptOutput] = useState('');
  const [stage, setStage] = useState(1);

  const handleTextChange = (event) => {
    setUserPrompt(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!(userPrompt==='')) {
      setStage(stage+1)
      try {
        const response = await axios.post('http://localhost:5000/generate', { userPrompt })
        setPromptOutput(response);
      } catch (error) {
        console.log(error.response.data.message)
      }
    }
  };
  

  const handleRegenerate = (event) => {
    if (promptOutput==='') {
      setPromptOutput('');
    } else {
      setPromptOutput('regenerated output');
    }
  }

  const handleClear = (event) => {
    setPromptOutput('');
    setUserPrompt('');
  }

  const handleNext = (event) => {
    setStage(stage+1);
  }

  const handlePrevious = (event) => {
    setStage(stage-1);
  }

  return (
    <>
      {stage===1 && (
        <div className='left-box'>
          <div className='form-content'>

            <form onSubmit={handleSubmit}>
              <label>Your Character Description:</label>

              <br />
              <br />

              <div className='description-box'>
                <textarea
                  value={userPrompt}
                  onChange={handleTextChange}
                  maxLength={100}
                  type="text"
                  autoComplete="off"
                />
              </div>

              <br />
              <br />

              <button type='submit'>submit</button>
              <button onClick={handleClear}>clear</button>
            </form>

          </div>
        </div>
      )}

      {stage === 2 && (
        <div className='left-box'>
          <div className='response-content'>

            <span>Here is a list of possible character names: </span>

            <br />
            <br />

            <div className='response-list'>
              <span>{promptOutput}</span>
            </div>

            <br />
            <br />

            <button onClick={handleRegenerate}>Regenerate Responses</button>
            <button onClick={handlePrevious}>Back</button>
            <button onClick={handleNext}>Next</button>

          </div>
        </div>
      )}

      {stage === 3 && (
        <div className='left-box'>
          <div className='response-content'>

            <span>Here is a list of possible character names: </span>

            <br />
            <br />

            <div className='response-list'>
              <span>{promptOutput}</span>
            </div>

            <br />
            <br />

            <button onClick={handleRegenerate}>Regenerate Responses</button>
            <button onClick={handlePrevious}>Back</button>

          </div>
        </div>
      )}
      
    </>
  )
}

export default CharacterGeneration  