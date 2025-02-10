import { StepProps } from "./types";


function Step3({ formData, onSubmit, onBack }: StepProps) {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4 text-black">Шаг 3: Подтверждение</h1>
      <p className="mb-4 text-black">Проверьте введённые данные:</p>
      <pre className="bg-gray-100 p-4 rounded-md mb-4 text-black">{JSON.stringify(formData, null, 2)}</pre>
      <button
        className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 mr-2"
        onClick={onSubmit}
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

export default Step3;