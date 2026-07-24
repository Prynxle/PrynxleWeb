interface SectionLabelProps {
  label: string;
  className?: string;
}

export default function SectionLabel({ label, className = "" }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 mb-8 ${className}`}>
      <span className="label-mono">{"// "}{label}</span>
      <div className="flex-1 h-px bg-rule" />
    </div>
  );
}
