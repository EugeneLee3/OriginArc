import React from 'react'

import '../styles/character.css';

function CharacterGeneration() {
  return (
    <>
        <form>
          <label>
            Your Character Description:
            <textarea
              maxLength={500}
              type="text"
              autocomplete="off"
              className='description-box'
            />
          </label>
        </form>
    </>
  )
}

export default CharacterGeneration  