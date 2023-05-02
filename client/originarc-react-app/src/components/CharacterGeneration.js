import React, { useState } from 'react'
import axios from 'axios';

import '../styles/character.css';

function CharacterGeneration() {
  const [userPrompt, setUserPrompt] = useState('');
  const [promptOutput, setPromptOutput] = useState('');
  const [characterName, setCharacterName] = useState('');
  const [stage, setStage] = useState(1);

  const handlePromptChange = (event) => {
    setUserPrompt(event.target.value);
  };

  const handleNameChange = (event) => {
    setCharacterName(event.target.value);
  }

  const handlePromptSubmit = async (event) => {
    event.preventDefault();
    if (!(userPrompt==='')) {
      setStage(stage+1)
      try {
        const response = await axios.post('http://localhost:5000/generate', { userPrompt })
        setPromptOutput(response.data); 
      } catch (error) {
        console.log(error.response.data.message)
      }
    }
  };

  const handleCharacterSubmit = (event) => {
    event.preventDefault();
    if (!(characterName==='')) {
      setStage(stage+1)
      try {
        setCharacterName(characterName);
      } catch (error) {
        console.log(error.response.data.message)
      }
    }
  }

  const handlePromptClear = (event) => {
    setPromptOutput('');
    setUserPrompt('');
  };

  const handleCharacterClear = (event) => {
    setCharacterName('');
  };

  const handlePrevious = (event) => {
    setStage(stage-1);
  };

  const handleRegenerate = (event) => {
    if (promptOutput==='') {
      setPromptOutput('');
    } else {
      setPromptOutput('regenerated output');
    }
  };

  return (
    <>
      {stage===1 && (
        <>
          <div className='middle-box'>
            <div className='form-content'>

              <form onSubmit={handlePromptSubmit}>
                <label>Your Character Description:</label>

                <br />
                <br />

                <div className='description-box'>
                  <textarea
                    value={userPrompt}
                    onChange={handlePromptChange}
                    type="text"
                    autoComplete="off"
                  />
                </div>

                <br />
                <br />

                <button type='submit'>submit</button>
                <button onClick={handlePromptClear}>clear</button>
              </form>

            </div>
          </div>
        </>
      )}

      {stage === 2 && (
        <>
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

          <div className='right-box'>
            <form onSubmit={handleCharacterSubmit}>
              <label>The name you have chosen for your character:</label>

              <br />
              <br />

              <div className='description-box'>
                <input
                  value={characterName}
                  onChange={handleNameChange}
                  type="text"
                  autoComplete="off"
                />
              </div>

              <br />
              <br />

              <button type='submit'>submit</button>
              <button onClick={handleCharacterClear}>clear</button>
            </form>
          </div>
        </>
      )}

      {stage === 3 && (
        <>
          <div className='middle-box'>
            <div className='response-content'>

              <span>{characterName}</span>

              <button onClick={handlePrevious}>Back</button>
              {/* <button onClick={handleNext}>Next</button> */}

            </div>
          </div>
        </>
      )}
      
    </>
  )
}

export default CharacterGeneration  