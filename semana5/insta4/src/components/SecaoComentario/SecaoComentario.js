import React, {Component} from 'react'
import './SecaoComentario.css'

export  class SecaoComentario extends Component {
	state = {
		 comentarioss: ""
	}

	onChangeComentario = (event) => {
		console.log(this.state.comentarioss)
		this.setState({ comentario: event.target.value });
	  };

	
	render() {
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				input onChange ={this.onChangeComentario} value={this.state.comentarioss}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</div>
	};
}
