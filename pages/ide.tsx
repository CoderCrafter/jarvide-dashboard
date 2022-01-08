import Editor from "../components/ide/Editor";
import FileBrowserSidebar from "../components/ide/FileBrowserSidebar";

function IDE() {
    return (
        <div className="flex flex-row max-h-screen">
            <FileBrowserSidebar/>
            <Editor/>
        </div>
        
    );
}

export default IDE;