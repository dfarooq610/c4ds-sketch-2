import { ChangeEvent, useState } from "react";

interface PartisanIndexSliderProps {
  onChange: (e: ChangeEvent) => void;
}
const PartisanIndexSlider = ({ onChange }: PartisanIndexSliderProps) => {
    const [currentValue, setCurrentValue] = useState<number>(50)
  return (
    <>
      
    </>
  );
};

export default PartisanIndexSlider;
