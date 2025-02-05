import React, { useState, useEffect } from 'react';
import { Editor, EditorState, RichUtils, convertFromRaw } from 'draft-js';
import 'draft-js/dist/Draft.css';

interface RichTextEditorProps{
    triggerState: boolean
}

const RichTextEditor:React.FC<RichTextEditorProps> = ({ triggerState}) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    const savedData = localStorage.getItem('userData');
    
    if (savedData) {
      try {
        const rawData = JSON.parse(savedData);
        
        // Ensure the data is in the correct format for Draft.js
        if (rawData.blocks && Array.isArray(rawData.blocks) && rawData.entityMap !== undefined) {
          const contentState = convertFromRaw(rawData);
          setEditorState(EditorState.createWithContent(contentState));
        } else {
          console.error('Invalid data format:', rawData);
        }
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    }
  }, [triggerState]);

  const handleChange = (newState:any) => {
    setEditorState(newState);
  };

  const handleBold = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  };

  const handleItalic = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
  };

  const handleUnderline = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
  };

  return (
    <div>
      <div>
        <button onClick={handleBold}>Bold</button>
        <button onClick={handleItalic}>Italic</button>
        <button onClick={handleUnderline}>Underline</button>
      </div>
      <div style={{ border: '1px solid #ddd', minHeight: '200px', padding: '10px' }}>
        <Editor 
          editorState={editorState} 
          onChange={handleChange} 
        />
      </div>
    </div>
  );
};

export default RichTextEditor;
