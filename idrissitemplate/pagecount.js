﻿ 	var thisUrl = home_page_url;
	if (thisUrl.indexOf(&quot;/search/label/&quot;)!=-1){
		if (thisUrl.indexOf(&quot;?updated-max&quot;)!=-1){
			var lblname1 = thisUrl.substring(thisUrl.indexOf(&quot;/search/label/&quot;)+14,thisUrl.indexOf(&quot;?updated-max&quot;));
		}else{
			var lblname1 = thisUrl.substring(thisUrl.indexOf(&quot;/search/label/&quot;)+14,thisUrl.indexOf(&quot;?&amp;max&quot;));
		}
	}

	var home_page = &quot;/&quot;;
	if (thisUrl.indexOf(&quot;?q=&quot;)==-1 &amp;&amp; thisUrl.indexOf(&quot;.html&quot;)==-1){	
		if (thisUrl.indexOf(&quot;/search/label/&quot;)==-1){			
			document.write(&#39;&lt;script src=&quot;&#39;+home_page+&#39;feeds/posts/summary?alt=json-in-script&amp;callback=showpageCount&amp;max-results=99999&quot; &gt;&lt;\/script&gt;&#39;)
		}else{document.write(&#39;&lt;script src=&quot;&#39;+home_page+&#39;feeds/posts/full/-/&#39;+lblname1+&#39;?alt=json-in-script&amp;callback=showpageCount2&amp;max-results=99999&quot; &gt;&lt;\/script&gt;&#39;)