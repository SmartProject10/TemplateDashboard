import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FaRegUserCircle } from "react-icons/fa";

export const ProfileButton = ({
  onHandleOpenModal,
  onHandleOpenPasswordModal,
  onHandleClickLogout,
}) => {
  const handleClickEmail = (close) => {
    close();
    onHandleOpenModal();
  };

  const handleClickPassword = (close) => {
    close();
    onHandleOpenPasswordModal();
  };

  const handleClickLogout = (close) => {
    close();
    onHandleClickLogout();
  };

  return (
    <>
      <Popover>
        {({ open, close }) => (
          <>
            <PopoverButton className="flex outline-none">
              <FaRegUserCircle className="text-blue-800" size={30} />
            </PopoverButton>

            <AnimatePresence>
              {open && (
                <PopoverPanel
                  static
                  as={motion.div}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  anchor="bottom"
                  className="bg-white flex origin-top flex-col shadow-md p-3 gap-2"
                >
                  <a href="#" onClick={() => handleClickEmail(close)}>
                    Cambiar email
                  </a>
                  <a href="#" onClick={() => handleClickPassword(close)}>
                    Cambiar contraseña
                  </a>
                  <a href="#" onClick={() => handleClickLogout(close)}>
                    Salir
                  </a>
                </PopoverPanel>
              )}
            </AnimatePresence>
          </>
        )}
      </Popover>
    </>
  );
};
