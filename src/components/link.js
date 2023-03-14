import Link from 'next/link';

export default function LinkComponent({ isExternal, href, children, className }) {
  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="red">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
}
