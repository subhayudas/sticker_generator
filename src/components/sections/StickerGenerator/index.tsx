import React from 'react';
import ImageUploader from './ImageUploader';
import StickerEditor from './StickerEditor';
import { useStickerGenerator } from './useStickerGenerator';

function StickerGenerator() {
  const {
    image,
    processedImage,
    texts,
    loading,
    stickerRef,
    handleImageUpload,
    addText,
    updateText,
    removeText,
    downloadSticker,
    updateTextStyle
  } = useStickerGenerator();

  return (
    <section id="generator" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Sticker Generator</h2>
          <p className="text-gray-600">Upload an image, remove the background, and add your creative touch!</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <ImageUploader onUpload={handleImageUpload} loading={loading} />

          {(image || processedImage) && (
            <StickerEditor
              image={processedImage || image}
              texts={texts}
              stickerRef={stickerRef}
              onAddText={addText}
              onUpdateText={updateText}
              onRemoveText={removeText}
              onUpdateTextStyle={updateTextStyle}
              onDownload={downloadSticker}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default StickerGenerator;