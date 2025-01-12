import React, { useState } from 'react';

interface TextStyleControlsProps {
  textId: number;
  onUpdateStyle: (id: number, style: any) => void;
  currentStyle?: {
    fontSize?: string;
    color?: string;
    fontWeight?: string;
    x?: number;
    y?: number;
  };
  onUpdatePosition?: (id: number, x: number, y: number) => void;
}

function TextStyleControls({ 
  textId, 
  onUpdateStyle, 
  currentStyle = {},
  onUpdatePosition 
}: TextStyleControlsProps) {
  const colors = ['#000000', '#ffffff', '#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
  const fontSizes = ['16px', '20px', '24px', '32px', '40px', '48px'];
  const fontWeights = ['normal', 'bold', '800', '900'];

  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStart({
      x: e.clientX - (currentStyle.x || 0),
      y: e.clientY - (currentStyle.y || 0)
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && onUpdatePosition) {
      const newX = Math.max(0, e.clientX - dragStart.x);
      const newY = Math.max(0, e.clientY - dragStart.y);
      onUpdatePosition(textId, newX, newY);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div 
      className="absolute cursor-move"
      style={{
        left: `${currentStyle.x || 0}px`,
        top: `${currentStyle.y || 0}px`,
        transform: 'none',
        direction: 'ltr',
        unicodeBidi: 'normal',
        textAlign: 'left',
        writingMode: 'horizontal-tb'
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div style={{ transform: 'none' }}>
        <select
          value={currentStyle.fontSize || '24px'}
          onChange={(e) => onUpdateStyle(textId, { ...currentStyle, fontSize: e.target.value })}
          className="p-1 border rounded"
        >
          {fontSizes.map(size => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>

        <select
          value={currentStyle.fontWeight || 'normal'}
          onChange={(e) => onUpdateStyle(textId, { ...currentStyle, fontWeight: e.target.value })}
          className="p-1 border rounded"
        >
          {fontWeights.map(weight => (
            <option key={weight} value={weight}>{weight}</option>
          ))}
        </select>

        <div className="flex gap-1">
          {colors.map(color => (
            <button
              key={color}
              onClick={() => onUpdateStyle(textId, { ...currentStyle, color })}
              className="w-6 h-6 rounded-full border"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TextStyleControls;