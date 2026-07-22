interface FormInputProps {
  label: string;
  id: string;
  name: string;
  type?: "text" | "email" | "url" | "tel" | "number" | "password";
  placeholder?: string;
  required?: boolean;
  error?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: string;
  className?: string;
}

export default function FormInput({
  label,
  id,
  name,
  type = "text",
  placeholder,
  required = false,
  error,
  value,
  defaultValue,
  onChange,
  autoComplete,
  className = "",
}: FormInputProps) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label
        htmlFor={id}
        className="text-sm font-medium text-[#3E3E3E] font-sans"
      >
        {label}
        {required && (
          <span className="text-[#FEA781] ml-0.5" aria-hidden="true">
            *
          </span>
        )}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        autoComplete={autoComplete}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={[
          "h-11 w-full rounded-[8px] border px-3 text-sm font-sans",
          "bg-white text-[#3E3E3E] placeholder-[#9AA3B2]",
          "transition-colors duration-150",
          "focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-0",
          error
            ? "border-[#FEA781] focus-visible:outline-[#FEA781]"
            : "border-[#E5E4E0] focus-visible:outline-[#014584] focus-visible:border-[#014584]",
        ].join(" ")}
      />

      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="text-xs text-[#FEA781] font-sans"
        >
          {error}
        </p>
      )}
    </div>
  );
}
