interface CardProps {
    title?: string;
    children: React.ReactNode;
    className?: string;
  }
  
  export const Card: React.FC<CardProps> = ({ title, children, className }) => {
    return (
      <div className={`bg-gray-300 rounded-lg shadow-sm p-4 ${className}`}>
        {title && <h2 className="text-lg font-semibold mb-4 flex justify-center">{title}</h2>}
        {children}
      </div>
    );
  };