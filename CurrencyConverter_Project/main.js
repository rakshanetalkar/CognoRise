let country_code={
    "AED" : "AE",
    "AFN" : "AF",
    "XCD" : "AG",
    "ALL" : "AL",
    "AMD" : "AM",
    "ANG" : "AN",
    "AOA" : "AO",
    "AQD" : "AQ",
    "ARS" : "AR",
    "AUD" : "AU",
    "AZN" : "AZ",
    "BAM" : "BA",
    "BBD" : "BB",
    "BDT" : "BD",
    "XOF" : "BE",
    "BGN" : "BG",
    "BHD" : "BH",
    "BIF" : "BI",
    "BMD" : "BM",
    "BND" : "BN",
    "BOB" : "BO",
    "BRL" : "BR",
    "BSD" : "BS",
    "NOK" : "BV",
    "BWP" : "BW",
    "BYR" : "BY",
    "BZD" : "BZ",
    "CAD" : "CA",
    "CDF" : "CD",
    "XAF" : "CF",
    "CHF" : "CH",
    "CLP" : "CL",
    "CNY" : "CN",
    "COP" : "CO",
    "CRC" : "CR",
    "CUP" : "CU",
    "CVE" : "CV",
    "CYP" : "CY",
    "CZK" : "CZ",
    "DJF" : "DJ",
    "DKK" : "DK",
    "DOP" : "DO",
    "DZD" : "DZ",
    "ECS" : "EC",
    "EEK" : "EE",
    "EGP" : "EG",
    "ETB" : "ET",
    "EUR" : "FR",
    "FJD" : "FJ",
    "FKP" : "FK",
    "GBP" : "GB",
    "GEL" : "GE",
    "GGP" : "GG",
    "GHS" : "GH",
    "GIP" : "GI",
    "GMD" : "GM",
    "GNF" : "GN",
    "GTQ" : "GT",
    "GYD" : "GY",
    "HKD" : "HK",
    "HNL" : "HN",
    "HRK" : "HR",
    "HTG" : "HT",
    "HUF" : "HU",
    "IDR" : "ID",
    "ILS" : "IL",
    "INR" : "IN",
    "IQD" : "IQ",
    "IRR" : "IR",
    "ISK" : "IS",
    "JMD" : "JM",
    "JOD" : "JO",
    "JPY" : "JP",
    "KES" : "KE",
    "KGS" : "KG",
    "KHR" : "KH",
    "KMF" : "KM",
    "KPW" : "KP",
    "KRW" : "KR",
    "KWD" : "KW",
    "KYD" : "KY",
    "KZT" : "KZ",
    "LAK" : "LA",
    "LBP" : "LB",
    "LKR" : "LK",
    "LRD" : "LR",
    "LSL" : "LS",
    "LTL" : "LT",
    "LVL" : "LV",
    "LYD" : "LY",
    "MAD" : "MA",
    "MDL" : "MD",
    "MGA" : "MG",
    "MKD" : "MK",
    "MMK" : "MM",
    "MNT" : "MN",
    "MOP" : "MO",
    "MRO" : "MR",
    "MTL" : "MT",
    "MUR" : "MU",
    "MVR" : "MV",
    "MWK" : "MW",
    "MXN" : "MX",
    "MYR" : "MY",
    "MZN" : "MZ",
    "NAD" : "NA",
    "XPF" : "NC",
    "NGN" : "NG",
    "NIO" : "NI",
    "NPR" : "NP",
    "NZD" : "NZ",
    "OMR" : "OM",
    "PAB" : "PA",
    "PEN" : "PE",
    "PGK" : "PG",
    "PHP" : "PH",
    "PKR" : "PK",
    "PLN" : "PL",
    "PYG" : "PY",
    "QAR" : "QA",
    "RON" : "RO",
    "RSD" : "RS",
    "RUB" : "RU",
    "RWF" : "RW",
    "SAR" : "SA",
    "SBD" : "SB",
    "SCR" : "SC",
    "SDG" : "SD",
    "SEK" : "SE",
    "SGD" : "SG",
    "SKK" : "SK",
    "SLL" : "SL",
    "SOS" : "SO",
    "SRD" : "SR",
    "STD" : "ST",
    "SVC" : "SV",
    "SYP" : "SY",
    "SZL" : "SZ",
    "THB" : "TH",
    "TJS" : "TJ",
    "TMT" : "TM",
    "TND" : "TN",
    "TOP" : "TO",
    "TRY" : "TR",
    "TTD" : "TT",
    "TWD" : "TW",
    "TZS" : "TZ",
    "UAH" : "UA",
    "UGX" : "UG",
    "USD" : "US",
    "UYU" : "UY",
    "UZS" : "UZ",
    "VEF" : "VE",
    "VND" : "VN",
    "VUV" : "VU",
    "YER" : "YE",
    "ZAR" : "ZA",
    "ZMK" : "ZM",
    "ZWD" : "ZW"
}

const dropList=document.querySelectorAll(".dropDown-list select");
const fromCurrency=document.querySelector(".from select");
const toCurrency=document.querySelector(".to select");
const getButton=document.querySelector("form button");

for (let i = 0; i < dropList.length; i++) {
    
    for(currency_code in country_code){
        //selected INR by default as FROM currency and USD as TO currency
        let selected;
        if(i == 0){
            selected = currency_code == "INR" ? "selected" : "";
        }
        else if(i == 1){
            selected = currency_code == "USD" ? "selected" : "";
        }
        //creating option tag with passing currency code as a text and value
        let optionTag=`<option value="${currency_code}" ${selected}>${currency_code}</option>`;
        //console.log(optionTag);

        //inserting options tag inside select tag
        dropList[i].insertAdjacentHTML("beforeend", optionTag);
    }
    dropList[i].addEventListener("change", e =>{
        loadFlag(e.target);//calling loadflag with passing target element as an argument
    });
}
function loadFlag(element){
    for(code in country_code){
        if (code == element.value) { // if currency code of country list is equal to option value
            let imgTag = element.parentElement.querySelector("img");//selecting img tag of particular drop list
            //passing country_code of a selected currency_code in a img url
            imgTag.src=`https://flagsapi.com/${country_code[code]}/shiny/64.png`;
        }
    }
}
window.addEventListener("load", () =>{
    getExchangeRate();
});

getButton.addEventListener("click", e=>{
    e.preventDefault();//preventing form from submitting
    getExchangeRate();
});

const exchangeIcon=document.querySelector('.dropDown-list .icon');
exchangeIcon.addEventListener("click",()=>{
    //swapping currency code 
    let tempcode=fromCurrency.value;
    fromCurrency.value=toCurrency.value;
    toCurrency.value=tempcode
    loadFlag(fromCurrency);
    loadFlag(toCurrency);
    getExchangeRate();
});

function getExchangeRate(){
    const amount=document.querySelector(".amount input");
    let amountValue= amount.value;
    //if user not taken any value or 0 value then we will take one
    if (amountValue == "" || amountValue == "0") {
        amount.value="1";
        amountValue=1;
    }

    let url=`https://v6.exchangerate-api.com/v6/1b7600c8ce34c2c7756d4bc3/latest/${fromCurrency.value}`;
    
    //fetching api response and returning it with parsing into json object and in another then method receving that object
    fetch(url).then(response => response.json()).then(result => {
        let exchangeRate=result.conversion_rates[toCurrency.value];//taking converted amount from json
        let totalExchangeRate=(amountValue * exchangeRate).toFixed(2);

        const exchangeRateText=document.querySelector(".exchangeRate");
        exchangeRateText.innerText = `${amountValue} ${fromCurrency.value} = ${totalExchangeRate} ${toCurrency.value}`;
    }).catch(()=>{
        //if user is offline or other error occured while featching data then catch block run
        exchangeRateText.innerText="Something went wroung";
    })
}