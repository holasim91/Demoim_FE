import React, { useState } from 'react';
import styled from 'styled-components';
import ChildrenModal from '../elements/ChildrenModal';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';

function Modal(props) {

    const user = useSelector((state) => state.user.user);
    const [modalOpen, setModalOpen] = useState(false);
    //text: 모달 버튼 내용, heading: 모달 제목
    //clickName : 모달 하단 버튼 내용
    //_onClick : 모달 하단 버튼 실행 함수
    const { text, padding, heading, _onClick, clickName } = props;

    const styles = {
        padding: padding,
    }


    const openModal = () => {

        if (!user) {
            Swal.fire({
                text: '로그인 후 사용해주세요 :)',
                icon: 'warning',
                confirmButtonColor: "#999cda",
            })
            return false;
        }
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <React.Fragment>
            <ModalButton {...styles} onClick={openModal}>{text}</ModalButton>

            <ChildrenModal open={modalOpen} close={closeModal} header={heading ? heading : 'Domoim'} _onClick={() => {
                _onClick();
                closeModal();
            }} clickName={clickName}>

                <main> {props.children} </main>

            </ChildrenModal>
        </React.Fragment>
    )
}

export default Modal;


const ModalButton = styled.button`
    background-color: #ffffff;
    outline: none;
    border:2px solid #979797;
    border-radius: 12px;
    padding:${(props) => props.padding};
    cursor: pointer;
    color:#8166d6;
    font-size:1em;
    font-weight: 600;
    transition: all .3s;

    &:hover{
        color:#ffffff;
        border:2px solid ${(props) => props.theme.button_purple};
        background-color: ${(props) => props.theme.button_purple};
    }

    @media ${props => props.theme.mobile}{
      font-size:0.85em;  
   }
`


ModalButton.defaultProps = {

    padding: '3px 10px',
}