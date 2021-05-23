import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal'
import { NewTransactionsModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./TransactionsContext";
import { transitions } from "polished";


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
        <TransactionsProvider >
            <Header onOpemNewTransactionModal={hadleOpenNewTransactionModal}/>
            <Dashboard />
            <NewTransactionsModal 
                isOpen={isNewTransactionModalOpen} 
                onRequestClose={hadleCloseNewTransactionModal}
            />
              
           <GlobalStyle />
        </TransactionsProvider>
    );
}