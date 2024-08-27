import { Link } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";

export const SystemMenu = () => {
  return (
    <>
      <Menu>
        {({ open }) => (
          <>
            <MenuButton className="text-gray-500 transition hover:text-gray-500/75">
              Compra Sistemas
            </MenuButton>

            <AnimatePresence>
              {open && (
                <MenuItems
                  static
                  as={motion.div}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  anchor="bottom"
                  className="bg-white flex flex-col origin-top p-4 shadow-md rounded-md gap-2"
                >
                  <MenuItem>
                    <Link
                      className="block data-[focus]:bg-blue-100"
                      to="/system-add"
                    >
                      Adquirir sistema
                    </Link>
                  </MenuItem>

                  <MenuItem>
                    <Link
                      className="block data-[focus]:bg-blue-100"
                      to="/my-systems"
                    >
                      Mis sistemas
                    </Link>
                  </MenuItem>
                </MenuItems>
              )}
            </AnimatePresence>
          </>
        )}
      </Menu>
    </>
  );
};
