"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";

import { DialogProps } from "@radix-ui/react-dialog";
import { ReactElement } from "react";

type DialogOptions = DialogProps;

interface ModalProps extends DialogOptions {
  children?: React.ReactNode;
  title?: string;
  description?: string | ReactElement<HTMLSpanElement>;
}

export const Modal = ({
  children,
  title,
  description,
  onOpenChange,
  open,
}: ModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center">{title}</DialogTitle>
          <DialogDescription className="text-center leading-4 my-4 text-zinc-500">
            {description}
          </DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};
