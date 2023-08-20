"use client";
import { modalState } from "@/atom/modalAtom";
import { useRecoilState } from "recoil";
import Modal from "react-modal";

const UploadModal = () => {
  const [open, setOpen] = useRecoilState(modalState);
  return (
    <div>
      {open && (
        <Modal
          isOpen={open}
          onRequestClose={() => setOpen(!open)}
          className="max-w-lg w-[90%] h-80 bg-white absolute top-48 left-1/2 -translate-x-1/2 border-2 rounded-lg shadow-md"
        >
          <div className="flex flex-col justify-center items-center h-full">
            <h2>Modal</h2>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default UploadModal;
