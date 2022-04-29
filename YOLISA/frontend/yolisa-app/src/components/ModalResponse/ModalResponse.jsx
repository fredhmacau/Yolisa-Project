import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
export default function ModalResponse({colorButton, title, content,link,buttonText}) {
    
const go=useNavigate();

  return (
    <>
      <Modal closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>

          <ModalBody>{content}</ModalBody>

          <ModalFooter>
            <Button bg={`${colorButton}`} colorScheme="blue" mr={3} onClick={()=>go(link)}>
             {buttonText}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
