export const GCD = `<p class="ql-indent-1">
    <strong style="font-size: large;">Question 15:-</strong>&nbsp;
    <strong style="color: rgb(107, 36, 178); font-size: large;">Find the GCD in two strings</strong>
</p>
<p class="ql-indent-1">
    <strong style="color: rgb(107, 36, 178); font-size: large;">for example str1 = "ABABAB" = length is 6</strong>
</p>
<p class="ql-indent-1">
    <strong style="color: rgb(107, 36, 178); font-size: large;">Str2 = "AB" = length is 4</strong>
</p>
<p class="ql-indent-1">
    <strong style="color: rgb(107, 36, 178); font-size: large;">gcd of 6 and 4 is 2 so string length should be 2</strong>
</p>
<p class="ql-indent-1">
    <br>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">Solution:-</strong>&nbsp;
    <strong style="color: rgb(107, 36, 178); font-size: large;">First we will check whether string is valid or not</strong>
</p>
<p class="ql-indent-1">
    <strong style="color: rgb(107, 36, 178); font-size: large;">then we will check is str1 + str2 === str2 + str1 then you can find the GCD otherwise no lets see</strong>
</p>
<p class="ql-indent-1">
    <strong style="color: rgb(107, 36, 178); font-size: large;">// ABABAB + AB === AB + ABABAB = so both are same</strong>
</p>
<p class="ql-indent-1">
    <strong style="color: rgb(107, 36, 178); font-size: large;">// Now just find the GCD of 6, 4 then get the substring of that GCD</strong>
</p>
<p class="ql-indent-1">
    <br>
</p>
<p class="ql-indent-1">
    <strong style="color: rgb(107, 36, 178); font-size: large;">Solution:-</strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">function</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">gcd</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">a</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">b</strong>
    <strong style="font-size: large;">){</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">if</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">b</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">===</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">0</strong>
    <strong style="font-size: large;">) {</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp; &nbsp; &nbsp;</strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">return</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">a</strong>
    <strong style="font-size: large;">;</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp; }</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">return</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">gcd</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">b</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">a</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">%</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">b</strong>
    <strong style="font-size: large;">);</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">}</strong>
</p>
<p class="ql-indent-1">
    <br>
</p>
<p class="ql-indent-1">
    <strong style="color: rgb(86, 156, 214); font-size: large;">function</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">customGCD</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">str1</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">str2</strong>
    <strong style="font-size: large;">){</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">if</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">str1</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">length</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">&lt;</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">0</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">||</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">str1</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">length</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">&gt;</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">1000</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">||</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">str2</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">length</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">&lt;</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">0</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">||</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">str2</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">length</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">&gt;</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">1000</strong>
    <strong style="font-size: large;">){</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp; &nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">console</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">log</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">"Please enter a valid string!"</strong>
    <strong style="font-size: large;">);</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp; &nbsp; &nbsp;</strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">return</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">''</strong>
    <strong style="font-size: large;">;</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp; }</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">if</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">str1</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">+</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">str2</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">!=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">str2</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">+</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">str1</strong>
    <strong style="font-size: large;">){</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp; &nbsp; &nbsp;</strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">return</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">''</strong>
    <strong style="font-size: large;">;</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp; }</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">const</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">gcdLength</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">gcd</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">str1</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">length</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">str2</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">length</strong>
    <strong style="font-size: large;">);</strong>
    <strong style="color: rgb(106, 153, 85); font-size: large;">// ✅ Here gcd IS use</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">return</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">str1</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">substring</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">0</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">gcdLength</strong>
    <strong style="font-size: large;">);</strong>
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
    <strong style="color: rgb(79, 193, 255); font-size: large;">gcds</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;">&nbsp;</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">customGCD</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'ABAB'</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">"AB"</strong>
    <strong style="font-size: large;">);</strong>
</p>
<p class="ql-indent-1">
    <br>
</p>
<p class="ql-indent-1">
    <strong style="color: rgb(197, 134, 192); font-size: large;">if</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">gcds</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">length</strong>
    <strong style="font-size: large;">){</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">console</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">log</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">"Output and GCD string is = "</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">gcds</strong>
    <strong style="font-size: large;">);</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">}</strong>
    <strong style="color: rgb(197, 134, 192); font-size: large;">else</strong>
    <strong style="font-size: large;">{</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">console</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">log</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">"There is no GCD string found!"</strong>
    <strong style="font-size: large;">);</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">}</strong>
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