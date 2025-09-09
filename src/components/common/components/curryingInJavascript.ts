export const curryingInJavascript = `<p class="ql-indent-1">
    <strong style="font-size: large;">Question 17:-</strong>
    <strong style="color: rgb(107, 36, 178);">&nbsp;
        <span style="font-size: 16px; background-color: rgb(255, 255, 255);">Create Cube of any value using currying function in Javascript.</span>
    </strong>
</p>
<p class="ql-indent-1">
    <br>
</p>
<p class="ql-indent-1">
    <strong style="color: rgb(107, 36, 178); font-size: large;">Solution:-</strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">const</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">curry</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">function</strong>
    <strong style="font-size: large;">() {</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp;</strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">return</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">function</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">a</strong>
    <strong style="font-size: large;">) {</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">return</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">function</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">b</strong>
    <strong style="font-size: large;">) {</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp; &nbsp;</strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">return</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">function</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">c</strong>
    <strong style="font-size: large;">) {</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp; &nbsp;</strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">return</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">a</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">*</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">b</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">*</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">c</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp; &nbsp; }</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp; }</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; }</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">}</strong>
</p>
<p class="ql-indent-1">
    <strong style="color: rgb(86, 156, 214); font-size: large;">const</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">res</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">curry</strong>
    <strong style="font-size: large;">();</strong>
</p>
<p class="ql-indent-1">
    <strong style="color: rgb(156, 220, 254); font-size: large;">console</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">log</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">"Output is "</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">res</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">2</strong>
    <strong style="font-size: large;">)(</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">3</strong>
    <strong style="font-size: large;">)(</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">4</strong>
    <strong style="font-size: large;">));</strong>
</p>
<p class="ql-indent-1">
    <strong style="color: rgb(106, 153, 85); font-size: large;">// Call like const res = curry(); then res(2)(3)(4)</strong>
</p>
<p class="ql-indent-1">
    <strong style="color: rgb(106, 153, 85); font-size: large;">// Output is &nbsp;24</strong>
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
</p>
<p class="ql-indent-1">
    <br>
</p>`;