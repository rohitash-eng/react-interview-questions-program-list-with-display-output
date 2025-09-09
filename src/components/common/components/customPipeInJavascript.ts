export const customPipeInJavascript = `<p class="ql-indent-1">
    <strong style="font-size: large;">Question 16:-</strong>
    <strong style="color: rgb(107, 36, 178);">&nbsp;</strong>
    <strong style="font-size: 12pt; font-family: Roboto, sans-serif; background-color: rgb(255, 255, 255); color: rgb(107, 36, 178);">Here, the</strong>
    <strong style="font-size: 10.5pt; font-family: &quot;Courier New&quot;, monospace; background-color: rgb(255, 255, 255); color: rgb(107, 36, 178);">pipes</strong>
    <strong style="font-size: 12pt; font-family: Roboto, sans-serif; background-color: rgb(255, 255, 255); color: rgb(107, 36, 178);">function is applied to the input value</strong>
    <strong style="font-size: 10.5pt; font-family: &quot;Courier New&quot;, monospace; background-color: rgb(255, 255, 255); color: rgb(107, 36, 178);">5</strong>
    <strong style="font-size: 12pt; font-family: Roboto, sans-serif; background-color: rgb(255, 255, 255); color: rgb(107, 36, 178);">, using the functions</strong>
    <strong style="font-size: 10.5pt; font-family: &quot;Courier New&quot;, monospace; background-color: rgb(255, 255, 255); color: rgb(107, 36, 178);">addByOne</strong>
    <strong style="font-size: 12pt; font-family: Roboto, sans-serif; background-color: rgb(255, 255, 255); color: rgb(107, 36, 178);">,</strong>
    <strong style="font-size: 10.5pt; font-family: &quot;Courier New&quot;, monospace; background-color: rgb(255, 255, 255); color: rgb(107, 36, 178);">multiplyByTwo</strong>
    <strong style="font-size: 12pt; font-family: Roboto, sans-serif; background-color: rgb(255, 255, 255); color: rgb(107, 36, 178);">, and</strong>
    <strong style="font-size: 10.5pt; font-family: &quot;Courier New&quot;, monospace; background-color: rgb(255, 255, 255); color: rgb(107, 36, 178);">square</strong>
    <strong style="font-size: 12pt; font-family: Roboto, sans-serif; background-color: rgb(255, 255, 255); color: rgb(107, 36, 178);">. The output is assigned to</strong>
    <strong style="font-size: 10.5pt; font-family: &quot;Courier New&quot;, monospace; background-color: rgb(255, 255, 255); color: rgb(107, 36, 178);">r</strong>
    <strong style="font-size: 12pt; font-family: Roboto, sans-serif; background-color: rgb(255, 255, 255); color: rgb(107, 36, 178);">and then logged to the console.</strong>
</p>
<p class="ql-indent-1">
    <br>
</p>
<p class="ql-indent-1">
    <strong style="font-size: 12pt; font-family: Roboto, sans-serif; color: rgb(107, 36, 178);">The output (</strong>
    <strong style="font-size: 10.5pt; font-family: &quot;Courier New&quot;, monospace; color: rgb(107, 36, 178);">r</strong>
    <strong style="font-size: 12pt; font-family: Roboto, sans-serif; color: rgb(107, 36, 178);">) of this code will be calculated as follows:</strong>
</p>
<ul>
    <li class="ql-indent-1">
        <strong style="font-size: 10.5pt; font-family: &quot;Courier New&quot;, monospace; color: rgb(107, 36, 178);">addByOne(5)</strong>
        <strong style="font-size: 12pt; color: rgb(107, 36, 178);">returns</strong>
        <strong style="font-size: 10.5pt; font-family: &quot;Courier New&quot;, monospace; color: rgb(107, 36, 178);">6</strong>
        <strong style="font-size: 12pt; color: rgb(107, 36, 178);">.</strong>
    </li>
    <li class="ql-indent-1">
        <strong style="font-size: 10.5pt; font-family: &quot;Courier New&quot;, monospace; color: rgb(107, 36, 178);">multiplyByTwo(6)</strong>
        <strong style="font-size: 12pt; color: rgb(107, 36, 178);">returns</strong>
        <strong style="font-size: 10.5pt; font-family: &quot;Courier New&quot;, monospace; color: rgb(107, 36, 178);">12</strong>
        <strong style="font-size: 12pt; color: rgb(107, 36, 178);">.</strong>
    </li>
</ul>
<p class="ql-indent-1">
    <strong style="font-size: 10.5pt; font-family: &quot;Courier New&quot;, monospace; color: rgb(107, 36, 178); background-color: rgb(255, 255, 255);">square(12)</strong>
    <strong style="font-size: 12pt; font-family: Roboto, sans-serif; color: rgb(107, 36, 178); background-color: rgb(255, 255, 255);">returns</strong>
    <strong style="font-size: 10.5pt; font-family: &quot;Courier New&quot;, monospace; color: rgb(107, 36, 178); background-color: rgb(255, 255, 255);">144</strong>
    <strong style="font-size: 12pt; font-family: Roboto, sans-serif; color: rgb(107, 36, 178); background-color: rgb(255, 255, 255);">. So, the final output logged to the console will be</strong>
    <strong style="font-size: 10.5pt; font-family: &quot;Courier New&quot;, monospace; color: rgb(107, 36, 178); background-color: rgb(255, 255, 255);">144</strong>
    <strong style="font-size: 12pt; font-family: Roboto, sans-serif; color: rgb(107, 36, 178); background-color: rgb(255, 255, 255);">.</strong>
</p>
<p class="ql-indent-1">
    <br>
</p>
<p class="ql-indent-1">
    <strong style="color: rgb(107, 36, 178); font-size: large;">Solution:-</strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">const</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">addByOne</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">x</strong>
    <strong style="font-size: large;">)</strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">=&gt;</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">x</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">+</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">1</strong>
    <strong style="font-size: large;">;</strong>
</p>
<p class="ql-indent-1">
    <strong style="color: rgb(86, 156, 214); font-size: large;">const</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">multiplyByTwo</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">x</strong>
    <strong style="font-size: large;">)</strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">=&gt;</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">x</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">*</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">2</strong>
    <strong style="font-size: large;">;</strong>
</p>
<p class="ql-indent-1">
    <strong style="color: rgb(86, 156, 214); font-size: large;">const</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">square</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">x</strong>
    <strong style="font-size: large;">)</strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">=&gt;</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">x</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">*</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">x</strong>
    <strong style="font-size: large;">;</strong>
</p>
<p class="ql-indent-1">
    <br>
</p>
<p class="ql-indent-1">
    <strong style="color: rgb(86, 156, 214); font-size: large;">function</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">pipes</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">...</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">funcs</strong>
    <strong style="font-size: large;">){</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">return</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">function</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">inputValue</strong>
    <strong style="font-size: large;">){</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp; &nbsp; &nbsp;</strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">return</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">funcs</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">reduce</strong>
    <strong style="font-size: large;">((</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">acc</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">fn</strong>
    <strong style="font-size: large;">)</strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">=&gt;</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">fn</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">acc</strong>
    <strong style="font-size: large;">),</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">inputValue</strong>
    <strong style="font-size: large;">);</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp; }</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">}</strong>
</p>
<p class="ql-indent-1">
    <br>
</p>
<p class="ql-indent-1">
    <strong style="color: rgb(86, 156, 214); font-size: large;">const</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">r</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">pipes</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">addByOne</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">multiplyByTwo</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">square</strong>
    <strong style="font-size: large;">)(</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">5</strong>
    <strong style="font-size: large;">);</strong>
</p>
<p class="ql-indent-1">
    <strong style="color: rgb(156, 220, 254); font-size: large;">console</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">log</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">"Output is ="</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">r</strong>
    <strong style="font-size: large;">);</strong>
</p>
<p class="ql-indent-1">
    <br>
</p>
<p class="ql-indent-1">
    <strong style="color: rgb(106, 153, 85); font-size: large;">// Calling like</strong>
    <strong style="color: rgb(0, 138, 0); font-size: large;">pipes(addByOne, multiplyByTwo, square )(5)</strong>
</p>
<p class="ql-indent-1">
    <strong style="color: rgb(106, 153, 85); font-size: large;">// And Output is = 144</strong>
</p>
<p class="ql-indent-1">
    <br>
</p>
<p class="ql-indent-1">
    <br>
</p>
<p class="ql-indent-1">
    <br>
</p>
<p class="ql-indent-1">
    <br>
</p>
<p class="ql-indent-1">
    <br>
</p>`;