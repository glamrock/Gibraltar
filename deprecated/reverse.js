var urls = ["https://tpb.ipredator.se/",
"http://www.getpirate.com/",
"http://livepirate.com/",
"https://piratereverse.info/",
"https://tpb.pirateparty.org.uk/",
"http://www.pirateflix.info/",
"http://anonynet.org:81/",
"http://unblockedpiratebay.com/",
"http://pirateshit.com/",
"http://labaia.ws/",
"http://tpb.swedendedicated.com/",
"http://thepirate.pro/",
"http://tpb.genyaa.org/",
"http://theunblockedbay.info/",
"http://tpb.thedaniel.dk/",
"http://tpb.fl.ax/",
"http://thepiratebay.se.seventhproxy.com/",
"http://www.pirateproxy.net/",
"http://virtualdojo.net/",
"http://internetbron.nl/",
"http://chuta.org/tpb/",
"http://tpb.5gg.biz/",
"http://thepiratebay.tn/",
"http://pirateproxy.org.ua/",
"http://tpb.dota2lore.com/",
"http://mc2dn.name/thehydrabay/",
"http://tpb.h0lm.net/",
"http://tpb.skit.org.ua/"
];

function goRandom( )
{
    location.href = urls[ Math.floor( Math.random() * urls.length ) ];
    return false;
}
