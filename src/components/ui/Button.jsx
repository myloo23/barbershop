export default function Button({ children, href = '#', variant = 'primary', className = '', ...props }) {
  const base =
    'inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300';

  const variants = {
    primary:
      'bg-gradient-to-r from-[#d2ac78] to-[#ba8c4d] text-[#1c140b] shadow-glow hover:-translate-y-0.5 hover:shadow-[0_22px_38px_-22px_rgba(210,172,120,0.85)]',
    secondary:
      'border border-[#d2ac785c] bg-[#1a1612c9] text-[#f4e7d5] hover:border-[#e0bc87] hover:bg-[#211b14]',
  };

  if (href) {
    return (
      <a href={href} className={`${base} ${variants[variant]} ${className}`} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
