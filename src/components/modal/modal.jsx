import React,{ Component} from 'react';

import './modal.css';


export default class Modal extends Component{
    
    render(){
        const {getGameFinal,totalScore, closeModal,startAgain}=this.props;
        let classNames='modal';    
        if(getGameFinal){
            classNames+=' modal--active'
        }
        let title='Поздравляю!';
        let textWinner=null;
        if(totalScore===30){
            title=title+' Победа!!!';
            textWinner='Вы набрали максимальное количество очков';
        }
        return(
            <>
                <div className={getGameFinal?'overlay':null}></div>
                <div className={classNames}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{title} </h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={()=>closeModal()}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Вы набрали {totalScore} из 30</p>
                                <p>{textWinner}</p> 
                            </div>
                            <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={()=>startAgain()}>Начать заново</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={()=>closeModal()}>Закрыть</button>
                        </div>
                        </div>
                    </div>
                </div> 
            </>            
        )
    }
}