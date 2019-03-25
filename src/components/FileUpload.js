/**
 * Created by zhongtingbing on 2018/9/24.
 */
import React from 'react'
import classNames from 'classnames'
import { ImagePicker } from 'antd-mobile'
import './FileUpload.less'

const prefixCls = 'file-upload-0kjh';

class FileUpload extends React.PureComponent {
  constructor() {
    super()
  }

  componentDidMount() {
  }

  componentDidUpdate() {
  }

  render() {
    const {
      className,
      files,
      onChange,
      ...others,
    } = this.props;

    const cls = classNames({
      [prefixCls]: true,
      [className]: className,
    });


    console.log(files)
    return (
      <div className={prefixCls}>
        <ImagePicker//直接向后台传输base64字符串即可，当上传其他类型文件时，可以重写background-url，让他指定为一个其他图片
          className={ files.length === 1 ? 'has-img' : ''}
          files={files}
          length={1}
          onChange={(files) => onChange({files})}
          accept="*"
        />
        {files.length === 1 && <div className="file-desc">{files[0].file.name}</div>}
      </div>
    )
  }
}
export default FileUpload
