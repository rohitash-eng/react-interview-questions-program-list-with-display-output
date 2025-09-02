import React from "react";

const BootstrapExample1 = () => {
    const bootstrapExample = `<p>
    <span style="color: rgb(197, 134, 192);">import</span>
    <span style="color: rgb(156, 220, 254);">React</span>
    <span style="color: rgb(197, 134, 192);">from</span>
    <span style="color: rgb(206, 145, 120);">'react'</span>;</p>
<p>
    <span style="color: rgb(197, 134, 192);">import</span>{
    <span style="color: rgb(156, 220, 254);">RouteObject</span>}
    <span style="color: rgb(197, 134, 192);">from</span>
    <span style="color: rgb(206, 145, 120);">'react-router-dom'</span>;</p>
<p>
    <span style="color: rgb(197, 134, 192);">import</span>
    <span style="color: rgb(156, 220, 254);">BootstrapExample1</span>
    <span style="color: rgb(197, 134, 192);">from</span>
    <span style="color: rgb(206, 145, 120);">'./components/BootstrapExample1'</span>;</p>
<p>
    <span style="color: rgb(197, 134, 192);">import</span>
    <span style="color: rgb(156, 220, 254);">BootstrapExample2</span>
    <span style="color: rgb(197, 134, 192);">from</span>
    <span style="color: rgb(206, 145, 120);">'./components/BootstrapExample2'</span>;</p>
<p>
    <span style="color: rgb(197, 134, 192);">import</span>
    <span style="color: rgb(156, 220, 254);">FeatureDashboardBootstrap</span>
    <span style="color: rgb(197, 134, 192);">from</span>
    <span style="color: rgb(206, 145, 120);">'./FeatureDashboardBootstrap'</span>;</p>
<p>
    <br>
</p>
<p>
    <span style="color: rgb(86, 156, 214);">const</span>
    <strong style="color: rgb(79, 193, 255);">bootstrapCssRoutes</strong>
    <span style="color: rgb(212, 212, 212);">:</span>
    <span style="color: rgb(78, 201, 176);">RouteObject</span>[]
    <span style="color: rgb(212, 212, 212);">=</span>[</p>
<p>{</p>
<p>
    <span style="color: rgb(156, 220, 254);">path:</span>
    <span style="color: rgb(206, 145, 120);">'learn-bootstrap-css'</span>,</p>
<p>
    <span style="color: rgb(156, 220, 254);">element:</span>
    <span style="color: rgb(128, 128, 128);">&lt;</span>
    <span style="color: rgb(78, 201, 176);">FeatureDashboardBootstrap</span>
    <span style="color: rgb(128, 128, 128);">/&gt;</span>,</p>
<p>
    <span style="color: rgb(156, 220, 254);">children:</span>[</p>
<p>{
    <span style="color: rgb(156, 220, 254);">path:</span>
    <span style="color: rgb(206, 145, 120);">'basics'</span>,
    <span style="color: rgb(156, 220, 254);">element:</span>
    <span style="color: rgb(128, 128, 128);">&lt;</span>
    <span style="color: rgb(78, 201, 176);">BootstrapExample1</span>
    <span style="color: rgb(128, 128, 128);">/&gt;</span>},</p>
<p>{
    <span style="color: rgb(156, 220, 254);">path:</span>
    <span style="color: rgb(206, 145, 120);">'chess'</span>,
    <span style="color: rgb(156, 220, 254);">element:</span>
    <span style="color: rgb(128, 128, 128);">&lt;</span>
    <span style="color: rgb(78, 201, 176);">BootstrapExample2</span>
    <span style="color: rgb(128, 128, 128);">/&gt;</span>},</p>
<p>],</p>
<p>},</p>
<p>];</p>
<p>
    <br>
</p>
<p>
    <span style="color: rgb(197, 134, 192);">export</span>
    <span style="color: rgb(197, 134, 192);">default</span>
    <span style="color: rgb(79, 193, 255);">bootstrapCssRoutes</span>;</p>
<p>
    <br>
</p>`;
    
    return <>
        
        <div dangerouslySetInnerHTML={{ __html: bootstrapExample }} />
    </>;
};

export default BootstrapExample1;