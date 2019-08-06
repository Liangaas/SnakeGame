import React from 'react';
import './SnakeGame.less';

class SnakeGame extends React.Component{
	restartGame=()=> {}
	pauseGame=()=> {}
	render(){
		return(
			<div className='game-container'>
				<div className='game-info'>
					<div className='game-opera'>
						<p> 键盘操作：WSAD 上下左右</p>
					</div>
					<div className='game-btn'>
						<button onClick={()=>this.restartGame}>重新开始</button>
						<button onClick={()=>this.pauseGame}>暂停游戏</button>
					</div>
				</div>
				<div className='game-background'></div>
			</div>
		)
	}
}

export default SnakeGame;