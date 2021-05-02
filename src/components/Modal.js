import React, { useState } from 'react';
import styled from 'styled-components';
import ChildrenModal from '../elements/ChildrenModal';
function Modal(props) {

    const [modalOpen, setModalOpen] = useState(false);
    //text: 모달 버튼 내용, heading: 모달 제목
    //clickName : 모달 하단 버튼 내용
    //_onClick : 모달 하단 버튼 실행 함수
    const { text, padding, heading, _onClick, clickName } = props;

    const styles = {
        padding: padding,
    }


    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <React.Fragment>
            <ModalButton {...styles} onClick={openModal}>{text}</ModalButton>

            <ChildrenModal open={modalOpen} close={closeModal} header={heading ? heading : 'Domoim'} _onClick={_onClick} clickName={clickName}>

                <main> {props.children} </main>

            </ChildrenModal>
        </React.Fragment>
    )
}

export default Modal;


const ModalButton = styled.button`
    background-color: ${props => props.theme.button_purple};
    outline: none;
    border:1px solid ${props => props.theme.button_purple};
    border-radius: 3px;
    padding:${(props) => props.padding};
    cursor: pointer;
    color:white;
`


ModalButton.defaultProps = {

    padding: '3px 10px',
}