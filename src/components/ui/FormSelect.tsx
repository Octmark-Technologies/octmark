interface SelectOption {
  value: string;
  label: string;
}

interface FormSelectProps {
  label: string;
  id: string;
  name: string;
  options: SelectOption[];
  placeholder?: string;
  required?: boolean;
  error?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
}

export default function FormSelect({
  label,
  id,
  name,
  options,
  placeholder,
  required = false,
  error,
  value,
  defaultValue,
  onChange,
  className = "",
}: FormSelectProps) {
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

      <select
        id={id}
        name={name}
        required={required}
        value={value}
        defaultValue={defaultValue ?? ""}
        onChange={onChange}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={[
          "h-11 w-full rounded-[8px] border px-3 text-sm font-sans",
          "bg-white text-[#3E3E3E]",
          "appearance-auto transition-colors duration-150",
          "focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-0",
          error
            ? "border-[#FEA781] focus-visible:outline-[#FEA781]"
            : "border-[#E5E4E0] focus-visible:outline-[#014584] focus-visible:border-[#014584]",
        ].join(" ")}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

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
