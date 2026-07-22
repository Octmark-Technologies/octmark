interface FormTextareaProps {
  label: string;
  id: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  error?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
}

export default function FormTextarea({
  label,
  id,
  name,
  placeholder,
  required = false,
  rows = 4,
  error,
  value,
  defaultValue,
  onChange,
  className = "",
}: FormTextareaProps) {
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

      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        rows={rows}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={[
          "w-full rounded-[8px] border px-3 py-2.5 text-sm font-sans",
          "bg-white text-[#3E3E3E] placeholder-[#9AA3B2]",
          "resize-y transition-colors duration-150",
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
