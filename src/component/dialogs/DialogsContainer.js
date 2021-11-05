import './dialogs.module.css';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import StoreContext from '../../storeContext';
import { connect } from 'react-redux';



const DialogsContainer = () => {

    return <StoreContext.Consumer> 
        { (store) => {
            let state = store.getState() .messagesPage;
            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator());
            }
            let onNewMessageChange = (body) => {
                store.dispatch(updateNewMessageBodyCreator(body));
            }
            return <dialogs updateNewMessageBody={onNewMessageChange} 
                            sendMessage={onSendMessageClick}
                            messagesPage={store.getState().messagesPage}/>
        }
    }
    </StoreContext.Consumer>
}

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(messagesPage);

export default DialogsContainer;