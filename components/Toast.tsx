import React, { useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { CheckCircleIcon } from './icons';

const Toast: React.FC = () => {
  const { toast } = useAppContext();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (toast) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, 3000); // Hide after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [toast]);

  if (!toast) {
    return null;
  }

  return (
    <div
      className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
      }`}
    >
      <div className="bg-white shadow-lg rounded-full flex items-center gap-3 pl-2 pr-5 py-2">
        <CheckCircleIcon className="w-6 h-6 text-green-500" />
        <span className="font-semibold text-[#263238] text-sm">
          {toast.message}
        </span>
      </div>
    </div>
  );
};

export default Toast;
