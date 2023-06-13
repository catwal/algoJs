/*1-6*/
function conversion(degCel) {
    if(typeof(degCel) === "number"){
        // console.log(degCel * (9/5) + 32)
    }else{
        // console.log('Données en entrée non correcte')
    }
    return 'test';
}

conversion('test');

/*2-8*/
function returnSentenceInversed(str){
    //concatener les methodes !
    let sentenceReversed = str.split('').reverse().join('');
    // console.log(sentenceReversed)
}

returnSentenceInversed("Bonjour à tous");

/*3-10*/
function factorisation(n) {
    //attention à ce que je veux iterer !
    for(let i = 1; n > 1; n--){
        i = n * i
        // console.log(i)
    }

}
factorisation(5);

/*4-12*/
function finalWordsAreSame(str, final) {
    if(str.slice(-final.length) === final){
        // console.log('similaire');
    }else {
        // console.log('pas similaire')
    }
}

finalWordsAreSame("tentacule", "le");

/*5-14*/
function greaterNumber(arr){
    let arrayNew = [];
    for(let i = 0; i < arr.length; i++){
        arrayNew.push(Math.max(...arr[i]))
    }
    // console.log(arrayNew)

    let array2 = [];
    for(let i = 0; i < arr.length; i++){
        /*valeur par defaut de départ*/
        nbMax = arr[i][0];
        /*depart du deuxième element du tableau*/
        for(let j = 1; j < arr[i].length; j++){
            /*comparaison dans le tableau de chaque element entre eux*/
            if(nbMax < arr[i][j]){
                nbMax = arr[i][j]
            }
        }
        array2.push(nbMax)
    }
    // console.log(array2)

}

greaterNumber([
    [1,5,8,3],
    [15,47,88,26],
    [32,35,37,39],
    [3000, 1001,857,1]
])

/*6-16*/
function majWords(str){
    var newSentence = '';
    var sentenceSplitted = str.split(' ');
    sentenceSplitted.map(function(word){
        let firstLetterUpWords = word.charAt(0).toUpperCase() + word.slice(1);
        newSentence = newSentence + firstLetterUpWords + ' ' ;
    })
    // console.log(newSentence);

    const result = sentenceSplitted.map(function(val){
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    })
    // console.log(result.join(" "))
}

majWords("Les sanglots longs des violons de l'automne")

/*7-21 voir récursion*/
function trouverLongueurMax(str){
    let array = str.split(' ');

    //**boucle for
    let wordMax = 0;
    for(let i = 0; i < array.length; i++){
        if(wordMax < array[i].length){
            wordMax = array[i].length
        }
    }
    // console.log(wordMax);

       //** avec reduce: accumulateur et valeur actuelle
       /*return array.reduce(function (accu, value) {
         //  console.log(Math.max(accu, value.length));
           return Math.max(accu, value.length);
       //valeur initiale de accu
       }, 0)*/

    //** recursion avec slice et splice
    if(array.length === 1){
        // console.log(array[0].length)
        return array[0].length;
    }

    if(array[0].length >= array[1].length){
        array.splice(1,1)
        return trouverLongueurMax(array.join(' '))
    }

    if(array[0].length <= array[1].length){
        return trouverLongueurMax(array.slice(1, array.length).join(' '))
    }

}

trouverLongueurMax("Du sublime au ridicule il n'y a qu'un pas");

/*8-24*/
function insere(arr, num){
    arr.push(num);
    arraySort = arr.sort();
    // console.log(arraySort.indexOf(num))
}

insere([30, 45, 87, 96, 54, 29], 60);

/*9-26*/
function memeLettres(arr){
    let firstWord = arr[0].toLowerCase();
    let secondWord = arr[1].toLowerCase();

    for(var i = 0; i < secondWord.length; i++){
        if(firstWord.indexOf(secondWord[i]) === -1){
            // console.log(false)
        }
    }
    // console.log(true)
}

memeLettres(['concupiscence', 'sens']);

/*10-28 voir solution*/
function additionner(arr){
    let min = Math.min(...arr);
    let max = Math.max(...arr);

    let result = 0;
    for (let i = min; i < max + 1; i++){
        result += i;
    }
    console.log(result)

}

additionner([1, 4]);
