import { countBy, find, some } from 'lodash'
import React, { useReducer, useEffect } from 'react'
import styled from 'styled-components'
import Button from '../components/button'
import styles from '../styles/Home.module.css'

const StyledP = styled.p`
  padding: 0rem 15rem;
`
const trapCardTypes = ['snake', 'spider', 'falling rocks', 'lava', 'zombie']

const shuffleDeck = () => {
  let deck = []

  // create the trap cards
  for (let i = 0; i < trapCardTypes.length; i++) {
    for (let x = 0; x < 3; x++) {
      let card = { name: trapCardTypes[i], type: 'trap', points: 0 }
      deck.push(card)
    }
  }

  // create the treasure cards
  for (let i = 0; i < 15; i++) {
    let card = { name: 'treasure', type: 'treasure', points: i + 1 }
    deck.push(card)
  }

  //shuffle the deck
  for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i)
    let temp = deck[i]
    deck[i] = deck[j]
    deck[j] = temp
  }

  return deck
}

const initialState = {
  deck: [],
  isVisible: true,
  points: 0,
  usedDeck: [],
  currentCard: null,
  status: null,
  lossCondition: false
}

export default function Diamant () {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'visibility':
        return { ...state, isVisible: false }
      case 'setUsedDeck':
        return { ...state, usedDeck: state.usedDeck.concat(state.currentCard) }
      case 'drawCard':
        const deckForRemovingCard = state.deck
        const newCard = deckForRemovingCard.pop()
        const usedDeckToFilterOutTreasure = state.usedDeck
        const usedDeckOnlyTraps = usedDeckToFilterOutTreasure.filter(
          item => item.type !== 'treasure'
        )
        const arrayToDetermineLossCondition = countBy(usedDeckOnlyTraps, 'name')
        const lossCondition = some(arrayToDetermineLossCondition, o => o > 1)
        return {
          ...state,
          currentCard: newCard,
          usedDeck: state.usedDeck.concat(newCard),
          deck: deckForRemovingCard,
          points: newCard.points + state.points,
          lossCondition: lossCondition
        }
      case 'setDeck':
        return { ...state, deck: action.payload }
      case 'reset':
        return { ...initialState, isVisible: false }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const deck = shuffleDeck()
    dispatch({ type: 'setDeck', payload: deck })
  }, [])

  const handleStartGame = () => {
    dispatch({ type: 'visibility' })
    dispatch({ type: 'drawCard' })
  }

  const handleDrawCard = () => {
    dispatch({ type: 'drawCard' })
  }

  const handleTryAgain = () => {
    const deck = shuffleDeck()
    dispatch({ type: 'reset' })
    dispatch({ type: 'setDeck', payload: deck })
    dispatch({ type: 'drawCard' })
  }

  return (
    <div className={styles.container}>
      {state.isVisible ? (
        <main className={styles.main}>
          <StyledP>
            The goal of the game is to acquire as many points as possible
            through the treasure cards without getting a matching set of trap
            cards.
          </StyledP>
          <Button onClick={() => handleStartGame()}>Start</Button>
        </main>
      ) : (
        <main className={styles.main}>
          <p>
            Your {state.lossCondition === false ? '' : 'final'} card is:{' '}
            {state.currentCard.name}
          </p>
          {state.lossCondition === false ? (
            <div>
              <p>
                You currently have {state.points} points and there are{' '}
                {state.deck.length} cards left in the deck.
              </p>
              <p>Do you want to give up? Or continue playing?</p>
              <Button onClick={() => console.log('Never gonna give you up')}>
                Give up
              </Button>
              <Button onClick={() => handleDrawCard()}>
                Draw another card
              </Button>
            </div>
          ) : (
            <div>
              <p>You had a high score of {state.points}!</p>
              <Button onClick={() => handleTryAgain()}>Play Again?</Button>
            </div>
          )}
        </main>
      )}
    </div>
  )
}
