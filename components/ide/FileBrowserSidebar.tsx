import React, { useState } from "react";

interface IFileComponentPropType {
    fileName: string;
}

interface INewFileComponentPropType {
    files: any,
    setFiles: Function
}

function newFile(files: any, setFiles: Function) {
    let filename = prompt("Enter the name of the new file:");
    console.log("Creating new file with name " + filename)
    setFiles([...files, filename]);
}

const FileComponent = ({ fileName }: IFileComponentPropType) => {
    return (
        <div className=" hover:bg-gray-700 py-2 cursor-pointer duration-200">
            <p className="text-gray-400 ml-6">{fileName}</p>
        </div>
    );
}

const NewFileComponent = ({ files, setFiles }: INewFileComponentPropType) => {
    return (
        <div onClick={() => {newFile(files, setFiles)}} className="hover:bg-gray-700 py-2 cursor-pointer duration-200">
            <p className="text-gray-400 ml-6">Create a new file</p>
        </div>
    );
}

const FileBrowserSidebar = () => {
    const [files, setFiles] = useState([]);
    console.log(files);
    return (
        <div className="bg-gray-800 w-64 h-screen pt-4">
            <p className="tracking-wide text-gray-300 font-bold ml-4">My Files</p>
            {files.map((file) => {return(<FileComponent fileName={file} key={file}/>)})}
            <NewFileComponent files={files} setFiles={setFiles}/>
        </div>
    );
}

export default FileBrowserSidebar;