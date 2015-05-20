'use strict';

angular.module('recruitr')

.constant('nodeUrl', 'http://localhost:8000')
.constant('msaList', [
'Abilene, TX', 'Akron, OH', 'Albany, GA', 'Albany, OR', 'Albany-Schenectady-Troy, NY', 'Albuquerque, NM', 'Alexandria, LA', 'Allentown-Bethlehem-Easton, PA-NJ', 'Altoona, PA', 'Amarillo, TX', 'Ames, IA', 'Anchorage, AK', 'Ann Arbor, MI', 'Anniston-Oxford-Jacksonville, AL', 'Appleton, WI', 'Asheville, NC', 'Athens-Clarke County, GA', 'Atlanta-Sandy Springs-Roswell, GA', 'Atlantic City-Hammonton, NJ', 'Auburn-Opelika, AL', 'Augusta-Richmond County, GA-SC', 'Austin-Round Rock, TX', 'Bakersfield, CA', 'Baltimore-Columbia-Towson, MD', 'Bangor, ME', 'Barnstable Town, MA', 'Baton Rouge, LA', 'Battle Creek, MI', 'Bay City, MI', 'Beaumont-Port Arthur, TX', 'Beckley, WV', 'Bellingham, WA', 'Bend-Redmond, OR', 'Billings, MT', 'Binghamton, NY', 'Birmingham-Hoover, AL', 'Bismarck, ND', 'Blacksburg-Christiansburg-Radford, VA', 'Bloomington, IL', 'Bloomington, IN', 'Bloomsburg-Berwick, PA', 'Boise City, ID', 'Boston-Cambridge-Newton, MA-NH', 'Boston, MA Metro Division', 'Cambridge-Newton-Framingham, MA Metro Division', 'Rockingham County-Strafford County, NH Metro Division', 'Boulder, CO', 'Bowling Green, KY', 'Bremerton-Silverdale, WA', 'Bridgeport-Stamford-Norwalk, CT', 'Brownsville-Harlingen, TX', 'Brunswick, GA', 'Buffalo-Cheektowaga-Niagara Falls, NY', 'Burlington, NC', 'Burlington-South Burlington, VT', 'California-Lexington Park, MD', 'Canton-Massillon, OH', 'Cape Coral-Fort Myers, FL', 'Cape Girardeau, MO-IL', 'Carbondale-Marion, IL', 'Carson City, NV', 'Casper, WY', 'Cedar Rapids, IA', 'Chambersburg-Waynesboro, PA', 'Champaign-Urbana, IL', 'Charleston, WV', 'Charleston-North Charleston, SC', 'Charlotte-Concord-Gastonia, NC-SC', 'Charlottesville, VA', 'Chattanooga, TN-GA', 'Cheyenne, WY', 'Chicago-Naperville-Elgin, IL-IN-WI', 'Chicago-Naperville-Arlington Heights, IL Metro Division', 'Elgin, IL Metro Division', 'Gary, IN Metro Division', 'Lake County-Kenosha County, IL-WI Metro Division', 'Chico, CA', 'Cincinnati, OH-KY-IN', 'Clarksville, TN-KY', 'Cleveland, TN', 'Cleveland-Elyria, OH', 'Coeur d\'Alene, ID', 'College Station-Bryan, TX', 'Colorado Springs, CO', 'Columbia, MO', 'Columbia, SC', 'Columbus, GA-AL', 'Columbus, IN', 'Columbus, OH', 'Corpus Christi, TX', 'Corvallis, OR', 'Crestview-Fort Walton Beach-Destin, FL', 'Cumberland, MD-WV', 'Dallas-Fort Worth-Arlington, TX', 'Dallas-Plano-Irving, TX Metro Division', 'Fort Worth-Arlington, TX Metro Division', 'Dalton, GA', 'Danville, IL', 'Daphne-Fairhope-Foley, AL', 'Davenport-Moline-Rock Island, IA-IL', 'Dayton, OH', 'Decatur, AL', 'Decatur, IL', 'Deltona-Daytona Beach-Ormond Beach, FL', 'Denver-Aurora-Lakewood, CO', 'Des Moines-West Des Moines, IA', 'Detroit-Warren-Dearborn, MI', 'Detroit-Dearborn-Livonia, MI Metro Division', 'Warren-Troy-Farmington Hills, MI Metro Division', 'Dothan, AL', 'Dover, DE', 'Dubuque, IA', 'Duluth, MN-WI', 'Durham-Chapel Hill, NC', 'East Stroudsburg, PA', 'Eau Claire, WI', 'El Centro, CA', 'Elizabethtown-Fort Knox, KY', 'Elkhart-Goshen, IN', 'Elmira, NY', 'El Paso, TX', 'Erie, PA', 'Eugene, OR', 'Evansville, IN-KY', 'Fairbanks, AK', 'Fargo, ND-MN', 'Farmington, NM', 'Fayetteville, NC', 'Fayetteville-Springdale-Rogers, AR-MO', 'Flagstaff, AZ', 'Flint, MI', 'Florence, SC', 'Florence-Muscle Shoals, AL', 'Fond du Lac, WI', 'Fort Collins, CO', 'Fort Smith, AR-OK', 'Fort Wayne, IN', 'Fresno, CA', 'Gadsden, AL', 'Gainesville, FL', 'Gainesville, GA', 'Gettysburg, PA', 'Glens Falls, NY', 'Goldsboro, NC', 'Grand Forks, ND-MN', 'Grand Island, NE', 'Grand Junction, CO', 'Grand Rapids-Wyoming, MI', 'Grants Pass, OR', 'Great Falls, MT', 'Greeley, CO', 'Green Bay, WI', 'Greensboro-High Point, NC', 'Greenville, NC', 'Greenville-Anderson-Mauldin, SC', 'Gulfport-Biloxi-Pascagoula, MS', 'Hagerstown-Martinsburg, MD-WV', 'Hammond, LA', 'Hanford-Corcoran, CA', 'Harrisburg-Carlisle, PA', 'Harrisonburg, VA', 'Hartford-West Hartford-East Hartford, CT', 'Hattiesburg, MS', 'Hickory-Lenoir-Morganton, NC', 'Hilton Head Island-Bluffton-Beaufort, SC', 'Hinesville, GA', 'Homosassa Springs, FL', 'Hot Springs, AR', 'Houma-Thibodaux, LA', 'Houston-The Woodlands-Sugar Land, TX', 'Huntington-Ashland, WV-KY-OH', 'Huntsville, AL', 'Idaho Falls, ID', 'Indianapolis-Carmel-Anderson, IN', 'Iowa City, IA', 'Ithaca, NY', 'Jackson, MI', 'Jackson, MS', 'Jackson, TN', 'Jacksonville, FL', 'Jacksonville, NC', 'Janesville-Beloit, WI', 'Jefferson City, MO', 'Johnson City, TN', 'Johnstown, PA', 'Jonesboro, AR', 'Joplin, MO', 'Kahului-Wailuku-Lahaina, HI', 'Kalamazoo-Portage, MI', 'Kankakee, IL', 'Kansas City, MO-KS', 'Kennewick-Richland, WA', 'Killeen-Temple, TX', 'Kingsport-Bristol-Bristol, TN-VA', 'Kingston, NY', 'Knoxville, TN', 'Kokomo, IN', 'La Crosse-Onalaska, WI-MN', 'Lafayette, LA', 'Lafayette-West Lafayette, IN', 'Lake Charles, LA', 'Lake Havasu City-Kingman, AZ', 'Lakeland-Winter Haven, FL', 'Lancaster, PA', 'Lansing-East Lansing, MI', 'Laredo, TX', 'Las Cruces, NM', 'Las Vegas-Henderson-Paradise, NV', 'Lawrence, KS', 'Lawton, OK', 'Lebanon, PA', 'Lewiston, ID-WA', 'Lewiston-Auburn, ME', 'Lexington-Fayette, KY', 'Lima, OH', 'Lincoln, NE', 'Little Rock-North Little Rock-Conway, AR', 'Logan, UT-ID', 'Longview, TX', 'Longview, WA', 'Los Angeles-Long Beach-Anaheim, CA', 'Anaheim-Santa Ana-Irvine, CA Metro Division', 'Los Angeles-Long Beach-Glendale, CA Metro Division', 'Louisville/Jefferson County, KY-IN', 'Lubbock, TX', 'Lynchburg, VA', 'Macon, GA', 'Madera, CA', 'Madison, WI', 'Manchester-Nashua, NH', 'Manhattan, KS', 'Mankato-North Mankato, MN', 'Mansfield, OH', 'McAllen-Edinburg-Mission, TX', 'Medford, OR', 'Memphis, TN-MS-AR', 'Merced, CA', 'Miami-Fort Lauderdale-West Palm Beach, FL', 'Fort Lauderdale-Pompano Beach-Deerfield Beach, FL Metro Division', 'Miami-Miami Beach-Kendall, FL Metro Division', 'West Palm Beach-Boca Raton-Delray Beach, FL Metro Division', 'Michigan City-La Porte, IN', 'Midland, MI', 'Midland, TX', 'Milwaukee-Waukesha-West Allis, WI', 'Minneapolis-St. Paul-Bloomington, MN-WI', 'Missoula, MT', 'Mobile, AL', 'Modesto, CA', 'Monroe, LA', 'Monroe, MI', 'Montgomery, AL', 'Morgantown, WV', 'Morristown, TN', 'Mount Vernon-Anacortes, WA', 'Muncie, IN', 'Muskegon, MI', 'Myrtle Beach-Conway-North Myrtle Beach, SC-NC', 'Napa, CA', 'Naples-Immokalee-Marco Island, FL', 'Nashville-Davidson--Murfreesboro--Franklin, TN', 'New Bern, NC', 'New Haven-Milford, CT', 'New Orleans-Metairie, LA', 'New York-Newark-Jersey City, NY-NJ-PA', 'Dutchess County-Putnam County, NY Metro Division', 'Nassau County-Suffolk County, NY Metro Division', 'Newark, NJ-PA Metro Division', 'New York-Jersey City-White Plains, NY-NJ Metro Division', 'Niles-Benton Harbor, MI', 'North Port-Sarasota-Bradenton, FL', 'Norwich-New London, CT', 'Ocala, FL', 'Ocean City, NJ', 'Odessa, TX', 'Ogden-Clearfield, UT', 'Oklahoma City, OK', 'Olympia-Tumwater, WA', 'Omaha-Council Bluffs, NE-IA', 'Orlando-Kissimmee-Sanford, FL', 'Oshkosh-Neenah, WI', 'Owensboro, KY', 'Oxnard-Thousand Oaks-Ventura, CA', 'Palm Bay-Melbourne-Titusville, FL', 'Panama City, FL', 'Parkersburg-Vienna, WV', 'Pensacola-Ferry Pass-Brent, FL', 'Peoria, IL', 'Philadelphia-Camden-Wilmington, PA-NJ-DE-MD', 'Camden, NJ Metro Division', 'Montgomery County-Bucks County-Chester County, PA Metro Division', 'Philadelphia, PA Metro Division', 'Wilmington, DE-MD-NJ Metro Division', 'Phoenix-Mesa-Scottsdale, AZ', 'Pine Bluff, AR', 'Pittsburgh, PA', 'Pittsfield, MA', 'Pocatello, ID', 'Portland-South Portland, ME', 'Portland-Vancouver-Hillsboro, OR-WA', 'Port St. Lucie, FL', 'Prescott, AZ', 'Providence-Warwick, RI-MA', 'Provo-Orem, UT', 'Pueblo, CO', 'Punta Gorda, FL', 'Racine, WI', 'Raleigh, NC', 'Rapid City, SD', 'Reading, PA', 'Redding, CA', 'Reno, NV', 'Richmond, VA', 'Riverside-San Bernardino-Ontario, CA', 'Roanoke, VA', 'Rochester, MN', 'Rochester, NY', 'Rockford, IL', 'Rocky Mount, NC', 'Rome, GA', 'Sacramento--Roseville--Arden-Arcade, CA', 'Saginaw, MI', 'St. Cloud, MN', 'St. George, UT', 'St. Joseph, MO-KS', 'St. Louis, MO-IL', 'Salem, OR', 'Salinas, CA', 'Salisbury, MD-DE', 'Salt Lake City, UT', 'San Angelo, TX', 'San Antonio-New Braunfels, TX', 'San Diego-Carlsbad, CA', 'San Francisco-Oakland-Hayward, CA', 'Oakland-Hayward-Berkeley, CA Metro Division', 'San Francisco-Redwood City-South San Francisco, CA Metro Division', 'San Rafael, CA Metro Division', 'San Jose-Sunnyvale-Santa Clara, CA', 'San Luis Obispo-Paso Robles-Arroyo Grande, CA', 'Santa Cruz-Watsonville, CA', 'Santa Fe, NM', 'Santa Maria-Santa Barbara, CA', 'Santa Rosa, CA', 'Savannah, GA', 'Scranton--Wilkes-Barre--Hazleton, PA', 'Seattle-Tacoma-Bellevue, WA', 'Seattle-Bellevue-Everett, WA Metro Division', 'Tacoma-Lakewood, WA Metro Division', 'Sebastian-Vero Beach, FL', 'Sebring, FL', 'Sheboygan, WI', 'Sherman-Denison, TX', 'Shreveport-Bossier City, LA', 'Sierra Vista-Douglas, AZ', 'Sioux City, IA-NE-SD', 'Sioux Falls, SD', 'South Bend-Mishawaka, IN-MI', 'Spartanburg, SC', 'Spokane-Spokane Valley, WA', 'Springfield, IL', 'Springfield, MA', 'Springfield, MO', 'Springfield, OH', 'State College, PA', 'Staunton-Waynesboro, VA', 'Stockton-Lodi, CA', 'Sumter, SC', 'Syracuse, NY', 'Tallahassee, FL', 'Tampa-St. Petersburg-Clearwater, FL', 'Terre Haute, IN', 'Texarkana, TX-AR', 'The Villages, FL', 'Toledo, OH', 'Topeka, KS', 'Trenton, NJ', 'Tucson, AZ', 'Tulsa, OK', 'Tuscaloosa, AL', 'Tyler, TX', 'Urban Honolulu, HI', 'Utica-Rome, NY', 'Valdosta, GA', 'Vallejo-Fairfield, CA', 'Victoria, TX', 'Vineland-Bridgeton, NJ', 'Virginia Beach-Norfolk-Newport News, VA-NC', 'Visalia-Porterville, CA', 'Waco, TX', 'Walla Walla, WA', 'Warner Robins, GA', 'Washington-Arlington-Alexandria, DC-VA-MD-WV', 'Silver Spring-Frederick-Rockville, MD Metro Division', 'Washington-Arlington-Alexandria, DC-VA-MD-WV Metro Division', 'Waterloo-Cedar Falls, IA', 'Watertown-Fort Drum, NY', 'Wausau, WI', 'Weirton-Steubenville, WV-OH', 'Wenatchee, WA', 'Wheeling, WV-OH', 'Wichita, KS', 'Wichita Falls, TX', 'Williamsport, PA', 'Wilmington, NC', 'Winchester, VA-WV', 'Winston-Salem, NC', 'Worcester, MA-CT', 'Yakima, WA', 'York-Hanover, PA', 'Youngstown-Warren-Boardman, OH-PA', 'Yuba City, CA', 'Yuma, AZ'
])
.constant('skillsList', [
  'Node', 'Angular', 'Mongo DB', 'Hapi', 'JavaScript', 'jQuery', 'Twitter Bootstrap', 'Materialize', 'Mocha', 'HTML/CSS3', 'Jade', 'Chai', 'Lab', 'TDD', 'Bash Scripting', 'GIT/SVC', 'Mongoose', 'MVC', 'Amazon Web Services'
]);
