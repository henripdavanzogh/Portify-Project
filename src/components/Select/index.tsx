import { ForwardedRef, SelectHTMLAttributes, forwardRef } from "react";
import { FieldError } from "react-hook-form";
import { Error } from "../Input/style";

import { StyledLabel, StyledSelect } from "./style";

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: FieldError;
  children: React.ReactNode;
}

export const Select = forwardRef(

    (
        { children, label, error, ...rest }: ISelectProps,
        ref: ForwardedRef<HTMLSelectElement>
    ) => {
        return (
            <>
                {label ? <StyledLabel htmlFor={rest.name}>{label}</StyledLabel> : null}
                <StyledSelect {...rest} ref={ref}>
                    {children}
                </StyledSelect>
                {error ? <Error>{error.message}</Error> : null}
            </>
        );
    }
);
