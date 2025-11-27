var wms_layers = [];


        var lyr_Voyagernolabelsretina_0 = new ol.layer.Tile({
            'title': 'Voyager [no labels] (retina)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_Baraslayerlokalplanforslag_1 = new ol.format.GeoJSON();
var features_Baraslayerlokalplanforslag_1 = format_Baraslayerlokalplanforslag_1.readFeatures(json_Baraslayerlokalplanforslag_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Baraslayerlokalplanforslag_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Baraslayerlokalplanforslag_1.addFeatures(features_Baraslayerlokalplanforslag_1);
var lyr_Baraslayerlokalplanforslag_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Baraslayerlokalplanforslag_1, 
                style: style_Baraslayerlokalplanforslag_1,
                popuplayertitle: 'Baraslayer — lokalplanforslag',
                interactive: true,
    title: 'Baraslayer — lokalplanforslag<br />\
    <img src="styles/legend/Baraslayerlokalplanforslag_1_0.png" /> 153<br />\
    <img src="styles/legend/Baraslayerlokalplanforslag_1_1.png" /> 242<br />\
    <img src="styles/legend/Baraslayerlokalplanforslag_1_2.png" /> <br />' });
var format_SSsamletlayerfrededeomrder_2 = new ol.format.GeoJSON();
var features_SSsamletlayerfrededeomrder_2 = format_SSsamletlayerfrededeomrder_2.readFeatures(json_SSsamletlayerfrededeomrder_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SSsamletlayerfrededeomrder_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SSsamletlayerfrededeomrder_2.addFeatures(features_SSsamletlayerfrededeomrder_2);
var lyr_SSsamletlayerfrededeomrder_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SSsamletlayerfrededeomrder_2, 
                style: style_SSsamletlayerfrededeomrder_2,
                popuplayertitle: 'SS-samlet-layer — frededeområder',
                interactive: false,
    title: 'SS-samlet-layer — frededeområder<br />\
    <img src="styles/legend/SSsamletlayerfrededeomrder_2_0.png" /> Damhuså<br />\
    <img src="styles/legend/SSsamletlayerfrededeomrder_2_1.png" /> Kalvebod Kile<br />\
    <img src="styles/legend/SSsamletlayerfrededeomrder_2_2.png" /> Rehbæks Eng<br />\
    <img src="styles/legend/SSsamletlayerfrededeomrder_2_3.png" /> Vestvolden<br />\
    <img src="styles/legend/SSsamletlayerfrededeomrder_2_4.png" /> Vigerslevparken, Damhussøen, Damhusengen, Krogebjergparken<br />\
    <img src="styles/legend/SSsamletlayerfrededeomrder_2_5.png" /> <br />' });
var format_Baraslayerlokalplanvedtaget_3 = new ol.format.GeoJSON();
var features_Baraslayerlokalplanvedtaget_3 = format_Baraslayerlokalplanvedtaget_3.readFeatures(json_Baraslayerlokalplanvedtaget_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Baraslayerlokalplanvedtaget_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Baraslayerlokalplanvedtaget_3.addFeatures(features_Baraslayerlokalplanvedtaget_3);
var lyr_Baraslayerlokalplanvedtaget_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Baraslayerlokalplanvedtaget_3, 
                style: style_Baraslayerlokalplanvedtaget_3,
                popuplayertitle: 'Baraslayer — lokalplanvedtaget',
                interactive: true,
    title: 'Baraslayer — lokalplanvedtaget<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_0.png" /> Areal ved Hvidovregårds Allé, Bjergagervej og Hjørnagervej<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_1.png" /> Areal ved Hvidovrevej / Svendebjergvej<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_2.png" /> Arealer ved Hvidovre Enghavevej<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_3.png" /> AV Miljø<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_4.png" /> Avedøre Kloakværk<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_5.png" /> Avedøre Landsby<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_6.png" /> Avedøre Stationbys friarealer langs Avedøre Tværvej<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_7.png" /> Avedøre Stationsby<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_8.png" /> Avedøre Stationsby - Store Hus og Centerstrøget<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_9.png" /> Avedøregård Villaby, Storegårdens Villaby og Vesterkær<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_10.png" /> Avedørelejren<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_11.png" /> Avedøreværket<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_12.png" /> Badmintonhal og friluftsbad ved Præstemosen<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_13.png" /> Baunevangen - Bevarende best. for tæt-lav boligbebyggelse samt opførelse af ældreboliger<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_14.png" /> Bevarende bestemmelser for rækkehusene Kløverprisvej 15-61 og 24-70<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_15.png" /> Blandet bolig- og erhvervsområde ved Holmelundsvej, Hvidovrevej og Landlystvej<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_16.png" /> Blandet byområde ved Gungevej og Arnold Nielsens Boulevard<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_17.png" /> Bolig- og butiksbebyggelse på Gl. Køge Landevej 256-260<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_18.png" /> Bolig- og erhvervsområde ved Hvidovre Station<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_19.png" /> Boligbebyggelse på Langkildevej 5<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_20.png" /> Boligbyggeri ved Vojensvej<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_21.png" /> Boliger for ældre - Claus Petersens Allé<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_22.png" /> Boliger i Filmbyen<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_23.png" /> Boliger i tagetager i Lejerbos Afd. 2 / Hvidovrevej - Høvedstensvej<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_24.png" /> Boliger mv. ved Frihedens Butikscenter<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_25.png" /> Boliger på Avedøre Tværvej 60-66<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_26.png" /> Boliger på Landlystvej 42<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_27.png" /> Boliger på Langkildevej 1<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_28.png" /> Boliger på Risbjergvej 22<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_29.png" /> Boligområde mellem Femagervej og Rebæk Allé<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_30.png" /> Boligområde ved Hvidovregade, Hvidovre Álle og Åstrupgårdsvej<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_31.png" /> Boligområde ved Hvidovrevej og Landlystvej<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_32.png" /> Boligområde ved Landlystvej og Femagervej<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_33.png" /> Boligområde ved Vojensvej<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_34.png" /> Boligområdet Toftegården<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_35.png" /> Bredalsparken - bevarende lokalplan for etageboligbebyggelse<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_36.png" /> Byggecenter på Gammel Køge Landevej<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_37.png" /> Center- og boligbebyggelse ved Frihedens Butikscenter<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_38.png" /> Centerformål og bypark ved Hjulmagerporten<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_39.png" /> Copenhagen Business Park på Avedøre Holme<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_40.png" /> En skole på Gungevej 1 og 2<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_41.png" /> Energianlæg ved rideskolen på Avedøre Slettevej<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_42.png" /> Erhvervsareal ved Åmarkens Station<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_43.png" /> Erhvervsområde ved Vojensvej/Hvidovrevej<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_44.png" /> Erhvervsområdet Arnold Nielsens Boulevard 124-144<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_45.png" /> Erhvervsområdet Avedøre Holme<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_46.png" /> Et område tiloffentlige formål omkring Rådhuset<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_47.png" /> Etageboligbebyggelse i 2 etager ved Strandmarkshave<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_48.png" /> Etageboliger på Landlystvej - Samsonparken II<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_49.png" /> Etageboliger ved Landlystvej<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_50.png" /> Etagehuse ved Spurvehøjvej og Risbjerg Kirkegård<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_51.png" /> Filmbyen<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_52.png" /> For \'Råhavnen\' ved Avedøre Holme<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_53.png" /> For arealerne mellem Mågevej og motorvejen<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_54.png" /> for byudviklingsområde ved Tårnfalkevej<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_55.png" /> for center- og boligformål på Hvidovrevej 59A-83A, Landlystvej 44-46A og Holmelundsvej 2A<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_56.png" /> for den nordlige del af Strandmarkskvarteret<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_57.png" /> for et bofællesskab på Parallelvej 47<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_58.png" /> For et bolig- og erhvervsområde i Avedøre<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_59.png" /> For et boligområde i Avedøre<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_60.png" /> For et boligområde i Avedøre, Gl. Køge Landevej<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_61.png" /> for et boligområde mellem Hvidovrevej og Vigerslevparken<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_62.png" /> for et boligområde mellem Hvidovrevej, Brostykkevej og Gammel Køge Landevej<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_63.png" /> for et natur- og byområde øst for Byvej<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_64.png" /> For et område i Avedøre<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_65.png" /> For et område i Avedøre Stationsby<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_66.png" /> For et område ved Byvej<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_67.png" /> For et område ved Gammel Køge Landevej og Catherine Boothsvej<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_68.png" /> For et område ved Risbjerg Kirke<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_69.png" /> for etageboliger og butikker ved Kløverprisvej og Hvidovrevej<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_70.png" /> for Grækerkvarteret<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_71.png" /> for Hvidovre Stadion<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_72.png" /> for Hvidovre Torv og den nordlige del af Hvidovregade<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_73.png" /> for offentlige formål på Bibliotekvej 50-52<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_74.png" /> for offentlige formål på Hvidovregade 20 og 47-51<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_75.png" /> for seniorbofælleskab på Hvidovrevej 80<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_76.png" /> for Strandvang (forbud mod tagterrasser)<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_77.png" /> Gl. Køge Landevej 280<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_78.png" /> Holmegårdsskolen<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_79.png" /> Hvidborg<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_80.png" /> Hvidovre Havn<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_81.png" /> Hvidovre Hospital<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_82.png" /> Hvidovre Stationscenter<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_83.png" /> Hvidovregade og Bytoften<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_84.png" /> Hvidovregade og Toft Sørensens Vænge<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_85.png" /> Hvidovrevejs Butikstorv<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_86.png" /> Idrætsvej / Cathrine Booths Vej<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_87.png" /> Industrikvarteret Avedøre Holme<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_88.png" /> Klubbygning i Kystagerparken<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_89.png" /> Klubhus ved Rebæk Søpark<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_90.png" /> Kolonihaveområde ved Bredholtvej - H/F Dahlia<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_91.png" /> Kolonihaveområde ved Kettevej<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_92.png" /> Kolonihaveområdet Præstemosen<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_93.png" /> Krogsholtsbjerg<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_94.png" /> Krogstenshaveområdet - område til off. formål og boliger<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_95.png" /> Langhusene og Dybenskærhave<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_96.png" /> Lav boligbebyggelse \'Byholmene\' ved Kettevej<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_97.png" /> Lokalcenter Hvidovrevej 85-95<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_98.png" /> Lokalcenter på Hvidovrevej 94-110A og Kløverprisvej 3-3A<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_99.png" /> Lokalcenter ved Kettevej<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_100.png" /> Lokalplan 127 med Tillæg nr. 1<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_101.png" /> Lokalplan for facader og skiltning langs Hvidovrevej og område<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_102.png" /> Matr. nr. 11e, Strandby Allé<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_103.png" /> Menighedshus Tårnfalkevej<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_104.png" /> Ny boligbebyggelse Hvidovrevej 135 og Baunebakkevej 8<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_105.png" /> Nyt menighedshus ved Hvidovre Kirke<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_106.png" /> Offentlige formål ved Bødkerporten<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_107.png" /> Offentlige formål ved Næsborgvej<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_108.png" /> Område for etageboligbebyggelse i 2 etager ved Strandhavevej<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_109.png" /> Område for tæt-lav boligbebyggelse - \'Pagegøjehusene\'<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_110.png" /> Område langs Hvidovrevej<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_111.png" /> Område nord for Køgebugtbanen og øst for Byvej<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_112.png" /> Område omkring "Beringgård"<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_113.png" /> Område omkring Hvidovre Strandvej, Hvidovre Enghavevej, Strandby Allé, Strandmarksvej m.fl.<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_114.png" /> Område omkring Hvidovregade og Hvidovre Allé<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_115.png" /> Område omkring Klardam, Kærmark, M. Bechs Allé, Allingvej m.fl.<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_116.png" /> Område omkring Sønderkær og Vestkærs Allé<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_117.png" /> Område til boligformål ved Holmelundsvej<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_118.png" /> Område til erhvervsformål m.v. ved Vigerslev Allé<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_119.png" /> Område ved Avedøre Havnevej, Præstemosen og jernbanen<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_120.png" /> Område ved Avedøre Holme<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_121.png" /> Område ved Brostykkevej og Risbjergvej<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_122.png" /> Område ved Brostykkevej, Gl. Køge Landevej, Idrætsvej  og Hvidovrevej<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_123.png" /> Område ved Byvej og Gl. Køge Landevej<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_124.png" /> Område ved Byvej, Køge Bugt Banen og Frydenhøjskolen<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_125.png" /> Område ved Egevolden og Frydenhøjparken<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_126.png" /> Område ved Frydenhøjparken og Gl. Køge Landevej<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_127.png" /> Område ved Gl. Køge Landevej og Mågevej<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_128.png" /> Område ved Hvidovrevej og Bjeverskov Allé<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_129.png" /> Område ved Hvidovrevej og Ketilstorp Allé<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_130.png" /> Område ved Høvedstensvej, Arnold Nielsens Boulevard, Biblioteksvej og Gungevej<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_131.png" /> Område ved Idrætsvej, Brostykkevej, Sydkærsvej og Karise Allé<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_132.png" /> Område ved Kettegård Allé<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_133.png" /> Område ved Kettevej<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_134.png" /> Område ved Krogstens Allé<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_135.png" /> Område ved Lodsvej og Strandmarksvej<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_136.png" /> Område ved Menelaos Boulevard og Ketilstorp Allé<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_137.png" /> Område ved Nordkærvej, Hvidovrevej og Holmelundsvej<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_138.png" /> Område ved Præstemosen og M. Bechs Allé<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_139.png" /> Områder ved Hvidovrevej<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_140.png" /> Phønixhusene<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_141.png" /> Præstemoseskolen mv.<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_142.png" /> Redningsstationer m.v.<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_143.png" /> Rekreativt landskab ved Brøndby Havnevej<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_144.png" /> Risbjerggård, Hvidovre Bymidte<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_145.png" /> Risbjergkvarteret<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_146.png" /> Rækkehusbebyggelse ved Krebsevej og Strandholms Allé<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_147.png" /> Rækkehusbebyggelsen Christiansdalparken<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_148.png" /> Rækkehuse i Engstrupgaards Ejerlaug<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_149.png" /> Skole- og institutionsområde ved Kirkegade<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_150.png" /> Skøjtetræningshal og curlinghal ved Frihedens Idrætscenter<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_151.png" /> Skårupvej<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_152.png" /> Strandhaven II<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_153.png" /> Strandhaven, tæt-lav boligbebyggelse<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_154.png" /> Støjafskærmning nord for Amagermotorvejen, øst for Avedøre Havnevej.<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_155.png" /> Sønderkærhave<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_156.png" /> Sønderkærskolen<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_157.png" /> Tæt lav boligbebyggelse på Lodsvej<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_158.png" /> Tæt-lav boligbebyggelse ved Langkildevej<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_159.png" /> Tæt-lav boligbebyggelsen "Kettehuse"<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_160.png" /> Vindmøller på Avedøre Holme<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_161.png" /> Ældreboliger på Arnold Nielsens Boulevard<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_162.png" /> Ældreboliger ved Bredalsparken på Brostykkevej<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_163.png" /> Ældreboliger ved plejehjemmet Strandmarkshave<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_164.png" /> Ændring af anvendelse fra erhverv til boligformål<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_165.png" /> Åben-lav boligbebyggelsen "Rødkløver"<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_166.png" /> Åben-lave boliger på Vojensvej<br />\
    <img src="styles/legend/Baraslayerlokalplanvedtaget_3_167.png" /> <br />' });
var format_SSsamletlayerkommuneplan_4 = new ol.format.GeoJSON();
var features_SSsamletlayerkommuneplan_4 = format_SSsamletlayerkommuneplan_4.readFeatures(json_SSsamletlayerkommuneplan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SSsamletlayerkommuneplan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SSsamletlayerkommuneplan_4.addFeatures(features_SSsamletlayerkommuneplan_4);
var lyr_SSsamletlayerkommuneplan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SSsamletlayerkommuneplan_4, 
                style: style_SSsamletlayerkommuneplan_4,
                popuplayertitle: 'SS-samlet-layer — kommuneplan',
                interactive: true,
                title: '<img src="styles/legend/SSsamletlayerkommuneplan_4.png" /> SS-samlet-layer — kommuneplan'
            });
var format_Folkeskoler_5 = new ol.format.GeoJSON();
var features_Folkeskoler_5 = format_Folkeskoler_5.readFeatures(json_Folkeskoler_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Folkeskoler_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Folkeskoler_5.addFeatures(features_Folkeskoler_5);
var lyr_Folkeskoler_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Folkeskoler_5, 
                style: style_Folkeskoler_5,
                popuplayertitle: 'Folkeskoler',
                interactive: true,
                title: '<img src="styles/legend/Folkeskoler_5.png" /> Folkeskoler'
            });
var format_Togstationer_6 = new ol.format.GeoJSON();
var features_Togstationer_6 = format_Togstationer_6.readFeatures(json_Togstationer_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Togstationer_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Togstationer_6.addFeatures(features_Togstationer_6);
var lyr_Togstationer_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Togstationer_6, 
                style: style_Togstationer_6,
                popuplayertitle: 'Togstationer',
                interactive: true,
                title: '<img src="styles/legend/Togstationer_6.png" /> Togstationer'
            });
var format_Hospitaler_7 = new ol.format.GeoJSON();
var features_Hospitaler_7 = format_Hospitaler_7.readFeatures(json_Hospitaler_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hospitaler_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hospitaler_7.addFeatures(features_Hospitaler_7);
var lyr_Hospitaler_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hospitaler_7, 
                style: style_Hospitaler_7,
                popuplayertitle: 'Hospitaler',
                interactive: true,
                title: '<img src="styles/legend/Hospitaler_7.png" /> Hospitaler'
            });
var format_Banker_8 = new ol.format.GeoJSON();
var features_Banker_8 = format_Banker_8.readFeatures(json_Banker_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Banker_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Banker_8.addFeatures(features_Banker_8);
var lyr_Banker_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Banker_8, 
                style: style_Banker_8,
                popuplayertitle: 'Banker',
                interactive: true,
                title: '<img src="styles/legend/Banker_8.png" /> Banker'
            });
var format_Religisebygninger_9 = new ol.format.GeoJSON();
var features_Religisebygninger_9 = format_Religisebygninger_9.readFeatures(json_Religisebygninger_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Religisebygninger_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Religisebygninger_9.addFeatures(features_Religisebygninger_9);
var lyr_Religisebygninger_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Religisebygninger_9, 
                style: style_Religisebygninger_9,
                popuplayertitle: 'Religiøse bygninger',
                interactive: true,
                title: '<img src="styles/legend/Religisebygninger_9.png" /> Religiøse bygninger'
            });
var format_Barer_10 = new ol.format.GeoJSON();
var features_Barer_10 = format_Barer_10.readFeatures(json_Barer_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Barer_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Barer_10.addFeatures(features_Barer_10);
var lyr_Barer_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Barer_10, 
                style: style_Barer_10,
                popuplayertitle: 'Barer',
                interactive: true,
                title: '<img src="styles/legend/Barer_10.png" /> Barer'
            });
var format_Restauranter_11 = new ol.format.GeoJSON();
var features_Restauranter_11 = format_Restauranter_11.readFeatures(json_Restauranter_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Restauranter_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Restauranter_11.addFeatures(features_Restauranter_11);
var lyr_Restauranter_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Restauranter_11, 
                style: style_Restauranter_11,
                popuplayertitle: 'Restauranter',
                interactive: true,
                title: '<img src="styles/legend/Restauranter_11.png" /> Restauranter'
            });
var format_SSsamletlayerBibliotek_12 = new ol.format.GeoJSON();
var features_SSsamletlayerBibliotek_12 = format_SSsamletlayerBibliotek_12.readFeatures(json_SSsamletlayerBibliotek_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SSsamletlayerBibliotek_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SSsamletlayerBibliotek_12.addFeatures(features_SSsamletlayerBibliotek_12);
var lyr_SSsamletlayerBibliotek_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SSsamletlayerBibliotek_12, 
                style: style_SSsamletlayerBibliotek_12,
                popuplayertitle: 'SS-samlet-layer — Bibliotek',
                interactive: true,
                title: '<img src="styles/legend/SSsamletlayerBibliotek_12.png" /> SS-samlet-layer — Bibliotek'
            });
var format_SSsamletlayerBorgerservice_13 = new ol.format.GeoJSON();
var features_SSsamletlayerBorgerservice_13 = format_SSsamletlayerBorgerservice_13.readFeatures(json_SSsamletlayerBorgerservice_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SSsamletlayerBorgerservice_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SSsamletlayerBorgerservice_13.addFeatures(features_SSsamletlayerBorgerservice_13);
var lyr_SSsamletlayerBorgerservice_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SSsamletlayerBorgerservice_13, 
                style: style_SSsamletlayerBorgerservice_13,
                popuplayertitle: 'SS-samlet-layer — Borgerservice',
                interactive: true,
                title: '<img src="styles/legend/SSsamletlayerBorgerservice_13.png" /> SS-samlet-layer — Borgerservice'
            });
var format_SSsamletlayerBrandstation_14 = new ol.format.GeoJSON();
var features_SSsamletlayerBrandstation_14 = format_SSsamletlayerBrandstation_14.readFeatures(json_SSsamletlayerBrandstation_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SSsamletlayerBrandstation_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SSsamletlayerBrandstation_14.addFeatures(features_SSsamletlayerBrandstation_14);
var lyr_SSsamletlayerBrandstation_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SSsamletlayerBrandstation_14, 
                style: style_SSsamletlayerBrandstation_14,
                popuplayertitle: 'SS-samlet-layer — Brandstation',
                interactive: true,
                title: '<img src="styles/legend/SSsamletlayerBrandstation_14.png" /> SS-samlet-layer — Brandstation'
            });
var format_SSsamletlayerDagpleje_15 = new ol.format.GeoJSON();
var features_SSsamletlayerDagpleje_15 = format_SSsamletlayerDagpleje_15.readFeatures(json_SSsamletlayerDagpleje_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SSsamletlayerDagpleje_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SSsamletlayerDagpleje_15.addFeatures(features_SSsamletlayerDagpleje_15);
var lyr_SSsamletlayerDagpleje_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SSsamletlayerDagpleje_15, 
                style: style_SSsamletlayerDagpleje_15,
                popuplayertitle: 'SS-samlet-layer — Dagpleje',
                interactive: true,
                title: '<img src="styles/legend/SSsamletlayerDagpleje_15.png" /> SS-samlet-layer — Dagpleje'
            });
var format_SSsamletlayerHavn_16 = new ol.format.GeoJSON();
var features_SSsamletlayerHavn_16 = format_SSsamletlayerHavn_16.readFeatures(json_SSsamletlayerHavn_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SSsamletlayerHavn_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SSsamletlayerHavn_16.addFeatures(features_SSsamletlayerHavn_16);
var lyr_SSsamletlayerHavn_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SSsamletlayerHavn_16, 
                style: style_SSsamletlayerHavn_16,
                popuplayertitle: 'SS-samlet-layer — Havn',
                interactive: true,
                title: '<img src="styles/legend/SSsamletlayerHavn_16.png" /> SS-samlet-layer — Havn'
            });
var format_SSsamletlayerHoteller_17 = new ol.format.GeoJSON();
var features_SSsamletlayerHoteller_17 = format_SSsamletlayerHoteller_17.readFeatures(json_SSsamletlayerHoteller_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SSsamletlayerHoteller_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SSsamletlayerHoteller_17.addFeatures(features_SSsamletlayerHoteller_17);
var lyr_SSsamletlayerHoteller_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SSsamletlayerHoteller_17, 
                style: style_SSsamletlayerHoteller_17,
                popuplayertitle: 'SS-samlet-layer — Hoteller',
                interactive: true,
                title: '<img src="styles/legend/SSsamletlayerHoteller_17.png" /> SS-samlet-layer — Hoteller'
            });
var format_SSsamletlayerLegeplads_18 = new ol.format.GeoJSON();
var features_SSsamletlayerLegeplads_18 = format_SSsamletlayerLegeplads_18.readFeatures(json_SSsamletlayerLegeplads_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SSsamletlayerLegeplads_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SSsamletlayerLegeplads_18.addFeatures(features_SSsamletlayerLegeplads_18);
var lyr_SSsamletlayerLegeplads_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SSsamletlayerLegeplads_18, 
                style: style_SSsamletlayerLegeplads_18,
                popuplayertitle: 'SS-samlet-layer — Legeplads',
                interactive: true,
                title: '<img src="styles/legend/SSsamletlayerLegeplads_18.png" /> SS-samlet-layer — Legeplads'
            });
var format_SSsamletlayerLge_19 = new ol.format.GeoJSON();
var features_SSsamletlayerLge_19 = format_SSsamletlayerLge_19.readFeatures(json_SSsamletlayerLge_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SSsamletlayerLge_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SSsamletlayerLge_19.addFeatures(features_SSsamletlayerLge_19);
var lyr_SSsamletlayerLge_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SSsamletlayerLge_19, 
                style: style_SSsamletlayerLge_19,
                popuplayertitle: 'SS-samlet-layer — Læge',
                interactive: true,
                title: '<img src="styles/legend/SSsamletlayerLge_19.png" /> SS-samlet-layer — Læge'
            });
var format_SSsamletlayerParker_20 = new ol.format.GeoJSON();
var features_SSsamletlayerParker_20 = format_SSsamletlayerParker_20.readFeatures(json_SSsamletlayerParker_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SSsamletlayerParker_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SSsamletlayerParker_20.addFeatures(features_SSsamletlayerParker_20);
var lyr_SSsamletlayerParker_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SSsamletlayerParker_20, 
                style: style_SSsamletlayerParker_20,
                popuplayertitle: 'SS-samlet-layer — Parker',
                interactive: true,
                title: '<img src="styles/legend/SSsamletlayerParker_20.png" /> SS-samlet-layer — Parker'
            });
var format_SSsamletlayerSFO_21 = new ol.format.GeoJSON();
var features_SSsamletlayerSFO_21 = format_SSsamletlayerSFO_21.readFeatures(json_SSsamletlayerSFO_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SSsamletlayerSFO_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SSsamletlayerSFO_21.addFeatures(features_SSsamletlayerSFO_21);
var lyr_SSsamletlayerSFO_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SSsamletlayerSFO_21, 
                style: style_SSsamletlayerSFO_21,
                popuplayertitle: 'SS-samlet-layer — SFO',
                interactive: true,
                title: '<img src="styles/legend/SSsamletlayerSFO_21.png" /> SS-samlet-layer — SFO'
            });
var format_SSsamletlayerStrand_22 = new ol.format.GeoJSON();
var features_SSsamletlayerStrand_22 = format_SSsamletlayerStrand_22.readFeatures(json_SSsamletlayerStrand_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SSsamletlayerStrand_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SSsamletlayerStrand_22.addFeatures(features_SSsamletlayerStrand_22);
var lyr_SSsamletlayerStrand_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SSsamletlayerStrand_22, 
                style: style_SSsamletlayerStrand_22,
                popuplayertitle: 'SS-samlet-layer — Strand',
                interactive: true,
                title: '<img src="styles/legend/SSsamletlayerStrand_22.png" /> SS-samlet-layer — Strand'
            });
var format_SSsamletlayerTandlge_23 = new ol.format.GeoJSON();
var features_SSsamletlayerTandlge_23 = format_SSsamletlayerTandlge_23.readFeatures(json_SSsamletlayerTandlge_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SSsamletlayerTandlge_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SSsamletlayerTandlge_23.addFeatures(features_SSsamletlayerTandlge_23);
var lyr_SSsamletlayerTandlge_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SSsamletlayerTandlge_23, 
                style: style_SSsamletlayerTandlge_23,
                popuplayertitle: 'SS-samlet-layer — Tandlæge',
                interactive: true,
                title: '<img src="styles/legend/SSsamletlayerTandlge_23.png" /> SS-samlet-layer — Tandlæge'
            });
var format_BaraslayerFitness_24 = new ol.format.GeoJSON();
var features_BaraslayerFitness_24 = format_BaraslayerFitness_24.readFeatures(json_BaraslayerFitness_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BaraslayerFitness_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaraslayerFitness_24.addFeatures(features_BaraslayerFitness_24);
var lyr_BaraslayerFitness_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaraslayerFitness_24, 
                style: style_BaraslayerFitness_24,
                popuplayertitle: 'Baraslayer — Fitness',
                interactive: true,
                title: '<img src="styles/legend/BaraslayerFitness_24.png" /> Baraslayer — Fitness'
            });
var format_BaraslayerIdrt_25 = new ol.format.GeoJSON();
var features_BaraslayerIdrt_25 = format_BaraslayerIdrt_25.readFeatures(json_BaraslayerIdrt_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BaraslayerIdrt_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaraslayerIdrt_25.addFeatures(features_BaraslayerIdrt_25);
var lyr_BaraslayerIdrt_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaraslayerIdrt_25, 
                style: style_BaraslayerIdrt_25,
                popuplayertitle: 'Baraslayer — Idræt',
                interactive: true,
                title: '<img src="styles/legend/BaraslayerIdrt_25.png" /> Baraslayer — Idræt'
            });
var format_BaraslayerShoppingcenter_26 = new ol.format.GeoJSON();
var features_BaraslayerShoppingcenter_26 = format_BaraslayerShoppingcenter_26.readFeatures(json_BaraslayerShoppingcenter_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BaraslayerShoppingcenter_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaraslayerShoppingcenter_26.addFeatures(features_BaraslayerShoppingcenter_26);
var lyr_BaraslayerShoppingcenter_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaraslayerShoppingcenter_26, 
                style: style_BaraslayerShoppingcenter_26,
                popuplayertitle: 'Baraslayer — Shoppingcenter',
                interactive: true,
                title: '<img src="styles/legend/BaraslayerShoppingcenter_26.png" /> Baraslayer — Shoppingcenter'
            });
var format_BaraslayerSupermarked_27 = new ol.format.GeoJSON();
var features_BaraslayerSupermarked_27 = format_BaraslayerSupermarked_27.readFeatures(json_BaraslayerSupermarked_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BaraslayerSupermarked_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaraslayerSupermarked_27.addFeatures(features_BaraslayerSupermarked_27);
var lyr_BaraslayerSupermarked_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaraslayerSupermarked_27, 
                style: style_BaraslayerSupermarked_27,
                popuplayertitle: 'Baraslayer — Supermarked',
                interactive: true,
                title: '<img src="styles/legend/BaraslayerSupermarked_27.png" /> Baraslayer — Supermarked'
            });
var format_BaraslayerSupermarkeder_28 = new ol.format.GeoJSON();
var features_BaraslayerSupermarkeder_28 = format_BaraslayerSupermarkeder_28.readFeatures(json_BaraslayerSupermarkeder_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BaraslayerSupermarkeder_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaraslayerSupermarkeder_28.addFeatures(features_BaraslayerSupermarkeder_28);
var lyr_BaraslayerSupermarkeder_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaraslayerSupermarkeder_28, 
                style: style_BaraslayerSupermarkeder_28,
                popuplayertitle: 'Baraslayer — Supermarkeder',
                interactive: true,
                title: '<img src="styles/legend/BaraslayerSupermarkeder_28.png" /> Baraslayer — Supermarkeder'
            });

lyr_Voyagernolabelsretina_0.setVisible(true);lyr_Baraslayerlokalplanforslag_1.setVisible(true);lyr_SSsamletlayerfrededeomrder_2.setVisible(true);lyr_Baraslayerlokalplanvedtaget_3.setVisible(true);lyr_SSsamletlayerkommuneplan_4.setVisible(true);lyr_Folkeskoler_5.setVisible(true);lyr_Togstationer_6.setVisible(true);lyr_Hospitaler_7.setVisible(true);lyr_Banker_8.setVisible(true);lyr_Religisebygninger_9.setVisible(true);lyr_Barer_10.setVisible(true);lyr_Restauranter_11.setVisible(true);lyr_SSsamletlayerBibliotek_12.setVisible(true);lyr_SSsamletlayerBorgerservice_13.setVisible(true);lyr_SSsamletlayerBrandstation_14.setVisible(true);lyr_SSsamletlayerDagpleje_15.setVisible(true);lyr_SSsamletlayerHavn_16.setVisible(true);lyr_SSsamletlayerHoteller_17.setVisible(true);lyr_SSsamletlayerLegeplads_18.setVisible(true);lyr_SSsamletlayerLge_19.setVisible(true);lyr_SSsamletlayerParker_20.setVisible(true);lyr_SSsamletlayerSFO_21.setVisible(true);lyr_SSsamletlayerStrand_22.setVisible(true);lyr_SSsamletlayerTandlge_23.setVisible(true);lyr_BaraslayerFitness_24.setVisible(true);lyr_BaraslayerIdrt_25.setVisible(true);lyr_BaraslayerShoppingcenter_26.setVisible(true);lyr_BaraslayerSupermarked_27.setVisible(true);lyr_BaraslayerSupermarkeder_28.setVisible(true);
var layersList = [lyr_Voyagernolabelsretina_0,lyr_Baraslayerlokalplanforslag_1,lyr_SSsamletlayerfrededeomrder_2,lyr_Baraslayerlokalplanvedtaget_3,lyr_SSsamletlayerkommuneplan_4,lyr_Folkeskoler_5,lyr_Togstationer_6,lyr_Hospitaler_7,lyr_Banker_8,lyr_Religisebygninger_9,lyr_Barer_10,lyr_Restauranter_11,lyr_SSsamletlayerBibliotek_12,lyr_SSsamletlayerBorgerservice_13,lyr_SSsamletlayerBrandstation_14,lyr_SSsamletlayerDagpleje_15,lyr_SSsamletlayerHavn_16,lyr_SSsamletlayerHoteller_17,lyr_SSsamletlayerLegeplads_18,lyr_SSsamletlayerLge_19,lyr_SSsamletlayerParker_20,lyr_SSsamletlayerSFO_21,lyr_SSsamletlayerStrand_22,lyr_SSsamletlayerTandlge_23,lyr_BaraslayerFitness_24,lyr_BaraslayerIdrt_25,lyr_BaraslayerShoppingcenter_26,lyr_BaraslayerSupermarked_27,lyr_BaraslayerSupermarkeder_28];
lyr_Baraslayerlokalplanforslag_1.set('fieldAliases', {'fid': 'fid', 'lp_plannr': 'lp_plannr', 'lp_plannav': 'lp_plannav', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'anvendelse': 'anvendelse', 'doklink': 'doklink', });
lyr_SSsamletlayerfrededeomrder_2.set('fieldAliases', {'fid': 'fid', 'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_leng': 'Shape_leng', 'Fred_tkode': 'Fred_tkode', 'Fred_tnavn': 'Fred_tnavn', 'Reg_nr': 'Reg_nr', 'Fred_navn': 'Fred_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Aar_fredn': 'Aar_fredn', 'Gyldig_fra': 'Gyldig_fra', 'Gyldig_til': 'Gyldig_til', });
lyr_Baraslayerlokalplanvedtaget_3.set('fieldAliases', {'fid': 'fid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'datovedt': 'datovedt', 'doklink': 'doklink', 'anvendelse': 'anvendelse', });
lyr_SSsamletlayerkommuneplan_4.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'id': 'id', 'planid': 'planid', 'objektkode': 'objektkode', 'komnr': 'komnr', 'plannavn': 'plannavn', 'doklink': 'doklink', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datoslut': 'datoslut', 'aktuel': 'aktuel', 'datooprt': 'datooprt', 'datoopdt': 'datoopdt', 'status': 'status', 'datostart': 'datostart', 'glkomnr': 'glkomnr', 'kommunenavn': 'kommunenavn', 'glkomnavn': 'glkomnavn', 'glkomnavn_besk': 'glkomnavn_besk', });
lyr_Folkeskoler_5.set('fieldAliases', {'Skolenavn': 'Skolenavn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Togstationer_6.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Hospitaler_7.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Banker_8.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Religisebygninger_9.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Barer_10.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Restauranter_11.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SSsamletlayerBibliotek_12.set('fieldAliases', {'fid': 'fid', 'Bibliotekn': 'Bibliotekn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_SSsamletlayerBorgerservice_13.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'field_5': 'field_5', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_SSsamletlayerBrandstation_14.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Telefon': 'Telefon', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_SSsamletlayerDagpleje_15.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Aldersgrup': 'Aldersgrup', 'Telefon': 'Telefon', 'Mail': 'Mail', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_SSsamletlayerHavn_16.set('fieldAliases', {'fid': 'fid', 'Havnnavn': 'Havnnavn', 'adresse': 'adresse', 'by': 'by', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_SSsamletlayerHoteller_17.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_SSsamletlayerLegeplads_18.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_SSsamletlayerLge_19.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Telefon': 'Telefon', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_SSsamletlayerParker_20.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Parkerings': 'Parkerings', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_SSsamletlayerSFO_21.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Telefon': 'Telefon', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_SSsamletlayerStrand_22.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Parkerings': 'Parkerings', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_SSsamletlayerTandlge_23.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_BaraslayerFitness_24.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_BaraslayerIdrt_25.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_BaraslayerShoppingcenter_26.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_BaraslayerSupermarked_27.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_BaraslayerSupermarkeder_28.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Baraslayerlokalplanforslag_1.set('fieldImages', {'fid': '', 'lp_plannr': 'TextEdit', 'lp_plannav': 'TextEdit', 'datoforsl': 'TextEdit', 'datovedt': 'TextEdit', 'anvendelse': 'TextEdit', 'doklink': 'TextEdit', });
lyr_SSsamletlayerfrededeomrder_2.set('fieldImages', {'fid': 'TextEdit', 'Temakode': 'TextEdit', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'TextEdit', 'Systid_til': 'TextEdit', 'Oprettet': 'TextEdit', 'Oprindkode': 'TextEdit', 'Oprindelse': 'TextEdit', 'Statuskode': 'TextEdit', 'Status': 'TextEdit', 'Off_kode': 'TextEdit', 'Offentlig': 'TextEdit', 'CVR_kode': 'TextEdit', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_leng': 'TextEdit', 'Fred_tkode': 'TextEdit', 'Fred_tnavn': 'TextEdit', 'Reg_nr': 'TextEdit', 'Fred_navn': 'TextEdit', 'Aendr_kode': 'TextEdit', 'Aendrbegr': 'TextEdit', 'Aar_fredn': 'TextEdit', 'Gyldig_fra': 'TextEdit', 'Gyldig_til': 'TextEdit', });
lyr_Baraslayerlokalplanvedtaget_3.set('fieldImages', {'fid': '', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', 'anvendelse': 'TextEdit', });
lyr_SSsamletlayerkommuneplan_4.set('fieldImages', {'fid': 'TextEdit', 'oid': 'TextEdit', 'id': 'Range', 'planid': 'Range', 'objektkode': 'Range', 'komnr': 'Range', 'plannavn': 'TextEdit', 'doklink': 'TextEdit', 'datoforsl': 'Range', 'datovedt': 'Range', 'datoaflyst': 'Range', 'datoikraft': 'Range', 'datoslut': 'Range', 'aktuel': 'TextEdit', 'datooprt': 'DateTime', 'datoopdt': 'DateTime', 'status': 'TextEdit', 'datostart': 'Range', 'glkomnr': 'Range', 'kommunenavn': 'TextEdit', 'glkomnavn': 'TextEdit', 'glkomnavn_besk': 'TextEdit', });
lyr_Folkeskoler_5.set('fieldImages', {'Skolenavn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Togstationer_6.set('fieldImages', {'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Hospitaler_7.set('fieldImages', {'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Banker_8.set('fieldImages', {'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Religisebygninger_9.set('fieldImages', {'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Barer_10.set('fieldImages', {'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Restauranter_11.set('fieldImages', {'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_SSsamletlayerBibliotek_12.set('fieldImages', {'fid': 'TextEdit', 'Bibliotekn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_SSsamletlayerBorgerservice_13.set('fieldImages', {'fid': 'TextEdit', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'field_5': 'Hidden', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_SSsamletlayerBrandstation_14.set('fieldImages', {'fid': 'TextEdit', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Telefon': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_SSsamletlayerDagpleje_15.set('fieldImages', {'fid': 'TextEdit', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Aldersgrup': 'TextEdit', 'Telefon': 'TextEdit', 'Mail': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_SSsamletlayerHavn_16.set('fieldImages', {'fid': 'TextEdit', 'Havnnavn': 'TextEdit', 'adresse': 'TextEdit', 'by': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_SSsamletlayerHoteller_17.set('fieldImages', {'fid': 'TextEdit', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_SSsamletlayerLegeplads_18.set('fieldImages', {'fid': 'TextEdit', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_SSsamletlayerLge_19.set('fieldImages', {'fid': 'TextEdit', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Telefon': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_SSsamletlayerParker_20.set('fieldImages', {'fid': 'TextEdit', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Parkerings': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_SSsamletlayerSFO_21.set('fieldImages', {'fid': 'TextEdit', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Telefon': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_SSsamletlayerStrand_22.set('fieldImages', {'fid': 'TextEdit', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Parkerings': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_SSsamletlayerTandlge_23.set('fieldImages', {'fid': 'TextEdit', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_BaraslayerFitness_24.set('fieldImages', {'fid': 'TextEdit', 'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_BaraslayerIdrt_25.set('fieldImages', {'fid': 'TextEdit', 'id': 'Hidden', 'Name': 'Hidden', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_BaraslayerShoppingcenter_26.set('fieldImages', {'fid': 'TextEdit', 'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_BaraslayerSupermarked_27.set('fieldImages', {'fid': 'TextEdit', 'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_BaraslayerSupermarkeder_28.set('fieldImages', {'fid': 'TextEdit', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'Hidden', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Baraslayerlokalplanforslag_1.set('fieldLabels', {'fid': 'no label', 'lp_plannr': 'no label', 'lp_plannav': 'no label', 'datoforsl': 'no label', 'datovedt': 'no label', 'anvendelse': 'no label', 'doklink': 'no label', });
lyr_SSsamletlayerfrededeomrder_2.set('fieldLabels', {'fid': 'no label', 'Temakode': 'no label', 'Temanavn': 'no label', 'Objekt_id': 'no label', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'no label', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'no label', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'no label', 'Shape_leng': 'no label', 'Fred_tkode': 'no label', 'Fred_tnavn': 'no label', 'Reg_nr': 'no label', 'Fred_navn': 'no label', 'Aendr_kode': 'no label', 'Aendrbegr': 'no label', 'Aar_fredn': 'no label', 'Gyldig_fra': 'no label', 'Gyldig_til': 'no label', });
lyr_Baraslayerlokalplanvedtaget_3.set('fieldLabels', {'fid': 'no label', 'plannr': 'inline label - always visible', 'plannavn': 'inline label - always visible', 'datovedt': 'inline label - always visible', 'doklink': 'inline label - always visible', 'anvendelse': 'inline label - always visible', });
lyr_SSsamletlayerkommuneplan_4.set('fieldLabels', {'fid': 'no label', 'oid': 'no label', 'id': 'no label', 'planid': 'no label', 'objektkode': 'no label', 'komnr': 'no label', 'plannavn': 'no label', 'doklink': 'no label', 'datoforsl': 'no label', 'datovedt': 'no label', 'datoaflyst': 'no label', 'datoikraft': 'no label', 'datoslut': 'no label', 'aktuel': 'no label', 'datooprt': 'no label', 'datoopdt': 'no label', 'status': 'no label', 'datostart': 'no label', 'glkomnr': 'no label', 'kommunenavn': 'no label', 'glkomnavn': 'no label', 'glkomnavn_besk': 'no label', });
lyr_Folkeskoler_5.set('fieldLabels', {'Skolenavn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', });
lyr_Togstationer_6.set('fieldLabels', {'Name': 'no label', });
lyr_Hospitaler_7.set('fieldLabels', {'Name': 'no label', });
lyr_Banker_8.set('fieldLabels', {'Name': 'no label', });
lyr_Religisebygninger_9.set('fieldLabels', {'Name': 'no label', });
lyr_Barer_10.set('fieldLabels', {'Name': 'no label', });
lyr_Restauranter_11.set('fieldLabels', {'Name': 'no label', });
lyr_SSsamletlayerBibliotek_12.set('fieldLabels', {'fid': 'no label', 'Bibliotekn': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', });
lyr_SSsamletlayerBorgerservice_13.set('fieldLabels', {'fid': 'no label', 'Navn': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', });
lyr_SSsamletlayerBrandstation_14.set('fieldLabels', {'fid': 'no label', 'Navn': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Telefon': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', });
lyr_SSsamletlayerDagpleje_15.set('fieldLabels', {'fid': 'no label', 'Navn': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Aldersgrup': 'inline label - always visible', 'Telefon': 'inline label - always visible', 'Mail': 'inline label - always visible', });
lyr_SSsamletlayerHavn_16.set('fieldLabels', {'fid': 'no label', 'Havnnavn': 'inline label - always visible', 'adresse': 'inline label - always visible', 'by': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', });
lyr_SSsamletlayerHoteller_17.set('fieldLabels', {'fid': 'no label', 'Navn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', });
lyr_SSsamletlayerLegeplads_18.set('fieldLabels', {'fid': 'no label', 'Navn': 'no label', 'Adresse': 'no label', 'By': 'no label', });
lyr_SSsamletlayerLge_19.set('fieldLabels', {'fid': 'no label', 'Navn': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Telefon': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', });
lyr_SSsamletlayerParker_20.set('fieldLabels', {'fid': 'no label', 'Navn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Parkerings': 'no label', });
lyr_SSsamletlayerSFO_21.set('fieldLabels', {'fid': 'no label', 'Navn': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Telefon': 'inline label - always visible', });
lyr_SSsamletlayerStrand_22.set('fieldLabels', {'fid': 'no label', 'Navn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Parkerings': 'no label', });
lyr_SSsamletlayerTandlge_23.set('fieldLabels', {'fid': 'no label', 'Navn': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', });
lyr_BaraslayerFitness_24.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_BaraslayerIdrt_25.set('fieldLabels', {'fid': 'no label', });
lyr_BaraslayerShoppingcenter_26.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_BaraslayerSupermarked_27.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_BaraslayerSupermarkeder_28.set('fieldLabels', {'fid': 'no label', 'Navn': 'no label', 'Adresse': 'no label', 'By': 'no label', });
lyr_BaraslayerSupermarkeder_28.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});