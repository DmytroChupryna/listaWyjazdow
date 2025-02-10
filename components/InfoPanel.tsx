import { FormData } from "./types";

function InfoPanel({ formData }: { formData: FormData }) {
  return (
    <div className="mt-6 p-4 bg-blue-100 rounded-md">
      <h2 className="text-lg font-bold text-blue-900 mb-4">Дополнительная информация</h2>
      <table className="table-auto w-full text-sm text-left text-blue-800">
        <tbody>
          <tr>
            <th className="px-4 py-2 font-medium text-blue-900">Название компании:</th>
            <td className="px-4 py-2">{formData.company || "Не указано"}</td>
          </tr>
          <tr>
            <th className="px-4 py-2 font-medium text-blue-900">Юридический адрес компании:</th>
            <td className="px-4 py-2">{formData.address || "Не указано"}</td>
          </tr>
          <tr>
            <th className="px-4 py-2 font-medium text-blue-900">NIP:</th>
            <td className="px-4 py-2">{formData.nip || "Не указано"}</td>
          </tr>
        </tbody>
      </table>
      <h3 className="text-md font-bold text-blue-900 mt-6 mb-4">Список сотрудников:</h3>
      <table className="table-auto w-full text-sm text-left text-blue-800 border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">#</th>
            <th className="border px-4 py-2">Имя</th>
            <th className="border px-4 py-2">Дней</th>
            <th className="border px-4 py-2">Часов</th>
            <th className="border px-4 py-2">Адрес работы</th>
            <th className="border px-4 py-2">От</th>
            <th className="border px-4 py-2">До</th>
          </tr>
        </thead>
        <tbody>
          {formData.workers.map((worker, index) => (
            <tr key={index}>
              <td className="border px-4 py-2 text-center">{index + 1}</td>
              <td className="border px-4 py-2">{worker.name}</td>
              <td className="border px-4 py-2 text-center">{worker.days}</td>
              <td className="border px-4 py-2 text-center">{worker.hours}</td>
              <td className="border px-4 py-2">{worker.workplace || "-"}</td>
              <td className="border px-4 py-2">{worker.startDate || "-"}</td>
              <td className="border px-4 py-2">{worker.endDate || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default InfoPanel;