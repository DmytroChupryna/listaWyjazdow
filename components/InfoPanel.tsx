import { useState } from "react";
import { FormData, Worker } from "./types";

function InfoPanel({
  formData,
  onRemove,
  onEdit
}: {
  formData: FormData;
  onRemove: (index: number) => void;
  onEdit: (index: number, worker: Worker) => void;
}) {
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editedWorker, setEditedWorker] = useState<Worker | null>(null);

  const handleEditClick = (index: number) => {
    setEditingIndex(index);
    setEditedWorker(formData.workers[index]);
  };

  const handleSave = () => {
    if (editedWorker !== null && editingIndex !== null) {
      onEdit(editingIndex, editedWorker);
      setEditingIndex(null);
      setEditedWorker(null);
    }
  };
  return (
    <>
      <div className="mt-6 p-4 bg-blue-100 rounded-md">
        <h2 className="text-lg font-bold text-blue-900 mb-4">
          Дополнительная информация
        </h2>
        <table className="table-auto w-full text-sm text-left text-blue-800">
          <tbody>
            <tr>
              <th className="px-4 py-2 font-medium text-blue-900">
                Название компании:
              </th>
              <td className="px-4 py-2">{formData.company || "Не указано"}</td>
            </tr>
            <tr>
              <th className="px-4 py-2 font-medium text-blue-900">
                Юридический адрес компании:
              </th>
              <td className="px-4 py-2">{formData.address || "Не указано"}</td>
            </tr>
            <tr>
              <th className="px-4 py-2 font-medium text-blue-900">NIP:</th>
              <td className="px-4 py-2">{formData.nip || "Не указано"}</td>
            </tr>
          </tbody>
        </table>
        <h3 className="text-md font-bold text-blue-900 mt-6 mb-4">
          Список сотрудников:
        </h3>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-blue-100">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-900 uppercase bg-blue-200 dark: bg-blue-200 dark:text-gray-900">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">Имя</div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">Дней</div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">Часов</div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">Адрес работы</div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">От</div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">До</div>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Delete</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {formData.workers.map((worker, index) => (
              <tr key={index} className="bg-white border-b text-gray-900">
                <td className="px-6 py-4 font-medium">{index + 1}</td>
                <td className="px-6 py-4">
                  {editingIndex === index ? (
                    <input
                      type="text"
                      value={editedWorker?.name || ""}
                      onChange={(e) =>
                        setEditedWorker((prev) => ({
                          ...prev!,
                          name: e.target.value
                        }))
                      }
                      className="border p-1"
                    />
                  ) : (
                    worker.name
                  )}
                </td>
                <td className="px-6 py-4">
                  {editingIndex === index ? (
                    <input
                      type="text"
                      value={editedWorker?.days || ""}
                      onChange={(e) =>
                        setEditedWorker((prev) => ({
                          ...prev!,
                          days: e.target.value
                        }))
                      }
                      className="border p-1"
                    />
                  ) : (
                    worker.days
                  )}
                </td>
                <td className="px-6 py-4">
                  {editingIndex === index ? (
                    <input
                      type="text"
                      value={editedWorker?.hours || ""}
                      onChange={(e) =>
                        setEditedWorker((prev) => ({
                          ...prev!,
                          hours: e.target.value
                        }))
                      }
                      className="border p-1"
                    />
                  ) : (
                    worker.hours
                  )}
                </td>
                <td className="px-6 py-4">
                  {editingIndex === index ? (
                    <input
                      type="text"
                      value={editedWorker?.workplace || ""}
                      onChange={(e) =>
                        setEditedWorker((prev) => ({
                          ...prev!,
                          workplace: e.target.value
                        }))
                      }
                      className="border p-1"
                    />
                  ) : (
                    worker.workplace
                  )}
                </td>
                <td className="px-6 py-4">
                  {editingIndex === index ? (
                    <input
                      type="date"
                      className="w-full border rounded-md p-2 text-black"
                      value={editedWorker?.startDate}
                      onChange={(e) =>
                        setEditedWorker((prev) => ({
                          ...prev!,
                          startDate: e.target.value
                        }))
                      }
                    />
                  ) : (
                    worker.startDate
                  )}
                </td>
                <td className="px-6 py-4">
                  {editingIndex === index ? (
                    <input
                      type="date"
                      className="w-full border rounded-md p-2 text-black"
                      value={editedWorker?.endDate}
                      onChange={(e) =>
                        setEditedWorker((prev) => ({
                          ...prev!,
                          endDate: e.target.value
                        }))
                      }
                    />
                  ) : (
                    worker.endDate
                  )}
                </td>
                <td className="px-6 py-4 text-right">
                  {editingIndex === index ? (
                    <button
                      onClick={handleSave}
                      className="text-green-600 hover:underline"
                    >
                      <svg
                        className="w-6 h-6 text-green-600 dark:text-green-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEditClick(index)}
                      className="text-blue-600 hover:underline"
                    >
                      <svg
                        className="w-6 h-6 text-green-600 dark:text-green-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                        />
                      </svg>
                    </button>
                  )}
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => onRemove(index)}
                    className="text-red-600 hover:underline"
                  >
                    <svg
                      className="w-6 h-6 text-red-600 dark:text-red-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18 17.94 6M18 18 6.06 6"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default InfoPanel;
