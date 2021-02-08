// exercise 5.2 - Ayelet Danieli - Switch
"use strict";
///////////////////////////////////////////


let whatRank= (language)  => {
    let output = '';
    switch(language.toLowerCase()) 
    {
        case 'mandarin':
            output = 'MOST number of native speakers';
            break;
        case 'spanish':
            output = '2nd place in number of native speakers';
            break;
        case 'english':
            output = '3rd place';
            break;
        case 'hindi':
            output = 'Number 4';
            break;
        case 'arabic':
            output = '5th most spoken language';
            break;
        default:
            output = 'Not in top 5';
    }
    return output;   
}

let languages = ['hebrew', 'German', 'English', 'norwegian', 'mandarin', 'hindi'];
languages.forEach(function(lang) {
    console.log(lang, ':', whatRank(lang));
});
