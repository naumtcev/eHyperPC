import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ICheckboxUI } from "@/interfaces/ceckbox.interface";

export const CheckboxUI = ({ label, id, isChecked }: ICheckboxUI) => {
  return (
    <div className="flex items-center gap-3">
      <Checkbox id={id} checked={isChecked} />
      <Label htmlFor={id} className="mr-[8] text-[#9c9c9c] text-base">
        {label}
      </Label>
    </div>
  );
};
