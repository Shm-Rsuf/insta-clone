"use client";
import { modalState } from "@/atom/modalAtom";
import { useRecoilState } from "recoil";
const UploadModal = () => {
  const [open, setOpen] = useRecoilState(modalState);
  return (
    <div>
      <h2>Upload Modal</h2>
      {open && <p> The update modal</p>}
    </div>
  );
};

export default UploadModal;
