export const marvelsSolutionInJavascript = `<p class="ql-indent-1">
    <strong style="font-size: large;">Question 18:-</strong>
    <strong style="font-size: large; font-family: &quot;Times New Roman&quot;, serif; color: rgb(107, 36, 178);">Write a small snippet to return super-heros matching the criteria:</strong>
</p>
<p class="ql-indent-1">
    <br>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large; font-family: &quot;Times New Roman&quot;, serif; color: rgb(107, 36, 178);">- Are Techies and have strength</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large; font-family: &quot;Times New Roman&quot;, serif; color: rgb(107, 36, 178);">- Arrange the superheroes alphabetically according to their real names</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large; font-family: &quot;Times New Roman&quot;, serif; color: rgb(107, 36, 178);">- Assuming the above are a team, calculate total team rating. Formula for calculating rating is:</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large; font-family: &quot;Times New Roman&quot;, serif; color: rgb(107, 36, 178);">( Sum of all Heros points / Total no of Heros ) + ( 0.25 * Total no of Avengers)</strong>
</p>
<p class="ql-indent-1">
    <strong style="color: rgb(86, 156, 214); font-size: large;">const</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">listMarvels</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;">[</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp;{</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">name:</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'spiderman'</strong>
    <strong style="font-size: large;">,</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">realName:</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'peter parker'</strong>
    <strong style="font-size: large;">,</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">powers:</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'spidey-sense'</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'web'</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'crawl'</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'strength'</strong>
    <strong style="font-size: large;">],</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">isAvenger:</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">false</strong>
    <strong style="font-size: large;">,</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">points:</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">3.5</strong>
</p>
<p class="ql-indent-1">
    <br>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">}, {</strong>
</p>
<p class="ql-indent-1">
    <br>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">name:</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'iron-man'</strong>
    <strong style="font-size: large;">,</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">realName:</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'tony stark'</strong>
    <strong style="font-size: large;">,</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">powers:</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'iron suit'</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'laser beam'</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'missiles'</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'jet-flies'</strong>
    <strong style="font-size: large;">,</strong>
</p>
<p class="ql-indent-1">
    <br>
</p>
<p class="ql-indent-1">
    <strong style="color: rgb(206, 145, 120); font-size: large;">'genius'</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'techie'</strong>
    <strong style="font-size: large;">],</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">isAvenger:</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">true</strong>
    <strong style="font-size: large;">,</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">points:</strong>
</p>
<p class="ql-indent-1">
    <br>
</p>
<p class="ql-indent-1">
    <strong style="color: rgb(181, 206, 168); font-size: large;">4</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">},</strong>
</p>
<p class="ql-indent-1">
    <br>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp;{</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">name :</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'black-widow'</strong>
    <strong style="font-size: large;">,</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">realName:</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'natasha romanoff'</strong>
    <strong style="font-size: large;">,</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">powers:</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'stealth'</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'martial arts'</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'speed'</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'spy'</strong>
    <strong style="font-size: large;">],</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">isAvenger:</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">true</strong>
    <strong style="font-size: large;">,</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">points:</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">2.5</strong>
</p>
<p class="ql-indent-1">
    <br>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">},</strong>
</p>
<p class="ql-indent-1">
    <br>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp;{</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">name:</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'black-panther'</strong>
    <strong style="font-size: large;">,</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">realName:</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'t</strong>
    <strong style="color: rgb(215, 186, 125); font-size: large;">\'</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">challa'</strong>
    <strong style="font-size: large;">,</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">powers:</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'speed'</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'strength'</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'burst'</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'commands-army'</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'techie'</strong>
</p>
<p class="ql-indent-1">
    <br>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">],</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">isAvenger:</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">false</strong>
    <strong style="font-size: large;">,</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">points:</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">3.5</strong>
</p>
<p class="ql-indent-1">
    <br>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">}, {</strong>
</p>
<p class="ql-indent-1">
    <br>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">name:</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'ant-man'</strong>
    <strong style="font-size: large;">,</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">realName:</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'scott lang'</strong>
    <strong style="font-size: large;">,</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">powers:</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'shrink'</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'enlarge'</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'time-warp'</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'techie'</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'strength'</strong>
</p>
<p class="ql-indent-1">
    <br>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">],</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">isAvenger:</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">false</strong>
    <strong style="font-size: large;">,</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">points:</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">3.5</strong>
</p>
<p class="ql-indent-1">
    <br>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">}, {</strong>
</p>
<p class="ql-indent-1">
    <br>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">name:</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'hulk'</strong>
    <strong style="font-size: large;">,</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">realName:</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'bruce banner'</strong>
    <strong style="font-size: large;">,</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">powers:</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'strength'</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'enlarge'</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'tolerance'</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'genius'</strong>
    <strong style="font-size: large;">],</strong>
</p>
<p class="ql-indent-1">
    <br>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">isAvenger:</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">true</strong>
    <strong style="font-size: large;">,</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">}</strong>
</p>
<p class="ql-indent-1">
    <br>
</p>
<p class="ql-indent-1">
    <strong style="color: rgb(107, 36, 178); font-size: large;">Solution:-</strong>
</p>
<p class="ql-indent-1">
    <strong style="color: rgb(86, 156, 214); font-size: large;">const</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">listMarvels</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;">[</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; {</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">name:</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'spiderman'</strong>
    <strong style="font-size: large;">,</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">realName:</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'peter parker'</strong>
    <strong style="font-size: large;">,</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">powers:</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'spidey-sense'</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'web'</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'crawl'</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'strength'</strong>
    <strong style="font-size: large;">],</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">isAvenger:</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">false</strong>
    <strong style="font-size: large;">,</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">points:</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">3.5</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; },</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; {</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">name:</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'iron-man'</strong>
    <strong style="font-size: large;">,</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">realName:</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'tony stark'</strong>
    <strong style="font-size: large;">,</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">powers:</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'iron suit'</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'laser beam'</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'missiles'</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'jet-flies'</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'genius'</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'techie'</strong>
    <strong style="font-size: large;">],</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">isAvenger:</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">true</strong>
    <strong style="font-size: large;">,</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">points:</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">4</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; },</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; {</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">name:</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'black-widow'</strong>
    <strong style="font-size: large;">,</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">realName:</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'natasha romanoff'</strong>
    <strong style="font-size: large;">,</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">powers:</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'stealth'</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'martial arts'</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'speed'</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'spy'</strong>
    <strong style="font-size: large;">],</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">isAvenger:</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">true</strong>
    <strong style="font-size: large;">,</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">points:</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">2.5</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; },</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; {</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">name:</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'black-panther'</strong>
    <strong style="font-size: large;">,</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">realName:</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">"t'challa"</strong>
    <strong style="font-size: large;">,</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">powers:</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'speed'</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'strength'</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'burst'</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'commands-army'</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'techie'</strong>
    <strong style="font-size: large;">],</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">isAvenger:</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">false</strong>
    <strong style="font-size: large;">,</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">points:</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">3.5</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; },</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; {</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">name:</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'ant-man'</strong>
    <strong style="font-size: large;">,</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">realName:</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'scott lang'</strong>
    <strong style="font-size: large;">,</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">powers:</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'shrink'</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'enlarge'</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'time-warp'</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'techie'</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'strength'</strong>
    <strong style="font-size: large;">],</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">isAvenger:</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">false</strong>
    <strong style="font-size: large;">,</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">points:</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">3.5</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; },</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; {</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">name:</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'hulk'</strong>
    <strong style="font-size: large;">,</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">realName:</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'bruce banner'</strong>
    <strong style="font-size: large;">,</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">powers:</strong>
    <strong style="font-size: large;">[</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'strength'</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'enlarge'</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'tolerance'</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'genius'</strong>
    <strong style="font-size: large;">],</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">isAvenger:</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">true</strong>
    <strong style="font-size: large;">,</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; &nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">points:</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">4</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp; }</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">];</strong>
</p>
<p class="ql-indent-1">
    <br>
</p>
<p class="ql-indent-1">
    <strong style="color: rgb(106, 153, 85); font-size: large;">// 1. Filter Techies with Strength</strong>
</p>
<p class="ql-indent-1">
    <strong style="color: rgb(86, 156, 214); font-size: large;">const</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">techieWithStrength</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">listMarvels</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">filter</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">hero</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">=&gt;</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">&nbsp;</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">hero</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">powers</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">includes</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'techie'</strong>
    <strong style="font-size: large;">)</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">&amp;&amp;</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">hero</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">powers</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">includes</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">'strength'</strong>
    <strong style="font-size: large;">)</strong>
</p>
<p class="ql-indent-1">
    <strong style="font-size: large;">);</strong>
</p>
<p class="ql-indent-1">
    <br>
</p>
<p class="ql-indent-1">
    <strong style="color: rgb(106, 153, 85); font-size: large;">// 2. Sort alphabetically by realName</strong>
</p>
<p class="ql-indent-1">
    <strong style="color: rgb(79, 193, 255); font-size: large;">techieWithStrength</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">sort</strong>
    <strong style="font-size: large;">((</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">a</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">b</strong>
    <strong style="font-size: large;">)</strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">=&gt;</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">a</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">realName</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">localeCompare</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">b</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">realName</strong>
    <strong style="font-size: large;">));</strong>
</p>
<p class="ql-indent-1">
    <br>
</p>
<p class="ql-indent-1">
    <strong style="color: rgb(106, 153, 85); font-size: large;">// 3. Calculate Team Rating</strong>
</p>
<p class="ql-indent-1">
    <strong style="color: rgb(86, 156, 214); font-size: large;">const</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">totalPoints</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">techieWithStrength</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">reduce</strong>
    <strong style="font-size: large;">((</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">sum</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">hero</strong>
    <strong style="font-size: large;">)</strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">=&gt;</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">sum</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">+</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">hero</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">points</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">||</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">0</strong>
    <strong style="font-size: large;">),</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">0</strong>
    <strong style="font-size: large;">);</strong>
</p>
<p class="ql-indent-1">
    <strong style="color: rgb(86, 156, 214); font-size: large;">const</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">totalHeroes</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">techieWithStrength</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">length</strong>
    <strong style="font-size: large;">;</strong>
</p>
<p class="ql-indent-1">
    <strong style="color: rgb(86, 156, 214); font-size: large;">const</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">totalAvengers</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">techieWithStrength</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">filter</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">hero</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(86, 156, 214); font-size: large;">=&gt;</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">hero</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">isAvenger</strong>
    <strong style="font-size: large;">).</strong>
    <strong style="color: rgb(156, 220, 254); font-size: large;">length</strong>
    <strong style="font-size: large;">;</strong>
</p>
<p class="ql-indent-1">
    <br>
</p>
<p class="ql-indent-1">
    <strong style="color: rgb(86, 156, 214); font-size: large;">const</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">teamRating</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">=</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">totalPoints</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">/</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">totalHeroes</strong>
    <strong style="font-size: large;">)</strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">+</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">0.25</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(212, 212, 212); font-size: large;">*</strong>
    <strong style="font-size: large;"></strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">totalAvengers</strong>
    <strong style="font-size: large;">);</strong>
</p>
<p class="ql-indent-1">
    <br>
</p>
<p class="ql-indent-1">
    <strong style="color: rgb(106, 153, 85); font-size: large;">// ✅ Output</strong>
</p>
<p class="ql-indent-1">
    <strong style="color: rgb(156, 220, 254); font-size: large;">console</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">log</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">"Filtered Techie+Strength Heroes:"</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">techieWithStrength</strong>
    <strong style="font-size: large;">);</strong>
</p>
<p class="ql-indent-1">
    <strong style="color: rgb(156, 220, 254); font-size: large;">console</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">log</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(206, 145, 120); font-size: large;">"Team Rating:"</strong>
    <strong style="font-size: large;">,</strong>
    <strong style="color: rgb(79, 193, 255); font-size: large;">teamRating</strong>
    <strong style="font-size: large;">.</strong>
    <strong style="color: rgb(220, 220, 170); font-size: large;">toFixed</strong>
    <strong style="font-size: large;">(</strong>
    <strong style="color: rgb(181, 206, 168); font-size: large;">2</strong>
    <strong style="font-size: large;">));</strong>
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