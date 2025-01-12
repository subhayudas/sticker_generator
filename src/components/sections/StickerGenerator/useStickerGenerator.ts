import { useState, useRef } from 'react';
import * as htmlToImage from 'html-to-image';

interface TextItem {
  id: number;
  content: string;
  style?: {
    fontSize?: string;
    color?: string;
    fontWeight?: string;
  };
}

export function useStickerGenerator() {
  const [image, setImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [texts, setTexts] = useState<TextItem[]>([]);
  const [loading, setLoading] = useState(false);
  const stickerRef = useRef<HTMLDivElement>(null);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    setImage(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append('image_file', file);

    try {
      const response = await fetch('https://api.remove.bg/v1.0/removebg', {
        method: 'POST',
        headers: {
          'X-Api-Key': import.meta.env.VITE_REMOVE_BG_API_KEY,
        },
        body: formData,
      });

      if (response.ok) {
        const blob = await response.blob();
        setProcessedImage(URL.createObjectURL(blob));
      } else {
        console.error('Error removing background');
        setProcessedImage(URL.createObjectURL(file));
      }
    } catch (error) {
      console.error('Error:', error);
      setProcessedImage(URL.createObjectURL(file));
    }
    setLoading(false);
  };

  const addText = () => {
    setTexts([...texts, { 
      id: Date.now(), 
      content: 'Click to edit',
      style: {
        fontSize: '24px',
        color: '#000000',
        fontWeight: 'bold'
      }
    }]);
  };

  const updateText = (id: number, newContent: string) => {
    console.log('Updating text:', id, newContent);
    setTexts(prevTexts => prevTexts.map(text => 
      text.id === id ? { ...text, content: newContent } : text
    ));
  };

  const updateTextStyle = (id: number, style: any) => {
    setTexts(texts.map(text =>
      text.id === id ? { ...text, style: { ...text.style, ...style } } : text
    ));
  };

  const removeText = (id: number) => {
    setTexts(texts.filter(text => text.id !== id));
  };

  const downloadSticker = async () => {
    if (!stickerRef.current) return;
    
    try {
      const dataUrl = await htmlToImage.toPng(stickerRef.current, {
        backgroundColor: 'transparent',
        style: {
          background: 'transparent'
        },
        skipAutoScale: true,
        pixelRatio: 2
      });
      
      const link = document.createElement('a');
      link.download = 'sticker.png';
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error('Error downloading sticker:', error);
    }
  };

  return {
    image,
    processedImage,
    texts,
    loading,
    stickerRef,
    handleImageUpload,
    addText,
    updateText,
    updateTextStyle,
    removeText,
    downloadSticker
  };
}