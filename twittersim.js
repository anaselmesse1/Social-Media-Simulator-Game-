 let ccounter = 0;
  let ccounterr = 0; //posts
 let fannns = 0 ; //fans
 let follo = 0 ; //followers
 let mm = 0 ;   //total views
 let mon = 0 ; //money-capital
 let v = 0  ; //views
 let l = 0 ; //likes
 let s = 0 ; //shares

//k,m,b function
function formatNumber(n) {
      if (n >= 1000000000) {
    return (n / 1000000000).toFixed(1) + 'B';
  }
  if (n >= 1000000) {
    return (n / 1000000).toFixed(1) + 'M';
  }
  if (n >= 1000) {
    return (n / 1000).toFixed(1) + 'K';
  }
  return n.toString();
}


//post button 

function t() {
  const mmm = document.getElementById('mm');
  const fann = document.getElementById('fanss');
  const foll = document.getElementById('followerss');
  const laa = document.getElementById('lastt');
  const laaa = document.getElementById('lasttt');
  const likess = document.getElementById('likess');
  const sharess = document.getElementById('sharess');
  const viewss = document.getElementById('viewss');
  const txter = document.getElementById('captt');
  const stt = document.getElementById('capt');
  const err = document.getElementById('err');
  const audiof = document.getElementById("audiof");
  const audior = document.getElementById("audior");

  if (txter.value.trim() === '') {
    err.innerHTML = '⚠️ You tried to post without writing anything. Please enter a caption before posting!';
    ccounterr++;
    audior.currentTime = 0;
    audior.play();
    err.style.color = 'red';
    return document.getElementById('fcc').innerHTML = '❌Failed: ' + ccounterr;
  }

  function similarityScore(text1, text2) {
    const words1 = text1.toLowerCase().split(/\s+/);
    const words2 = text2.toLowerCase().split(/\s+/);
    const set2 = new Set(words2);
    let commonCount = 0;
    for (const w of words1) {
      if (set2.has(w)) commonCount++;
    }
    return commonCount / ((words1.length + words2.length) / 2);
  }

  if (similarityScore(txter.value.trim(), stt.innerHTML) > 0.8) {
    err.innerHTML = "❗ No spamming! Your post is too similar to the last one.";
    ccounterr++;
    audior.currentTime = 0;
    audior.play();
    err.style.color = 'red';
    return document.getElementById('fcc').innerHTML = '❌Failed: ' + ccounterr;
  }

  // Passed validation: update last post text and success message
  stt.innerHTML = txter.value;
  err.style.color = 'greenyellow';
  err.innerHTML = `✨ Success! Your caption has been shared.`;
  ccounter++;
  audiof.currentTime = 0;
  audiof.play();
  document.getElementById('scc').innerHTML = '✅Success: ' + ccounter;

  // The rest of your existing code for updating fans, followers, likes, shares, views, money, etc.

  // --- keep your existing logic for incrementing fannns, follo, v, l, s here ---

  if (fannns >= 0 && fannns <= 100) {
    fannns += laa.innerHTML = Math.floor(Math.random() * 5) + Math.floor(Math.random() * 10);
    follo += laaa.innerHTML = Math.floor(Math.random() * 2) + Math.floor(Math.random() * 5);
    v = Math.floor(Math.random() * 20) + Math.floor(Math.random() * 5) + 2;
    if (viewss.innerHTML >= 5) {
      l = Math.floor(Math.random() * 2);
      s = Math.floor(Math.random() * 0);
    }
    if (v >= 10) {
      l = Math.floor(Math.random() * 5);
      s = Math.floor(Math.random() * 1);
    }
    if (v >= 15) {
      l = Math.floor(Math.random() * 8);
      s = Math.floor(Math.random() * 2);
    }
  }
  if (fannns > 100 && fannns <= 250) {
    fannns += laa.innerHTML = Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10);
    follo += laaa.innerHTML = Math.floor(Math.random() * 5) + Math.floor(Math.random() * 5);
    v = Math.floor(Math.random() * 100) + Math.floor(Math.random() * 20) + 10;
    if (v >= 20) {
      l = Math.floor(Math.random() * 8) + 3;
      s = Math.floor(Math.random() * 5);
    }
    if (v >= 50) {
      l = Math.floor(Math.random() * 15) + 5;
      s = Math.floor(Math.random() * 8) + 2;
    }
    if (v >= 100) {
      l = Math.floor(Math.random() * 20) + 10;
      s = Math.floor(Math.random() * 10) + 5;
    }
  }
  if (fannns > 250 && fannns <= 1000) {
    fannns += laa.innerHTML = Math.floor(Math.random() * 50) + Math.floor(Math.random() * 20);
    follo += laaa.innerHTML = Math.floor(Math.random() * 15) + Math.floor(Math.random() * 10);
    v = Math.floor(Math.random() * 600) + Math.floor(Math.random() * 200) + 50;
    if (v >= 50) {
      l = Math.floor(Math.random() * 15) + 5;
      s = Math.floor(Math.random() * 10);
    }
    if (v >= 100) {
      l = Math.floor(Math.random() * 30) + 5;
      s = Math.floor(Math.random() * 15) + 5;
    }
    if (viewss.innerHTML >= 200) {
      l = Math.floor(Math.random() * 50) + 10;
      s = Math.floor(Math.random() * 20) + 5;
    }
  }
  if (fannns > 1000 && fannns <= 5000) {
    fannns += laa.innerHTML = Math.floor(Math.random() * 300) + Math.floor(Math.random() * 50);
    follo += laaa.innerHTML = Math.floor(Math.random() * 50) + Math.floor(Math.random() * 15);
    v = Math.floor(Math.random() * 3000) + Math.floor(Math.random() * 500) + 800;
    if (v >= 800) {
      l = Math.floor(Math.random() * 100) + 80;
      s = Math.floor(Math.random() * 50) + 15;
    }
    if (v >= 1500) {
      l = Math.floor(Math.random() * 200) + 150;
      s = Math.floor(Math.random() * 30) + 20;
    }
    if (v >= 3000) {
      l = Math.floor(Math.random() * 200) + 200;
      s = Math.floor(Math.random() * 50) + 20;
    }
  }
  if (fannns > 5000 && fannns <= 10000) {
    fannns += laa.innerHTML = Math.floor(Math.random() * 600) + Math.floor(Math.random() * 220);
    follo += laaa.innerHTML = Math.floor(Math.random() * 30) + Math.floor(Math.random() * 100);
    v = Math.floor(Math.random() * 15000) + Math.floor(Math.random() * 10000) + 5000;
    if (v >= 5000) {
      l = Math.floor(Math.random() * 200) + 300;
      s = Math.floor(Math.random() * 70) + 15;
    }
    if (v >= 10000) {
      l = Math.floor(Math.random() * 500) + 400;
      s = Math.floor(Math.random() * 50) + 80;
    }
    if (v >= 15000) {
      l = Math.floor(Math.random() * 1000) + 400;
      s = Math.floor(Math.random() * 100) + 80;
    }
  }
  if (fannns > 10000 && fannns <= 300000) {
    fannns += laa.innerHTML = Math.floor(Math.random() * 1000) + Math.floor(Math.random() * 500);
    follo += laaa.innerHTML = Math.floor(Math.random() * 500) + Math.floor(Math.random() * 100);
    v = Math.floor(Math.random() * 50000) + Math.floor(Math.random() * 50000) + 20000;
    if (v >= 20000) {
      l = Math.floor(Math.random() * 2000) + 500;
      s = Math.floor(Math.random() * 200) + 100;
    }
    if (v >= 50000) {
      l = Math.floor(Math.random() * 5000) + 1000;
      s = Math.floor(Math.random() * 300) + 200;
    }
    if (v >= 80000) {
      l = Math.floor(Math.random() * 10000) + 2000;
      s = Math.floor(Math.random() * 400) + 300;
    }
  }
  if (fannns > 300000 && fannns <= 5000000) {
    fannns += laa.innerHTML = Math.floor(Math.random() * 3000) + Math.floor(Math.random() * 500);
    follo += laaa.innerHTML = Math.floor(Math.random() * 800) + Math.floor(Math.random() * 200);
    v = Math.floor(Math.random() * 100000) + Math.floor(Math.random() * 80000) + 50000;
    if (v >= 50000) {
      l = Math.floor(Math.random() * 4000) + 500;
      s = Math.floor(Math.random() * 400) + 100;
    }
    if (v >= 100000) {
      l = Math.floor(Math.random() * 8000) + 2000;
      s = Math.floor(Math.random() * 700) + 500;
    }
    if (v >= 150000) {
      l = Math.floor(Math.random() * 10000) + 5000;
      s = Math.floor(Math.random() * 400) + 900;
    }
  }
  if (fannns > 500000 && fannns <= 1000000) {
    fannns += laa.innerHTML = Math.floor(Math.random() * 5000) + Math.floor(Math.random() * 2000);
    follo += laaa.innerHTML = Math.floor(Math.random() * 1200) + Math.floor(Math.random() * 600);
    v = Math.floor(Math.random() * 500000) + Math.floor(Math.random() * 100000) + 70000;
    if (v >= 70000) {
      l = Math.floor(Math.random() * 8000) + 500;
      s = Math.floor(Math.random() * 1300) + 100;
    }
    if (v >= 200000) {
      l = Math.floor(Math.random() * 12000) + 2000;
      s = Math.floor(Math.random() * 1500) + 500;
    }
    if (v >= 500000) {
      l = Math.floor(Math.random() * 30000) + 5000;
      s = Math.floor(Math.random() * 4000) + 900;
    }
  }
  if (fannns > 1000000) {
    fannns += laa.innerHTML = Math.floor(Math.random() * 15000) + Math.floor(Math.random() * 2000);
    follo += laaa.innerHTML = Math.floor(Math.random() * 3000) + Math.floor(Math.random() * 1000);
    v = Math.floor(Math.random() * 2000000) + Math.floor(Math.random() * 2000000) + 500000;
    if (v >= 500000) {
      l = Math.floor(Math.random() * 30000) + 5000;
      s = Math.floor(Math.random() * 5300) + 1200;
    }
    if (v >= 1000000) {
      l = Math.floor(Math.random() * 90000) + 15000;
      s = Math.floor(Math.random() * 11500) + 1500;
    }
    if (v >= 2000000) {
      l = Math.floor(Math.random() * 200000) + 20000;
      s = Math.floor(Math.random() * 20000) + 10900;
    }
  }

  // Check for hashtags giving big boosts
  if (
    stt.innerHTML.includes('#life') ||
    stt.innerHTML.includes('#Depression') ||
    stt.innerHTML.includes('#Coding') ||
    stt.innerHTML.includes('#cooking') ||
    stt.innerHTML.includes('#football') ||
    stt.innerHTML.includes('#Tennis') ||
    stt.innerHTML.includes('#gaming')
  ) {
    fannns += 150;
    follo += 100;
    v += 2000;
    l += 100;
    s += 100;
  }

  // Update display counts
  fann.innerHTML = fannns;
  foll.innerHTML = follo;
  likess.innerHTML = l;
  sharess.innerHTML = s;
  viewss.innerHTML = v;

  // Calculate money
  money = Math.floor(l * 1.2) + Math.floor(s * 0.7) + Math.floor(fannns / 5) + Math.floor(follo / 10);
  document.getElementById('money').innerHTML = money;

  // Clear input box after posting
  txter.value = '';
}

   

  //likes, shares & views 
function h(hash){
 

  document.getElementById('captt').value  +=   hash  
}
  //es dauert etwa 2 stunden , mich diese programme zu erstellen.  



