
import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { useMutation, useQuery } from '@tanstack/react-query';

interface UploadedFile {
  filename: string;
  originalName: string;
}

export function ImageUploader() {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { data: imagesData, refetch: refetchImages } = useQuery({
    queryKey: ['images'],
    queryFn: async () => {
      const response = await fetch('/api/images');
      if (!response.ok) {
        throw new Error('Failed to fetch images');
      }
      return response.json();
    }
  });

  const uploadMutation = useMutation({
    mutationFn: async (formData: FormData) => {
      const response = await fetch('/api/images/upload', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error('Upload failed');
      }
      
      return response.json();
    },
    onSuccess: (data) => {
      setUploadedFiles(prev => [...prev, ...data.files]);
      refetchImages();
    },
  });

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (files: FileList) => {
    const formData = new FormData();
    Array.from(files).forEach(file => {
      formData.append('files', file);
    });
    
    uploadMutation.mutate(formData);
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-6">
      <h2 className="text-2xl font-bold">Galeria zdjęć</h2>
      
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center ${
          isDragging ? 'border-primary bg-primary/10' : 'border-muted-foreground/25'
        } transition-colors duration-200 cursor-pointer`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleButtonClick}
      >
        <div className="flex flex-col items-center justify-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-muted-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
            />
          </svg>
          <p className="text-lg font-medium">
            Przeciągnij i upuść zdjęcia lub kliknij, aby wybrać
          </p>
          <p className="text-sm text-muted-foreground">
            Obsługiwane formaty: JPG, PNG, GIF (max 10MB)
          </p>
        </div>
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          multiple
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>

      {uploadMutation.isPending && (
        <div className="flex items-center justify-center p-4">
          <div className="animate-spin h-6 w-6 border-2 border-primary border-t-transparent rounded-full mr-2"></div>
          <p>Przesyłanie zdjęć...</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {imagesData?.images?.map((filename: string) => (
          <div key={filename} className="rounded-lg overflow-hidden border border-border">
            <img
              src={`/api/images/${filename}`}
              alt={filename}
              className="w-full h-48 object-cover"
            />
            <div className="p-2 text-sm truncate" title={filename}>
              {filename}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
