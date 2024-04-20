import React from "react";

const Label = ({ label }: { label: string }) => {
  return (
    <label className="text-[#4b5563] text-[14px] font-medium">{label}</label>
  );
};

export default Label;
