import { ChangeEvent, useState } from "react";

const Editor = () => {
    const [text, setText] = useState("");

    function onChangeHandler(e: ChangeEvent<HTMLTextAreaElement>) {
        setText(e.target.value);
    }

    return (
        <div className="bg-gray-900 h-screen w-screen">
                <textarea value={text} onChange={onChangeHandler}
                className="bg-black outline-none text-white font-mono tracking-wider w-full h-full resize-none p-4" spellCheck="false" autoComplete="false">

                </textarea>
            </div>
    );
}

export default Editor;