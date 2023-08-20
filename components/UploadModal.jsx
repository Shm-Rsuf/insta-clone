"use client";
import { modalState } from "@/atom/modalAtom";
import { useRecoilState } from "recoil";
import { CameraIcon } from "@heroicons/react/outline";
import Modal from "react-modal";
import { useRef } from "react";

const UploadModal = () => {
  const [open, setOpen] = useRecoilState(modalState);
  const filePickerRef = useRef(null);
  return (
    <div>
      {open && (
        <Modal
          isOpen={open}
          onRequestClose={() => setOpen(!open)}
          className="max-w-lg w-[90%] bg-white absolute top-48 left-1/2 -translate-x-1/2 border-2 rounded-lg shadow-md"
        >
          <div className="flex flex-col justify-center items-center h-full gap-4 p-6">
            <CameraIcon
              onClick={() => filePickerRef.current.click()}
              className="h-12 cursor-pointer bg-rose-200 p-2 rounded-full border-2 text-red-500"
            />
            <input type="file" hidden ref={filePickerRef} />
            <input
              type="text"
              maxLength={150}
              placeholder="please enter your caption"
              className="border-none w-full text-center focus:ring-0"
            />
            <button
              disabled
              className="w-full bg-rose-500 text-white p-2 shadow-md hover:brightness-125 transition-colors duration-200 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:hover:brightness-100"
            >
              Upload Post
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default UploadModal;
