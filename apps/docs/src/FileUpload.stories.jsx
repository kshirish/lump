import React, { useState } from 'react';
import { FileUpload } from '@lump/ui';

export default {
  title: 'Example/FileUpload',
  component: FileUpload,
};

export const Basic = () => (
  <FileUpload label="Upload your profile pic" name="profile" />
);

export const Disabled = () => (
  <FileUpload label="Upload your profile pic" name="profile" disabled />
);

export const Sizes = () => (
  <>
    <FileUpload label="Upload your profile pic" name="profile" size="sm" />
    <FileUpload label="Upload your profile pic" name="profile" />
    <FileUpload label="Upload your profile pic" name="profile" size="lg" />
  </>
);

export const Error = () => (
  <FileUpload
    name="profile"
    label="Upload your profile pic"
    error="Uploaded file exceeds 5MB"
  />
);

export const Helper = () => (
  <FileUpload
    name="profile"
    label="Upload your profile pic"
    helperText="You can skip it"
  />
);

export const Controlled = () => {
  const [value, setValue] = useState(18);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const [file] = e.target.files;

    if (file.type !== 'image/jpeg') {
      setError('Told you ... only .jpeg pics!');
    } else {
      setError('');
    }

    setValue(file);
  };

  return (
    <FileUpload
      name="profile"
      label="Upload your profile pic"
      helperText="Only .jpeg pics should be uploaded"
      error={error}
      onChange={handleChange}
    />
  );
};
