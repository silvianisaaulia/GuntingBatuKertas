function getPilihanKomputer(){
    const komp = Math.random();

    if(komp < 0.34) return 'kertas';
    if (komp >= 0.34 && komp < 0.67) return 'gunting';
    return 'batu';
}

function getHasil(komp, player){
    if(player == komp) return 'SERI';
    if(player == 'kertas') return (komp == 'gunting') ? 'KALAH' 
    : 'MENANG';
    if(player == 'gunting') return (komp == 'kertas') ? 
    'MENANG' : 'KALAH';
    if(player == 'batu') return (komp == 'gunting') ? 'MENANG'
     : 'KALAH';
}

const pKertas = document.querySelector('.kertas');
pKertas.addEventListener('click', function(){
    const pilihanKomputer = getPilihanKomputer();
    const pilihanPlayer = pKertas.className;
    const hasil = getHasil(pilihanKomputer, pilihanPlayer);
    console.log('komp : '+ pilihanKomputer);
    console.log('player : '+ pilihanPlayer);
    console.log('hasil : ' + hasil);
    const imgKomputer = document.getElementsByTagName('img')[0];
    imgKomputer.setAttribute('src', 'asset/' + pilihanKomputer + '.png')

    const info = document.querySelector('.info');
    info.innerHTML = hasil;
});

const pGunting = document.querySelector('.gunting');
pGunting.addEventListener('click', function(){
    const pilihanKomputer = getPilihanKomputer();
    const pilihanPlayer = pGunting.className;
    const hasil = getHasil(pilihanKomputer, pilihanPlayer);
    console.log('komp : '+ pilihanKomputer);
    console.log('player : '+pilihanPlayer);
    console.log('hasil : ' + hasil);

const imgKomputer = document.getElementsByTagName('img')[0];
    imgKomputer.setAttribute('src', 'asset/'  + pilihanKomputer + '.png')

    const info = document.querySelector('.info');
    info.innerHTML = hasil;
});

const pBatu = document.querySelector('.batu');
pBatu.addEventListener('click', function(){
    const pilihanKomputer = getPilihanKomputer();
    const pilihanPlayer = pBatu.className;
    const hasil = getHasil(pilihanKomputer, pilihanPlayer);
    console.log('komp : '+ pilihanKomputer);
    console.log('player : '+pilihanPlayer);
    console.log('hasil : ' + hasil);

    const imgKomputer = document.getElementsByTagName('img')[0];
    imgKomputer.setAttribute('src', 'asset/'  + pilihanKomputer + '.png')

    const info = document.querySelector('.info');
    info.innerHTML = hasil;
});

// const pilihan = document.querySelectorAll('li img');    
// pilihan.forEach(function(pil){
//     pil.addEventListener('click', function(){
//         const pilihanKomputer = getPilihanKomputer();
//         const pilihanPlayer = pil.className;
//         const hasil = getHasil(pilihanKomputer, pilihanPlayer);

//         putar();

//         setTimeout(function(){
//         const imgKomputer = document.getElementsByTagName('img')[0];
//         imgKomputer.setAttribute('src', 'aset/' + pilihanKomputer + '.png');

//         const info = document.querySelector('.info');
//         info.innerHTML = hasil;
//         }, 100)
            
//     })
// });  

// function putar(){
//     const imgKomputer = document.querySelector('.img-komputer');
//     const gambar = ['kertas', 'gunting', 'batu'];
//     let i = 0;
//     const waktuMulai = new Date().getTime();
//     setInterval(function(){
//         if(new Date().getTime() - waktuMulai > 1000){
//             clearInterval;
//             return;
//         } 
//         imgKomputer.setAttribute('src', 'aset/' + gambar[i++] + '.png');
//             if(i == gambar.length) i = 0;
//     }, 100)    
// }