import React,{ Component} from 'react';

import './modal.css';


export default class Modal extends Component{
    
    render(){
        const {getGameFinal,totalScore, closeModal,startAgain}=this.props;
        let classNames;    
        if(getGameFinal){
            classNames+='modal modal--active'
        }else{
            classNames='modal';
        }
        return(
            <div className={classNames}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Congrats!</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={()=>closeModal()}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <p>You scored {totalScore} of 36 score</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" onClick={()=>startAgain()}>Start again</button>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={()=>closeModal()}>Close</button>
                </div>
                </div>
            </div>
        </div> 
        )
    }
}