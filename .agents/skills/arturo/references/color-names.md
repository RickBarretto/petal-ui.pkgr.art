---
metadata:
  arturo-version: 0.10.0
  sources:
    - https://arturo-lang.io/llms.txt
    - https://arturo-lang.io/documentation/library/colors
    - https://github.com/arturo-lang/arturo/blob/4e549e105c54af2e250381d578474b9064d9d4d2/src/vm/values/custom/vcolor.nim#L620-L1199
---

# Named Colors

Source review: 2026-10-30.

`#aliceBlue` / `#rebeccaPurple` are native `:color` values; `#[foreground: #rebeccaPurple]` is a dictionary. The `#` dictionary-constructor alias does not construct named colors. Example: `blend #red #aliceBlue`.

All 578 spellings below come from the pinned source above; preserve unusual names (`clemantisViolet`, `mediumAquaMarine`) rather than substituting CSS names. `#aliceBlue = #F0F8FF`; `#rebeccaPurple = #663399`. Search or read only the needed initial.

#### A

`#acidGreen`, `#algaeGreen`, `#aliceBlue`, `#alienGray`, `#alienGreen`, `#aloeVeraGreen`, `#antiqueBronze`, `#antiqueWhite`, `#aqua`, `#aquamarine`, `#aquamarineStone`, `#armyBrown`, `#armyGreen`, `#ashGray`, `#ashWhite`, `#avocadoGreen`, `#aztechPurple`, `#azure`, `#azureBlue`.

#### B

`#babyBlue`, `#babyPink`, `#bakersBrown`, `#balloonBlue`, `#bananaYellow`, `#bashfulPink`, `#basketBallOrange`, `#battleshipGray`, `#beanRed`, `#beer`, `#beetleGreen`, `#beeYellow`, `#beige`, `#bisque`, `#black`, `#blackBean`, `#blackCat`, `#blackCow`, `#blackEel`, `#blanchedAlmond`, `#blonde`, `#bloodNight`, `#bloodRed`, `#blossomPink`, `#blue`, `#blueAngel`, `#blueberryBlue`, `#blueDiamond`, `#blueDress`, `#blueEyes`, `#blueGray`, `#blueGreen`, `#blueHosta`, `#blueIvy`, `#blueJay`, `#blueKoi`, `#blueLagoon`, `#blueLotus`, `#blueMossGreen`, `#blueOrchid`, `#blueRibbon`, `#blueTurquoise`, `#blueViolet`, `#blueWhale`, `#blueZircon`, `#blush`, `#blushPink`, `#blushRed`, `#boldYellow`, `#brass`, `#brightBlue`, `#brightCyan`, `#brightGold`, `#brightGreen`, `#brightLilac`, `#brightMaroon`, `#brightNavyBlue`, `#brightNeonPink`, `#brightOrange`, `#brightPurple`, `#brightTurquoise`, `#bronze`, `#brown`, `#brownBear`, `#brownSand`, `#brownSugar`, `#bulletShell`, `#burgundy`, `#burlyWood`, `#burntPink`, `#butterflyBlue`.

#### C

`#cadetBlue`, `#cadillacPink`, `#camelBrown`, `#camouflageGreen`, `#canaryBlue`, `#canaryYellow`, `#cantaloupe`, `#caramel`, `#carbonGray`, `#carbonRed`, `#cardboardBrown`, `#carnationPink`, `#carrotOrange`, `#celeste`, `#chameleonGreen`, `#champagne`, `#charcoal`, `#charcoalBlue`, `#chartreuse`, `#cherryRed`, `#chestnut`, `#chestnutRed`, `#chilliPepper`, `#chocolate`, `#chocolateBrown`, `#cinnamon`, `#clemantisViolet`, `#cloudyGray`, `#cloverGreen`, `#cobaltBlue`, `#coffee`, `#columbiaBlue`, `#constructionConeOrange`, `#cookieBrown`, `#copper`, `#copperRed`, `#coral`, `#coralBlue`, `#cornflowerBlue`, `#cornsilk`, `#cornYellow`, `#cotton`, `#cottonCandy`, `#cranberry`, `#cream`, `#crimson`, `#crimsonPurple`, `#crocusPurple`, `#crystalBlue`, `#cyan`, `#cyanOpaque`.

#### D

`#darkBisque`, `#darkBlonde`, `#darkBlue`, `#darkBlueGrey`, `#darkBrown`, `#darkCarnationPink`, `#darkCoffee`, `#darkCyan`, `#darkForestGreen`, `#darkGoldenRod`, `#darkGray`, `#darkGreen`, `#darkHotPink`, `#darkKhaki`, `#darkLimeGreen`, `#darkMagenta`, `#darkMint`, `#darkMoccasin`, `#darkOliveGreen`, `#darkOrange`, `#darkOrchid`, `#darkPink`, `#darkPurple`, `#darkRaspberry`, `#darkRed`, `#darkSalmon`, `#darkSeaGreen`, `#darkSienna`, `#darkSlate`, `#darkSlateBlue`, `#darkSlateGray`, `#darkTurquoise`, `#darkViolet`, `#darkYellow`, `#daySkyBlue`, `#deepEmeraldGreen`, `#deepMauve`, `#deepPeach`, `#deepPeriwinkle`, `#deepPink`, `#deepPurple`, `#deepRed`, `#deepRose`, `#deepSea`, `#deepSeaBlue`, `#deepSeaGreen`, `#deepSkyBlue`, `#deepTeal`, `#deepTurquoise`, `#deepYellow`, `#deerBrown`, `#denimBlue`, `#denimDarkBlue`, `#desertSand`, `#dimGray`, `#dimorphothecaMagenta`, `#dinosaurGreen`, `#dodgerBlue`, `#dollarBillGreen`, `#donutPink`, `#dragonGreen`, `#dullGreenYellow`, `#dullPurple`, `#dullSeaGreen`.

#### E

`#earthBlue`, `#earthGreen`, `#eggplant`, `#eggShell`, `#electricBlue`, `#emerald`, `#emeraldGreen`.

#### F

`#fallForestGreen`, `#fallLeafBrown`, `#fernGreen`, `#ferrariRed`, `#fireBrick`, `#fireEngineRed`, `#flamingoPink`, `#floralWhite`, `#forestGreen`, `#frenchLilac`, `#frogGreen`, `#fuchsia`.

#### G

`#gainsboro`, `#ghostWhite`, `#gingerBrown`, `#glacialBlueIce`, `#gold`, `#goldenBlonde`, `#goldenBrown`, `#goldenRod`, `#goldenSilk`, `#goldenYellow`, `#granite`, `#grape`, `#grapefruit`, `#gray`, `#grayBrown`, `#grayCloud`, `#grayDolphin`, `#grayGoose`, `#grayishTurquoise`, `#grayWolf`, `#green`, `#greenApple`, `#greenishBlue`, `#greenOnion`, `#greenPeas`, `#greenPepper`, `#greenSnake`, `#greenThumb`, `#greenYellow`, `#gulfBlue`, `#gunmetal`.

#### H

`#halloweenOrange`, `#harvestGold`, `#hazel`, `#hazelGreen`, `#heavenlyBlue`, `#heliotropePurple`, `#honeyDew`, `#hotDeepPink`, `#hotPink`, `#hummingbirdGreen`.

#### I

`#iceberg`, `#iguanaGreen`, `#indianRed`, `#indianSaffron`, `#indigo`, `#iridium`, `#ironGray`, `#ivory`.

#### J

`#jade`, `#jadeGreen`, `#jasminePurple`, `#jeansBlue`, `#jellyfish`, `#jetGray`, `#jungleGreen`.

#### K

`#kellyGreen`, `#khaki`, `#khakiRose`.

#### L

`#lapisBlue`, `#lavaRed`, `#lavender`, `#lavenderBlue`, `#lavenderBlush`, `#lavenderPinocchio`, `#lavenderPurple`, `#lawnGreen`, `#lemonChiffon`, `#lightAquamarine`, `#lightBlack`, `#lightBlue`, `#lightBrown`, `#lightCopper`, `#lightCoral`, `#lightCyan`, `#lightDayBlue`, `#lightFrenchBeige`, `#lightGold`, `#lightGoldenRodYellow`, `#lightGray`, `#lightGreen`, `#lightJade`, `#lightOrange`, `#lightPink`, `#lightPurple`, `#lightPurpleBlue`, `#lightRed`, `#lightRose`, `#lightRoseGreen`, `#lightSalmon`, `#lightSalmonRose`, `#lightSeaGreen`, `#lightSkyBlue`, `#lightSlate`, `#lightSlateBlue`, `#lightSlateGray`, `#lightSteelBlue`, `#lightWhite`, `#lightYellow`, `#lilac`, `#lime`, `#limeGreen`, `#limeMintGreen`, `#linen`, `#lipstickPink`, `#lovelyPurple`, `#loveRed`.

#### M

`#macaroniAndCheese`, `#macawBlueGreen`, `#magenta`, `#magicMint`, `#mahogany`, `#mangoOrange`, `#marbleBlue`, `#maroon`, `#mauve`, `#mauveTaupe`, `#mediumAquaMarine`, `#mediumBlue`, `#mediumForestGreen`, `#mediumOrchid`, `#mediumPurple`, `#mediumSeaGreen`, `#mediumSlateBlue`, `#mediumSpringGreen`, `#mediumTeal`, `#mediumTurquoise`, `#mediumVioletRed`, `#metallicGold`, `#metallicSilver`, `#middayBlue`, `#midnight`, `#midnightBlue`, `#milkChocolate`, `#milkWhite`, `#mint`, `#mintCream`, `#mintGreen`, `#mistBlue`, `#mistyRose`, `#moccasin`, `#mocha`, `#mustardYellow`.

#### N

`#navajoWhite`, `#navy`, `#nebulaGreen`, `#neonBlue`, `#neonGreen`, `#neonHotPink`, `#neonOrange`, `#neonPink`, `#neonPurple`, `#neonRed`, `#neonYellow`, `#neonYellowGreen`, `#newMidnightBlue`, `#night`, `#nightBlue`, `#northernLightsBlue`.

#### O

`#oakBrown`, `#oceanBlue`, `#offWhite`, `#oil`, `#oldBurgundy`, `#oldLace`, `#olive`, `#oliveDrab`, `#oliveGreen`, `#orange`, `#orangeGold`, `#orangeRed`, `#orangeSalmon`, `#orangeYellow`, `#orchid`, `#orchidPurple`, `#organicBrown`.

#### P

`#paleBlueLily`, `#paleGoldenRod`, `#paleGreen`, `#paleLilac`, `#paleSilver`, `#paleTurquoise`, `#paleVioletRed`, `#papayaOrange`, `#papayaWhip`, `#parchment`, `#parrotGreen`, `#pastelBlue`, `#pastelGreen`, `#pastelLightBlue`, `#pastelOrange`, `#pastelPink`, `#pastelPurple`, `#pastelRed`, `#pastelViolet`, `#pastelYellow`, `#peach`, `#peachPuff`, `#peaGreen`, `#pearl`, `#periwinkle`, `#periwinklePink`, `#periwinklePurple`, `#peru`, `#pigPink`, `#pineGreen`, `#pink`, `#pinkBrown`, `#pinkBubbleGum`, `#pinkCoral`, `#pinkCupcake`, `#pinkDaisy`, `#pinkLemonade`, `#pinkPlum`, `#pinkRose`, `#pinkViolet`, `#pistachioGreen`, `#platinum`, `#platinumGray`, `#platinumSilver`, `#plum`, `#plumPie`, `#plumPurple`, `#plumVelvet`, `#powderBlue`, `#puce`, `#pumpkinOrange`, `#purple`, `#purpleAmethyst`, `#purpleDaffodil`, `#purpleDragon`, `#purpleFlower`, `#purpleHaze`, `#purpleIris`, `#purpleJam`, `#purpleLily`, `#purpleMaroon`, `#purpleMimosa`, `#purpleMonster`, `#purpleNavy`, `#purplePink`, `#purplePlum`, `#purpleSageBush`, `#purpleThistle`, `#purpleViolet`.

#### R

`#raspberry`, `#raspberryPurple`, `#ratGray`, `#rebeccaPurple`, `#red`, `#redBlood`, `#redDirt`, `#redFox`, `#rice`, `#richLilac`, `#robinEggBlue`, `#roguePink`, `#romanSilver`, `#rose`, `#roseDust`, `#roseGold`, `#roseRed`, `#rosyBrown`, `#rosyFinch`, `#rosyPink`, `#royalBlue`, `#rubberDuckyYellow`, `#rubyRed`, `#rust`.

#### S

`#saddleBrown`, `#saffron`, `#saffronRed`, `#sage`, `#sageGreen`, `#saladGreen`, `#salmon`, `#sand`, `#sandstone`, `#sandyBrown`, `#sangria`, `#sapphireBlue`, `#scarlet`, `#schoolBusYellow`, `#seaBlue`, `#seafoamGreen`, `#seaGreen`, `#seaShell`, `#seaTurtleGreen`, `#seaweedGreen`, `#sedona`, `#sepia`, `#sepiaBrown`, `#shamrockGreen`, `#shockingOrange`, `#sienna`, `#silkBlue`, `#silver`, `#silverPink`, `#skyBlue`, `#skyBlueDress`, `#slateBlue`, `#slateBlueGrey`, `#slateGraniteGray`, `#slateGray`, `#slimeGreen`, `#smokeyGray`, `#snow`, `#softIvory`, `#sonicSilver`, `#springGreen`, `#steelBlue`, `#stoplightGoGreen`, `#sunriseOrange`, `#sunYellow`.

#### T

`#tan`, `#tanBrown`, `#tangerine`, `#taupe`, `#teaGreen`, `#teal`, `#thistle`, `#tiffanyBlue`, `#tigerOrange`, `#tomato`, `#tomatoSauceRed`, `#tronBlue`, `#tulipPink`, `#turquoise`, `#tyrianPurple`.

#### U

`#unbleachedSilk`.

#### V

`#valentineRed`, `#vampireGray`, `#vanilla`, `#velvetMaroon`, `#venomGreen`, `#violaPurple`, `#violet`, `#violetRed`.

#### W

`#water`, `#watermelonPink`, `#westernCharcoal`, `#wheat`, `#white`, `#whiteChocolate`, `#whiteSmoke`, `#windowsBlue`, `#wineRed`, `#wisteriaPurple`, `#wood`.

#### Y

`#yellow`, `#yellowGreen`, `#yellowGreenGrosbeak`, `#yellowLawnGreen`.

#### Z

`#zombieGreen`.

References: [pinned `colorNames` table](https://github.com/arturo-lang/arturo/blob/4e549e105c54af2e250381d578474b9064d9d4d2/src/vm/values/custom/vcolor.nim#L620-L1199).

For unknown function names, use [the colors module](https://arturo-lang.io/documentation/library/colors). Query the selected built-in with `inspect info.get 'name`; use a bounded probe for behavior absent from metadata.
