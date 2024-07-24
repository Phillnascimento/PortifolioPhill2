// components/Container.tsx

type ContainerProps = {
  children: React.ReactNode;
  className?: string; // Adicione essa linha para aceitar a prop className
};

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
