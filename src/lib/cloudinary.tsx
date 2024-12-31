const cloudinary = async () => {
  return {
    upload: async (file: File) => {
      const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`;
      const fd = new FormData();
      fd.append(
        "upload_preset",
        "system_uploader_1e2ddab171f769b9_ca0c2073bb896a0c3e160377bfaa8c1711"
      );
      fd.append("tags", "browser_upload");
      fd.append("file", file);
      return fetch(url, {
        method: "POST",
        body: fd,
      });
    },
  };
};
export default cloudinary;
