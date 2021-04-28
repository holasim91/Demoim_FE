import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../css/editor.css';
class EditorComponent extends Component{
    constructor(props){
        super(props);
    }
    
    modules = {
        toolbar: [
         
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'},],
          ['link', 'image'],
          [{ 'align': [] }, { 'color': [] }, { 'background': [] }],      
        
        ],
      }
    
      formats = [
        'header',
        'bold', 'italic', 'underline', 'blockquote',
        'list', 'bullet', 
        'link', 'image',
        'align', 'color', 'background',        
      ]
      //이미지 핸들러 추가예정.
      render() {
        //height container크기, innerHeight 에디터 크기, onChange,value는 useState로 넣어주세요!
        const { value, onChange,placeholder,height,innerHeight } = this.props;
        return(
            <div style={{height: height || "650px"}}>
                <ReactQuill 
                    style={{ height: innerHeight || "600px"}}
                    theme="snow" 
                    modules={this.modules} 
                    formats={this.formats} 
                    value={value || ''}
                    placeholder={placeholder || ''}
                    onChange={(content, delta, source, editor) => onChange(editor.getHTML())} />
            </div>
        )
    }
}
export default EditorComponent;