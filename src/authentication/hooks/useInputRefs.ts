import { useRef } from "react";

export const useInputRefs = () => {
  const inputRefs = {
    codeDigitOne: useRef<HTMLInputElement>(null),
    codeDigitTwo: useRef<HTMLInputElement>(null),
    codeDigitThree: useRef<HTMLInputElement>(null),
    codeDigitFour: useRef<HTMLInputElement>(null),
  };

  const handleNext = (name: string) => {
    if (name === "codeDigitOne" && inputRefs.codeDigitTwo.current) {
      inputRefs.codeDigitTwo.current.focus();
    }
    if (name === "codeDigitTwo" && inputRefs.codeDigitThree.current) {
      inputRefs.codeDigitThree.current.focus();
    }
    if (name === "codeDigitThree" && inputRefs.codeDigitFour.current) {
      inputRefs.codeDigitFour.current.focus();
    }
  };

  return { inputRefs, handleNext };
};
