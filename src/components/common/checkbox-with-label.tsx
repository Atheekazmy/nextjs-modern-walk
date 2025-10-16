import React from "react";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";

export default function CheckboxWithLabel({
  id,
  label,
  checked,
  onChange,
}: {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void | undefined;
}) {
  return (
    <div
      className="flex items-center gap-2 cursor-pointer py-1 mt-1"
      onClick={() => onChange(!checked)}
    >
      <Checkbox className="cursor-pointer" id={id} checked={checked} />
      <Label className="cursor-pointer" htmlFor={id}>
        {label}
      </Label>
    </div>
  );
}
