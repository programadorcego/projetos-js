const startBtn = document.querySelector(".start");

const tictactoe = {
	containerElement: document.querySelector("#board"),
	squares: Array(9).fill(""),
	gameover: false,
	xTurn: true,
	lines: [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	],
	
	run(){
		this.gameover = false;
		this.xTurn = true;
		startBtn.disabled = true;
		this.squares.fill("");
		this.renderSquares();
	},
	renderSquares(){
		let content = "";
		
		for(i in this.squares)
		{
			content += `<div class="square" onclick="tictactoe.handleClick(${i})">${this.squares[i]}</div>`;
		}
		
		this.containerElement.innerHTML = content;
	},
	handleClick(position){
		if(this.gameover) return false;
		
		if(this.squares[position] == "")
		{
			this.squares[position] = this.xTurn ? "X" : "O";
			this.xTurn = !this.xTurn;
			this.renderSquares();
		}
		
		if(!this.checkWinner() && !this.squares.includes(""))
		{
			this.containerElement.parentElement.innerHTML += `<p>Deu Velha!</p>`;
			this.gameover = true;
			startBtn.disabled = false;
		}
		
		if(this.checkWinner())
		{
			this.gameover = true;
			startBtn.disabled = false;
		}
	},
	checkWinner(){
		for(i = 0; i < this.lines.length; i++)
		{
			const [a, b, c] = this.lines[i];
			
			if(this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c])
			{
				this.containerElement.querySelectorAll(".square")[a].classList.add("winner");
				this.containerElement.querySelectorAll(".square")[b].classList.add("winner");
				this.containerElement.querySelectorAll(".square")[c].classList.add("winner");
				return true;
			}
		}
		
		return false;
	},
};

startBtn.addEventListener("click", () => tictactoe.run());