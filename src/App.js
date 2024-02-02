import { useState } from 'react';
import './App.css';

function App() {
	
	let [val,setval] = useState("");

	const all = (e) => {
		setval(val + e.target.value);
	}
	const clear = () => {
		setval('');
	}
	const cal = () => {
		setval(eval(val).toString());
	}
	const clearone = () => {
		setval(val.substring(0,val.length-1));
	}
  return (
    <>
      <div class="container">
		<div class="box">
			<div class="disp flex">
				<input type="text" readonly name="" id="disp" placeholder='0' value={val}></input>
			</div>
			<div class="keybord">
				<div class="keybox">
					<input type='button' class="key" onClick={clearone} value='C'></input>
					<input type='button' class="key" onClick={clear} value='AC'></input>
					<input type='button' class="key" onClick={all} value='%'></input>
					<input type='button' class="key" onClick={all} value='+'></input>
				</div>
				<div class="keybox">
					<input type='button' class="key" onClick={all} value='7'></input>
					<input type='button' class="key" onClick={all} value='8'></input>
					<input type='button' class="key" onClick={all} value='9'></input>
					<input type='button' class="key" onClick={all} value='-'></input>
				</div>
				<div class="keybox">
					<input class="key" type='button' onClick={all} value='4'></input>
					<input class="key" type='button' onClick={all} value='5'></input>
					<input class="key" type='button' onClick={all} value='6'></input>
					<input class="key" type='button' onClick={all} value='*'></input>
				</div>
				<div class="keybox">
					<input class="key" type='button' onClick={all} value='1'></input>
					<input class="key" type='button' onClick={all} value='2'></input>
					<input class="key" type='button' onClick={all} value='3'></input>
					<input class="key" type='button' onClick={all} value='/'></input>
				</div>
				<div class="keybox">
					<input type='button' onClick={all} class="key" value={'0'} style={{width: '159px'}}></input>
					<input type='button' onClick={all} class="key" value={'.'}></input>
					<input type='button' onClick={cal} class="key red" value={'='}></input>
				</div>
			</div>
		</div>
	</div>
    </>
  );
}

export default App;
