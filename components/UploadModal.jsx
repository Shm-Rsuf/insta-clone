"use client";
import { modalState } from "@/atom/modalAtom";
import { useRecoilState } from "recoil";
import { CameraIcon } from "@heroicons/react/outline";
import Modal from "react-modal";
import { useRef, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase";

const UploadModal = () => {
  const [open, setOpen] = useRecoilState(modalState);
  const filePickerRef = useRef(null);
  const captionRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  /* uploadPost */
  const uploadPost = async () => {
    if (loading) return;

    setLoading(true);

    const docRef = await addDoc(collection(db, "posts"), {
      caption: captionRef.current.value,
    });
  };

  /* addImageToPost */
  const addImageToPost = (event) => {
    const reader = new FileReader();
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  return (
    <div>
      {open && (
        <Modal
          isOpen={open}
          onRequestClose={() => {
            setOpen(!open);
            setSelectedFile(!selectedFile);
          }}
          className="max-w-lg w-[90%] bg-white absolute top-48 left-1/2 -translate-x-1/2 border-2 rounded-lg shadow-md"
        >
          <div className="flex flex-col justify-center items-center h-full gap-4 p-6">
            {selectedFile ? (
              <picture>
                <img
                  onClick={() => setSelectedFile(!selectedFile)}
                  src={selectedFile}
                  alt="uploaded image"
                  className="w-full max-h-48 object-cover cursor-pointer"
                />
              </picture>
            ) : (
              <CameraIcon
                onClick={() => filePickerRef.current.click()}
                className="h-12 cursor-pointer bg-rose-200 p-2 rounded-full border-2 text-red-500"
              />
            )}

            <input
              type="file"
              hidden
              ref={filePickerRef}
              onChange={addImageToPost}
            />
            <input
              type="text"
              maxLength={150}
              placeholder="please enter your caption"
              className="border-none w-full text-center focus:ring-0"
              ref={captionRef}
            />
            <button
              onClick={uploadPost}
              disabled={!selectedFile || loading}
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
