import React from 'react';

const downloadFile = (fileUrl, fileName) => {
  const link = document.createElement('a');
  link.href = fileUrl;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const ResumeButton = () => {
  const handleDownload = () => {
    const resumeUrl = process.env.PUBLIC_URL + '/Neeraj Resume.pdf';
    downloadFile(resumeUrl, 'Neeraj_Resume.pdf');
  };

  return (
    <button onClick={handleDownload}>
      Download Resume
    </button>
  );
};

export default ResumeButton;
