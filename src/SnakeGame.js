import React from 'react';
import styles from './SnakeGame.less';

class SnaekGame extends React.Component{
	restartGame=()=> {}
	pauseGame=()=> {}
	render(){
		return(
			<div className={styles['game-container']}>
				<div className={styles['game-info']}>
					<div className={styles['game-opera']}>
						<p> 键盘操作：WSAD 上下左右</p>
					</div>
					<div className={styles['game-btn']}>
						<button onClick={()=>this.restartGame}>重新开始</button>
						<button onClick={()=>this.pauseGame}>暂停游戏</button>
					</div>
				</div>
				<div className={styles['game-background']}></div>
			</div>
		)
	}
}

export default SnaekGame;