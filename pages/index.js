import { useState } from 'react';

import styles from '../styles/Home.module.css'
import Suggested from './components/suggest.js'

export default function Home() {
  const [notInWord, setNotInWord] = useState('');
  const [rightSpot, setRightSpot] = useState({})
  const [wrongSpot, setWrongSpot] = useState({})

  return (
    <div className={styles.container}>
      <h2>Right Spot</h2>
      <input name="right_spot_1" onChange={e => setRightSpot({...rightSpot, "0": e.target.value})} maxlength="1" type="text"></input>
      <input name="right_spot_2" onChange={e => setRightSpot({...rightSpot, "1": e.target.value})} maxlength="1" type="text"></input>
      <input name="right_spot_3" onChange={e => setRightSpot({...rightSpot, "2": e.target.value})} maxlength="1" type="text"></input>
      <input name="right_spot_4" onChange={e => setRightSpot({...rightSpot, "3": e.target.value})} maxlength="1" type="text"></input>
      <input name="right_spot_5" onChange={e => setRightSpot({...rightSpot, "4": e.target.value})} maxlength="1" type="text"></input>
      <h2>Wrong Spot</h2>
      <input name="wrong_spot_1" onChange={e => setWrongSpot({...wrongSpot, "0": e.target.value})} type="text"></input>
      <input name="wrong_spot_2" onChange={e => setWrongSpot({...wrongSpot, "1": e.target.value})} type="text"></input>
      <input name="wrong_spot_3" onChange={e => setWrongSpot({...wrongSpot, "2": e.target.value})} type="text"></input>
      <input name="wrong_spot_4" onChange={e => setWrongSpot({...wrongSpot, "3": e.target.value})} type="text"></input>
      <input name="wrong_spot_5" onChange={e => setWrongSpot({...wrongSpot, "4": e.target.value})} type="text"></input>
      <h2>Not in the word</h2>
      <input name="not_in_word" type="text" onChange={e => setNotInWord(e.target.value)}></input>
      <h2>Suggested words</h2>
      <Suggested notInWord={notInWord} rightSpot={rightSpot} wrongSpot={wrongSpot} />
    </div>
  )
}
