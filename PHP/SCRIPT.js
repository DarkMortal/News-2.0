var Category = "";
var Heading = "";
var content = "";
var date = "";
var Author = "";
var topic="";
var News = "";
var link = "";
var ripple=`<div class="d-flex justify-content-center" style="color:white">
<div class="spinner-border" role="status"></div>
<strong style="margin-left:5px"> Loading...</strong></div>`;
var HTML = `
  <div class="container px-5 py-24 mx-auto">
    <div class="-my-8">`;
const key = "cb816823275b4e459b849d225a26fdde";
var endHTML = `
</div>
  </div>`;
var newsElem = document.getElementById("NEWS");
var loading = HTML+ripple+endHTML;

function convertDate(date_str) {
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	temp_date = date_str.split("-");
	return temp_date[2] + " " + months[Number(temp_date[1]) - 1] + " " + temp_date[0];
}

var general=null;
var business=null;
var entertainment=null;
var health=null;
var science=null;
var sports=null;
var technology=null;

var partition_index=0;
var tokenizer=null;

function Render(ART){
	newsElem.innerHTML = ""; 
	News="";
		for (news in ART) {
				Heading = ART[news].title;
				if (Heading == null) Heading = "HEADING NOT FOUND";
				content = ART[news].description;
				if (content == null) content = "CONTENT NOT FOUND";
				date = ART[news].publishedAt; date = date.slice(0, 10);
				date = convertDate(date);
				Author = ART[news].author;
				if (Author == null) Author = "BBC";
				link = ART[news].url;
				News = News + `
		<div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
			  <span class="tracking-widest font-medium title-font text-white">Top `+ topic + ` news by ` + Author + `</span>
			  <span class="mt text-gray-600 text-sm">`+ date + `</span>
			</div>
			<div class="md:flex-grow">
			  <h2 class="text-2xl font-medium text-white title-font mb-2">`+ Heading + `</h2>
			  <p class="leading-relaxed">`+ content + `</p>
			  <a class="text-blue-500 inline-flex items-center mt-4" href="`+ link + `" target="_blank">Read More
			    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
			      <path d="M5 12h14"></path>
			      <path d="M12 5l7 7-7 7"></path>
			    </svg>
			  </a>
			</div>
			<div class="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-no-wrap"></div>

		`;
		}
		newsElem.innerHTML = HTML + News + endHTML;
}

async function WriteDATA(arg) {
	News = "";
	var url = "";
	if (arg == "General") url = "http://newsapi.org/v2/top-headlines?country=in&apiKey=" + key;
	else url = "http://newsapi.org/v2/top-headlines?country=in&category=" + arg + "&apiKey=" + key;
	var args = await fetch(url);
	args.json().then(data => {
		if (data) {
			if(arg=="General" && general===null){
				general=data.articles;
				General_indexer(document.getElementById('no_of_articles').selectedIndex+1);
				Render(tokenizer[0],arg);
			}
			else if(arg=="Business" && business===null){
				business=data.articles;
				Business_indexer(document.getElementById('no_of_articles').selectedIndex+1);
				Render(tokenizer[0],arg);
			}
			else if(arg=="Entertainment" && entertainment===null){
				entertainment=data.articles;
				Entertainment_indexer(document.getElementById('no_of_articles').selectedIndex+1);
				Render(tokenizer[0],arg);
			}
			else if(arg=="Health" && health===null){
				health=data.articles;
				Health_indexer(document.getElementById('no_of_articles').selectedIndex+1);
				Render(tokenizer[0],arg);
			}
			else if(arg=="Science" && science===null){
				science=data.articles;
				Science_indexer(document.getElementById('no_of_articles').selectedIndex+1);
				Render(tokenizer[0],arg);
			}
			else if(arg=="Sports" && sports===null){
				sports=data.articles;
				Sports_indexer(document.getElementById('no_of_articles').selectedIndex+1);
				Render(tokenizer[0],arg);
			}
			else if(arg=="Technology" && technology===null){
				technology=data.articles;
				Technology_indexer(document.getElementById('no_of_articles').selectedIndex+1);
				Render(tokenizer[0],arg);
			}
			Populate();
		}
		else console.log("No data");
	}
	).catch(err => console.error(err));
}

function General(){
	topic='General';
	newsElem.innerHTML = loading;
	if(general===null) WriteDATA('General');
	else{ Render(tokenizer[0]); Populate(); }
}
function Business(){
	topic='Business';
	newsElem.innerHTML = loading;
	if(business===null) WriteDATA('Business');
	else{ Render(tokenizer[0]); Populate(); }
}
function Entertainment(){
	topic='Entertainment';
	newsElem.innerHTML = loading;
	if(entertainment===null) WriteDATA('Entertainment');
	else{ Render(tokenizer[0]); Populate(); }
}
function Health(){
	topic='Health';
	newsElem.innerHTML = loading;
	if(health===null) WriteDATA('Health');
	else{ Render(tokenizer[0]); Populate(); }
}
function Science(){
	topic='Science';
	newsElem.innerHTML = loading;
	if(science===null) WriteDATA('Science');
	else{ Render(tokenizer[0]); Populate(); }
}
function Sports(){
	topic='Sports';
	newsElem.innerHTML = loading;
	if(sports===null) WriteDATA('Sports');
	else{ Render(tokenizer[0]); Populate(); }
}
function Technology(){
	topic='Technology';
	newsElem.innerHTML = loading;
	if(technology===null) WriteDATA('Technology');
	else{ Render(tokenizer[0]); Populate(); }
}

function Populate(){
	var str="";
	for(var i=0;i<tokenizer.length;i++) str+=`<span class="badge bg-secondary sect">`+(i+1).toString()+`</span>`;
	document.getElementById("indexes").innerHTML=str;
	var arr=document.getElementsByClassName("sect");
	Array.from(arr).forEach(elm=>{
		elm.addEventListener("click",()=>{
			partition_index=parseInt(elm.innerText);
			Render(tokenizer[partition_index-1]);
		})
	});
}

document.getElementById("no_of_articles").addEventListener("change",function(){
	var partition=document.getElementById("no_of_articles").selectedIndex+1;
	if(topic==="General") General_indexer(partition);
	else if(topic==="Business") Business_indexer(partition);
	else if(topic==="Entertainment") Entertainment_indexer(partition);
	else if(topic==="Health") Health_indexer(partition);
	else if(topic==="Science") Science_indexer(partition);
	else if(topic==="Sports") Sports_indexer(partition);
	else if(topic==="Technology") Technology_indexer(partition); 
	Populate(); Render(tokenizer[0]);
});

function General_indexer(index){
	if(general){
		if(general.length>index){
			tokenizer=[];
			var num=parseInt((general.length)/index);
			var rem=(general.length)%index;
			for(var i=0;i<num;i++){
				var temp=[];
				for(var j=0;j<index;j++) temp.push(general[i+j]);
				tokenizer.push(temp);
			} temp=[];
			for(i=general.length-rem;i<general.length;i++) temp.push(general[i]);
			if(rem!==0) tokenizer.push(temp);
		} else{ tokenizer=[]; tokenizer.push(general); }
	}
}

function Business_indexer(index){
	if(business){
		if(business.length>index){
			tokenizer=[];
			var num=parseInt((business.length)/index);
			var rem=(business.length)%index;
			for(var i=0;i<num;i++){
				var temp=[];
				for(var j=0;j<index;j++) temp.push(business[i+j]);
				tokenizer.push(temp);
			} temp=[];
			for(i=business.length-rem;i<business.length;i++) temp.push(business[i]);
			if(rem!==0) tokenizer.push(temp);
		} else{ tokenizer=[]; tokenizer.push(business); }
	}
}

function Entertainment_indexer(index){
	if(entertainment){
		if(entertainment.length>index){
			tokenizer=[];
			var num=parseInt((entertainment.length)/index);
			var rem=(entertainment.length)%index;
			for(var i=0;i<num;i++){
				var temp=[];
				for(var j=0;j<index;j++) temp.push(entertainment[i+j]);
				tokenizer.push(temp);
			} temp=[];
			for(i=entertainment.length-rem;i<entertainment.length;i++) temp.push(entertainment[i]);
			if(rem!==0) tokenizer.push(temp);
		} else{ tokenizer=[]; tokenizer.push(entertainment); }
	}
}

function Health_indexer(index){
	if(health){
		if(health.length>index){
			tokenizer=[];
			var num=parseInt((health.length)/index);
			var rem=(health.length)%index;
			for(var i=0;i<num;i++){
				var temp=[];
				for(var j=0;j<index;j++) temp.push(health[i+j]);
				tokenizer.push(temp);
			} temp=[];
			for(i=health.length-rem;i<health.length;i++) temp.push(health[i]);
			if(rem!==0) tokenizer.push(temp);
		} else{ tokenizer=[]; tokenizer.push(health); }
	}
}

function Science_indexer(index){
	if(science){
		if(science.length>index){
			tokenizer=[];
			var num=parseInt((science.length)/index);
			var rem=(science.length)%index;
			for(var i=0;i<num;i++){
				var temp=[];
				for(var j=0;j<index;j++) temp.push(science[i+j]);
				tokenizer.push(temp);
			} temp=[];
			for(i=science.length-rem;i<science.length;i++) temp.push(science[i]);
			if(rem!==0) tokenizer.push(temp);
		} else{ tokenizer=[]; tokenizer.push(science); }
	}
}

function Sports_indexer(index){
	if(sports){
		if(sports.length>index){
			tokenizer=[];
			var num=parseInt((sports.length)/index);
			var rem=(sports.length)%index;
			for(var i=0;i<num;i++){
				var temp=[];
				for(var j=0;j<index;j++) temp.push(sports[i+j]);
				tokenizer.push(temp);
			} temp=[];
			for(i=sports.length-rem;i<sports.length;i++) temp.push(sports[i]);
			if(rem!==0) tokenizer.push(temp);
		} else{ tokenizer=[]; tokenizer.push(sports); }
	}
}

function Technology_indexer(index){
	if(technology){
		if(technology.length>index){
			tokenizer=[];
			var num=parseInt((technology.length)/index);
			var rem=(technology.length)%index;
			for(var i=0;i<num;i++){
				var temp=[];
				for(var j=0;j<index;j++) temp.push(technology[i+j]);
				tokenizer.push(temp);
			} temp=[];
			for(i=technology.length-rem;i<technology.length;i++) temp.push(technology[i]);
			if(rem!==0) tokenizer.push(temp);
		} else{ tokenizer=[]; tokenizer.push(technology); }
	}
}

window.onload=()=>{
	var elm=document.getElementById("no_of_articles");
	var str="";
	for(var i=0;i<100;i++) str+=`<option>`+(i+1).toString()+`</option>`;
	elm.innerHTML=str; elm.selectedIndex=4; General();
}
