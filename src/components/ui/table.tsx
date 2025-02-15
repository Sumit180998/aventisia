// components/ui/table.tsx
import React from 'react';
import { cn } from '../lib/utils';

 
type TableProps = {
    children: React.ReactNode;
    className?: string;
  };
  
  export const Table: React.FC<TableProps> = ({ children, className = '' }) => {
    return (
      <div className={cn('overflow-x-auto', className)}>
        <table className="min-w-full border border-gray-200 rounded-lg">
          {children}
        </table>
      </div>
    );
  };
  
