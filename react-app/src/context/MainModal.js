import React, {useContext, useRef, useState, useEffect} from "react";
import ReactDOM from 'react-dom';
import './MainModal.css';


const MainModalContext = React.createContext();

export const MainModalProvider = ({children}) => {
    const mainModalRef = useRef();
    const [val, setVal] = useState();

    useEffect(() => {
        setVal(mainModalRef.current);
    }, []);

    return (
        <>
            <MainModalContext.Provider value={val}>
                {children}
            </MainModalContext.Provider>
            <div ref={mainModalRef} />
        </>
    );
};

export const MainModal = ({onClose, children}) => {
    const modalNode = useContext(MainModalContext);

    if (!modalNode) {
        return null;
    }

    return ReactDOM.createPortal(
        <div id='main-modal'>
            <div id='main-modal-background' onClick={onClose} />
            <div id='main-modal-content'>
                {children}
            </div>
        </div>,
        modalNode
    );
};
