//GEOG 384 - Assignment #1 - Fall 2023

var config = {
    style: 'mapbox://styles/liam-rosborough/clmv0upsx05px01qb2q0o67ba',
    accessToken: 'pk.eyJ1IjoibGlhbS1yb3Nib3JvdWdoIiwiYSI6ImNsbTZsdXRuaDJ4a3MzY3BqdWwxNTNwYzIifQ.7vATjFi_tk7YC_QSEtq7sA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    projection: 'mercator',
    inset: false,
    theme: 'dark', // dark theme to ensure information will contrast better
    use3dTerrain: true, //set true for enabling 3D maps.
    title: 'The History of Earthquakes in Morocco',
    subtitle: 'Why the September 8th Earthquake Was So Impactful',
    byline: 'By GEOG384 Group 3',
    footer: '<a href="https://www.nytimes.com/article/morocco-earthquake.html#:~:text=The%20quake%20flattened%20homes%20in,brick%20homes%20lacking%20strong%20foundations."target="_blank">NYT</a>, <a href="https://www.google.com/url?q=https://www.usgs.gov/media/images/earthquake-intensity-scale&sa=D&source=docs&ust=1695856243930023&usg=AOvVaw1gt17bgeGotSaLXLj7JrdV."target="_blank">USGS</a>, <a href="https://abag.ca.gov/sites/default/files/making_sense_of_the_modified_mercalli_intensity_scale.pdf"target="_blank">Mercalli</a>, <a href="https://www.sms-tsunami-warning.com/pages/richter-scale"target="_blank">Richter</a>, <a href="https://www.japantimes.co.jp/news/2023/09/13/world/society/morocco-earthquake-aid-frustration-mounts/."target="_blank">Japan Times</a>, <a href="https://en.wikipedia.org/wiki/List_of_earthquakes_in_Morocco"target="_blank">Wikipedia</a>',
    chapters: [
        {
            id: 'First_Chapter',
            alignment: 'center',
            hidden: false,
            title: 'September 8th 2023, Moroccan Earthquake',
            // add link to video, change the size to fit the card better
            description: '<iframe src="https://www.youtube.com/embed/KrQIlwWLB1k"width="100%"height="400"></iframe>',
            location: {
                center: [-5.985212722973358, 32.317415229517124],
                // zoom out to have a view of the earth
                zoom: 2,
                pitch: 0,
                bearing: 0
            },
            // set animation style and opacity of mapbox layers
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'points',
                    opacity: 0
                },
                {
                    layer: '3d',
                    opacity: 0
                },
                {
                    layer: 'lines',
                    opacity: 0
                },
                {
                    layer: 'label',
                    opacity: 0
                },
                {
                    layer: 'polygon',
                    opacity: 0
                },
            ],
            onChapterExit: [
                {
                    layer: 'points',
                    opacity: 1
                },
                {
                    layer: '3d',
                    opacity: 0
                },
                {
                    layer: 'lines',
                    opacity: 0
                },
                {
                    layer: 'label',
                    opacity: 0
                },
                {
                    layer: 'polygon',
                    opacity: 0
                },
            ],
        },
        { // This chapter was created by Maya Ardon and it focuses on the point data I've created and its representation.
            id: 'Second_Chapter',
            alignment: 'right',
            hidden: false,
            title: 'Significant Earthquakes in Morocco Since 1960',
            // provide an image for this chapter
            image: 'points_image.jpg',
            // provide a description of the point data; input code for a table in the description, all on one line
            description: "Morocco has seen a number of significant earthquakes in its history that have either had their epicenters in Morocco – such as the recent Marrakesh-Safi earthquake in September – or significant impacts on the country (such as earthquakes occurring in Portugal or in the sea between the countries). The map to the side shows the locations of six significant earthquakes in Morocco since 1960. <style> table {font-family: sans-serif; border-collapse: collapse; width: 100%;} td, th {border: 1px solid #dddddd; text-align: left; padding: 8px;} tr:nth-child(even) {background-color: #2B35AF;} </style> </head> <body><h2>Significant Earthquakes in Recent History: Morocco</h2> <table> <tr><th>Earthquake/Region</th><th>Year</th></tr><tr><td> Agadir Earthquake</td><td>1960</td></tr><tr><td> Portugal/Morocco Earthquake</td><td>1969</td></tr><tr><td> Al Hoceima Earthquake</td><td>2004</td></tr><tr><td> Al Hoceima Earthquake</td><td>2016</td></tr><tr><td> Drâa-Tafilalet Earthquake</td><td>2019</td></tr><tr><td> Marrakesh-Safi Earthquake</td><td>2023</td></tr></table></a>",
            location: {
                center: [-5.985212722973358, 32.317415229517124],
                zoom: 5,
                pitch: 10,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            // set which layer will be visible on entry
            onChapterEnter: [
                {
                    layer: 'points',
                    opacity: 1
                },
                {
                    layer: '3d',
                    opacity: 0
                },
                {
                    layer: 'lines',
                    opacity: 0
                },
                {
                    layer: 'label',
                    opacity: 0
                },
                {
                    layer: 'polygon',
                    opacity: 0
                },
            ],
            // set which layer will be visible on the exit
            onChapterExit: [
                {
                    layer: 'points',
                    opacity: 0
                },
                {
                    layer: '3d',
                    opacity: 0
                },
                {
                    layer: 'lines',
                    opacity: 1
                },
                {
                    layer: 'label',
                    opacity: 0
                },
                {
                    layer: 'polygon',
                    opacity: 0
                },
            ],
        },
        {// This chapter was created by Emma Reddy and it focuses on the line data and the earthquake's effects on nearby cities.
            id: 'Third_Chapter',
            // align card to left
            alignment: 'left',
            hidden: false,
            title: 'Cities Affected by The September 8th Earthquakes',
            // call to lines image, uploaded into cyberduck
            image: 'lines_image.jpg',
            // add description
            description: 'The September 8th earthquake had a far-reaching affect on major cities in \n' + // new line and plus sign so this could be written on multiple lines
            'Morocco. Marrakesh was hit with the worst damage, being closest to the epicenter (74 km). \n'+
            'Buildings were flattened, trapping people underneath and putting the city at a standstill. \n' +
            'Casablanca (290 km away) was affected by the main quake and aftershocks, but at a much smaller scale than Marrakesh. \n'+
            'Rabat, the capital, was similar, being 355 km away. Only sustaining a few small aftershocks. On a political side, \n'+
            'however, Rabat is busy with politicians and emergency response leaders making the decisions\n'+
            // insert link to reference article, the target = blank refers to it opening in a new tab
            'for mitigation and damage control. Information from <a href="https://www.nytimes.com/article/morocco-earthquake.html#:~:text=The%20quake%20flattened%20homes%20in,brick%20homes%20lacking%20strong%20foundations."target="_blank">here.</a>',
            location: {
                // choose center that would show the lines
                center: [-8, 31.5],
                zoom: 6,
                // pitch 45 to have a 3D view of the lines
                pitch: 45,
                bearing: 0,
                speed: 2, 
                curve: 1, 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [ // set which layer will be visible on entrance
                {
                    layer: 'points',
                    opacity: 0 // points have 0 opacity -> will not be visible
                },
                {
                    layer: '3d',
                    opacity: 0 // 3d polygons have 0 opacity -> will not be visible
                },
                {
                    layer: 'lines',
                    opacity: 1 // lines have 1 opacity -> will be visible
                },
                {
                    layer: 'label',
                    opacity: 0
                },
                {
                    layer: 'polygon',
                    opacity: 0
                },
            ],
            onChapterExit: [ // set which layer will become visible on exit of the chapter
                {
                    layer: 'points',
                    opacity: 0
                },
                {
                    layer: '3d',
                    opacity: 0 
                },
                {
                    layer: 'lines',
                    opacity: 0 
                },
                {
                    layer: 'label',
                    opacity: 0
                },
                {
                    layer: 'polygon',
                    opacity: 1
                },
            ],
        },

        {     // This cahpter was created by Aris Kalofoutis, and it showcases how the earthquake affected the livelihoods of the victims. 
            id: 'Fourth_Chapter',
            alignment: 'right',
            hidden: false,
            title: 'The Human Aspect of the Earthquake', 
            image: 'Earthquake Intensity Scale.png', // Inserting image
            description: 'Even though the actual seismic event lasts a few minutes, its destruction is immesaurable wehen it comes to peoples lives.\n' + // new lines for better visualization                                                                                                                                  
            'The aftermath of the earthquake has claimed 2900 lives, while many people lost all of their belongings. \n'+
            'It is notable that at some point the half of the residents of the Tafeghaghte village were either missing or dead. \n' +
            'The Modified Moreti Scale (MMI) allows us to understand the impact of earthquakes on people since it takes into account the built environment as well. \n'+
            'It is interesting to see how this natural disaster exposed key infrustructural issues in Morocco, and the frustration of the people towards an unreliable system.',
            //  setting layer for entry
            location: {
                center: [-8, 31.5],
                zoom: 6,
                pitch: 45,
                bearing: 0.00,
                speed: 2,
                curve: 2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'points',
                    opacity: 0
                },
                {
                    layer: '3d',
                    opacity: 0
                },
                {
                    layer: 'lines',
                    opacity: 0
                },
                {
                    layer: 'label',
                    opacity: 0
                },
                {
                    layer: 'polygon',
                    opacity: 1
                },
            ],
            onChapterExit: [
                {
                    layer: 'points',
                    opacity: 0
                },
                {
                    layer: '3d',
                    opacity: 1
                },
                {
                    layer: 'lines',
                    opacity: 0
                },
                {
                    layer: 'label',
                    opacity: 1
                },
                {
                    layer: 'polygon',
                    opacity: 0
                },
            ],
        },

        // This section was made by Liam Rosborough and it specifies how the chapter I've created will be displayed on the page, as well as what content will be shown.

        {
            id: 'Fifth_Chapter',
            alignment: 'right',
            hidden: false,
            title: 'Magnitudes of Moroccan Earthquakes',
            image: 'magnitude.gif', // Insert image
            // Provided a list of shown earthquakes, their magnitudes, then a quick explanation on why Sept. 8th hit so hard.
            description: '<ul> <li>1960 Agadir Earthquake - 5.8</li><li>1969 Portugal/Morocco Earthquake - 7.8</li> <li>2004 Al Hoceima Earthquake - 6.3</li>\n' +
            '<li>2016 Al Hoceima Earthquake - 6.3</li> <li>2019 Drâa-Tafilalet Earthquake - 5.2</li> <li>2023 Marrakesh-Safi Earthquake - 6.8</li></ul>\n' +
            '<h3> Why September 8th was so impactful</h3> As shown on the map - the September 8th earthquake was an unfortunate balance of high magnitude \n' +
            'and an epicenter in close proximity to highly populated cities such as Marrakesh, Cassablanca, and Safi.',
            // The location of this section will remain over Morocco, however the pitch will change to better show the 3d element of this chapter.
            location: {
                center: [-6, 31],
                zoom: 6,
                pitch: 65,
                bearing: 0.00,
                speed: 2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'points',
                    opacity: 0
                },
                {
                    layer: '3d',
                    opacity: 1
                },
                {
                    layer: 'lines',
                    opacity: 0
                },
                {
                    layer: 'label',
                    opacity: 1
                },
                {
                    layer: 'polygon',
                    opacity: 0
                },
            ],
            onChapterExit: [
                {
                    layer: 'points',
                    opacity: 0
                },
                {
                    layer: '3d',
                    opacity: 0
                },
                {
                    layer: 'lines',
                    opacity: 0
                },
                {
                    layer: 'label',
                    opacity: 0
                },
                {
                    layer: 'polygon',
                    opacity: 1
                },
            ],
        }
    ]
};
