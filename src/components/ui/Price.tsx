export default function Price({ value, className = '' }: { value: number; className?: string }) {
  return (
    <span className={className}>
      <span style={{ verticalAlign: '-0.07em' }}>$</span>
      {value}
    </span>
  );
}
