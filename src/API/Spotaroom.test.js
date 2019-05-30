import Spotaroom from "./Spotaroom";

test(("Spotaroom API request test"), () =>{
    expect.assertions(2);
    return  Spotaroom.getInstance().getHomeCards()
        .then(data =>{
            expect(data.homecards[0]).toEqual({
                    "adId":121420,
                    "currencySymbol":"€",
                    "pricePerMonth":320,
                    "photoUrls":{"homecardHidpi":"https://sah-staging-photos-resized.s3-eu-west-1.amazonaws.com/pt_640_480/c4ab919c63db9324caece4152e035d72d87f749a7569e80276a42655.jpg"},
                    "title":"Light room in shared apartment in Puerta del Ángel, Madrid",
                    "type":"apartment",
                    "isFavorite":true
             });
             expect(data).toBeDefined();
        })
});