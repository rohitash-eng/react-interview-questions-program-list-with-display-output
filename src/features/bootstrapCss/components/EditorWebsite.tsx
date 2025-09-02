import React from "react";

const EditorWebsite = () => {
    const bootstrapExample = `<p>
    <strong style="font-size: large; color: rgb(230, 0, 0);">
        <em>Editor Website link -</em>
    </strong>
    <a href="https://zenoamaro.github.io/react-quill/" target="_blank" style="font-size: large;">
        <strong>
            <em>https://zenoamaro.github.io/react-quill/</em>
        </strong>
    </a>
</p>`;
    
    return <>
        
        <div dangerouslySetInnerHTML={{ __html: bootstrapExample }} />
    </>;
};

export default EditorWebsite;