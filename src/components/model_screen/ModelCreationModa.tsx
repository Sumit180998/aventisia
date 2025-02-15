import { useState } from 'react';
import { X } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';


interface Model {
  id: string;
  model_name: string;
  model_type: string;
  Description: string;
  created_date: string;
  updated_date?: string;
  status?: string;
}
type ModelCreationModalProps = {
  onClose: () => void;
  Modeldata: (data: Model[]) => void;
};

const ModelCreationModal: React.FC<ModelCreationModalProps> = ({ onClose, Modeldata }) => {
  const [modelName, setModelName] = useState('');
  const [modelType, setModelType] = useState('');
  const [llm, setLlm] = useState('Active');
  const [modelDescription, setModelDescription] = useState('');
  const [errors, setErrors] = useState({ modelName: '', modelType: '', modelDescription: '' });

  const validateFields = () => {
    const newErrors = {
      modelName: modelName.trim() ? '' : 'Model Name is required',
      modelType: modelType.trim() ? '' : 'Model Type is required',
      modelDescription: modelDescription.trim() ? '' : 'Model Description is required',
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => !error);
  };

  const handleSubmit = () => {
    if (validateFields()) {
      const currentDate = new Date().toISOString().slice(0,10);
      const uniqueId = uuidv4().slice(0,6);
      
      const data = {
        id: `#${uniqueId}`,
        model_name: modelName.trim(),
        model_type: modelType.trim(),
        Description: modelDescription.trim(),
        created_date: currentDate,
        updated_date: 'No update',
        status: llm
      };
      console.log(data);
      Modeldata([data]);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="w-96 bg-white rounded-2xl shadow-xl p-6 space-y-4">
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-lg font-semibold">Create new model</h2>
          <X className="cursor-pointer" onClick={onClose} />
        </div>

        <label className="block text-sm font-medium">Model Name</label>
        <input
          className="w-full border p-2 rounded"
          placeholder="Enter Model Name"
          value={modelName}
          onChange={(e) => setModelName(e.target.value)}
        />
        {errors.modelName && <p className="text-red-500 text-xs">{errors.modelName}</p>}

        <label className="block text-sm font-medium">Model Type</label>
        <input
          className="w-full border p-2 rounded"
          placeholder="Model Type"
          value={modelType}
          onChange={(e) => setModelType(e.target.value)}
        />
        {errors.modelType && <p className="text-red-500 text-xs">{errors.modelType}</p>}

        <label className="block text-sm font-medium">LLM</label>
        <select
          className="w-full border p-2 rounded"
          value={llm}
          onChange={(e) => setLlm(e.target.value)}
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

        <label className="block text-sm font-medium">Model Description</label>
        <textarea
          className="w-full border p-2 rounded"
          placeholder="Enter Model Description"
          value={modelDescription}
          onChange={(e) => setModelDescription(e.target.value)}
        />
        {errors.modelDescription && <p className="text-red-500 text-xs">{errors.modelDescription}</p>}

        <div className="flex justify-between pt-4">
          <button className="px-4 py-2 border rounded" onClick={onClose}>Cancel</button>
          <button
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModelCreationModal;



