import styles from './TextButton.module.css';

type TextButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
};

export default function TextButton({
  children,
  href,
  onClick,
  className = '',
  type = 'button',
}: TextButtonProps) {
  const combinedClass = `${styles.textButton} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClass}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} type={type} className={combinedClass}>
      {children}
    </button>
  );
}