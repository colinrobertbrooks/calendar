import { useEffect, useRef, useState } from "react";

export const useDialog = () => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [dialogIsOpen, setDialogIsOpen] = useState<boolean>(false);

  const openDialog = () => {
    dialogRef.current?.showModal(); // enables focus trap
    setDialogIsOpen(true);
  };

  const closeDialog = () => {
    dialogRef.current?.close();
    setDialogIsOpen(false);
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    const closeDialog = () => setDialogIsOpen(false);
    dialog?.addEventListener("close", closeDialog);
    return () => dialog?.removeEventListener("close", closeDialog);
  });

  return { dialogRef, dialogIsOpen, openDialog, closeDialog };
};
