import React from 'react'
import DateTimePicker from 'js/components/shared/date-time-picker'
import { Icon } from 'semantic-ui-react'

// internal components
import Input from 'js/components/shared/input'
import Select from 'js/components/shared/select'
import TextArea from 'js/components/shared/text-area'
import Button from 'js/components/shared/button'
import PlogMarkdownEditor from 'js/components/shared/plog-markdown-editor'
import styled, { css } from 'styled-components'
import { maxMedia } from 'js/styles/mixins'
import { splice } from 'js/utils'

const styles = css`
  display: flex;
  
  ${
    maxMedia.tablet`
      flex-direction: column;
      
      &::before {
        content: '\\1F58A';
        opacity: 0.3;
        font-size: 14px;
        align-self: flex-end;
      }
    `
  }
  
  &::after {
    content: '\\1F58A';
    opacity: 0.3;
    font-size: 14px;
    
    ${
      maxMedia.tablet`
        display: none;
      `
    }
  }
  
  &:hover {
    border: 1px solid #ccc;
    padding: 0.5rem;
    cursor: text;
    
    &::after {
      content: '';
    }
  }
  
  .editor-active {
    background-color: white;
    min-width: 300px;
    display: flex;
    
    &::after {
      content: 'Save';
      color: blue;
    }
  }
`

class ContentEditable extends React.Component {
  constructor(props) {
    super(props)
    this.onBlur = this.onBlur.bind(this)
    this.onClick = this.onClick.bind(this)
    this.getEditableComponent = this.getEditableComponent.bind(this)
    this.state = {isEditing: false, value: '', type: 'input'}
    this.textboxRef = React.createRef();
  }

  onClick = (e, value) => {
    this.setState({isEditing: true, value})
  }

  onCancel = () => this.setState({ isEditing: false })

  componentDidMount() {
    this.setState({value: this.props.defaultValue})
  }

  componentDidUpdate() {
    this.textboxRef.current && this.textboxRef.current.focus && this.textboxRef.current.focus();
  }

  getValue = (el, attr) => {
    switch (this.props.type) {
      case 'textarea':
      case 'input':
        return el.target.value

      case 'datetime':
        return el

      case 'select':
        return attr.value

      default:
        return e.target.innerText
    }
  }

  onChange = (el, attr) => {
    const value = this.getValue(el, attr)
    this.setState(() => {
      this.props.onChange(this.props.propName, value, this.props.type)
      return { value }
    })
  }

  onBlur = (e) => {
    if (!this.props.onSubmit) {
      return this.setState({isEditing: false})
    }
    this.props.onSubmit(this.props.type)
      .then(res => this.setState({isEditing: false}))
  }

  getTextBoxProps = () => ({
    onChange: this.onChange,
    innerRef: this.textboxRef,
    style: {width: '100%', ...this.props.style},
    onBlur: this.onBlur,
    value: this.state.value,
    options: this.props.options,
  })

  getEditableComponent() {
    const {type = ''} = this.props
    switch(type.toLowerCase()) {
      case 'textarea':
        return <PlogMarkdownEditor className="editor-active"
                                   {...this.getTextBoxProps()}
                                   showSubmit={true}
                                   onCancel={this.onCancel}
                                   onSubmit={this.onBlur} />

      case 'datetime':
        return <div style={{ minWidth: '300px', display: 'flex'}}>
                 <DateTimePicker  className="editor-active"
                                   selected={this.props.defaultValue}
                                   {...this.getTextBoxProps()} />
                 <button onClick={this.onBlur}>Save</button>
               </div>

      case 'select':
        return <Select className="editor-active" {...this.getTextBoxProps()} />

      default:
        return <Input className="editor-active" {...this.getTextBoxProps()} />
    }
  }

  getProps = () => ({
    ...this.props,
    onClick: this.onClick,
    onBlur: this.onBlur,
  })

  render() {
    return this.state.isEditing || this.props.isEditing
      ? this.getEditableComponent()
      : this.props.children(this.getProps())
  }
}

export default styled(ContentEditable)`${styles}`
