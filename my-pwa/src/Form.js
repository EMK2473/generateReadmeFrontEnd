import React, { useState } from "react";
import 'bulma/css/bulma.min.css';
import { Generator } from "./generateMarkdown"; // Update the path based on your file structure

const choices = [
  "agpl-3.0",
  "mpl-2.0",
  "apache-2.0",
  "mit",
  "bsl-1.0",
  "unlicense",
  "none",
];

const Form = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    installation: "",
    usage: "",
    license: "",
    contributions: "",
    tests: "",
    github: "",
    email: "",
    video: "",
    screenShot: "",
  });

  const [checkboxes, setCheckboxes] = useState({
    title: false,
    description: false,
    installation: false,
    usage: false,
    license: false,
    contributions: false,
    tests: false,
    github: false,
    email: false,
    video: false,
    screenShot: false,
  });

  const handleCheckboxChange = (name) => {
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [name]: !prevCheckboxes[name],
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const generateMarkdownContent = () => {
    // Use the Generator class to generate the Markdown content
    const generator = new Generator(formData);
    return generator.generateMarkdown(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate the Markdown content
    const markdownContent = generateMarkdownContent();

    // Write the Markdown content to a readme.md file
    const blob = new Blob([markdownContent], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "readme.md";
    link.click();
  };

  return (
    <div className="container">
      <h1 className="title is-1 has-text-centered">ReadMe Generator</h1>
      <div className="has-text-centered">
    <form onSubmit={handleSubmit} className="box custom-box-shadow" id="form">
      {/* Repeat similar structure for other form fields */}
      {/* Title */}
      <div className="field">
        <label className="label">

          <input
            className="checkbox"
            type="checkbox"
            name="titleCheckbox"
            checked={checkboxes.title}
            onChange={() => handleCheckboxChange("title")}
          />
          Title:
        </label>
        {checkboxes.title && (
          <div className="control">
            <input
              className="input"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
        )}
      </div>

      {/* Description */}
      <div className="field">
        <label className="label">
          
          <input
            className="checkbox"
            type="checkbox"
            name="descriptionCheckbox"
            checked={checkboxes.description}
            onChange={() => handleCheckboxChange("description")}
          />
          Description:
        </label>
        {checkboxes.description && (
          <div className="control">
            <input
              className="input"
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
        )}
      </div>

      {/* Repeat similar structure for other form fields */}
      {/* Installation */}
      <div className="field">
        <label className="label">
          
          <input
            className="checkbox"
            type="checkbox"
            name="installationCheckbox"
            checked={checkboxes.installation}
            onChange={() => handleCheckboxChange("installation")}
          />
          Installation Requirements:
        </label>
        {checkboxes.installation && (
          <div className="control">
            <input
              className="input"
              type="text"
              name="installation"
              value={formData.installation}
              onChange={handleChange}
            />
          </div>
        )}
      </div>

      {/* Usage */}
      <div className="field">
        <label className="label">
          
          <input
            className="checkbox"
            type="checkbox"
            name="usageCheckbox"
            checked={checkboxes.usage}
            onChange={() => handleCheckboxChange("usage")}
          />
          Application Usage:
        </label>
        {checkboxes.usage && (
          <div className="control">
            <input
              className="input"
              type="text"
              name="usage"
              value={formData.usage}
              onChange={handleChange}
            />
          </div>
        )}
      </div>

      {/* License */}
      <div className="field">
  <label className="label">
    
    <input
      className="checkbox"
      type="checkbox"
      name="licenseCheckbox"
      checked={checkboxes.license}
      onChange={() => handleCheckboxChange("license")}
    />
    License:
  </label>
  {checkboxes.license && (
    <div className="control">
      <div className="select">
        <select
          className="input"
          name="license"
          value={formData.license}
          onChange={handleChange}
        >
          <option value="" disabled>Select a license</option>
          {choices.map((choice) => (
            <option key={choice} value={choice}>
              {choice}
            </option>
          ))}
        </select>
      </div>
    </div>
  )}
</div>

      {/* Contributions */}
      <div className="field">
        <label className="label">
          
          <input
            className="checkbox"
            type="checkbox"
            name="contributionsCheckbox"
            checked={checkboxes.contributions}
            onChange={() => handleCheckboxChange("contributions")}
          />
          Contributions:
        </label>
        {checkboxes.contributions && (
          <div className="control">
            <input
              className="input"
              type="text"
              name="contributions"
              value={formData.contributions}
              onChange={handleChange}
            />
          </div>
        )}
      </div>

      {/* Tests */}
      <div className="field">
        <label className="label">
          
          <input
            className="checkbox"
            type="checkbox"
            name="testsCheckbox"
            checked={checkboxes.tests}
            onChange={() => handleCheckboxChange("tests")}
          />
          Test Commands:
        </label>
        {checkboxes.tests && (
          <div className="control">
            <input
              className="input"
              type="text"
              name="tests"
              value={formData.tests}
              onChange={handleChange}
            />
          </div>
        )}
      </div>

      {/* GitHub */}
      <div className="field">
        <label className="label">
          <input
            className="checkbox"
            type="checkbox"
            name="githubCheckbox"
            checked={checkboxes.github}
            onChange={() => handleCheckboxChange("github")}
          />
          GitHub Username:
        </label>
        {checkboxes.github && (
          <div className="control">
            <input
              className="input"
              type="text"
              name="github"
              value={formData.github}
              onChange={handleChange}
            />
          </div>
        )}
      </div>

      {/* Email */}
      <div className="field">
        <label className="label">
          <input
            className="checkbox"
            type="checkbox"
            name="emailCheckbox"
            checked={checkboxes.email}
            onChange={() => handleCheckboxChange("email")}
          />
          Email Address:
        </label>
        {checkboxes.email && (
          <div className="control">
            <input
              className="input"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        )}
      </div>

      {/* Video */}
      <div className="field">
        <label className="label">

          <input
            className="checkbox"
            type="checkbox"
            name="videoCheckbox"
            checked={checkboxes.video}
            onChange={() => handleCheckboxChange("video")}
          />
        Link to Video Instructions:
        </label>
        {checkboxes.video && (
          <div className="control">
            <input
              className="input"
              type="text"
              name="video"
              value={formData.video}
              onChange={handleChange}
            />
          </div>
        )}
      </div>

      {/* Screenshot */}
      <div className="field">
        <label className="label">
          
          <input
            className="checkbox"
            type="checkbox"
            name="screenShotCheckbox"
            checked={checkboxes.screenShot}
            onChange={() => handleCheckboxChange("screenShot")}
          />
          Path to Screenshot:
        </label>
        {checkboxes.screenShot && (
          <div className="control">
            <input
              className="input"
              type="text"
              name="screenShot"
              value={formData.screenShot}
              onChange={handleChange}
            />
          </div>
        )}
      </div>

      <div className="field is-grouped is-grouped-centered">
  <p className="control">
    <button className="button is-primary" type="submit">
      Submit
    </button>
  </p>
</div>
    </form>
    </div>
    </div>
  );
};

export default Form;
