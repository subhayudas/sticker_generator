import React from 'react';
import { ImagePlus } from 'lucide-react';

interface ImageUploaderProps {
  onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  loading: boolean;
}

function ImageUploader({ onUpload, loading }: ImageUploaderProps) {
  return (
    <div className="flex justify-center mb-6">
      <label className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg cursor-pointer hover:bg-purple-700 transition-all transform hover:scale-105">
        <ImagePlus size={24} />
        Upload Image
        <input
          type="file"
          accept="image/*"
          onChange={onUpload}
          className="hidden"
        />
      </label>

      {loading && (
        <div className="text-center text-gray-600 mt-4">
          <div className="animate-spin inline-block w-8 h-8 border-4 border-purple-600 border-t-transparent rounded-full mb-2"></div>
          <p>Processing your image...</p>
        </div>
      )}
    </div>
  );
}

export default ImageUploader;