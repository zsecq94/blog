const FileUpload = ({ handleFile }) => {
  return (
    <Button onChange={handleFile} component="label" role={undefined}>
      Upload
      <VisuallyHiddenInput type="file" />
    </Button>
  );
};

export default FileUpload;
