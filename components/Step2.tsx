import { useState } from "react";
import { StepProps, Worker } from "./types";
function Step2({ formData, setFormData, onNext, onBack }: StepProps) {
  const [worker, setWorker] = useState<Worker>({ name: "", days: '', hours: '', startDate: "", endDate: "", workplace: "" });

  const addWorker = () => {
    setFormData({ ...formData, workers: [...formData.workers, worker] });
    setWorker({ name: "", days: '', hours: '', startDate: "", endDate: "", workplace: "" });
  };

  const existingWorkers = formData.workers.map((worker) => worker.name);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4 text-black">Шаг 2: Данные сотрудника {formData.workers.length + 1}</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1 text-black">Имя сотрудника</label>
        <input
          type="text"
          className="w-full border rounded-md p-2 text-black"
          list="worker-names"
          value={worker.name}
          onChange={(e) => setWorker({ ...worker, name: e.target.value })}
        />
        <datalist id="worker-names">
          {existingWorkers.map((name, index) => (
            <option key={index} value={name} />
          ))}
        </datalist>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1 text-black">Количество дней</label>
        <input
          type="text"
          className="w-full border rounded-md p-2 text-black"
          value={worker.days}
          onChange={(e) => setWorker({ ...worker, days: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1 text-black">Количество часов</label>
        <input
          type="text"
          className="w-full border rounded-md p-2 text-black"
          value={worker.hours}
          onChange={(e) => setWorker({ ...worker, hours: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1 text-black">Адрес работы</label>
        <input
          type="text"
          className="w-full border rounded-md p-2 text-black"
          value={worker.workplace}
          onChange={(e) => setWorker({ ...worker, workplace: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1 text-black">От (дата)</label>
        <input
          type="date"
          className="w-full border rounded-md p-2 text-black"
          value={worker.startDate}
          onChange={(e) => setWorker({ ...worker, startDate: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1 text-black">До (дата)</label>
        <input
          type="date"
          className="w-full border rounded-md p-2 text-black"
          value={worker.endDate}
          onChange={(e) => setWorker({ ...worker, endDate: e.target.value })}
        />
      </div>
      <button
        className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 mr-2"
        onClick={addWorker}
      >
        + Сотрудник
      </button>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mr-2"
        onClick={onNext}
      >
        Завершить
      </button>
      <button
        className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
        onClick={onBack}
      >
        Назад
      </button>
    </div>
  );
}

export default Step2;