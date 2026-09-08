import { ChevronDown } from 'lucide-react';
import { cn } from '../../../lib/utils';

export function ScrollIndicator({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col items-center justify-center opacity-70 hover:opacity-100 transition-opacity cursor-pointer", className)}>
      <span className="text-xs font-semibold tracking-wider mb-2 uppercase text-slate-500">Role para baixo</span>
      <div className="w-7 h-11 rounded-full border-2 border-slate-300 flex justify-center p-1 bg-white shadow-sm">
        <div className="w-1.5 h-3 bg-[#006239] rounded-full animate-bounce mt-1" />
      </div>
      <ChevronDown className="w-5 h-5 text-[#006239] mt-2 animate-pulse" />
    </div>
  );
}
