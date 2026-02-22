import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glass?: boolean;
}

export default function Card({ children, className, glass = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border p-6",
        glass ? "glass-card" : "bg-white border-gray-100",
        className
      )}
    >
      {children}
    </div>
  );
}
