import { HTTP } from 'meteor/http';
import { EJSON } from 'meteor/ejson';
import { Mongo } from 'meteor/mongo';
import '@fortawesome/fontawesome-free/js/all.js';
import { Router } from 'meteor/iron:router';







// TR HABERLERİNİ ALDIĞIM API
const apiUrl = 'https://api.collectapi.com/news/getNews?country=tr&tag=general';
const headers = {
  'Authorization': 'apikey 1xIvut2bpgd9lCB2NAjVEt:3VdfMhl4qbHdKCxygBnStO',
  'Content-Type': 'application/json'
};

// DE HABERLERİNİ ALDIĞIM API
const apiUrl2 = 'https://api.collectapi.com/news/getNews?country=de&tag=general';
const headers2 = {
  'Authorization': 'apikey 1xIvut2bpgd9lCB2NAjVEt:3VdfMhl4qbHdKCxygBnStO',
  'Content-Type': 'application/json'
};

// EN HABERLERİNİ ALDIĞIM API
const apiUrl3 = 'https://api.collectapi.com/news/getNews?country=en&tag=general';
const headers3 = {
  'Authorization': 'apikey 1xIvut2bpgd9lCB2NAjVEt:3VdfMhl4qbHdKCxygBnStO',
  'Content-Type': 'application/json'
};

// haber bloğunu oluşturduğum kısım -- DÜZENLEME GEREKİYOR TEMAYI BOZDU

HTTP.get(apiUrl, { headers }, (error, response) => {
  if (error) {
    console.error(error);
  } else {
    let trNews = response.data.result;
    let newsData1 = [];
    let newsData2 = [];
    let newsData3 = [];
    let newsData4 = [];
    
      const TrApi = trNews[1];
      const TrDescription = TrApi.description;
      const TrName = TrApi.name;
      const TrDate = TrApi.date;
      const TrImage = TrApi.image;
      const TrKey = TrApi.key;
      const TrSource = TrApi.source;
      const TrUrl = TrApi.url;
      
      const TrApi2 = trNews[2];
      const TrDescription2 = TrApi2.description;
      const TrName2 = TrApi2.name;
      const TrDate2 = TrApi2.date;
      const TrImage2 = TrApi2.image;
      const TrKey2 = TrApi2.key;
      const TrSource2 = TrApi2.source;
      const TrUrl2 = TrApi2.url;

      const TrApi3 = trNews[3];
      const TrDescription3 = TrApi3.description;
      const TrName3 = TrApi3.name;
      const TrDate3 = TrApi3.date;
      const TrImage3 = TrApi3.image;
      const TrKey3 = TrApi3.key;
      const TrSource3 = TrApi3.source;
      const TrUrl3 = TrApi3.url;

      const TrApi4 = trNews[4];
      const TrDescription4 = TrApi4.description;
      const TrName4 = TrApi4.name;
      const TrDate4 = TrApi4.date;
      const TrImage4 = TrApi4.image;
      const TrKey4 = TrApi4.key;
      const TrSource4 = TrApi4.source;
      const TrUrl4 = TrApi4.url;
      
      
      newsData1 += `
      
            <div class="card card-shadow">
              <img src="${TrImage}" class="card-img-top" alt="Haber 2">
              <div class="card-body">
                <b class="card-title">${TrName}</b>
                <p class="card-text">${TrDescription}</p>
              </div>
              <div class="card-footer">
                <div class="d-flex justify-content-between">
                  <div><i class="far fa-thumbs-up"></i> Beğen</div>
                  <div><i class="far fa-share-square"></i> Paylaş</div>
                  <div><i class="far fa-bookmark"></i> Kaydet</div>
                </div>
              </div>
            </div>
     <br> 
      `;
      newsData2 += `
      
      <div class="card card-shadow">
        <img src="${TrImage2}" class="card-img-top" alt="Haber 2">
        <div class="card-body">
          <b class="card-title">${TrName2}</b>
          <p class="card-text">${TrDescription2}</p>
        </div>
        <div class="card-footer">
          <div class="d-flex justify-content-between">
            <div><i class="far fa-thumbs-up"></i> Beğen</div>
            <div><i class="far fa-share-square"></i> Paylaş</div>
            <div><i class="far fa-bookmark"></i> Kaydet</div>
          </div>
        </div>
      </div>
<br> 
`;

    newsData3 += `
      
            <div class="card card-shadow">
              <img src="${TrImage3}" class="card-img-top" alt="Haber 2">
              <div class="card-body">
                <b class="card-title">${TrName3}</b>
                <p class="card-text">${TrDescription3}</p>
              </div>
              <div class="card-footer">
                <div class="d-flex justify-content-between">
                  <div><i class="far fa-thumbs-up"></i> Beğen</div>
                  <div><i class="far fa-share-square"></i> Paylaş</div>
                  <div><i class="far fa-bookmark"></i> Kaydet</div>
                </div>
              </div>
            </div>
     <br> 
      `;
     

      newsData4 += `
      
            <div class="card card-shadow">
              <img src="${TrImage4}" class="card-img-top" alt="Haber 2">
              <div class="card-body">
                <b class="card-title">${TrName4}</b>
                <p class="card-text">${TrDescription4}</p>
              </div>
              <div class="card-footer">
                <div class="d-flex justify-content-between">
                  <div><i class="far fa-thumbs-up"></i> Beğen</div>
                  <div><i class="far fa-share-square"></i> Paylaş</div>
                  <div><i class="far fa-bookmark"></i> Kaydet</div>
                </div>
              </div>
            </div>
     <br> 
      `;
 
    document.getElementById('news1').innerHTML = newsData1;
    document.getElementById('news2').innerHTML = newsData2;
    document.getElementById('news3').innerHTML = newsData3;
    document.getElementById('news4').innerHTML = newsData4;
    
    
  }
});

// SLİDER OLUŞTURDUĞUM KISIM 

HTTP.get(apiUrl, { headers }, (error, response) => {
  if (error) {
    console.error(error);
  } else {
    let trNews0 = response.data.result;
    let sliderNews = [];
    

    let TrApi = trNews0[0];
    let TrDescription = TrApi.description;
    let TrName = TrApi.name;
    let TrDate = TrApi.date;
    let TrImage = TrApi.image;
    let TrKey = TrApi.key;
    let TrSource = TrApi.source;
    let TrUrl = TrApi.url;
   
    sliderNews += `
      
    <div class="row">
      <div class="col-md-6">
          <img src="${TrImage}" width="750!important" height="500!important" class="img-fluid" alt="Responsive image">
      </div>
      <div class="col-md-6">
          <div class="p-5">
              <h4 >${TrName}</h4>
              <p class="lead">${TrDescription}</p>
          </div>
      </div>
  </div>
    `;
   
    document.getElementById('sliderNews').innerHTML = sliderNews;
    
  }
});


// LİVE KISMINI OLUŞTURUYORUM..

HTTP.get(apiUrl, { headers }, (error, response) => {
  if (error) {
    console.error(error);
  } else {
    let trNewsLive = response.data.result;
    let LiveNews = [];
    

    let TrApi = trNewsLive[5];
    let TrDescription = TrApi.description;
    let TrName = TrApi.name;
    let TrDate = TrApi.date;
    let TrImage = TrApi.image;
    let TrKey = TrApi.key;
    let TrSource = TrApi.source;
    let TrUrl = TrApi.url;
   
    LiveNews += `
      
    <div style="margin-top: -2px;" class="sidebar-image">
          <img width="436!important" height="246!important" src="${TrImage}" alt="Sidebar Resmi">
          <b>${TrDescription}</b>
        </div>
    `;
    //document.getElementById('news-container').innerHTML = newsData;
    document.getElementById('LiveNews').innerHTML = LiveNews;
    
  }
});



///  EDİTORUN SEÇİMLERİ OLUŞTUR

HTTP.get(apiUrl, { headers }, (error, response) => {
  if (error) {
    console.error(error);
  } else {
    let trNews = response.data.result;
  
    for (let i = 4; i < 6; i++) {
      const TrApi = trNews[i];
      const TrDescription = TrApi.description;
      const TrName = TrApi.name;
      const TrDate = TrApi.date;
      const TrImage = TrApi.image;
      const TrKey = TrApi.key;
      const TrSource = TrApi.source;
      const TrUrl = TrApi.url;
      
      let editorsPick = document.createElement("div");
      editorsPick.classList.add("news-description");
      editorsPick.innerHTML = `
      <div class="col-md-3">
				<img src="https://via.placeholder.com/326x170" class="img-fluid">
			</div>
			<div class="col-md-3 ">
				<b>Haber Başlığı 2 </b>
				<p class="news-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nihil ipsum optio saepe veniam accusamus numquam beatae architecto inventore dolore placeat, eveniet hic quis, sequi voluptatum nam. Doloribus, officia ab.</p>
			</div>
`;

document.getElementById("editorsPick").appendChild(editorsPick);

      
     
    } 
    //document.getElementById('editorsPick').innerHTML = editorsPick;
    //document.getElementById('sliderNews').innerHTML = sliderNews;
    
  }
});


/*
Meteor.startup(() => {  

  
  HTTP.get(apiUrl, { headers }, (error, response) => {
    if (error) {
      console.error(error);
    } else {
      let trNews = response.data.result;
      for (let i = 0; i < trNews.length; i++) {
        const TrApi = trNews[i];
        const TrDescription = TrApi.description;
        const TrName = TrApi.name;
        const TrDate = TrApi.date;
        const TrImage = TrApi.image;
        const TrKey = TrApi.key;
        const TrSource = TrApi.source;
        const TrUrl = TrApi.url;
        console.log(TrName);

   

    }
  }
  });   
 



 
  HTTP.get(apiUrl2, { headers }, (error, response) => {
    if (error) {
      console.error(error);
    } else {
      let deNews = response.data.result;
      for (let i = 0; i < deNews.length; i++) {
        const deApi = deNews[i];
        const deDescription = deApi.description;
        const deName = deApi.name;
        const deDate = deApi.date;
        const deImage = deApi.image;
        const deKey = deApi.key;
        const deSource = deApi.source;
        const deUrl = deApi.url;
        console.log(deKey);
      }
    }
  });   


 
  HTTP.get(apiUrl3, { headers }, (error, response) => {
    if (error) {
      console.error(error);
    } else {
      let enNews = response.data.result;
      for (let i = 0; i < enNews.length; i++) {
        const enApi = enNews[i];
        const enDescription = enApi.description;
        const enName = enApi.name;
        const enDate = enApi.date;
        const enImage = enApi.image;
        const enKey = enApi.key;
        const enSource = enApi.source;
        const enUrl = enApi.url;
        console.log(enDate);
      }
    }
  });   
});


/**    
 * 
 * BU KISMI AKTİF EDERSEM HTML KISIMDA Bİ DİV E İD VERİP EKRANA BASABİLİYORUM
 * 
 * 
const newsContainer = document.getElementById('news-container');


const apiUrl = 'https://api.collectapi.com/news/getNews?country=tr&tag=general';
const headers = {
  'Authorization': 'apikey 5uKnvUfcA05tIWGMfgBwuz:14MyPyxKJbY3vJANhQB3BG',
  'Content-Type': 'application/json'
};

HTTP.get(apiUrl, { headers }, (error, response) => {
  if (error) {
    console.error(error);
  } else {
    let trNews = response.data.result;
    let ul = document.createElement('ul');

    for (let i = 0; i < trNews.length; i++) {
      const TrApi = trNews[i];
      const TrName = TrApi.name;
      const li = document.createElement('li');
      li.innerText = TrName;
      ul.appendChild(li);
    }

    newsContainer.appendChild(ul);
  }
});*/



