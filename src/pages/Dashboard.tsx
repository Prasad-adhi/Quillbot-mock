import { useState } from 'react';

interface UploadedFile {
  name: string;
  size: number;
  type: string;
}

export function DashboardUpload(): JSX.Element {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) => ({
        name: file.name,
        size: file.size,
        type: file.type,
      }));
      setUploadedFiles((prev) => [...prev, ...filesArray]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">📁 Upload Dashboard</h1>
        <p className="text-gray-600 mb-6">Upload and view your files here. This dashboard accepts multiple files.</p>

        <div className="mb-6">
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0 file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-3">Uploaded Files</h2>
          {uploadedFiles.length === 0 ? (
            <p className="text-gray-500 italic">No files uploaded yet.</p>
          ) : (
            <ul className="space-y-2">
              {uploadedFiles.map((file, index) => (
                <li
                  key={index}
                  className="bg-gray-100 p-3 rounded flex justify-between items-center text-sm"
                >
                  <span className="font-medium">{file.name}</span>
                  <span className="text-gray-500">
                    {file.type} • {(file.size / 1024).toFixed(1)} KB
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
