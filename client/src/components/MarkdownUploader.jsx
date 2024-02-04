import React, { useState } from "react";
import marked from "marked";

const MarkdownUploader = () => {
  return (
    <div>
      <input type="file" onChange={onFileChange} accept=".md" />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default MarkdownUploader;
