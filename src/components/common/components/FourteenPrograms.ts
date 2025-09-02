export const programs_14 = `
<p class="ql-indent-2">
    <strong style="font-size: large;">Question 1:-</strong>
    <strong style="color: rgb(107, 36, 178); font-size: large;">Polyfill of Flat</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(86, 156, 214); font-size: large;">const</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">myArr</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;">[[</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">1</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">2</strong>
    <strong style="font-size: large;">],[</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">3</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">4</strong>
    <strong style="font-size: large;">,[</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">2</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">3</strong>
    <strong style="font-size: large;">]]];</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(106, 153, 85); font-size: large;">// Polyfill of flat</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(86, 156, 214); font-size: large;">const</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">res</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">myArr</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">flat</strong>
    <strong style="font-size: large;">();</strong>
    <strong style="color: rgb(106, 153, 85); font-size: large;">// default = 1</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(78, 201, 176); font-size: large;">Array</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">prototype</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">customFlat</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">function</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">depth</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">1</strong>
    <strong style="font-size: large;">){</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">let</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">newArr</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;">[];</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">let</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">arr</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">this</strong>
    <strong style="font-size: large;">;</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">function</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">flatten</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">arr</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">depth</strong>
    <strong style="font-size: large;">){</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">arr</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">forEach</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">element</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">=&gt;</strong>
    <strong style="font-size: large;">{</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">if</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(78, 201, 176); font-size: large;">Array</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">isArray</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">element</strong>
    <strong style="font-size: large;">)</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">&amp;&amp;</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">depth</strong>
    <strong style="font-size: large;">){</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">flatten</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">element</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">depth</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">-</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">1</strong>
    <strong style="font-size: large;">);</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">}</strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">else</strong>
    <strong style="font-size: large;">{</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">newArr</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">push</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">element</strong>
    <strong style="font-size: large;">);</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">}</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">});</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">}</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">flatten</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">this</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">depth</strong>
    <strong style="font-size: large;">);</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">return</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">newArr</strong>
    <strong style="font-size: large;">;</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">}</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(86, 156, 214); font-size: large;">const</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">testRes</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">myArr</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">customFlat</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">0</strong>
    <strong style="font-size: large;">);</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(156, 220, 254); font-size: large;">console</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">log</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">testRes</strong>
    <strong style="font-size: large;">);</strong>
</p>
<p>
    <br>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">Question 2:-</strong>
    <strong style="color: rgb(107, 36, 178); font-size: large;">Polyfill of Map</strong>
</p>
<p class="ql-indent-2">
    <span style="color: rgb(86, 156, 214); font-size: large;">const</span>
    <span style="font-size: large;"></span>
    <span style="color: rgb(79, 193, 255); font-size: large;">marks</span>
    <span style="font-size: large;"></span>
    <span style="color: rgb(212, 212, 212); font-size: large;">=</span>
    <span style="font-size: large;">[</span>
    <span style="color: rgb(181, 206, 168); font-size: large;">10</span>
    <span style="font-size: large;">,</span>
    <span style="color: rgb(181, 206, 168); font-size: large;">40</span>
    <span style="font-size: large;">,</span>
    <span style="color: rgb(181, 206, 168); font-size: large;">20</span>
    <span style="font-size: large;">,</span>
    <span style="color: rgb(181, 206, 168); font-size: large;">50</span>
    <span style="font-size: large;">];</span>
</p>
<p class="ql-indent-2">
    <span style="color: rgb(106, 153, 85); font-size: large;">// Polyfill of map</span>
</p>
<p class="ql-indent-2">
    <span style="color: rgb(78, 201, 176); font-size: large;">Array</span>
    <span style="font-size: large;">.</span>
    <span style="color: rgb(79, 193, 255); font-size: large;">prototype</span>
    <span style="font-size: large;">.</span>
    <span style="color: rgb(220, 220, 170); font-size: large;">customMap</span>
    <span style="font-size: large;"></span>
    <span style="color: rgb(212, 212, 212); font-size: large;">=</span>
    <span style="font-size: large;"></span>
    <span style="color: rgb(86, 156, 214); font-size: large;">function</span>
    <span style="font-size: large;">(</span>
    <span style="color: rgb(156, 220, 254); font-size: large;">callback</span>
    <span style="font-size: large;">) {</span>
</p>
<p class="ql-indent-2">
    <span style="font-size: large;"></span>
    <span style="color: rgb(86, 156, 214); font-size: large;">const</span>
    <span style="font-size: large;"></span>
    <span style="color: rgb(79, 193, 255); font-size: large;">newArr</span>
    <span style="font-size: large;"></span>
    <span style="color: rgb(212, 212, 212); font-size: large;">=</span>
    <span style="font-size: large;">[];</span>
</p>
<p class="ql-indent-2">
    <span style="font-size: large;"></span>
    <span style="color: rgb(197, 134, 192); font-size: large;">for</span>
    <span style="font-size: large;">(</span>
    <span style="color: rgb(86, 156, 214); font-size: large;">let</span>
    <span style="font-size: large;"></span>
    <span style="color: rgb(156, 220, 254); font-size: large;">i</span>
    <span style="font-size: large;"></span>
    <span style="color: rgb(212, 212, 212); font-size: large;">=</span>
    <span style="font-size: large;"></span>
    <span style="color: rgb(181, 206, 168); font-size: large;">0</span>
    <span style="font-size: large;">;</span>
    <span style="color: rgb(156, 220, 254); font-size: large;">i</span>
    <span style="font-size: large;"></span>
    <span style="color: rgb(212, 212, 212); font-size: large;">&lt;</span>
    <span style="font-size: large;"></span>
    <span style="color: rgb(86, 156, 214); font-size: large;">this</span>
    <span style="font-size: large;">.</span>
    <span style="color: rgb(156, 220, 254); font-size: large;">length</span>
    <span style="font-size: large;">;</span>
    <span style="color: rgb(156, 220, 254); font-size: large;">i</span>
    <span style="color: rgb(212, 212, 212); font-size: large;">++</span>
    <span style="font-size: large;">) {</span>
</p>
<p class="ql-indent-2">
    <span style="font-size: large;"></span>
    <span style="color: rgb(86, 156, 214); font-size: large;">let</span>
    <span style="font-size: large;"></span>
    <span style="color: rgb(156, 220, 254); font-size: large;">res</span>
    <span style="color: rgb(212, 212, 212); font-size: large;">=</span>
    <span style="font-size: large;"></span>
    <span style="color: rgb(220, 220, 170); font-size: large;">callback</span>
    <span style="font-size: large;">(</span>
    <span style="color: rgb(86, 156, 214); font-size: large;">this</span>
    <span style="font-size: large;">[</span>
    <span style="color: rgb(156, 220, 254); font-size: large;">i</span>
    <span style="font-size: large;">],</span>
    <span style="color: rgb(156, 220, 254); font-size: large;">i</span>
    <span style="font-size: large;">,</span>
    <span style="color: rgb(86, 156, 214); font-size: large;">this</span>
    <span style="font-size: large;">);</span>
</p>
<p class="ql-indent-2">
    <span style="font-size: large;"></span>
    <span style="color: rgb(79, 193, 255); font-size: large;">newArr</span>
    <span style="font-size: large;">.</span>
    <span style="color: rgb(220, 220, 170); font-size: large;">push</span>
    <span style="font-size: large;">(</span>
    <span style="color: rgb(156, 220, 254); font-size: large;">res</span>
    <span style="font-size: large;">);</span>
</p>
<p class="ql-indent-2">
    <span style="font-size: large;">}</span>
</p>
<p class="ql-indent-2">
    <span style="font-size: large;"></span>
    <span style="color: rgb(197, 134, 192); font-size: large;">return</span>
    <span style="font-size: large;"></span>
    <span style="color: rgb(79, 193, 255); font-size: large;">newArr</span>
    <span style="font-size: large;">;</span>
</p>
<p class="ql-indent-2">
    <span style="font-size: large;">}</span>
</p>
<p class="ql-indent-2">
    <span style="color: rgb(86, 156, 214); font-size: large;">const</span>
    <span style="font-size: large;"></span>
    <span style="color: rgb(79, 193, 255); font-size: large;">copyOfMap</span>
    <span style="font-size: large;"></span>
    <span style="color: rgb(212, 212, 212); font-size: large;">=</span>
    <span style="font-size: large;"></span>
    <span style="color: rgb(79, 193, 255); font-size: large;">marks</span>
    <span style="font-size: large;">.</span>
    <span style="color: rgb(220, 220, 170); font-size: large;">customMap</span>
    <span style="font-size: large;">((</span>
    <span style="color: rgb(156, 220, 254); font-size: large;">item</span>
    <span style="font-size: large;">,</span>
    <span style="color: rgb(156, 220, 254); font-size: large;">index</span>
    <span style="font-size: large;">,</span>
    <span style="color: rgb(156, 220, 254); font-size: large;">array</span>
    <span style="font-size: large;">)</span>
    <span style="color: rgb(86, 156, 214); font-size: large;">=&gt;</span>
    <span style="font-size: large;"></span>
    <span style="color: rgb(156, 220, 254); font-size: large;">item</span>
    <span style="color: rgb(212, 212, 212); font-size: large;">*</span>
    <span style="color: rgb(181, 206, 168); font-size: large;">2</span>
    <span style="font-size: large;">);</span>
</p>
<p class="ql-indent-2">
    <span style="color: rgb(156, 220, 254); font-size: large;">console</span>
    <span style="font-size: large;">.</span>
    <span style="color: rgb(220, 220, 170); font-size: large;">log</span>
    <span style="font-size: large;">(</span>
    <span style="color: rgb(206, 145, 120); font-size: large;">'copyOfMap='</span>
    <span style="font-size: large;">,</span>
    <span style="color: rgb(79, 193, 255); font-size: large;">copyOfMap</span>
    <span style="font-size: large;">);</span>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">Question 3:-</strong>
    <strong style="color: rgb(107, 36, 178); font-size: large;">Write a program to insert a value at any position in ARRAY</strong>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">Solution :-</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(86, 156, 214); font-size: large;">function</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">insertData</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">arr</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">pos</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">newValue</strong>
    <strong style="font-size: large;">){</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">if</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">pos</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">&gt;</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">arr</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">length</strong>
    <strong style="font-size: large;">){</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">console</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">log</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">"Please enter value position"</strong>
    <strong style="font-size: large;">);</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">return</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">arr</strong>
    <strong style="font-size: large;">;</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">}</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(106, 153, 85); font-size: large;">// console.log("Insert",arr, pos, newValue);</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">for</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">let</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">i</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">arr</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">length</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">-</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">1</strong>
    <strong style="font-size: large;">;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">i</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">&gt;=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">pos</strong>
    <strong style="font-size: large;">;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">i</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">--</strong>
    <strong style="font-size: large;">){</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">arr</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">i</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">+</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">1</strong>
    <strong style="font-size: large;">]</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">arr</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">i</strong>
    <strong style="font-size: large;">];</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">}</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">arr</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">pos</strong>
    <strong style="font-size: large;">]</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">newValue</strong>
    <strong style="font-size: large;">;</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">return</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">arr</strong>
    <strong style="font-size: large;">;</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">}</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(86, 156, 214); font-size: large;">const</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">data</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">10</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">20</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">30</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">40</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">50</strong>
    <strong style="font-size: large;">];</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(86, 156, 214); font-size: large;">const</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">res</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">insertData</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">data</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">0</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">200</strong>
    <strong style="font-size: large;">);</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(156, 220, 254); font-size: large;">console</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">log</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">"Try programiz.pro"</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">res</strong>
    <strong style="font-size: large;">);</strong>
</p>
<p>
    <br>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">Question 4:-</strong>
    <strong style="font-size: large; font-family: Arial, sans-serif; color: rgb(107, 36, 178);">How to delete the last element from the array</strong>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">Solution :-</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(86, 156, 214); font-size: large;">const</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">myArr</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">1</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">2</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">3</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">4</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">5</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">2</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">3</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">45</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">5</strong>
    <strong style="font-size: large;">];</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(156, 220, 254); font-size: large;">console</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">log</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'using pop function we can do tow things one is get the last element from array, second if we want to delete the last element from array - so after using pop function - the last element will be get/removed from that array'</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">myArr</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">pop</strong>
    <strong style="font-size: large;">());</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(156, 220, 254); font-size: large;">console</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">log</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">myArr</strong>
    <strong style="font-size: large;">);</strong>
</p>
<p>
    <br>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p>
    <br>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">Question 5:-</strong>
    <strong style="font-size: large; font-family: Arial, sans-serif; color: rgb(107, 36, 178);">Polyfill of pop function or customPop function</strong>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">Solution :-</strong>
</p>
<p>
    <br>
</p>
<p>
    <br>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(86, 156, 214); font-size: large;">const</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">myArr</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">1</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">4</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">5</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">6</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">7</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">8</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">9</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">10</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">11</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">12</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">13</strong>
    <strong style="font-size: large;">];</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(78, 201, 176); font-size: large;">Array</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">prototype</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">customPop</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">function</strong>
    <strong style="font-size: large;">(){</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">console</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">log</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'this='</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">this</strong>
    <strong style="font-size: large;">);</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">if</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">!</strong>
    <strong style="color: rgb(78, 201, 176); font-size: large;">Array</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">isArray</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">this</strong>
    <strong style="font-size: large;">)){</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">return</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">undefined</strong>
    <strong style="font-size: large;">;</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">}</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">if</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(78, 201, 176); font-size: large;">Array</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">isArray</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">this</strong>
    <strong style="font-size: large;">)</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">&amp;&amp;</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">this</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">length</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">===</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">0</strong>
    <strong style="font-size: large;">){</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">return</strong>
    <strong style="font-size: large;">[];</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">}</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">const</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">lastElement</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">this</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">this</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">length</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">-</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">1</strong>
    <strong style="font-size: large;">];</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">this</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">length</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">this</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">length</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">-</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">1</strong>
    <strong style="font-size: large;">;</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">return</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">lastElement</strong>
    <strong style="font-size: large;">;</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">}</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(156, 220, 254); font-size: large;">console</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">log</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'using pop function we can do tow things one is get the last element from array, second if we want to delete the last element from array - so after using pop function - the last emlement will be get/removed from that array'</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">myArr</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">pop</strong>
    <strong style="font-size: large;">());</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(156, 220, 254); font-size: large;">console</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">log</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'Existing Array='</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">myArr</strong>
    <strong style="font-size: large;">);</strong>
</p>
<p>
    <br>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p>
    <br>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">Question 6:-</strong>
    <strong style="font-size: large; font-family: Arial, sans-serif; color: rgb(107, 36, 178);">How to Delete/get last element from array</strong>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">Solution :-</strong>
    <strong style="font-size: large; font-family: Arial, sans-serif; color: rgb(107, 36, 178);">Using pop and splice(index, count) - or splice me hame first index dena hota hai , agar -1 denge to last se element delete karna start karega</strong>
</p>
<p>
    <br>
</p>
<p>
    <br>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(86, 156, 214); font-size: large;">const</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">myArr</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">1</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">2</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">3</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">4</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">5</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">2</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">3</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">45</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">5</strong>
    <strong style="font-size: large;">];</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(156, 220, 254); font-size: large;">console</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">log</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'How to delete and get the element from array'</strong>
    <strong style="font-size: large;">);</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(156, 220, 254); font-size: large;">console</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">log</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'Always - remembers splice and pop function'</strong>
    <strong style="font-size: large;">);</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(156, 220, 254); font-size: large;">console</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">log</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'Get the last element= bcos -1 is the position start from ends'</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">myArr</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">splice</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">-</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">1</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">1</strong>
    <strong style="font-size: large;">));</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(156, 220, 254); font-size: large;">console</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">log</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'Get the last element ='</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">myArr</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">pop</strong>
    <strong style="font-size: large;">());</strong>
</p>
<p>
    <br>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p>
    <br>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">Question 7:-</strong>
    <strong style="font-size: large; font-family: Arial, sans-serif; color: rgb(107, 36, 178);">SOME fucntion example</strong>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">Solution :-</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">Return true if any one element is &gt; 18 age rest return false === Ye loop aage nahi chalta jab condition met ho jaati hai</strong>
</p>
<p>
    <br>
</p>
<p>
    <br>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(86, 156, 214); font-size: large;">const</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">ages</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">3</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">10</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">18</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">20</strong>
    <strong style="font-size: large;">];</strong>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(86, 156, 214); font-size: large;">const</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">result</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">ages</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">some</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">checkAdult</strong>
    <strong style="font-size: large;">);</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(86, 156, 214); font-size: large;">function</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">checkAdult</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">age</strong>
    <strong style="font-size: large;">) {</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">return</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">age</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">&gt;</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">18</strong>
    <strong style="font-size: large;">;</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">}</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(156, 220, 254); font-size: large;">console</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">log</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'Return true if any one element is &gt; 18 age rest return false'</strong>
    <strong style="font-size: large;">);</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(156, 220, 254); font-size: large;">console</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">log</strong>
   </p>
   <p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">Question 8:-</strong>
    <strong style="font-size: large; font-family: Arial, sans-serif; color: rgb(107, 36, 178);">SUM using reduce function example</strong>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">Solution :-</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">Previous value or start value true if any one element is &gt; 18 age rest return false === Ye loop aage nahi chalta jab condition met ho jaati hai</strong>
</p>
<p>
    <br>
</p>
<p>
    <br>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(86, 156, 214); font-size: large;">var</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">numbers</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">1</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">2</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">3</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">4</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">5</strong>
    <strong style="font-size: large;">];</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(86, 156, 214); font-size: large;">const</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">sum</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">numbers</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">reduce</strong>
    <strong style="font-size: large;">((</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">previous</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">value</strong>
    <strong style="font-size: large;">)</strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">=&gt;</strong>
    <strong style="font-size: large;">{</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">previous</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">previous</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">+</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">value</strong>
    <strong style="font-size: large;">;</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">return</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">previous</strong>
    <strong style="font-size: large;">;</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">});</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(156, 220, 254); font-size: large;">console</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">log</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">sum</strong>
    <strong style="font-size: large;">);</strong>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(86, 156, 214); font-size: large;">const</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">objects</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;">[{</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">x:</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">1</strong>
    <strong style="font-size: large;">}, {</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">x:</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">2</strong>
    <strong style="font-size: large;">}, {</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">x:</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">3</strong>
    <strong style="font-size: large;">}];</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(86, 156, 214); font-size: large;">const</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">sumNext</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">objects</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">reduce</strong>
    <strong style="font-size: large;">(</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">accumulator</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">currentValue</strong>
    <strong style="font-size: large;">)</strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">=&gt;</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">accumulator</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">+</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">currentValue</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">x</strong>
    <strong style="font-size: large;">,</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">0</strong>
    <strong style="font-size: large;">,</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">);</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(156, 220, 254); font-size: large;">console</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">log</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">" To sum up the values contained in an array of objects, you must supply an initialValue, so that each item passes through your function."</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">sumNext</strong>
    <strong style="font-size: large;">);</strong>
    <strong style="color: rgb(106, 153, 85); font-size: large;">// 6</strong>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(86, 156, 214); font-size: large;">const</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">names</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">"Alice"</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">"Bob"</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">"Tiff"</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">"Bruce"</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">"Alice"</strong>
    <strong style="font-size: large;">];</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(86, 156, 214); font-size: large;">const</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">countedNames</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;">{};</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(197, 134, 192); font-size: large;">for</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">const</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">name</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">of</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">names</strong>
    <strong style="font-size: large;">) {</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">const</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">currCount</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">countedNames</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">name</strong>
    <strong style="font-size: large;">]</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">??</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">0</strong>
    <strong style="font-size: large;">;</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">countedNames</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">name</strong>
    <strong style="font-size: large;">]</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">currCount</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">+</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">1</strong>
    <strong style="font-size: large;">;</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">}</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(156, 220, 254); font-size: large;">console</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">log</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">countedNames</strong>
    <strong style="font-size: large;">);</strong>
</p>
<p>
    <br>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p>
    <br>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">Question 9:-</strong>
    <strong style="font-size: large; font-family: Arial, sans-serif; color: rgb(107, 36, 178);">PIPE :- What is pipe function</strong>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">Solution :-</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">Pipe:- Function sequential piping:- The pipe function takes a sequence of functions and returns a new function. When the new function is called with an argument, the sequence of functions are called in order, which each one receiving the return value
        of the previous function.</strong>
</p>
<p>
    <br>
</p>
<p>
    <br>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(86, 156, 214); font-size: large;">const</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">pipe</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(86, 156, 214); font-size: large;">(</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">...</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">functions</strong>
    <strong style="font-size: large;">)</strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">=&gt;</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(86, 156, 214); font-size: large;">(</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">initialValue</strong>
    <strong style="font-size: large;">)</strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">=&gt;</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(86, 156, 214); font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">functions</strong>
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
    <strong style="color: rgb(156, 220, 254); font-size: large;">initialValue</strong>
    <strong style="font-size: large;">);</strong>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(106, 153, 85); font-size: large;">// Building blocks to use for composition</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(86, 156, 214); font-size: large;">const</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">double</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">x</strong>
    <strong style="font-size: large;">)</strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">=&gt;</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">2</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">*</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">x</strong>
    <strong style="font-size: large;">;</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(86, 156, 214); font-size: large;">const</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">triple</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">x</strong>
    <strong style="font-size: large;">)</strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">=&gt;</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">3</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">*</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">x</strong>
    <strong style="font-size: large;">;</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(86, 156, 214); font-size: large;">const</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">quadruple</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">x</strong>
    <strong style="font-size: large;">)</strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">=&gt;</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">4</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">*</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">x</strong>
    <strong style="font-size: large;">;</strong>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(106, 153, 85); font-size: large;">// Composed functions for multiplication of specific values</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(86, 156, 214); font-size: large;">const</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">multiply6</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">pipe</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">double</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">triple</strong>
    <strong style="font-size: large;">);</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(86, 156, 214); font-size: large;">const</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">multiply9</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">pipe</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">triple</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">triple</strong>
    <strong style="font-size: large;">);</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(86, 156, 214); font-size: large;">const</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">multiply16</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">pipe</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">quadruple</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">quadruple</strong>
    <strong style="font-size: large;">);</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(86, 156, 214); font-size: large;">const</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">multiply24</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">pipe</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">double</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">triple</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">quadruple</strong>
    <strong style="font-size: large;">);</strong>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(106, 153, 85); font-size: large;">// Usage</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(220, 220, 170); font-size: large;">multiply6</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">6</strong>
    <strong style="font-size: large;">);</strong>
    <strong style="color: rgb(106, 153, 85); font-size: large;">// 36</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(220, 220, 170); font-size: large;">multiply9</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">9</strong>
    <strong style="font-size: large;">);</strong>
    <strong style="color: rgb(106, 153, 85); font-size: large;">// 81</strong>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">Question 10:-</strong>
    <strong style="font-size: large; font-family: Arial, sans-serif; color: rgb(107, 36, 178);">PIPE :- Group by tags with reducer and without reducer</strong>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">Solution :-</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(106, 153, 85); font-size: large;">// group by tags, using reducer</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(86, 156, 214); font-size: large;">var</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">persons</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;">[</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">{</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">id :</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">1</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">name :</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">"John"</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">tags :</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">"javascript"</strong>
    <strong style="font-size: large;">},</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">{</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">id :</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">2</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">name :</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">"Alice"</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">tags :</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">"javascript"</strong>
    <strong style="font-size: large;">},</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">{</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">id :</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">3</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">name :</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">"Roger"</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">tags :</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">"java"</strong>
    <strong style="font-size: large;">},</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">{</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">id :</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">4</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">name :</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">"Adam"</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">tags :</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">"javascript"</strong>
    <strong style="font-size: large;">},</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">{</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">id :</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">5</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">name :</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">"Alex"</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">tags :</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">"java"</strong>
    <strong style="font-size: large;">}</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">];</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(86, 156, 214); font-size: large;">const</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">result</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">persons</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">reduce</strong>
    <strong style="font-size: large;">((</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">previous</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">obj</strong>
    <strong style="font-size: large;">)</strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">=&gt;</strong>
    <strong style="font-size: large;">{</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">if</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">!</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">previous</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">obj</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">tags</strong>
    <strong style="font-size: large;">]){</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">previous</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">obj</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">tags</strong>
    <strong style="font-size: large;">]</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;">[];</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">}</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">previous</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">obj</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">tags</strong>
    <strong style="font-size: large;">].</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">push</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">obj</strong>
    <strong style="font-size: large;">);</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">return</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">previous</strong>
    <strong style="font-size: large;">;</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">},{});</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(156, 220, 254); font-size: large;">console</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">log</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'group by tags, using reducer'</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">result</strong>
    <strong style="font-size: large;">);</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(106, 153, 85); font-size: large;">// group by tags, without reducer</strong>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(86, 156, 214); font-size: large;">const</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">groups</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;">{};</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(156, 220, 254); font-size: large;">persons</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">forEach</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">person</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">=&gt;</strong>
    <strong style="font-size: large;">{</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">if</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">!</strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">groups</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">person</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">tags</strong>
    <strong style="font-size: large;">]){</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">groups</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">person</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">tags</strong>
    <strong style="font-size: large;">]</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;">[];</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">}</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">groups</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">person</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">tags</strong>
    <strong style="font-size: large;">].</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">push</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">person</strong>
    <strong style="font-size: large;">);</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">});</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(156, 220, 254); font-size: large;">console</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">log</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">"group by tags, without reducer ="</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">groups</strong>
    <strong style="font-size: large;">);</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">OUTPUT looks like</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">{</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">&nbsp;javascript: [</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">&nbsp;&nbsp;{ id: 1, name: 'John', tags: 'javascript' },</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">&nbsp;&nbsp;{ id: 2, name: 'Alice', tags: 'javascript' },</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">&nbsp;&nbsp;{ id: 4, name: 'Adam', tags: 'javascript' }</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">&nbsp;],</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">&nbsp;java: [</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">&nbsp;&nbsp;{ id: 3, name: 'Roger', tags: 'java' },</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">&nbsp;&nbsp;{ id: 5, name: 'Alex', tags: 'java' }</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">&nbsp;]</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">}</strong>
</p>
<p>
    <br>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p>
    <br>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">Question 11:-</strong>
    <strong style="color: rgb(107, 36, 178); font-size: large;">What is the longest common string, (LCS) for given string like</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">// Example usage</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">console.log(longestCommonSubstring("abcdef", "zabcf")); // Output: "abc" console.log(longestCommonSubstring("geeksforgeeks", "geeksquiz")); // Output: "geeks" console.log(longestCommonSubstring("abcdxyz", "xyzabcd")); // Output: "abcd" console.log(longestCommonSubstring("ABAB",
        "BABA")); // Output: "ABA" console.log(longestCommonSubstring("pqrst", "qrstuv")); // Output: "qrst"</strong>
</p>
<p class="ql-indent-1">
    <br>
</p>
<p class="ql-indent-1">
    <strong style="color: rgb(107, 36, 178); font-size: large;">Solution 1:</strong>
</p>
<p class="ql-indent-1">
    <br>
</p>
<p class="ql-indent-1">
    <strong style="color: rgb(86, 156, 214); font-size: large;">function</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">longestCommonSubstring</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">str1</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">str2</strong>
    <strong style="font-size: large;">) {</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">let</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">m</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">str1</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">length</strong>
    <strong style="font-size: large;">;</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">let</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">n</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">str2</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">length</strong>
    <strong style="font-size: large;">;</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">let</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">maxLength</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">0</strong>
    <strong style="font-size: large;">;</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">let</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">endingIndex</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">m</strong>
    <strong style="font-size: large;">;</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;"></strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(106, 153, 85); font-size: large;">// Create a 2D array to store lengths of longest common suffixes</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">let</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">dp</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(78, 201, 176); font-size: large;">Array</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">m</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">+</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">1</strong>
    <strong style="font-size: large;">).</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">fill</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">null</strong>
    <strong style="font-size: large;">).</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">map</strong>
    <strong style="font-size: large;">(()</strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">=&gt;</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(78, 201, 176); font-size: large;">Array</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">n</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">+</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">1</strong>
    <strong style="font-size: large;">).</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">fill</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">0</strong>
    <strong style="font-size: large;">));</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">console</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">log</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">dp</strong>
    <strong style="font-size: large;">);</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(106, 153, 85); font-size: large;">// Build the dp array from bottom up</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">for</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">let</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">i</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">1</strong>
    <strong style="font-size: large;">;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">i</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">&lt;=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">m</strong>
    <strong style="font-size: large;">;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">i</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">++</strong>
    <strong style="font-size: large;">) {</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">for</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">let</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">j</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">1</strong>
    <strong style="font-size: large;">;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">j</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">&lt;=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">n</strong>
    <strong style="font-size: large;">;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">j</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">++</strong>
    <strong style="font-size: large;">) {</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">if</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">str1</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">i</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">-</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">1</strong>
    <strong style="font-size: large;">]</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">===</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">str2</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">j</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">-</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">1</strong>
    <strong style="font-size: large;">]) {</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">dp</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">i</strong>
    <strong style="font-size: large;">][</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">j</strong>
    <strong style="font-size: large;">]</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">dp</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">i</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">-</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">1</strong>
    <strong style="font-size: large;">][</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">j</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">-</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">1</strong>
    <strong style="font-size: large;">]</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">+</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">1</strong>
    <strong style="font-size: large;">;</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">if</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">dp</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">i</strong>
    <strong style="font-size: large;">][</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">j</strong>
    <strong style="font-size: large;">]</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">&gt;</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">maxLength</strong>
    <strong style="font-size: large;">) {</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">maxLength</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">dp</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">i</strong>
    <strong style="font-size: large;">][</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">j</strong>
    <strong style="font-size: large;">];</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">endingIndex</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">i</strong>
    <strong style="font-size: large;">;</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">}</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">}</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">}</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">}</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">if</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">maxLength</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">===</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">0</strong>
    <strong style="font-size: large;">)</strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">return</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">""</strong>
    <strong style="font-size: large;">;</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">return</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">str1</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">slice</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">endingIndex</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">-</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">maxLength</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">endingIndex</strong>
    <strong style="font-size: large;">);</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">}</strong>
</p>
<p class="ql-indent-1">
    <strong style="color: rgb(107, 36, 178); font-size: large;">Solution 2:</strong>
</p>
<p class="ql-indent-1">
    <strong style="color: rgb(107, 36, 178); font-size: large;">
        <span class="ql-cursor">﻿</span>
    </strong>
</p>
<p class="ql-indent-1">
    <strong style="color: rgb(86, 156, 214); font-size: large;">function</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">lcs</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">str1</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">str2</strong>
    <strong style="font-size: large;">) {</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">const</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">m</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">str1</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">length</strong>
    <strong style="font-size: large;">;</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">const</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">n</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">str2</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">length</strong>
    <strong style="font-size: large;">;</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">maxLength</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">0</strong>
    <strong style="font-size: large;">;</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">lastIndex</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">m</strong>
    <strong style="font-size: large;">;</strong>
</p>
<p class="ql-indent-1">
    <br>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">let</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">dp</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;">[];</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">dp</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">Array</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">m</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">+</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">1</strong>
    <strong style="font-size: large;">).</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">fill</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">0</strong>
    <strong style="font-size: large;">).</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">map</strong>
    <strong style="font-size: large;">(()</strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">=&gt;</strong>
    <strong style="font-size: large;">{</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">return</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(78, 201, 176); font-size: large;">Array</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">n</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">+</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">1</strong>
    <strong style="font-size: large;">).</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">fill</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">0</strong>
    <strong style="font-size: large;">);</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">});</strong>
</p>
<p class="ql-indent-1">
    <br>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">for</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">let</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">i</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">1</strong>
    <strong style="font-size: large;">;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">i</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">&lt;=</strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">m</strong>
    <strong style="font-size: large;">;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">i</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">++</strong>
    <strong style="font-size: large;">) {</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">for</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">let</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">j</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">1</strong>
    <strong style="font-size: large;">;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">j</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">&lt;=</strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">n</strong>
    <strong style="font-size: large;">;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">j</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">++</strong>
    <strong style="font-size: large;">) {</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">if</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">str1</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">i</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">-</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">1</strong>
    <strong style="font-size: large;">]</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">===</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">str2</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">j</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">-</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">1</strong>
    <strong style="font-size: large;">]){</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">dp</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">i</strong>
    <strong style="font-size: large;">][</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">j</strong>
    <strong style="font-size: large;">]</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">dp</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">i</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">-</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">1</strong>
    <strong style="font-size: large;">][</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">j</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">-</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">1</strong>
    <strong style="font-size: large;">]</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">+</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">1</strong>
    <strong style="font-size: large;">;</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">if</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">dp</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">i</strong>
    <strong style="font-size: large;">][</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">j</strong>
    <strong style="font-size: large;">]</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">&gt;</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">maxLength</strong>
    <strong style="font-size: large;">){</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">maxLength</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">dp</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">i</strong>
    <strong style="font-size: large;">][</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">j</strong>
    <strong style="font-size: large;">];</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">lastIndex</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">i</strong>
    <strong style="font-size: large;">;</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">}</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">}</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">}</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">}</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">return</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">str1</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">slice</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">lastIndex</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">-</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">maxLength</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">maxLength</strong>
    <strong style="font-size: large;">);</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">}</strong>
</p>
<p class="ql-indent-1">
    <br>
</p>
<ul>
    <li class="ql-indent-1">
        <strong style="color: rgb(156, 220, 254); font-size: large;">console</strong>
        <strong style="font-size: large;">.</strong>
        <strong style="color: rgb(220, 220, 170); font-size: large;">log</strong>
        <strong style="font-size: large;">(</strong>
        <strong style="color: rgb(220, 220, 170); font-size: large;">lcs</strong>
        <strong style="font-size: large;">(</strong>
        <strong style="color: rgb(206, 145, 120); font-size: large;">"abcdef"</strong>
        <strong style="font-size: large;">,</strong>
        <strong style="color: rgb(206, 145, 120); font-size: large;">"zabcf"</strong>
        <strong style="font-size: large;">));</strong>
        <strong style="color: rgb(106, 153, 85); font-size: large;">// Output: "abc"</strong>
    </li>
</ul>

<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">
        <span class="ql-cursor">﻿</span>Question 12:- C</strong>
    <strong style="font-size: large; font-family: Arial, sans-serif;">ount show the position of each letter of letter.</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large; font-family: Arial, sans-serif;">Ex - rohitashRohitash</strong>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large; font-family: Arial, sans-serif;">Solution:-</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(86, 156, 214); font-size: large;">function</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">countLetters</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">str</strong>
    <strong style="font-size: large;">) {</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">let</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">coutString</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;">{};</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">for</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">let</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">i</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">0</strong>
    <strong style="font-size: large;">;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">i</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">&lt;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">str</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">length</strong>
    <strong style="font-size: large;">;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">i</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">++</strong>
    <strong style="font-size: large;">) {</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">if</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">!</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">coutString</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">str</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">i</strong>
    <strong style="font-size: large;">]]){</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">coutString</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">str</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">i</strong>
    <strong style="font-size: large;">]]</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;">[];</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">}</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">coutString</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">str</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">i</strong>
    <strong style="font-size: large;">]].</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">push</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">i</strong>
    <strong style="font-size: large;">);</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">}</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">return</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">coutString</strong>
    <strong style="font-size: large;">;</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">}</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(156, 220, 254); font-size: large;">console</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">log</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">countLetters</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">"rohitashRohitash"</strong>
    <strong style="font-size: large;">));</strong>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">Question 13:-</strong>
    <strong style="font-size: large; color: rgb(107, 36, 178);">C</strong>
    <strong style="font-size: large; font-family: Arial, sans-serif; color: rgb(107, 36, 178);">ount</strong>
    <span style="font-size: 14pt; font-family: Arial, sans-serif; color: rgb(107, 36, 178);">count frequency of letter in string.</span>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large; font-family: Arial, sans-serif;">Ex - rohitashRohitash</strong>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large; font-family: Arial, sans-serif;">Solution:-</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(86, 156, 214); font-size: large;">function</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">countLetters</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">str</strong>
    <strong style="font-size: large;">) {</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">let</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">coutString</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;">{};</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">for</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">let</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">i</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">0</strong>
    <strong style="font-size: large;">;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">i</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">&lt;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">str</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">length</strong>
    <strong style="font-size: large;">;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">i</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">++</strong>
    <strong style="font-size: large;">) {</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">if</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">!</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">coutString</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">str</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">i</strong>
    <strong style="font-size: large;">]]){</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">coutString</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">str</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">i</strong>
    <strong style="font-size: large;">]]</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">0</strong>
    <strong style="font-size: large;">;</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">}</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">coutString</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">str</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">i</strong>
    <strong style="font-size: large;">]]</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">coutString</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">str</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">i</strong>
    <strong style="font-size: large;">]]</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">+</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">1</strong>
    <strong style="font-size: large;">;</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">}</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">return</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">coutString</strong>
    <strong style="font-size: large;">;</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">}</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(156, 220, 254); font-size: large;">console</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">log</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">countLetters</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">"rohitashRohitash"</strong>
    <strong style="font-size: large;">));</strong>
</p>
<p class="ql-indent-2">
    <br>
</p>

<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">Question 14:-</strong>
    <span style="font-size: 14pt; font-family: Arial, sans-serif; color: rgb(107, 36, 178);">Convert a string into</span>
    <span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(107, 36, 178);">Camel Case to Title Case</span>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large; font-family: Arial, sans-serif;">Ex -</strong>
    <span style="font-size: 11pt; font-family: Arial, sans-serif;">Input :&nbsp; "the simplestThings in LIFE are alwaysThe best"</span>
</p>
<p class="ql-indent-2">
    <span style="font-size: 11pt; font-family: Arial, sans-serif;">Output: "The Simplest Things In Life Are Always The Best"</span>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large; font-family: Arial, sans-serif;">Solution:-</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(86, 156, 214); font-size: large;">function</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">convertTitleCaseToCamalCase</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">str</strong>
    <strong style="font-size: large;">) {</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(106, 153, 85); font-size: large;">// Split the string into an array of words.</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(86, 156, 214); font-size: large;"></strong>
    <strong style="color: rgb(106, 153, 85); font-size: large;">// Use trim() to remove any leading or trailing whitespace.</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(86, 156, 214); font-size: large;"></strong>
    <strong style="color: rgb(106, 153, 85); font-size: large;">// Use replace(/([A-Z])/,\` $1\`) to add a space before each capital letter.</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(86, 156, 214); font-size: large;"></strong>
    <strong style="color: rgb(106, 153, 85); font-size: large;">// Use toLowerCase() to convert all letters to lowercase.</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(86, 156, 214); font-size: large;"></strong>
    <strong style="color: rgb(106, 153, 85); font-size: large;">// Use split(" ") to split the string into an array of words.</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(86, 156, 214); font-size: large;"></strong>
    <strong style="color: rgb(106, 153, 85); font-size: large;">// Use map() to capitalize the first letter of each word.</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(86, 156, 214); font-size: large;"></strong>
    <strong style="color: rgb(106, 153, 85); font-size: large;">// Use join(" ") to combine the array of words back into a string.</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(86, 156, 214); font-size: large;">let</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">splitSte</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">str</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">split</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">" "</strong>
    <strong style="font-size: large;">);</strong>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">let</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">afterReplace</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">splitSte</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">map</strong>
    <strong style="font-size: large;">((</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">item</strong>
    <strong style="font-size: large;">)</strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">=&gt;</strong>
    <strong style="font-size: large;">{</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(106, 153, 85); font-size: large;">// this is line for add the space before the capital letter letter</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(86, 156, 214); font-size: large;"></strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">return</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">item</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">trim</strong>
    <strong style="font-size: large;">().</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">replace</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(209, 105, 105); font-size: large;">/</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">([</strong>
    <strong style="color: rgb(209, 105, 105); font-size: large;">A-Z</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">])</strong>
    <strong style="color: rgb(209, 105, 105); font-size: large;">/</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">\` $1\`</strong>
    <strong style="font-size: large;">);</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">});</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">let</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">mapAfter</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">afterReplace</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">map</strong>
    <strong style="font-size: large;">((</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">item</strong>
    <strong style="font-size: large;">)</strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">=&gt;</strong>
    <strong style="font-size: large;">{</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(106, 153, 85); font-size: large;">// this is line for add the space before the capital letter letter</strong>
</p>
<p class="ql-indent-2">
    <strong style="color: rgb(86, 156, 214); font-size: large;"></strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">return</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">item</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">trim</strong>
    <strong style="font-size: large;">().</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">toLowerCase</strong>
    <strong style="font-size: large;">();</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">});</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">const</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">newStr</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">mapAfter</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">join</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">" "</strong>
    <strong style="font-size: large;">);</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">const</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">newStrArr</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">newStr</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">split</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">" "</strong>
    <strong style="font-size: large;">);</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">const</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">finalTitleCaseString</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">newStrArr</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">map</strong>
    <strong style="font-size: large;">((</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">item</strong>
    <strong style="font-size: large;">)</strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">=&gt;</strong>
    <strong style="font-size: large;">{</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">return</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">item</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">charAt</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">0</strong>
    <strong style="font-size: large;">).</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">toUpperCase</strong>
    <strong style="font-size: large;">()</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">+</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">item</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">slice</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">1</strong>
    <strong style="font-size: large;">);</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;">});</strong>
</p>
<p class="ql-indent-2">
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">return</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">finalTitleCaseString</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">join</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">" "</strong>
    <strong style="font-size: large;">);</strong>
</p>
<p>}</p>
<p class="ql-indent-2">
    <span style="color: rgb(156, 220, 254);">console</span>.
    <span style="color: rgb(220, 220, 170);">log</span>(
    <span style="color: rgb(220, 220, 170);">convertTitleCaseToCamalCase</span>(
    <span style="color: rgb(206, 145, 120);">"the simplestThings in LIFE are alwaysThe best"</span>));</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <br>
</p>
<p class="ql-indent-2">
    <br>
</p>
`;