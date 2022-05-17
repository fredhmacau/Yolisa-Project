import { Button,Box} from "@chakra-ui/react";
import { Menu, Portal, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { GrMoreVertical } from "react-icons/gr";
import useHttp from "../../Hooks/useHttp";
import {Link as BrowserLink} from "react-router-dom";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import {useState} from "react"
export default function MoreFunctionsPost({idPost}) {
const [success, setSuccess] = useState(false);
const {deletePosted}=useHttp()
const deletePoster=()=>{
const result=deletePosted(idPost)
result.then((resp)=>{
  if (resp.status===200){
    setSuccess(true)
  }
})
}
const onClose = function () {
  setSuccess(false);
};
  return (
    <>
      <Menu>
        <MenuButton>
          <GrMoreVertical />
        </MenuButton>
        <Portal>
          <MenuList>
            <MenuItem>
              <BrowserLink
                to={`/acount-salesman/edit-post/${idPost}`}
                replace={true}
              >
                <Box
                  variant="ghost"
                  fontSize="0.875rem"
                  fontWeight="normal"
                  rounded="md"
                  p="2"
                  textAlign="center"
                >
                  Editar
                </Box>
              </BrowserLink>
            </MenuItem>
            <MenuItem>
              <Button
                variant="unstyled"
                fontSize="0.875rem"
                fontWeight="normal"
                p="2"
                onClick={deletePoster}
              >
                Eliminar
              </Button>
            </MenuItem>
          </MenuList>
        </Portal>
      </Menu>
      {success && (
        <AlertDialog
          motionPreset="slideInBottom"
          onClose={onClose}
          isOpen={success && true}
          isCentered
        >
          <AlertDialogOverlay />

          <AlertDialogContent>
            <AlertDialogHeader>Eliminado com sucesso.</AlertDialogHeader>

            <AlertDialogBody>
              As informações sobre o seu produto foram eliminado com sucesso!
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button
                onClick={onClose}
                color="yolisa.50"
                bg="yolisa.buttonSecondary"
                ml={3}
              >
                OK
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </>
  );
}
