import { motion } from "framer-motion";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import Container from "./Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Brand from "./Brand";

const Offcanvas = ({ show, handleOffcanvas, children, style }) => {
  useEffect(() => {
    const body = document.querySelector("body");

    if (show) body.style.overflow = "hidden";
    else body.style.overflow = "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  if (!show) return;

  document.body.addEventListener("click", (e) => {
    if (e.target === document.getElementById("offcanvas-overlay"))
      handleOffcanvas();
  });

  document.body.addEventListener("keyup", (e) => {
    if (e.key === "Escape") handleOffcanvas();
  });

  return createPortal(
    <div
      id="offcanvas-overlay"
      className="z-10"
      style={{ height: "100vh", ...style }}
    >
      <motion.div
        style={{ translateX: "100%" }}
        animate={{ translateX: "0%", opacity: [0, 1] }}
        transition={{ ease: "easeOut", duration: 0.2 }}
        className="offcanvas bg-white flex flex-col w-full overflow-y-scroll"
      >
        {children}
      </motion.div>
    </div>,
    document.getElementById("offcanvas-backdrop")
  );
};

const OffcanvasHeader = ({ children, handleOffcanvas }) => (
  <Container
    className={"offcanvas-header shadow-sm flex items-center sticky top-0 py-4"}
  >
    <Brand />
    <FontAwesomeIcon
      icon={faTimes}
      size="xl"
      className="text-primary active:text-primary-darker cursor-pointer ms-auto"
      onClick={handleOffcanvas}
    />
  </Container>
);

const OffcanvasBody = ({ children }) => (
  <Container className={"offcanvas-body my-8"}>{children}</Container>
);

const OffcanvasFooter = ({ children }) => (
  <div className="offcanvas-footer mt-auto py-3">{children}</div>
);

Offcanvas.Header = OffcanvasHeader;
Offcanvas.Body = OffcanvasBody;
Offcanvas.Footer = OffcanvasFooter;

export default Offcanvas;
