import * as React from "react";
import { cn } from "@/lib/utils";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Label } from "./label";

interface FormFieldProps {
  label: string;
  id: string;
  required?: boolean;
  error?: string;
  children?: React.ReactNode;
}

export function FormField({
  label,
  id,
  required = false,
  error,
  children,
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>
        {label}
        {required && " *"}
      </Label>
      {children}
      {error && (
        <p
          className={cn(
            "text-[10px] font-medium text-feedback-errorText sm:text-xs"
          )}
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  required?: boolean;
  error?: string;
}

export function FormInput({
  label,
  id,
  required = false,
  error,
  className,
  ...props
}: FormInputProps) {
  return (
    <FormField label={label} id={id} required={required} error={error}>
      <Input
        id={id}
        required={required}
        className={cn(error && "border-feedback-errorBorder", className)}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
      {error && (
        <span id={`${id}-error`} className="sr-only">
          {error}
        </span>
      )}
    </FormField>
  );
}

interface FormTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
  required?: boolean;
  error?: string;
}

export function FormTextarea({
  label,
  id,
  required = false,
  error,
  className,
  ...props
}: FormTextareaProps) {
  return (
    <FormField label={label} id={id} required={required} error={error}>
      <Textarea
        id={id}
        required={required}
        className={cn(error && "border-feedback-errorBorder", className)}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
      {error && (
        <span id={`${id}-error`} className="sr-only">
          {error}
        </span>
      )}
    </FormField>
  );
}

