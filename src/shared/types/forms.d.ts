import { JsxElement } from "typescript";

type HeroIconType = ForwardRefExoticComponent<
  Omit<SVGProps<SVGSVGElement>, "ref"> & {
    title?: string;
    titleId?: string;
  } & RefAttributes<SVGSVGElement>
>;

interface InputFieldProps {
  type: string;
  placeholder: string;
  icon?: HeroIconType;
  value: string;
  name: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: FocusEventHandler<HTMLInputElement> | undefined;
  touched?: boolean;
  errors?: string;
}

interface CodeInputFieldProps {
  name: string;
  value?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNext?: (name: string) => void;
  ref?: React.RefObject<HTMLInputElement>;
}

