(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1740],{13037:function(n,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/grid-column",function(){return a(1281)}])},1281:function(n,s,a){"use strict";a.r(s),a.d(s,{default:function(){return g}});var t=a(85893),p=a(11151),e=a(72788),l=a(36336),o=a(94406),c=a(87633),i=a(44805);let u=e.L,r=l.X_;function d(n){let s=Object.assign({p:"p",code:"code",em:"em",pre:"pre",hr:"hr",a:"a"},(0,p.ah)(),n.components),{Heading:a,Example:e,Editor:l}=s;return l||h("Editor",!0),e||h("Example",!0),a||h("Heading",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3},children:"Basic usage"}),"\n",(0,t.jsx)(a,{level:3,id:"spanning-columns",children:"Spanning columns"}),"\n",(0,t.jsxs)(s.p,{children:["Use the ",(0,t.jsx)(s.code,{children:"col-span-{n}"})," utilities to make an element span ",(0,t.jsx)(s.em,{children:"n"})," columns."]}),"\n",(0,t.jsx)(e,{containerClassName:"mt-4 -mb-3",html:'<div class="grid grid-cols-3 gap-4 font-mono text-white text-sm text-center font-bold leading-6">\n  <div class="p-4 rounded-lg bg-indigo-300 dark:bg-indigo-800 dark:text-indigo-400">01</div>\n  <div class="p-4 rounded-lg bg-indigo-300 dark:bg-indigo-800 dark:text-indigo-400">02</div>\n  <div class="p-4 rounded-lg bg-indigo-300 dark:bg-indigo-800 dark:text-indigo-400">03</div>\n  <div class="p-4 rounded-lg shadow-lg bg-indigo-500 col-span-2">04</div>\n  <div class="p-4 rounded-lg bg-indigo-300 dark:bg-indigo-800 dark:text-indigo-400">05</div>\n  <div class="p-4 rounded-lg bg-indigo-300 dark:bg-indigo-800 dark:text-indigo-400">06</div>\n  <div class="p-4 rounded-lg shadow-lg bg-indigo-500 col-span-2">07</div>\n</div>'}),"\n",(0,t.jsx)(s.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>grid grid-cols-3 gap-4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>01<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>02<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>03<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">col-span-2</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>04<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>05<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>06<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">col-span-2</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>07<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,t.jsx)(a,{level:3,id:"starting-and-ending-lines",children:"Starting and ending lines"}),"\n",(0,t.jsxs)(s.p,{children:["Use the ",(0,t.jsx)(s.code,{children:"col-start-{n}"})," and ",(0,t.jsx)(s.code,{children:"col-end-{n}"})," utilities to make an element start or end at the ",(0,t.jsx)(s.em,{children:"nth"})," grid line. These can also be combined with the ",(0,t.jsx)(s.code,{children:"col-span-{n}"})," utilities to span a specific number of columns."]}),"\n",(0,t.jsx)(s.p,{children:"Note that CSS grid lines start at 1, not 0, so a full-width element in a 6-column grid would start at line 1 and end at line 7."}),"\n",(0,t.jsx)(e,{containerClassName:"mt-4 -mb-3",html:'<div class="grid grid-cols-6 gap-4 font-mono text-white text-sm text-center font-bold leading-6">\n  <div class="p-4 rounded-lg bg-stripes-sky"></div>\n  <div class="p-4 rounded-lg shadow-lg bg-sky-500 col-start-2 col-span-4">01</div>\n  <div class="p-4 rounded-lg bg-stripes-sky"></div>\n  <div class="p-4 rounded-lg shadow-lg bg-sky-500 col-start-1 col-end-3">02</div>\n  <div class="p-4 rounded-lg bg-stripes-sky"></div>\n  <div class="p-4 rounded-lg bg-stripes-sky"></div>\n  <div class="p-4 rounded-lg shadow-lg bg-sky-500 col-end-7 col-span-2">03</div>\n  <div class="p-4 rounded-lg shadow-lg bg-sky-500 col-start-1 col-end-7">04</div>\n</div>'}),"\n",(0,t.jsx)(s.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>grid grid-cols-6 gap-4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">col-start-2</span> col-span-4 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>01<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">col-start-1 col-end-3</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>02<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">col-end-7 col-span-2</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>03<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">col-start-1 col-end-7</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>04<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(a,{ignore:!0,level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},children:"Applying conditionally"}),"\n",(0,t.jsx)(a,{ignore:!0,level:3,id:"hover-focus-and-other-states",children:"Hover, focus, and other states"}),"\n",(0,t.jsx)(i.k,{defaultClass:"col-span-2",featuredClass:"col-span-6"}),"\n",(0,t.jsx)(a,{ignore:!0,level:3,id:"breakpoints-and-media-queries",children:"Breakpoints and media queries"}),"\n",(0,t.jsx)(c.p,{defaultClass:"col-span-2",featuredClass:"col-span-6"}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(a,{level:2,id:"using-custom-values",nextElement:{type:"heading",depth:3},children:"Using custom values"}),"\n",(0,t.jsx)(a,{level:3,id:"customizing-your-theme",children:"Customizing your theme"}),"\n",(0,t.jsxs)(s.p,{children:["By default, Tailwind includes grid-column utilities for working with grids with up to 12 columns. You change, add, or remove these by customizing the ",(0,t.jsx)(s.code,{children:"gridColumn"}),", ",(0,t.jsx)(s.code,{children:"gridColumnStart"}),", and ",(0,t.jsx)(s.code,{children:"gridColumnEnd"})," sections of your Tailwind theme config."]}),"\n",(0,t.jsxs)(s.p,{children:["For creating more ",(0,t.jsx)(s.code,{children:"col-{value}"})," utilities that control the ",(0,t.jsx)(s.code,{children:"grid-column"})," shorthand property directly, customize the ",(0,t.jsx)(s.code,{children:"gridColumn"})," section of your Tailwind theme config:"]}),"\n",(0,t.jsx)(l,{filename:"tailwind.config.js",code:'<pre class="language-diff-js"><code class="language-diff-js"><span class="token language-js unchanged"><span class="token plain">module</span><span class="token punctuation">.</span><span class="token property-access">exports</span><span class="token plain"> </span><span class="token operator">=</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">  </span><span class="token literal-property property">theme</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">    </span><span class="token literal-property property">extend</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">      </span><span class="token literal-property property">gridColumn</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">        </span><span class="token string-property property">\'span-16\'</span><span class="token operator">:</span><span class="token plain"> </span><span class="token string">\'span 16 / span 16\'</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">      </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">    </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">  </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain"></span><span class="token punctuation">}</span>\n</span></code></pre>'}),"\n",(0,t.jsxs)(s.p,{children:["We use this internally for our ",(0,t.jsx)(s.code,{children:"col-span-{n}"})," utilities. Note that since this configures the ",(0,t.jsx)(s.code,{children:"grid-column"})," shorthand property directly, we include the word ",(0,t.jsx)(s.code,{children:"span"})," directly in the value name, it’s ",(0,t.jsx)(s.em,{children:"not"})," baked into the class name automatically. That means you are free to add entries that do whatever you want here — they don’t just have to be ",(0,t.jsx)(s.code,{children:"span"})," utilities."]}),"\n",(0,t.jsxs)(s.p,{children:["To add new ",(0,t.jsx)(s.code,{children:"col-start-{n}"})," utilities, use the ",(0,t.jsx)(s.code,{children:"gridColumnStart"})," section of your Tailwind theme config:"]}),"\n",(0,t.jsx)(l,{filename:"tailwind.config.js",code:'<pre class="language-diff-js"><code class="language-diff-js"><span class="token language-js unchanged"><span class="token plain">module</span><span class="token punctuation">.</span><span class="token property-access">exports</span><span class="token plain"> </span><span class="token operator">=</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">  </span><span class="token literal-property property">theme</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">    </span><span class="token literal-property property">extend</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">      </span><span class="token literal-property property">gridColumnStart</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">        </span><span class="token string-property property">\'13\'</span><span class="token operator">:</span><span class="token plain"> </span><span class="token string">\'13\'</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">        </span><span class="token string-property property">\'14\'</span><span class="token operator">:</span><span class="token plain"> </span><span class="token string">\'14\'</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">        </span><span class="token string-property property">\'15\'</span><span class="token operator">:</span><span class="token plain"> </span><span class="token string">\'15\'</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">        </span><span class="token string-property property">\'16\'</span><span class="token operator">:</span><span class="token plain"> </span><span class="token string">\'16\'</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">        </span><span class="token string-property property">\'17\'</span><span class="token operator">:</span><span class="token plain"> </span><span class="token string">\'17\'</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">      </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">    </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">  </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain"></span><span class="token punctuation">}</span>\n</span></code></pre>'}),"\n",(0,t.jsxs)(s.p,{children:["To add new ",(0,t.jsx)(s.code,{children:"col-end-{n}"})," utilities, use the ",(0,t.jsx)(s.code,{children:"gridColumnEnd"})," section of your Tailwind theme config:"]}),"\n",(0,t.jsx)(l,{filename:"tailwind.config.js",code:'<pre class="language-diff-js"><code class="language-diff-js"><span class="token language-js unchanged"><span class="token plain">module</span><span class="token punctuation">.</span><span class="token property-access">exports</span><span class="token plain"> </span><span class="token operator">=</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">  </span><span class="token literal-property property">theme</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">    </span><span class="token literal-property property">extend</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">      </span><span class="token literal-property property">gridColumnEnd</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">        </span><span class="token string-property property">\'13\'</span><span class="token operator">:</span><span class="token plain"> </span><span class="token string">\'13\'</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">        </span><span class="token string-property property">\'14\'</span><span class="token operator">:</span><span class="token plain"> </span><span class="token string">\'14\'</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">        </span><span class="token string-property property">\'15\'</span><span class="token operator">:</span><span class="token plain"> </span><span class="token string">\'15\'</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">        </span><span class="token string-property property">\'16\'</span><span class="token operator">:</span><span class="token plain"> </span><span class="token string">\'16\'</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">        </span><span class="token string-property property">\'17\'</span><span class="token operator">:</span><span class="token plain"> </span><span class="token string">\'17\'</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">      </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">    </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">  </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain"></span><span class="token punctuation">}</span>\n</span></code></pre>'}),"\n",(0,t.jsxs)(s.p,{children:["Learn more about customizing the default theme in the ",(0,t.jsx)(s.a,{href:"/docs/theme#customizing-the-default-theme",children:"theme customization"})," documentation."]}),"\n",(0,t.jsx)(a,{level:3,id:"arbitrary-values",children:"Arbitrary values"}),"\n",(0,t.jsx)(o.k,{property:"grid-column/grid-column-start/grid-column-end",featuredClass:"col-[16_/_span_16]"})]})}function k(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(r,Object.assign({},n,{children:(0,t.jsx)(d,n)}))}var g=k;function h(n,s){throw Error("Expected "+(s?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}k.layoutProps={Layout:u,classes:{utilities:{".col-auto":{"grid-column":"auto"},".col-span-1":{"grid-column":"span 1 / span 1"},".col-span-2":{"grid-column":"span 2 / span 2"},".col-span-3":{"grid-column":"span 3 / span 3"},".col-span-4":{"grid-column":"span 4 / span 4"},".col-span-5":{"grid-column":"span 5 / span 5"},".col-span-6":{"grid-column":"span 6 / span 6"},".col-span-7":{"grid-column":"span 7 / span 7"},".col-span-8":{"grid-column":"span 8 / span 8"},".col-span-9":{"grid-column":"span 9 / span 9"},".col-span-10":{"grid-column":"span 10 / span 10"},".col-span-11":{"grid-column":"span 11 / span 11"},".col-span-12":{"grid-column":"span 12 / span 12"},".col-span-full":{"grid-column":"1 / -1"},".col-start-1":{"grid-column-start":"1"},".col-start-2":{"grid-column-start":"2"},".col-start-3":{"grid-column-start":"3"},".col-start-4":{"grid-column-start":"4"},".col-start-5":{"grid-column-start":"5"},".col-start-6":{"grid-column-start":"6"},".col-start-7":{"grid-column-start":"7"},".col-start-8":{"grid-column-start":"8"},".col-start-9":{"grid-column-start":"9"},".col-start-10":{"grid-column-start":"10"},".col-start-11":{"grid-column-start":"11"},".col-start-12":{"grid-column-start":"12"},".col-start-13":{"grid-column-start":"13"},".col-start-auto":{"grid-column-start":"auto"},".col-end-1":{"grid-column-end":"1"},".col-end-2":{"grid-column-end":"2"},".col-end-3":{"grid-column-end":"3"},".col-end-4":{"grid-column-end":"4"},".col-end-5":{"grid-column-end":"5"},".col-end-6":{"grid-column-end":"6"},".col-end-7":{"grid-column-end":"7"},".col-end-8":{"grid-column-end":"8"},".col-end-9":{"grid-column-end":"9"},".col-end-10":{"grid-column-end":"10"},".col-end-11":{"grid-column-end":"11"},".col-end-12":{"grid-column-end":"12"},".col-end-13":{"grid-column-end":"13"},".col-end-auto":{"grid-column-end":"auto"}}},meta:{title:"Grid Column Start / End",description:"Utilities for controlling how elements are sized and placed across grid columns."},slug:"grid-column",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Spanning columns",slug:"spanning-columns",children:[]},{title:"Starting and ending lines",slug:"starting-and-ending-lines",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]},{title:"Using custom values",slug:"using-custom-values",children:[{title:"Customizing your theme",slug:"customizing-your-theme",children:[]},{title:"Arbitrary values",slug:"arbitrary-values",children:[]}]}]}},11151:function(n,s,a){"use strict";a.d(s,{Zo:function(){return o},ah:function(){return e}});var t=a(67294);let p=t.createContext({});function e(n){let s=t.useContext(p);return t.useMemo(()=>"function"==typeof n?n(s):{...s,...n},[s,n])}let l={};function o({components:n,children:s,disableParentContext:a}){let o;return o=a?"function"==typeof n?n({}):n||l:e(n),t.createElement(p.Provider,{value:o},s)}}},function(n){n.O(0,[3430,4381,9495,224,7308,3983,9774,2888,179],function(){return n(n.s=13037)}),_N_E=n.O()}]);