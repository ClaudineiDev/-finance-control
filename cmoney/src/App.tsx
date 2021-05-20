import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal'

Modal.setAppElement('#root');
export function App(){
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function hadleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }
    function hadleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }

    return(
        <>
            <Header onOpemNewTransactionModal={hadleOpenNewTransactionModal}/>
            <Dashboard />
            <Modal 
                isOpen={isNewTransactionModalOpen} 
                onRequestClose={hadleCloseNewTransactionModal}
            >
                <h2>Cadastrar transação</h2>
            </Modal>

            <GlobalStyle />
        </>
    );
}