import React from 'react'

export default class Edit extends React.Component {
  handleChange(event) {
    this.props.onChange(this.props.property.name, event.target.value)
  }

  render() {
    const { property, resource, record } = this.props
    const value = (record.params && record.params[property.name]) || ''
    const error = record.errors && record.errors[property.name]
    return (
      <div className="field">
        <label htmlFor={property.name} className="label">{property.label}</label>
        <div className="control">
          <input type="text"
                 className="input"
                 id={property.name}
                 name={property.name}
                 onChange={this.handleChange.bind(this)}
                 value={value}/>
        </div>
        {error && (
          <div className="help is-danger">{error.message}</div>
        )}
      </div>
    )
  }
}