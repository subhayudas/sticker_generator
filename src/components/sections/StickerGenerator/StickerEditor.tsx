import React from 'react';
import Draggable from 'react-draggable';
import { Plus, Download, Trash2 } from 'lucide-react';
import TextStyleControls from './TextStyleControls';

interface StickerEditorProps {
  image: string | null;
  processedImage: string | null;
  texts: Array<{
    id: number;
    content: string;
    style?: {
      fontSize?: string;
      color?: string;
      fontWeight?: string;
    };
  }>;
  stickerRef: React.RefObject<HTMLDivElement>;
  onAddText: () => void;
  onUpdateText: (id: number, content: string) => void;
  onRemoveText: (id: number) => void;
  onUpdateTextStyle: (id: number, style: any) => void;
  onDownload: () => void;
}

function StickerEditor({
  image,
  processedImage,
  texts,
  stickerRef,
  onAddText,
  onUpdateText,
  onRemoveText,
  onUpdateTextStyle,
  onDownload
}: StickerEditorProps) {
  return (
    <div className="flex flex-col items-center gap-6">
      <div 
        ref={stickerRef}
        className="relative w-[500px] h-[500px] bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAADFJREFUOI1j/P///38GKgAmaobR0NAAzwAGBgYGRkZGRrwKqWEAxQDU1zCaiFjoGQAAwqMd7SRfU+MAAAAASUVORK5CYII=')] rounded-lg overflow-hidden"
      >
        <img
          src={processedImage || image || ''}
          alt="Uploaded"
          className="w-full h-full object-contain"
          style={{ 
            backgroundColor: 'transparent'
          }}
        />
        {texts.map((text) => (
          <Draggable key={text.id} bounds="parent">
            <div className="absolute cursor-move" style={{ 
              top: '50%', 
              left: '50%', 
              transform: 'translate(-50%, -50%)'
            }}>
              <div className="relative group">
                <input
                  type="text"
                  value={text.content}
                  onChange={(e) => onUpdateText(text.id, e.target.value)}
                  style={{
                    ...text.style,
                    transform: 'none',
                    direction: 'ltr',
                    unicodeBidi: 'normal',
                    background: 'rgba(255, 255, 255, 0.75)',
                    border: 'none',
                    textAlign: 'center'
                  }}
                  className="min-w-[100px] p-2 rounded shadow-lg text-xl font-bold outline-none"
                />
                <button
                  onClick={() => onRemoveText(text.id)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Trash2 size={16} />
                </button>
                <div className="absolute -bottom-14 left-0 w-full">
                  <TextStyleControls
                    textId={text.id}
                    onUpdateStyle={onUpdateTextStyle}
                    currentStyle={text.style}
                  />
                </div>
              </div>
            </div>
          </Draggable>
        ))}
      </div>

      <div className="flex gap-4">
        <button
          onClick={onAddText}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105"
        >
          <Plus size={20} />
          Add Text
        </button>
        <button
          onClick={onDownload}
          className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all transform hover:scale-105"
        >
          <Download size={20} />
          Download
        </button>
      </div>
    </div>
  );
}

export default StickerEditor;