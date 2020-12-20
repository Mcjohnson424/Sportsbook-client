export default async function processFile(file, callback) {
  const reader = new FileReader();
  reader.onload = async (e) => {
    const text = e.target.result;
    callback(text);
  };
  reader.readAsText(file, "UTF-8");
}
