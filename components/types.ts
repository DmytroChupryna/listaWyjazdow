export type Worker = {
  name: string;
  days: string;
  hours: string;
  startDate?: string;
  endDate?: string;
  workplace?: string;
};

export type FormData = {
  company: string;
  address: string;
  nip: string;
  workers: Worker[];
};

export type StepProps = {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  onNext?: () => void;
  onBack?: () => void;
  onSubmit?: () => void;
};