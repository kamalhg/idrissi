var home_page_url = location.href;	
var pageCount=8;
var displayPageNum=5;
var upPageWord =&#39;&#187;&#187;&#39;;
var downPageWord =&#39;&#171;&#171;&#39;;
function showpageCount(json) {
var thisUrl = home_page_url;
var htmlMap = new Array();
var thisNum = 1;
var postNum=1;
var itemCount = 0;
var fFlag = 0;
var eFlag = 0;
var html= &#39;&#39;;
var upPageHtml =&#39;&#39;;
var downPageHtml =&#39;&#39;;
htmlMap[htmlMap.length]=&#39;/&#39;;
postNum++;
for(var i=pageCount-1, post; post = json.feed.entry[i]; i=i+pageCount) {
	var timestamp1 = post.published.$t.substring(0,19)+post.published.$t.substring(23,29);
	timestamp = encodeURIComponent(timestamp1);
	var title = post.title.$t;
			if(thisUrl.indexOf(timestamp)!=-1 ){
					thisNum = postNum;
			}
			postNum++;
			htmlMap[htmlMap.length] = &#39;/search?updated-max=&#39;+timestamp+&#39;&amp;max-results=&#39;+pageCount;
}
var banyaknomer = htmlMap.length;
if (json.feed.entry.length % pageCount == 0){
	var banyaknomer = htmlMap.length -1 ;
	postNum=postNum-1;
};
for(var p =0;p&lt; banyaknomer;p++){
	if(p&gt;=(thisNum-displayPageNum-1) &amp;&amp; p&lt;(thisNum+displayPageNum)){
		if(fFlag ==0 &amp;&amp; p == thisNum-2){
			if(thisNum==2){
				downPageHtml = &#39;&lt;span class=&quot;showpage&quot;&gt;&lt;a href=&quot;/&quot;&gt;&#39;+ upPageWord +&#39;&lt;/a&gt;&lt;/span&gt;&#39;;
			}else{
				downPageHtml = &#39;&lt;span class=&quot;showpage&quot;&gt;&lt;a href=&quot;&#39;+htmlMap[p]+&#39;&quot;&gt;&#39;+ upPageWord +&#39;&lt;/a&gt;&lt;/span&gt;&#39;;
			}
			fFlag++;
		}
		if(p==(thisNum-1)){
			html += &#39;&lt;span class=&quot;showpagePoint&quot;&gt;&#39;+thisNum+&#39;&lt;/span&gt;&#39;;
		}else{
			if(p==0){
					html += &#39;&lt;span class=&quot;showpageNum&quot;&gt;&lt;a href=&quot;/&quot;&gt;1&lt;/a&gt;&lt;/span&gt;&#39;;
			}else{
				html += &#39;&lt;span class=&quot;showpageNum&quot;&gt;&lt;a href=&quot;&#39;+htmlMap[p]+&#39;&quot;&gt;&#39;+ (p+1) +&#39;&lt;/a&gt;&lt;/span&gt;&#39;;
			}
		}
		if(eFlag ==0 &amp;&amp; p == thisNum){
			upPageHtml = &#39;&lt;span class=&quot;showpage&quot;&gt; &lt;a href=&quot;&#39;+htmlMap[p]+&#39;&quot;&gt;&#39;+ downPageWord +&#39;&lt;/a&gt;&lt;/span&gt;&#39;;
			eFlag++;
		}
	}
}
if(thisNum&gt;1){
	html = &#39;&#39;+upPageHtml+&#39; &#39;+html +&#39; &#39;;
}
html = &#39;&lt;div class=&quot;showpageArea&quot;&gt;&lt;span style=&quot;COLOR: #000;&quot; class=&quot;showpageOf&quot;&gt;&lt;/span&gt;&#39;+html;
if(thisNum&lt;(postNum-1)){
	html += downPageHtml;	
}
if(postNum==1) postNum++;
html += &#39;&lt;/div&gt;&#39;;
var pageArea = document.getElementsByName(&quot;pageArea&quot;);
var blogPager = document.getElementById(&quot;blog-pager&quot;);
if(postNum &lt;= 2){
	html =&#39;&#39;;
}
for(var p =0;p&lt; pageArea.length;p++){
	pageArea[p].innerHTML = html;
}
if(pageArea&amp;&amp;pageArea.length&gt;0){
	html =&#39;&#39;;
}
if(blogPager){
	blogPager.innerHTML = html;
}
}
function showpageCount2(json) {
var thisUrl = home_page_url;
var htmlMap = new Array();
var isLablePage = thisUrl.indexOf(&quot;/search/label/&quot;)!=-1;
var thisLable = isLablePage ? thisUrl.substr(thisUrl.indexOf(&quot;/search/label/&quot;)+14,thisUrl.length) : &quot;&quot;;
thisLable = thisLable.indexOf(&quot;?&quot;)!=-1 ? thisLable.substr(0,thisLable.indexOf(&quot;?&quot;)) : thisLable;
var thisNum = 1;
var postNum=1;
var itemCount = 0;
var fFlag = 0;
var eFlag = 0;
var html= &#39;&#39;;
var upPageHtml =&#39;&#39;;
var downPageHtml =&#39;&#39;;
var labelHtml = &#39;&lt;span class=&quot;showpageNum&quot;&gt;&lt;a href=&quot;/search/label/&#39;+thisLable+&#39;?&amp;max-results=&#39;+pageCount+&#39;&quot;&gt;&#39;;
var thisUrl = home_page_url;	
htmlMap[htmlMap.length]=labelHtml;
postNum++;
for(var i=pageCount-1, post; post = json.feed.entry[i]; i=i+pageCount) {
	var timestamp1 = post.published.$t.substring(0,19)+post.published.$t.substring(23,29);
	timestamp = encodeURIComponent(timestamp1);
	var title = post.title.$t;
			if(thisUrl.indexOf(timestamp)!=-1 ){
				thisNum = postNum;
			}
			if(title!=&#39;&#39;) postNum++;
			htmlMap[htmlMap.length] = &#39;/search/label/&#39;+thisLable+&#39;?updated-max=&#39;+timestamp+&#39;&amp;max-results=&#39;+pageCount;
	itemCount++;
}
var banyaknomer = htmlMap.length;
if (json.feed.entry.length % pageCount == 0){
	var banyaknomer = htmlMap.length -1 ;
	postNum=postNum-1;
};
for(var p =0;p&lt; banyaknomer;p++){
	if(p&gt;=(thisNum-displayPageNum-1) &amp;&amp; p&lt;(thisNum+displayPageNum)){
		if(fFlag ==0 &amp;&amp; p == thisNum-2){
			if(thisNum==2){
				downPageHtml = labelHtml + upPageWord +&#39;&lt;/a&gt;&lt;/span&gt;&#39;;
			}else{
				downPageHtml = &#39;&lt;span class=&quot;showpage&quot;&gt;&lt;a href=&quot;&#39;+htmlMap[p]+&#39;&quot;&gt;&#39;+ upPageWord +&#39;&lt;/a&gt;&lt;/span&gt;&#39;;
			}
			fFlag++;
		}
		if(p==(thisNum-1)){
			html += &#39;&lt;span class=&quot;showpagePoint&quot;&gt;&#39;+thisNum+&#39;&lt;/span&gt;&#39;;
		}else{
			if(p==0){
				html = labelHtml+&#39;1&lt;/a&gt;&lt;/span&gt;&#39;;
			}else{
				html += &#39;&lt;span class=&quot;showpageNum&quot;&gt;&lt;a href=&quot;&#39;+htmlMap[p]+&#39;&quot;&gt;&#39;+ (p+1) +&#39;&lt;/a&gt;&lt;/span&gt;&#39;;
			}
		}
		if(eFlag ==0 &amp;&amp; p == thisNum){
			upPageHtml = &#39;&lt;span class=&quot;showpage&quot;&gt; &lt;a href=&quot;&#39;+htmlMap[p]+&#39;&quot;&gt;&#39;+ downPageWord +&#39;&lt;/a&gt;&lt;/span&gt;&#39;;
			eFlag++;
		}
	}
}
if(thisNum&gt;1){
	if(!isLablePage){
		html = &#39;&#39;+upPageHtml+&#39; &#39;+html +&#39; &#39;;
	}else{
		html = &#39;&#39;+upPageHtml+&#39; &#39;+html +&#39; &#39;;
	}
}
html = &#39;&lt;div class=&quot;showpageArea&quot;&gt;&lt;span style=&quot;COLOR: #000;&quot; class=&quot;showpageOf&quot;&gt;&lt;/span&gt;&#39;+html;
if(thisNum&lt;(postNum-1)){
	html += downPageHtml;	
}
if(postNum==1) postNum++;
html += &#39;&lt;/div&gt;&#39;;
var pageArea = document.getElementsByName(&quot;pageArea&quot;);
var blogPager = document.getElementById(&quot;blog-pager&quot;);
if(postNum &lt;= 2){
	html =&#39;&#39;;
}
for(var p =0;p&lt; pageArea.length;p++){
	pageArea[p].innerHTML = html;
}
if(pageArea&amp;&amp;pageArea.length&gt;0){
	html =&#39;&#39;;
}
if(blogPager){
	blogPager.innerHTML = html;
}
}