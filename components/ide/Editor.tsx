import { ChangeEvent, useState } from "react";

const Editor = () => {
    const [text, setText] = useState("");

    function onChangeHandler(e: ChangeEvent<HTMLTextAreaElement>) {
        setText(e.target.value);
    }

    return (
        <div className="bg-gray-900 h-screen w-screen p-4">
                <textarea value={text} onChange={onChangeHandler}
                className="bg-transparent outline-none text-white font-mono tracking-wider w-full h-screen resize-none" spellCheck="false" autoComplete="false">

                </textarea>
            </div>
    );
}

export default Editor;