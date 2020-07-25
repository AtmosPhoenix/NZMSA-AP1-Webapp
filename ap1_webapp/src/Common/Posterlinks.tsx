import React from "react";

// JSON KEY CONVENTIONS:
// as the ghibli api }, but with spaces removed }, and the first letter of each word capitalized
// remove all apostrophes

// sourcing image files from wikipedia. should be more stable this way.
// todo: refactor to do this programmatically

let posterLinks = [
    { key: "castleInTheSky"             , imgUrl: "https://upload.wikimedia.org/wikipedia/en/f/f5/Castle_in_the_Sky_%281986%29.png" },
    { key: "graveOfTheFireflies"        , imgUrl: "https://upload.wikimedia.org/wikipedia/en/a/a5/Grave_of_the_Fireflies_Japanese_poster.jpg" },
    { key: "myNeighborTotoro"           , imgUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/My_Neighbor_Totoro_-_Tonari_no_Totoro_%28Movie_Poster%29.jpg/220px-My_Neighbor_Totoro_-_Tonari_no_Totoro_%28Movie_Poster%29.jpg" },
    { key: "kikisDeliveryService"       , imgUrl: "https://upload.wikimedia.org/wikipedia/en/0/07/Kiki%27s_Delivery_Service_%28Movie%29.jpg" },
    { key: "onlyYesterday"              , imgUrl: "https://upload.wikimedia.org/wikipedia/en/4/46/OYpost.jpg" },
    { key: "porcoRosso"                 , imgUrl: "https://upload.wikimedia.org/wikipedia/en/f/fc/Porco_Rosso_%28Movie_Poster%29.jpg" },
    { key: "pomPoko"                    , imgUrl: "https://upload.wikimedia.org/wikipedia/en/6/68/Pompokoposter.jpg" },
    { key: "whisperOfTheHeart"          , imgUrl: "https://upload.wikimedia.org/wikipedia/en/9/93/Whisper_of_the_Heart_%28Movie_Poster%29.jpg" },
    { key: "princessMononoke"           , imgUrl: "https://upload.wikimedia.org/wikipedia/en/8/8c/Princess_Mononoke_Japanese_poster.png" },
    { key: "myNeighborsTheYamadas"      , imgUrl: "https://upload.wikimedia.org/wikipedia/en/4/4b/My_Neighbors_the_Yamadas_%281999%29.jpg" },
    { key: "spiritedAway"               , imgUrl: "https://upload.wikimedia.org/wikipedia/en/d/db/Spirited_Away_Japanese_poster.png" },
    { key: "theCatReturns"              , imgUrl: "https://upload.wikimedia.org/wikipedia/en/8/8e/Cat_Returns.jpg" },
    { key: "howlsMovingCastle"          , imgUrl: "https://upload.wikimedia.org/wikipedia/en/a/a0/Howls-moving-castleposter.jpg" },
    { key: "talesFromEarthsea"          , imgUrl: "https://upload.wikimedia.org/wikipedia/en/e/e5/Gedo6sn.jpg" },
    { key: "ponyo"                      , imgUrl: "https://upload.wikimedia.org/wikipedia/en/9/9d/Ponyo_%282008%29.png" },
    { key: "arrietty"                   , imgUrl: "https://upload.wikimedia.org/wikipedia/en/e/e7/Karigurashi_no_Arrietty_poster.png" },
    { key: "fromUpOnPoppyHill"          , imgUrl: "https://upload.wikimedia.org/wikipedia/en/c/c9/From_Up_on_Poppy_Hill.png" },
    { key: "theWindRises"               , imgUrl: "https://upload.wikimedia.org/wikipedia/en/a/a3/Kaze_Tachinu_poster.jpg" },
    { key: "theTaleOfThePrincessKaguya" , imgUrl: "https://upload.wikimedia.org/wikipedia/en/6/68/The_Tale_of_the_Princess_Kaguya_%28poster%29.jpg" },
    { key: "whenMarnieWasThere"         , imgUrl: "https://upload.wikimedia.org/wikipedia/en/a/a7/When_Marnie_Was_There.png" }
]

export const placeholderPosterUrl = "placeholderPoster_lql.jpg";

export default posterLinks;
