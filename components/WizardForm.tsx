"use client";
import { useState } from "react";
import { FormData } from "./types";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import InfoPanel from "./InfoPanel";

export default function WizardForm() {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    company: "",
    address: "",
    nip: "",
    workers: []
  });

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);
  const handleSubmit = () => {
    console.log("Submitted Data:", formData);
    alert("Данные успешно сохранены!");
  };

  return (
    <div className="container mx-auto p-6">
      <div className="mx-auto mb-10">
        <InfoPanel formData={formData} />
      </div>
      <div className="max-w-lg mx-auto shadow-lg p-4 rounded-md bg-white">
        {step === 1 && (
          <Step1
            formData={formData}
            setFormData={setFormData}
            onNext={handleNext}
          />
        )}
        {step === 2 && (
          <Step2
            formData={formData}
            setFormData={setFormData}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}
        {step === 3 && (
          <Step3
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleSubmit}
            onBack={handleBack}
          />
        )}
      </div>
    </div>
  );
}
