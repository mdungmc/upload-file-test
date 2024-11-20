import "./App.css";
import { Text } from "@mantine/core";
import DocViewer, {
  // DocRenderer,
  DocViewerRenderers,
  // MSDocRenderer,
  // PDFRenderer,
} from "@cyntler/react-doc-viewer";

function App() {
  // const [value, setValue] = useState<File[] | undefined>(undefined);
  // const [pFile, setPFile] = useState<File | null>(null);
  // const [docUri, setDocUri] = useState<string>("");
  // const docs = [
  //   {
  //     uri: new URL("../public/testdocx.docx", import.meta.url).href,
  //   },
  // ];

  const docs = [
    {
      uri: "https://res.cloudinary.com/dszkt92jr/raw/upload/v1732079731/testdocx_k1s6i5.docx",
    },
    { uri: "/c4611_sample_explain.pdf" },
    { uri: "/testdocx.docx" },
  ];

  // console.log(new URL("../public/testdocx.docx", import.meta.url).href);

  // useEffect(() => {
  //   if (pFile) {
  //     console.log(pFile);
  //     console.log(
  //       new URL(window.URL.createObjectURL(pFile), import.meta.url).href,
  //     );
  //   }
  // }, [pFile]);

  return (
    <>
      {/* <FileInput value={value} onChange={setValue} multiple />
      {value &&
        value.map((file) => (
          <Button key={file.name} onClick={() => setPFile(file)}>
            Preview file {file.name}
          </Button>
        ))}
      {pFile && (
        <DocViewer
          documents={[
            {
              uri: pFile.name,
              fileName: pFile.name,
            },
          ]}
          pluginRenderers={DocViewerRenderers}
        />
      )}
      <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} /> */}
      <Text>Hello</Text>
      <DocViewer
        pluginRenderers={DocViewerRenderers}
        documents={docs}
        config={{
          header: {
            disableHeader: false,
            disableFileName: false,
            retainURLParams: false,
          },
        }}
        style={{ width: "1000px", height: "1000px" }}
      />
      {/* <div style={{ height: "100vh", width: "100%" }}>
        <DocViewer
          documents={docs}
          pluginRenderers={DocViewerRenderers}
          style={{ height: "100%", width: "100%" }}
        />
      </div> */}
    </>
  );
}

export default App;
