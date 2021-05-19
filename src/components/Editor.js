import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../css/editor.css';
import axios from "axios";
import { config } from "../shared/config";

class EditorComponent extends Component {

  modules = {
    toolbar: {
      container: [[{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' },],
      ['link', 'image'],
      [{ 'align': [] }, { 'color': [] }, { 'background': [] }]],
      handlers: {
        'image': this.imageHandler
      }
    }
  }

  formats = [
    'header',
    'bold', 'italic', 'underline', 'blockquote',
    'list', 'bullet',
    'link', 'image',
    'align', 'color', 'background',
  ]

  imageHandler() {
    const input = document.createElement('input');

    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      const formData = new FormData();

      formData.append('file', file);
      const range = this.quill.getSelection(true);

      this.quill.insertEmbed(range.index, 'image', 'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image-300x225.png');
      this.quill.setSelection(range.index + 1);

      const res = await axios({
        method: "post",
        url: `${config.api}/api/upload`,
        data: formData,
      }).then((res) => {
        return res.data;
      });
      this.quill.deleteText(range.index, 1);
      this.quill.insertEmbed(range.index, 'image', res);
    };
  }
  //이미지 핸들러 추가예정.
  render() {
    //height container크기, innerHeight 에디터 크기, onChange,value는 useState로 넣어주세요!
    const { value, onChange, placeholder, height, innerHeight } = this.props;
    return (
      <div style={{ height: height || "650px" }}>
        <ReactQuill
          style={{ height: innerHeight || "600px" }}
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