import { Button } from "@chakra-ui/react";
import { Menu, Portal, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { GrMoreVertical } from "react-icons/gr";
import { FiEdit2 } from "react-icons/fi";
import {RiDeleteBin3Line} from "react-icons/ri";
import {Link as BrowserLink} from "react-router-dom";
export default function MoreFunctionsPost() {
  return (
    <>
      <Menu>
        <MenuButton>
          <GrMoreVertical />
        </MenuButton>
        <Portal>
          <MenuList>
            <MenuItem>
              <BrowserLink to="/acount-salesman/edit-post" replace={true}>
                <Button
                  variant="ghost"
                  fontSize="0.875rem"
                  leftIcon={<FiEdit2 />}
                  fontWeight="normal"
                >
                  Editar
                </Button>
              </BrowserLink>
            </MenuItem>
            <MenuItem>
              <Button
                variant="ghost"
                fontSize="0.875rem"
                leftIcon={<RiDeleteBin3Line />}
                fontWeight="normal"
              >
                Eliminar
              </Button>
            </MenuItem>
          </MenuList>
        </Portal>
      </Menu>
    </>
  );
}
