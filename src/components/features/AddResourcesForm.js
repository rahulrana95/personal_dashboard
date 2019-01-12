import React, { Component } from "react";
import { Icon, Input, Button, Select } from "antd";
const { TextArea } = Input;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class AddResourcesForm extends React.Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    return (
      <div>
        <Input
          prefix={<Icon type="text" style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="Title"
          className="form-field"
        />

        <TextArea
          prefix={<Icon type="text" style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="Enter Link"
          className="form-field"
        />

        <Select className="form-field-select" placeholder="Select a person">
          {this.renderCategories()}
        </Select>

        <Select
          placeholder="Please select a type"
          className="form-field-select">
          {this.renderTypeOptions()}
        </Select>

        <Button
          type="primary"
          htmlType="submit"
          className="form-field-button"
          onClick={this.onFormSubmit}>
          Add
        </Button>
      </div>
    );
  }

  renderTypeOptions = () => {
    return this.props.types.map(type => {
      return <Option value={type}>{type}</Option>;
    });
  };

  renderCategories = () => {
    return this.props.categories.map(type => {
      return <Option value={type}>{type}</Option>;
    });
  };

  onFormSubmit = e => {
    console.log(e);
  };
}

AddResourcesForm.defaultProps = {
  categories: [
    "Javascript",
    "HTML",
    "HTML5",
    "CSS3",
    "Code Repo",
    "Reading Code"
  ],
  types: ["Reading Article", "Code Snippets", "RND", "Codes"],
  onAdd: data => {
    console.log(data);
  }
};

export default AddResourcesForm;
