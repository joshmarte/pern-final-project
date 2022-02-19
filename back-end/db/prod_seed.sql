INSERT INTO birds (common_name, scientific_name, description, rating, price, featured, image, audio) VALUES 
('Brown Creeper','Certhia americana','Tiny, cryptic woodland songbird, unique in North America. White below and streaked brown-and-buff above; blends into tree bark very easily. Also note narrow, decurved bill and long tail. In flight, shows a bold buffy wing stripe. When foraging, often starts near the base of a tree trunk, hitches upward in short, jerky motions until it nears the top, then flies to the base of a nearby tree to begin the process again. Found in mature woodland, especially with conifers. Often joins mixed flocks with other songbirds, especially in winter. Listen for high, thin calls and sweet cascading song.',4,5.99,FALSE,'https://i.etsystatic.com/7450813/r/il/5b3746/1526007677/il_fullxfull.1526007677_bpco.jpg','https://nas-national-prod.s3.amazonaws.com/birds/audio/BROCRE_1.callsampsongs_NYle_1.mp3?tok=1626941160'),
('Belted Kingfisher','Megaceryle alcyon','Stocky and large-headed with a shaggy crest. Bill is long, straight, thick, and pointed. Powder blue above with white underparts and blue breast band. Females have additional rusty band across belly. Almost always solitary, perched along edges of streams, lakes, and estuaries. Flies along rivers and shorelines giving loud rattling calls. Hunts for fish by plunging headfirst into the water, either directly from a perch or hovering.',4,10.00,FALSE,'https://www.marinaudubon.org/jrbird/common-assets/images/Belted-Kingfisher.jpg','https://nas-national-prod.s3.amazonaws.com/birds/audio/BELKIN_1.rattles_NYle.mp3?tok=1626941160'),
('Rosy-faced Lovebird','Agapornis roseicollis','A small, short-tailed parrot with a soft pink face and dark eyes. Native to southwestern Africa, but feral populations occur in Arizona and in Hawaii; a common pet species, and escapees may occur anywhere. Wild birds are leaf green with brilliant blue rumps, but escaped domestic types may be mostly blue or yellow. Inhabits dry forests and river valleys; present in cities in both natural and introduced range. Call is a shrill, high whistle.',3,1000.00,TRUE,'https://www.nature-guide.info/images/records/large/95ca61d0-895c-4067-8560-23f3af305487.jpg','https://cdn.download.ams.birds.cornell.edu/api/v1/asset/132648601/audio'),
('Ruby-throated Hummingbird','Archilochus colubris','Small hummingbird found in a variety of woodland and brushy habitats. Male distinctive with ruby-red throat and black chin. Female has whitish underparts with almost no buffy tones (perhaps a very light wash on flanks). Readily comes to sugar water feeders and flower gardens. Default summer hummingbird over most of eastern U.S. and Canada. Winters south to Panama. Very difficult to distinguish from Black-chinned Hummingbird, especially females and young males; thankfully limited range overlap. Ruby-throated averages somewhat brighter green above, shorter- and straighter-billed, and has slightly narrower outer wing feathers, but these differences are all extremely subtle.',3,75.00,TRUE,'https://www.hopkinsmedicine.org/sebin/z/j/Hummingbird.jpg','https://nas-national-prod.s3.amazonaws.com/birds/audio/RUTHHU_1.chippingampwingnoise_FLle_1.mp3?tok=1626941160'),
('Osprey','Pandion haliaetus','Large, mostly white raptor that cruises over lakes, rivers, and coastal waterways in search of fish. Impressively widespread: found on every continent except Antarctica. Mostly white head and underparts; dark brown back. In flight, holds wings with a kink in the wrist (shaped like an "M"). Stick nests are conspicuous on top of channel markers, utility poles and high platforms near water. Often seen plunging feet-first into water from high in the air to grab fish.',5,1500.50,TRUE,'http://www.grpg.org/Mobile/files/florafauna/700/Osprey.jpg','https://nas-national-prod.s3.amazonaws.com/birds/audio/OSPREY_1.alarmcallsnearnestnum1_FLle.mp3?tok=1626941160'),
('Brown Pelican','Pelecanus occidentalis','Large and conspicuous, gray-brown bird of saltwater habitats. Strictly coastal; rarely seen on inland lakes. Very long bill with pouch for scooping up fish. Forages mainly by diving on fish from above. Frequently cues into fishing activity looking for handouts. Often flies in long lines close to water''s surface.',1,.99,FALSE,'https://us.123rf.com/450wm/gonepaddling/gonepaddling1706/gonepaddling170600050/80624117-brown-pelican-pelecanus-occidentalis-inverting-its-pouch-as-it-perches-on-a-rock-overlooking-the-pac.jpg','https://nas-national-prod.s3.amazonaws.com/birds/audio/BROPEL_1.colonysounds_MEXms_1.mp3?tok=1626941160');

-- heroku pg:psql postgresql-defined-66539 --app jm-cta-be
-- \i ./back-end/db/prod_schema.sql
-- \i ./back-end/db/prod_seed.sql
-- https://jm-cta-be.herokuapp.com/
-- git subtree push --prefix back-end heroku main