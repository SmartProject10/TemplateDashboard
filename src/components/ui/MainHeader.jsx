import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { systemsContext } from "../context/Systems";
import { authContext } from "../context/Auth/AuthProvider";

import { ProfileButton } from "./ProfileButton";
import { DialogSimple } from "./DialogSimple";
import { ConfigContent } from "../modalContent";
import { PasswordContent } from "../modalContent/PasswordContent";
import { MainContainer } from "../containers";
import { SimpleLinkActive } from "./SimpleLinkActive";

import LogoApp from "./../../assets/img/isologo.png";

export const MainHeader = () => {
  const [openConfigModal, setOpenConfigModal] = useState(false);
  const [openPasswordModal, setOpenPasswordModal] = useState(false);

  const { isAuthenticated, handleLogout } = useContext(authContext);
  const { selectedSystems } = useContext(systemsContext);

  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate("/login");
  };

  const handleClickValidateRegister = (event) => {
    if (selectedSystems.length > 0) {
      navigate("/register-system");
    } else {
      event.preventDefault(); // Evita la navegación
      toast.error("Debes adquirir al menos un sistema.");
    }
  };

  const handleClickLogout = () => {
    handleLogout();
    navigate("/login");
  };

  return (
    <>
      <header className="bg-white">
        <MainContainer>
          <div className="flex h-16 items-center gap-8">
            <div className="flex flex-row items-center gap-2">
              <div className="flex w-10">
                <img
                  src={LogoApp}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <span className="text-sm text-gray-500 font-medium uppercase">
                iso and iso
              </span>
            </div>

            <div className="flex flex-1 items-center justify-end md:justify-between">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <SimpleLinkActive
                      label="Adquirir sistema"
                      path="/system-add"
                    />
                  </li>

                  <li>
                    <SimpleLinkActive label="Mis sistemas" path="/my-systems" />
                  </li>

                  <li>
                    <SimpleLinkActive label="Facturas" path="/invoices" />
                  </li>

                  <li>
                    <SimpleLinkActive
                      label="Registra tu sistema"
                      path="/register-system"
                      validate={selectedSystems.length > 0 ? false : true}
                      onHandleClickValidate={handleClickValidateRegister}
                    />
                  </li>
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                {isAuthenticated ? (
                  <ProfileButton
                    onHandleOpenModal={() => setOpenConfigModal(true)}
                    onHandleOpenPasswordModal={() => setOpenPasswordModal(true)}
                    onHandleClickLogout={handleClickLogout}
                  />
                ) : (
                  <>
                    <button
                      className="block rounded-md bg-blue-800 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                      onClick={handleClickLogin}
                    >
                      Login
                    </button>

                    <a
                      className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
                      href="#"
                    >
                      Register
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </MainContainer>
      </header>

      {/* change email modal */}
      <DialogSimple
        isOpen={openConfigModal}
        title="Cambiar email"
        onHandleClose={() => setOpenConfigModal(false)}
      >
        <ConfigContent />
      </DialogSimple>

      {/* change password modal */}
      <DialogSimple
        isOpen={openPasswordModal}
        title="Cambiar contraseña"
        onHandleClose={() => setOpenPasswordModal(false)}
      >
        <PasswordContent />
      </DialogSimple>
    </>
  );
};
