import React from 'react';

interface AgreeTermsProps {
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AgreeTerms({
  isChecked,
  setIsChecked,
}: AgreeTermsProps) {
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        className="h-[15px] w-[15px] cursor-pointer rounded-lg accent-red-secondary"
        checked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
      />
      <p className="text-black100 text-sm text-opacity-40">
        I Accept the <span className="text-red-secondary">Terms</span>
      </p>
    </div>
  );
}
