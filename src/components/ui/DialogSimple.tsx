import React from "react";
import { IoIosClose } from "react-icons/io";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";

export const DialogSimple = ({ isOpen, title, onHandleClose, children }) => {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <Dialog
            static
            open={isOpen}
            onClose={onHandleClose}
            className="relative z-50"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30"
            />
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
              <DialogPanel
                as={motion.div}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="max-w-lg space-y-4 bg-white p-4 rounded-lg"
              >
                <button
                  onClick={onHandleClose}
                  className="absolute right-[32.5rem]"
                >
                  <IoIosClose size={20} />
                </button>

                <DialogTitle className="text-lg font-bold">{title}</DialogTitle>

                {children}
              </DialogPanel>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
};
