import React, { useRef, useEffect } from "react"
import { createPortal } from "react-dom"
import styled from "styled-components"
import { Close as CloseIcon } from "styled-icons/evil/Close"

import { mixins, theme } from "../styles"

const { palette } = theme

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  transform: translateZ(0);
  background-color: rgba(0, 0, 0, 0.7);

  visibility: ${({ open }) => (open ? "visible" : "hidden")};
`

export const Wrapper = styled.div`
  // fill entire space of screen
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: auto;
`

export const ModalBody = styled.div`
  height: 100%;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 10000;

  ${mixins.iconButton};
  background-color: ${palette.black};
`

const Modal = ({ open = false, onClose = event => undefined, children }) => {
  const modalRef = useRef(null)

  useEffect(() => {
    // disable scrolling when modal is open
    document.body.style.overflow = open ? "hidden" : "unset"
  }, [open])

  const handleBackDropClick = event => {
    if (modalRef.current && modalRef.current.contains(event.target)) return
    onClose(event)
  }
  const handleCloseClick = event => onClose(event)

  return createPortal(
    <Background open={open} onClick={handleBackDropClick}>
      {open && (
        <>
          <CloseButton onClick={handleCloseClick}>
            <CloseIcon size={20} />
          </CloseButton>
          <Wrapper ref={modalRef}>
            <ModalBody>{children}</ModalBody>
          </Wrapper>
        </>
      )}
    </Background>,
    document.body
  )
}

export default Modal
