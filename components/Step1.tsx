import { StepProps } from "./types";

function Step1({ formData, setFormData, onNext }: StepProps) {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4 text-black">Шаг 1: Общая информация</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1 text-black">Название компании</label>
        <input
          type="text"
          className="w-full border rounded-md p-2 text-black"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1 text-black">Юридический адрес компании</label>
        <input
          type="text"
          className="w-full border rounded-md p-2 text-black"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1 text-black">NIP</label>
        <input
          type="text"
          className="w-full border rounded-md p-2 text-black"
          value={formData.nip}
          onChange={(e) => setFormData({ ...formData, nip: e.target.value })}
        />
      </div>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        onClick={onNext}
      >
        Далее
      </button>
    </div>
  );
}

export default Step1;