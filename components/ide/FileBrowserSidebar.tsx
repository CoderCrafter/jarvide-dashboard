import { useState } from "react";

interface FileComponentInfoType {
    fileName: string;
}

function newFile() {
    let filename = prompt("Enter the name of the new file:");
    let currentFiles = window.localStorage.getItem("files");
    
}

const FileComponent = ({ fileName}: FileComponentInfoType) => {
    return (
        <div className=" hover:bg-gray-700 py-2 cursor-pointer duration-200">
            <p className="text-gray-400 ml-6">{fileName}</p>
        </div>
    );
}

const NewFileComponent = () => {
    return (
        <div onClick={newFile} className="hover:bg-gray-700 py-2 cursor-pointer duration-200">
            <p className="text-gray-400 ml-6">Create a new file</p>
        </div>
    );
}

const FileBrowserSidebar = () => {
    const [files, setFiles] = useState([]);

    return (
        <div className="bg-gray-800 w-64 h-screen pt-4">
            <p className="tracking-wide text-gray-300 font-bold ml-4">My Files</p>
            {files.map(file => {<FileComponent fileName={file}/>})}
            <NewFileComponent/>
        </div>
    );
}

export default FileBrowserSidebar;